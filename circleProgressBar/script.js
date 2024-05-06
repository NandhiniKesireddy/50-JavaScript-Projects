const halfCircles = document.querySelectorAll('.half-circle');
const halfCircleTop = document.querySelector('.half-circle-top');
const progressBarCircle = document.querySelector('.progressbar-circle');

function updatePercentage() {
    const pageViewportHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const initialScrollPortion = window.scrollY || window.pageYOffset;

    if (pageHeight - pageViewportHeight === 0) {
        return; // Prevent division by zero
    }

    const initialScrollPortionDegree = (initialScrollPortion / (pageHeight - pageViewportHeight)) * 360;
    const initialScrollPortionPercent = Math.floor(initialScrollPortionDegree / 360 * 100);

    progressBarCircle.textContent = `${initialScrollPortionPercent}%`;

    halfCircles.forEach(el => {
        el.style.transform = `rotate(${initialScrollPortionDegree}deg)`;

        if (initialScrollPortionDegree >= 180) {
            halfCircles[0].style.transform = 'rotate(180deg)';
            halfCircleTop.style.opacity = '0';
        } else {
            halfCircleTop.style.opacity = '1';
        }
    });
}

updatePercentage(); // Call the function to update the percentage on page load

document.addEventListener('scroll', () => {
    updatePercentage();
});