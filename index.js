const fs = require('fs');
const qrcode = require('qrcode');

const url =  'https://raw.githubusercontent.com/migi15ghost/Files/main/CARTA%20QR.png'

const run = async() => {
    const QR = await qrcode.toDataURL(url)
    const htmlContent =  `
    <div style="display:flex; justify-content:center; align-items:center;">
        <h2> King Food Truck </h2>
        <img src="${QR}">
    </div>
    `;
    fs.writeFileSync('./index.html', `${htmlContent}`)
}

run()