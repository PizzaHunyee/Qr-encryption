document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const qrCanvas = document.getElementById("qrCanvas");
    let originalFileData = null;

    function handleFile() {
        const file = fileInput.files[0];

        if (file) {
            originalFileData = null;

            const reader = new FileReader();

            reader.onload = function (e) {
                originalFileData = e.target.result;
                generateQRCode(originalFileData);
            };

            reader.readAsDataURL(file);
        }
    }

    function generateQRCode(data) {
        const qr = new QRCode(qrCanvas, {
            text: data,
            width: 256,
            height: 256
        });
    }

    function downloadOriginal() {
        if (originalFileData) {
            const a = document.createElement("a");
            a.href = originalFileData;
            a.download = "original_file";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } else {
            alert("No original file available.");
        }
    }
});
