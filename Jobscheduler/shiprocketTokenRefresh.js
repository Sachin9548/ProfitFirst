// shiprocketTokenRefresh.js
const cron = require("node-cron");
const axios = require("axios");
const User = require("../model/userModel"); // adjust path if needed

// Runs every day at midnight
cron.schedule("0 0 * * *", async () => {
  console.log("🔄 Shiprocket token refresh job running...");

  try {
    const users = await User.find({ "onboarding.step4.token": { $ne: "" } });

    for (const user of users) {
      const { created_at, email, password } = user.onboarding.step4;

      // Token age in days
      const createdDate = new Date(created_at);
      const now = new Date();
      const ageInDays = (now - createdDate) / (1000 * 60 * 60 * 24);

      if (ageInDays >= 9) {
        try {
          const loginRes = await axios.post("https://apiv2.shiprocket.in/v1/external/auth/login", {
            email,
            password,
          }, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          const { token, created_at: newCreatedAt } = loginRes.data;

          // Update token and creation date
          user.onboarding.step4.token = token;
          user.onboarding.step4.created_at = newCreatedAt || new Date().toISOString();

          await user.save();
          console.log(`✅ Refreshed Shiprocket token for ${user.email}`);
        } catch (err) {
          console.error(`❌ Failed to refresh token for ${user.email}`, err.response?.data || err.message);
        }
      }
    }
  } catch (err) {
    console.error("❌ Cron job error:", err);
  }
});
