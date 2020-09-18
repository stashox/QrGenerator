var qrcode = new QRCode("qrcode");
function makeCode () {      
    let texto = document.getElementById('place');
    qrcode.makeCode(texto.value);
}
makeCode();