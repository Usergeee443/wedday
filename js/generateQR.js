
function generateQR() {
    const qrCodeElement = document.getElementById('qrCode');
    qrCodeElement.innerHTML = '';
    qrCodeElement.classList.add('animate-pulse', 'bg-gray-200');

    // Simulate QR code generation
    setTimeout(() => {
        qrCodeElement.classList.remove('animate-pulse', 'bg-gray-200');
        qrCodeElement.innerHTML = `
            <img src="/qr-code (3).png" 
                 alt="QR Code" 
                 class="w-full h-full object-cover"
            />
        `;
    }, 1500);
}

function downloadApp(platform) {
    alert(`Tez kunda ${platform === 'google' ? 'Google Play' : 'App Store'} orqali ilovani yuklab olishingiz mumkin bo'ladi!`);
}

generateQR();