const qrText = document.getElementById("qr-Text");
const qrBox = document.getElementById("qrbox");
const qrImg = document.getElementById("qr-image");

function generateQR() {
    if (qrText.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qrBox.classList.add("show-img")
    } else {
        qrText.classList.add("error")
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
    console.log(generateQR());
}