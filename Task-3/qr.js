document.addEventListener("DOMContentLoaded", function() {
  var inputText = document.getElementById("inputText");
  var generateButton = document.getElementById("generateButton");
  var qrcodeContainer = document.getElementById("qrcode");
  var downloadButton = document.getElementById("downloadButton");
  generateButton.addEventListener("click", function() {
    var inputValue = inputText.value.trim();
    if (inputValue !== "") {
      qrcodeContainer.innerHTML = "";
      var qr = new QRious({
        value: inputValue,
        size: 200
      });
      var qrImage = document.createElement("img");
      qrImage.src = qr.toDataURL();
      qrImage.alt = "QR Code";
      qrcodeContainer.appendChild(qrImage);
      downloadButton.style.display = "block";
      downloadButton.href = qr.toDataURL();
    }
  });
});
