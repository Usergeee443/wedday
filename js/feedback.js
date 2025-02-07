document.addEventListener('DOMContentLoaded', () => {
    const BOT_TOKEN = '7900459082:AAHKlcfwfRPSmCJwZk5dJ3hr1NHXQ5xOJew';
    const CHAT_ID = '6429299277';

    // Star Rating Logic
    const starRating = document.getElementById('starRating');
    const stars = starRating.querySelectorAll('.star');
    const ratingInput = document.getElementById('ratingValue');

    // Function to update stars
    function updateStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.textContent = '★';
                star.style.color = '#614C39';
            } else {
                star.textContent = '☆';
                star.style.color = '';
            }
        });
    }

    // Click event for each star
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            ratingInput.value = rating;
            updateStars(rating);
        });
    });

    // Image Upload Preview
    const imageUpload = document.getElementById('imageUpload');
    const imagePreview = document.getElementById('imagePreview');
    const previewContainer = document.getElementById('previewContainer');
    const uploadPrompt = document.getElementById('uploadPrompt');

    imageUpload.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                previewContainer.classList.remove('hidden');
                uploadPrompt.classList.add('hidden');
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    });

    // Form Submission
    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate rating
        const rating = ratingInput.value;
        if (!rating || rating < 1 || rating > 5) {
            alert('Iltimos, 1 dan 5 gacha bo\'lgan baholash tanlang');
            return;
        }

        const formData = new FormData();
        formData.append('firstName', document.getElementById('firstName').value);
        formData.append('lastName', document.getElementById('lastName').value || '');
        formData.append('rating', rating);
        formData.append('feedback', document.getElementById('feedback').value);

        if (imageUpload.files[0]) {
            formData.append('image', imageUpload.files[0]);
        }

        try {
            // Send text message
            const messageText = `
Yangi fikr:
👤 Ism: ${formData.get('firstName')} ${formData.get('lastName')}
⭐️ Baho: ${formData.get('rating')}
💭 Fikr: ${formData.get('feedback')}
            `.trim();

            const messageResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: messageText,
                    parse_mode: 'HTML'
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!messageResponse.ok) {
                throw new Error('Failed to send message');
            }

            // Send image if exists
            if (formData.get('image')) {
                const imageFormData = new FormData();
                imageFormData.append('chat_id', CHAT_ID);
                imageFormData.append('photo', formData.get('image'));

                const photoResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
                    method: 'POST',
                    body: imageFormData
                });

                if (!photoResponse.ok) {
                    throw new Error('Failed to send image');
                }
            }

            // Reset form
            feedbackForm.reset();
            document.getElementById('feedbackModal').classList.add('hidden');
            previewContainer.classList.add('hidden');
            uploadPrompt.classList.remove('hidden');
            updateStars(0);
            ratingInput.value = '';
            alert('Fikringiz uchun rahmat!');

        } catch (error) {
            console.error('Error sending feedback:', error);
            alert('Xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.');
        }
    });

    // Modal Controls
    document.getElementById('openFeedbackModalBtn').addEventListener('click', () => {
        document.getElementById('feedbackModal').classList.remove('hidden');
    });

    document.getElementById('closeFeedbackBtn').addEventListener('click', () => {
        document.getElementById('feedbackModal').classList.add('hidden');
    });

    // Close modal when clicking outside
    document.getElementById('feedbackModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('feedbackModal')) {
            document.getElementById('feedbackModal').classList.add('hidden');
        }
    });
});