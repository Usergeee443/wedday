// Testimonials Data
const testimonials = [
    {
        name: "Aziz Karimov",
        initials: "AK",
        rating: 5,
        text: "Ajoyib ilova! Kundalik ishlarimni ancha yengillashtirdi."
    },
    {
        name: "Malika Saidova",
        initials: "MS",
        rating: 5,
        text: "Foydalanish juda qulay, interfeysi sodda va chiroyli."
    },
    {
        name: "Malika Saidova",
        initials: "MS",
        rating: 5,
        text: "Foydalanish juda qulay, interfeysi sodda va chiroyli."
    },
    {
        name: "Malika Saidova",
        initials: "MS",
        rating: 5,
        text: "Foydalanish juda qulay, interfeysi sodda va chiroyli."
    },
    {
        name: "Malika Saidova",
        initials: "MS",
        rating: 5,
        text: "Foydalanish juda qulay, interfeysi sodda va chiroyli."
    },
    {
        name: "Malika Saidova",
        initials: "MS",
        rating: 5,
        text: "Foydalanish juda qulay, interfeysi sodda va chiroyli."
    },
    {
        name: "Malika Saidova",
        initials: "MS",
        rating: 5,
        text: "Foydalanish juda qulay, interfeysi sodda va chiroyli."
    },
    {
        name: "Malika Saidova",
        initials: "MS",
        rating: 5,
        text: "Foydalanish juda qulay, interfeysi sodda va chiroyli."
    },
    {
        name: "Malika Saidova",
        initials: "MS",
        rating: 5,
        text: "Foydalanish juda qulay, interfeysi sodda va chiroyli."
    },
    {
        name: "Malika Saidova",
        initials: "MS",
        rating: 5,
        text: "Foydalanish juda qulay, interfeysi sodda va chiroyli."
    },
    {
        name: "Malika Saidova",
        initials: "MS",
        rating: 5,
        text: "Foydalanish juda qulay, interfeysi sodda va chiroyli."
    },
    {
        name: "Malika Saidova",
        initials: "MS",
        rating: 5,
        text: "Foydalanish juda qulay, interfeysi sodda va chiroyli."
    }
];

// Initialize Swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 1.5,
            spaceBetween: 24,
        }
    }
});

// Populate Swiper
const swiperWrapper = document.querySelector('.swiper-wrapper');
testimonials.forEach(testimonial => {
    swiperWrapper.innerHTML += `
        <div class="swiper-slide">
            <div class="bg-white rounded-2xl p-6">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-[#614C39] rounded-full flex items-center justify-center">
                        <span class="text-lg text-white font-semibold">${testimonial.initials}</span>
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-800">${testimonial.name}</h3>
                        <div class="flex text-yellow-400">${'★'.repeat(testimonial.rating)}</div>
                    </div>
                </div>
                <p class="text-gray-600">${testimonial.text}</p>
            </div>
        </div>
    `;
});

// Pagination Variables
let currentPage = 1;
const itemsPerPage = 6;
const totalPages = Math.ceil(testimonials.length / itemsPerPage);

// Pagination Functions
function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const grid = document.getElementById('testimonialsGrid');
    grid.innerHTML = '';

    testimonials.slice(start, end).forEach(testimonial => {
        grid.innerHTML += `
            <div class="bg-white rounded-2xl p-6">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-[#614C39] rounded-full flex items-center justify-center">
                        <span class="text-lg text-white font-semibold">${testimonial.initials}</span>
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-800">${testimonial.name}</h3>
                        <div class="flex text-yellow-400">${'★'.repeat(testimonial.rating)}</div>
                    </div>
                </div>
                <p class="text-gray-600">${testimonial.text}</p>
            </div>
        `;
    });

    document.getElementById('pageInfo').textContent = `${page} / ${totalPages} sahifa`;
    document.getElementById('prevPage').disabled = page === 1;
    document.getElementById('nextPage').disabled = page === totalPages;
}

// Modal Functions
function showAllTestimonials() {
    document.getElementById('allTestimonialsModal').classList.remove('hidden');
    showPage(1);
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("closeModalBtn").addEventListener("click", function () {
        console.log("Yopish tugmasi bosildi!");
        document.getElementById('allTestimonialsModal').classList.add('hidden');
    });
});

// Event Listeners
document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
});