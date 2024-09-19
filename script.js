// Function to handle the selection of Groen timeline buttons
function selectButtonGroen(year) {
    const img2025 = document.getElementById('Groen2025img');
    const img2030 = document.getElementById('Groen2030img');
    const img2035 = document.getElementById('Groen2035img');
    const img2040 = document.getElementById('Groen2040img');
    const imgBase = document.getElementById('GroenBase');

    const button2025 = document.getElementById('Groen2025');
    const button2030 = document.getElementById('Groen2030');
    const button2035 = document.getElementById('Groen2035');
    const button2040 = document.getElementById('Groen2040');

    const images = [img2025, img2030, img2035, img2040, imgBase];
    const buttons = [button2025, button2030, button2035, button2040];

    // Hide all images and reset button styles
    images.forEach(img => img?.classList.add('hidden'));
    buttons.forEach(btn => {
        btn?.classList.remove("bg-dgroen");
        btn?.classList.add("bg-white", "hover:bg-gray-200");
    });

    // Show the selected image and update the corresponding button style
    if (year === '2025') {
        imgBase.classList.add('hidden');
        img2025.classList.remove('hidden');
        button2025.classList.remove("bg-white", "hover:bg-gray-200");
        button2025.classList.add("bg-dgroen");
    } else if (year === '2030') {
        imgBase.classList.add('hidden');
        img2030.classList.remove('hidden');
        button2030.classList.remove("bg-white", "hover:bg-gray-200");
        button2030.classList.add("bg-dgroen");
    } else if (year === '2035') {
        imgBase.classList.add('hidden');
        img2035.classList.remove('hidden');
        button2035.classList.remove("bg-white", "hover:bg-gray-200");
        button2035.classList.add("bg-dgroen");
    } else if (year === '2040') {
        imgBase.classList.add('hidden');
        img2040.classList.remove('hidden');
        button2040.classList.remove("bg-white", "hover:bg-gray-200");
        button2040.classList.add("bg-dgroen");
    }
}

// Function to handle the selection of Gastvrij timeline buttons
function selectButtonGastvrij(year) {
    const img2025 = document.getElementById('Gastvrij2025img');
    const img2030 = document.getElementById('Gastvrij2030img');
    const img2035 = document.getElementById('Gastvrij2035img');
    const img2040 = document.getElementById('Gastvrij2040img');
    const imgBase = document.getElementById('GastvrijBase');

    const button2025 = document.getElementById('Gastvrij2025');
    const button2030 = document.getElementById('Gastvrij2030');
    const button2035 = document.getElementById('Gastvrij2035');
    const button2040 = document.getElementById('Gastvrij2040');
    console.log('reached')
    const images = [img2025, img2030, img2035, img2040];
    const buttons = [button2025, button2030, button2035, button2040];

    images.forEach(img => img.classList.add('hidden'));
    buttons.forEach(btn => {
        if (btn) btn.classList.remove("bg-dgastvrij",);
        if (btn) btn.classList.add("bg-white", "hover:bg-gray-200")
    });

    // Show the selected image and add border to the corresponding button
    if (year === '2025') {
        imgBase.classList.add('hidden');
        button2025.classList.remove("bg-white", "hover:bg-gray-200")
        button2025.classList.add("bg-dgastvrij");
        img2025.classList.remove('hidden');
    } else if (year === '2030') {
        imgBase.classList.add('hidden');
        button2030.classList.remove("bg-white", "hover:bg-gray-200")
        button2030.classList.add("bg-dgastvrij");
        img2030.classList.remove('hidden');
    } else if (year === '2035') {
        imgBase.classList.add('hidden');
        button2035.classList.remove("bg-white", "hover:bg-gray-200")
        button2035.classList.add("bg-dgastvrij");
        img2035.classList.remove('hidden');
    } else if (year === '2040') {
        imgBase.classList.add('hidden');
        button2040.classList.remove("bg-white", "hover:bg-gray-200")
        button2040.classList.add("bg-dgastvrij");
        img2040.classList.remove('hidden');
    }

}

// Scroll 
// const scrollButton = document.getElementById('scrollButton');
// if (scrollButton) {
//     scrollButton.addEventListener('click', function () {
//         document.querySelector('.border-4.border-dgroen').scrollIntoView({ behavior: 'smooth' });
//     });
// }
// Lock scroll until button is pressed

window.addEventListener('DOMContentLoaded', function () {

    const unlockScrollButton = document.getElementById('scrollButton');
    if (unlockScrollButton) {
        unlockScrollButton.addEventListener('click', function () {
            const header = document.getElementById('headerContent');
            const mainInfo = document.getElementById('MainInfo');
            header.classList.add('hidden');
            mainInfo.classList.remove('hidden');

        });
    }
});
// Scroll to top on refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    const header = document.getElementById('headerContent');
    header.classList.remove('hidden');
};

//Scroll
document.querySelectorAll('[id$="Button"]').forEach(button => {
    button.addEventListener('click', function () {
        const contentId = button.id.replace('Button', '');
        const content = document.getElementById(contentId + 'Header');
        console.log(content);
        console.log(contentId);
        if (content) {
            content.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
    });
});

// Info Button -- Not used
const infoGreen = document.getElementById('infoButtonGreen');
infoGreen.addEventListener('click', function () {
});


function toggleContent(id) {
    var content = document.getElementById(id);
    var buttonId = content.id + "Button";
    var button = document.getElementById(buttonId);

    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        if (button) button.classList.add("hidden");
    } else {
        content.classList.add("hidden");
        if (button) button.classList.remove("hidden");
    }
}
