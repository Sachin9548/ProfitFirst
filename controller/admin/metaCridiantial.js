const Admin = require("../../model/Admin");

const metaCredential = async (req, res) => {
    const shortLivedAccessToken = req.body.shortLivedAccessToken;

    if (!shortLivedAccessToken) {
        return res.status(400).json({ error: "Short-lived access token is required" });
    }

    try {
        // 1. Exchange short-lived token for long-lived token
        const response = await fetch(`https://graph.facebook.com/v16.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.META_APP_ID}&client_secret=${process.env.META_APP_SECRET}&fb_exchange_token=${shortLivedAccessToken}`);
        const data = await response.json();

        if (data.error) {
            return res.status(400).json({ error: data.error.message });
        }

        const longLivedAccessToken = data.access_token;

        // 2. Update existing Admin doc or create a new one
        await Admin.findOneAndUpdate(
            {}, 
            {
                metaAccessToken: longLivedAccessToken,
                tokenCreatedAt: new Date(),
            },
            { upsert: true, new: true }
        );

        return res.status(200).json({ message: "Meta access token saved successfully" });

    } catch (error) {
        console.error('Error fetching long-lived access token:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    metaCredential
};
