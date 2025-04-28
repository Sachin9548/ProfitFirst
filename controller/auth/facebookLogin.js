const clientId = '1009425994660028';       // Your App ID
const clientSecret = '01b107074f0d444ffceaca7c2c7bd58e'; // Your App Secret
const redirectUri = 'https://www.profitfirst.co.in/api/auth/facebook/callback'; // Must match frontend


const facebookLogin =async (req, res) => {
    const { code } = req.query;

  if (!code) {
    return res.status(400).send('No code provided');
  }
  console.log('Received code:', code);

  try {
    const tokenResponse = await axios.get('https://graph.facebook.com/v19.0/oauth/access_token', {
      params: {
        client_id: clientId,
        redirect_uri: redirectUri,
        client_secret: clientSecret,
        code: code,
      },
    });

    const { access_token, token_type, expires_in } = tokenResponse.data;

    console.log('Access Token:', access_token);

    // You can now use access_token to call Facebook Graph API
    res.send(`Access token received: ${access_token}`);
  } catch (error) {
    console.error('Error exchanging code for token:', error.response?.data || error.message);
    res.status(500).send('Failed to exchange code for access token');
  }
};

module.exports = { facebookLogin };
