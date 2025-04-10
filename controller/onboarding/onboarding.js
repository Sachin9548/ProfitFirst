const axios = require("axios");
const currentStep =async (req,res) =>{
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
  } 
  
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
       const testShopifyResponse = await axios.get(`https://${storeUrl}/admin/api/2023-10/shop.json`, {
         headers: {
            "X-Shopify-Access-Token": accessToken,
            },
         });
         console.log("testShopifyResponse",testShopifyResponse)
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

  const onboardStep3 = async (req, res) => {
    const user = req.user;
    const { adAccountId,AdaccessToken } = req.body;
  
    if (!adAccountId || !AdaccessToken) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }
  
    try {
      user.onboarding.step3 = {
        adAccountId,      
        AdaccessToken, 
      };
  
      user.step = 4; // or mark as "completed" if onboarding ends here
  
      await user.save();
  
      res.json({ message: "Step 3 completed", nextStep: 4 });
    } catch (error) {
      console.error("Error in onboarding step 3:", error);
      res.status(500).json({ message: "Server error" });
    }
  };
  
  
  module.exports = { currentStep, onboardStep1,onboardStep2,onboardStep3 };
  