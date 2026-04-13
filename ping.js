const https = require('https');

// Render automatically provides this environment variable containing the public URL
const URL = process.env.RENDER_EXTERNAL_URL;

if (URL) {
  console.log(`[Keep-Alive] Initializing self-pinging for ${URL}...`);

  // Render spins down free tier services after 15 minutes of inactivity.
  // We ping the server every 14 minutes to prevent it from going to sleep.
  const FOURTEEN_MINUTES = 14 * 60 * 1000;

  setInterval(() => {
    https
      .get(URL, (res) => {
        console.log(`[Keep-Alive] Ping successful - Status Code: ${res.statusCode}`);
      })
      .on('error', (err) => {
        console.error(`[Keep-Alive] Ping failed: ${err.message}`);
      });
  }, FOURTEEN_MINUTES);
} else {
  console.log('[Keep-Alive] RENDER_EXTERNAL_URL not found. Skipping self-pinging.');
}
