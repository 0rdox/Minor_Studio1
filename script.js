
// Popup on Startup
window.addEventListener('DOMContentLoaded', function () {
    console.log("reached");
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const body = document.getElementById('body');
    popup.classList.remove('hidden');
    console.log("reached");

    closePopup.addEventListener('click', function () {
        console.log("reached");

        popup.classList.add('transition', 'duration-500', 'ease-in-out', 'transform', 'scale-0');

        popupbg.classList.add('bg-opacity-0', 'transition', 'duration-500', 'ease-in-out');

        setTimeout(function () {
            popupbg.classList.add('hidden');
        }, 500);
        body.classList.remove('overflow-hidden');
        body.classList.add('overflow-scroll');
    });
});

// Groen Images Timeline
function selectButton(year) {
    const img2025 = document.getElementById('2025img');
    const img2030 = document.getElementById('2030img');
    const img2035 = document.getElementById('2035img');
    const img2040 = document.getElementById('2040img');
    const button2025 = document.getElementById('2025');
    const button2030 = document.getElementById('2030');
    const button2035 = document.getElementById('2035');
    const button2040 = document.getElementById('2040');
    const images = [img2025, img2030, img2035, img2040];
    const buttons = [button2025, button2030, button2035, button2040];

    images.forEach(img => img.classList.add('hidden'));
    buttons.forEach(btn => btn.classList.remove("border-4", "border-dgroen"));

    // Show the selected image and add border to the corresponding button
    if (year === '2025') {
        img2025.classList.remove('hidden');
        button2025.classList.add("border-4", "border-dgroen");
    } else if (year === '2030') {
        img2030.classList.remove('hidden');
        button2030.classList.add("border-4", "border-dgroen");
    } else if (year === '2035') {
        img2035.classList.remove('hidden');
        button2035.classList.add("border-4", "border-dgroen");
    } else if (year === '2040') {
        img2040.classList.remove('hidden');
        button2040.classList.add("border-4", "border-dgroen");
    }
    
}

// Scroll 
document.getElementById('scrollButton').addEventListener('click', function () {
    document.querySelector('.border-4.border-dgroen').scrollIntoView({ behavior: 'smooth' });
});


// Info Button -- Not used
const infoGreen = document.getElementById('infoButtonGreen');
infoGreen.addEventListener('click', function () {
});