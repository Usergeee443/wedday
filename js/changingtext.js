// Changing Text Animation
const texts = [
    { text: "Hayotingizni yengillashtiruvchi ilova", font: "font-gold" },
    { text: "Tezkor va ishonchli yechim", font: "font-sf" },
    { text: "Zamonaviy yondashuv", font: "anton-regular" },
    { text: "Qulay va sodda interfeys", font: "font-mareline" },
    { text: "Har doim siz bilan", font: "font-sf" }
];

let currentIndex = 0;
const changingText = document.getElementById('changingText');

function updateText() {
    changingText.style.opacity = '0';

    setTimeout(() => {
        changingText.className = `text-4xl md:text-6xl lg:text-7xl text-center text-[#614C39] font-bold px-6 transition-all duration-500 ease-in-out ${texts[currentIndex].font}`;
        changingText.textContent = texts[currentIndex].text;
        changingText.style.opacity = '1';

        currentIndex = (currentIndex + 1) % texts.length;
    }, 500);
}