const linkTopLeft = document.querySelector('.linkTopLeft');
const linkTopRight = document.querySelector('.linkTopRight');
const linkBottomLeft = document.querySelector('.linkBottomLeft');
const linkBottomRight = document.querySelector('.linkBottomRight');

const guideManTopLeft = document.querySelector('.guideManTopLeft');
const guideManTopRight = document.querySelector('.guideManTopRight');
const guideManBottomLeft = document.querySelector('.guideManBottomLeft');
const guideManBottomRight = document.querySelector('.guideManBottomRight');

const decorative = document.querySelector('.decorative');

let guideShown = guideManTopLeft;

linkTopRight.addEventListener('mouseover', function () {
    guideShown.classList.add('hidden');
    guideManTopRight.classList.remove('hidden');
    guideShown = guideManTopRight;
    decorative.style.backgroundColor = 'lightblue';
    linkTopRight.style.color = 'lightblue';
});

linkTopLeft.addEventListener('mouseover', function () {
    guideShown.classList.add('hidden');
    guideManTopLeft.classList.remove('hidden');
    guideShown = guideManTopLeft;
    decorative.style.backgroundColor = 'violet';
    linkTopLeft.style.color = 'violet';
});

linkBottomRight.addEventListener('mouseover', function () {
    guideShown.classList.add('hidden');
    guideManBottomRight.classList.remove('hidden');
    guideShown = guideManBottomRight;
    decorative.style.backgroundColor = 'palegreen';
    linkBottomRight.style.color = 'palegreen';
});

linkBottomLeft.addEventListener('mouseover', function () {
    guideShown.classList.add('hidden');
    guideManBottomLeft.classList.remove('hidden');
    guideShown = guideManBottomLeft;
    decorative.style.backgroundColor = 'moccasin';
    linkBottomLeft.style.color = 'moccasin';
});