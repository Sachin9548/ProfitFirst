const axios = require("axios");
const ProductCost = require("../../model/ProductCost");
const Admin = require("../../model/Admin");
const currentStep = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ step: user.step });
  } catch (error) {
    console.error("Error fetching onboarding step:", error);
    res.status(500).json({ message: "Failed to fetch onboarding step" });
  }
};

const onboardStep1 = async (req, res) => {
  const user = req.user;
  const { fullName, email, phone, whatsapp, industry, referral } = req.body;

  if (!fullName || !email || !phone || !whatsapp || !industry) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }

  try {
    user.onboarding.step1 = {
      fullName,
      email,
      phone,
      whatsapp,
      industry,
      referral: referral || null,
    };
 
    user.step = 2;

    await user.save();

    res.json({ message: "Step 1 completed", nextStep: 2 });
  } catch (error) {
    console.error("Error in onboarding step 1:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const onboardStep2 = async (req, res) => {
  const user = req.user;
  const { storeUrl, apiKey, apiSecret, accessToken } = req.body;

  if (!storeUrl || !apiKey || !apiSecret || !accessToken) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }

  try {
    // Verify Shopify access token by making a request to the Shopify Admin API
    const testShopifyResponse = await axios.get(
      `https://${storeUrl}/admin/api/2023-10/shop.json`,
      {
        headers: {
          "X-Shopify-Access-Token": accessToken,
        },
      }
    );
    console.log("testShopifyResponse", testShopifyResponse);
    // If the request fails, it will go to catch block
    if (!testShopifyResponse.data || !testShopifyResponse.data.shop) {
      return res.status(401).json({ message: "Invalid Shopify credentials" });
    }
    user.onboarding.step2 = {
      storeUrl,
      apiKey,
      apiSecret,
      accessToken,
      platform: "Shopify", // You can modify this to be dynamic if needed
    };

    user.step = 3;

    await user.save();

    res.json({ message: "Step 2 completed", nextStep: 3 });
  } catch (error) {
    console.error("Error in onboarding step 2:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch products
const fetchproduct = async (req, res) => {
  console.log("Fetching basic product details...");

  const accessToken = req.user.onboarding.step2.accessToken;
  const storeUrl = req.user.onboarding.step2.storeUrl;

  let allProducts = [];
  let nextPageUrl = `https://${storeUrl}/admin/api/2023-10/products.json?limit=50`;

  try {
    while (nextPageUrl) {
      const productRes = await axios.get(nextPageUrl, {
        headers: {
          "X-Shopify-Access-Token": accessToken,
        },
      });

      const products = productRes.data.products;

      const simplifiedProducts = products.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.variants?.[0]?.price || "", // price from first variant
        image: product.image?.src || null,
      }));

      allProducts.push(...simplifiedProducts);

      // Handle pagination
      const linkHeader = productRes.headers["link"];
      if (linkHeader && linkHeader.includes('rel="next"')) {
        const match = linkHeader.match(/<([^>]+)>;\s*rel="next"/);
        nextPageUrl = match ? match[1] : null;
      } else {
        nextPageUrl = null;
      }
    }

    res.status(200).json(allProducts);
  } catch (error) {
    console.error(
      "Error fetching products:",
      error.response?.data || error.message
    );
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

// Update cost per item
const manufacture = async (req, res) => {
  const updates = req.body; // should be an array of { productId, cost }
  const userId = req.user._id; //using auth middleware
  const user = req.user;
  try {
    let userCosts = await ProductCost.findOne({ userId });
    if (!userCosts) {
      // Create a new document if user doesn't have one
      userCosts = new ProductCost({
        userId,
        products: updates.map(({ productId, cost }) => ({
          productId,
          cost,
        })),
      });
    } else {
      // Update existing document
      updates.forEach(({ productId, cost }) => {
        const existing = userCosts.products.find(
          (p) => p.productId === productId
        );
        if (existing) {
          existing.cost = cost;
          existing.updatedAt = new Date();
        } else {
          userCosts.products.push({ productId, cost, updatedAt: new Date() });
        }
      });
    }
    await userCosts.save();
    user.step = 4;
    await user.save();
    res
      .status(200)
      .json({ message: "Costs updated successfully", nextStep: 4 });
  } catch (err) {
    console.error("Modify price error:", err);
    res.status(500).json({ message: "Failed to update costs" });
  }
};

const onboardStep4 = async (req, res) => {
  const user = req.user;
  const { adAccountId } = req.body;
  if (!adAccountId) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }
  //create the admin
  const admin = await Admin.findOne();

  if (!admin || !admin.metaAccessToken) {
    return res
      .status(401)
      .json({
        message: "Meta access token not found. Please contact the developer.",
      });
  }

  const AdaccessToken = admin.metaAccessToken;

  // Verify the ad account ID by making a request to the Meta Ads API
  try {
    const testMetaResponse = await axios.get(
      `https://graph.facebook.com/v12.0/${adAccountId}`,
      {
        headers: {
          Authorization: `Bearer ${AdaccessToken}`,
        },
      }
    );

    if (!testMetaResponse.data || !testMetaResponse.data.id) {
      return res.status(401).json({ message: "Invalid Meta credentials" });
    }
    console.log("testMetaResponse", testMetaResponse.data);
      // If the request is successful, save the ad account ID to the user's onboarding data
  try {
    user.onboarding.step4 = {
      adAccountId,
    };
    user.step = 5;
    await user.save();
    res.json({ message: "Step 4 completed", nextStep: 5 });
  } catch (error) {
    console.error("Error in onboarding step 3:", error);
    res.status(500).json({ message: "Server error" });
  }
    // If the request fails, it will go to catch block
  } catch (error) {
    console.error(
      "Error verifying Meta credentials:",
      error.response?.data || error.message
    );
    return res.status(401).json({ message: "Invalid Meta credentials" });
  }


};

const onboardStep5 = async (req, res) => {
  const user = req.user;
  const { shiproactId, shiproactPassword } = req.body;
  if (!shiproactId || !shiproactPassword) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }

  try {
    // 1.login to shiproact
    const loginResponse = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/auth/login",
      {
        shiproactId,
        shiproactPassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { token, created_at } = loginResponse.data;

    // 2.varify the token

    const verifyToken = await axios.get(
      "https://apiv2.shiprocket.in/v1/external/orders",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (verifyToken.status !== 200 || !verifyToken.data) {
      return res
        .status(401)
        .json({ message: "Invalid Shiprocket credentials" });
    }
    console.log("verifyToken", verifyToken.data);

    // 3.save token to db
    user.onboarding.step5 = {
      shiproactId,
      shiproactPassword,
      token,
      created_at,
      platform: "Shiprocket",
    };

    user.step = 6; // or mark as "completed" if onboarding ends here
    await user.save();
    res.json({ message: "Step 4 completed", nextStep: 6 });
  } catch (error) {
    console.error("Error in onboarding step 4:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  currentStep,
  onboardStep1,
  onboardStep2,
  onboardStep4,
  onboardStep5,
  fetchproduct,
  manufacture,
};
