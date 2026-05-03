import 'dotenv/config';

// import dns from "dns";
// dns.setDefaultResultOrder("ipv4first");

import app from './src/app.js';

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`acessar: http://localhost:${PORT}`);
})