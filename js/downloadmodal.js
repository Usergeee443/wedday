function openModal() {
    document.getElementById('downloadModal').style.display = 'flex';
    if (!document.getElementById('qrcode').innerHTML) {
        new QRCode(document.getElementById('qrcode'), {
            text: "https://wedday.uz",
            width: 128,
            height: 128,
            colorDark: "#614C39",
            colorLight: "#f8f8f8",
        });
    }
}

function closeModal() {
    document.getElementById('downloadModal').style.display = 'none';
}

function shareWebsite() {
    const url = 'https://wedday.uz';
    navigator.clipboard.writeText(url)
        .then(() => alert('Wedday.uz havolasi nusxalandi!'))
        .catch(err => console.error('Nusxalashda xatolik:', err));
}

changingText.style.transition = 'opacity 0.5s ease';
updateText();
setInterval(updateText, 3000);

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target == document.getElementById('downloadModal')) {
        closeModal();
    }
}