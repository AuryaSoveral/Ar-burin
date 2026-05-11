const track = document.querySelector('.card-movel')
let slides = document.querySelectorAll('.image-product')

slides.forEach(slide => {
    const clone = slide.cloneNode(true)
    track.appendChild(clone)
})

slides = document.querySelectorAll('.image-product')

let index = 0
const gap = 30
const slideWidth = slides[0].clientWidth + gap

function moveCarousel() {
    index++

    track.style.transition = "transform 0.5s linear"
    track.style.transform = `translateX(${-slideWidth * index}px)`

    if (index >= slides.length / 2) {
        setTimeout(() => {
            track.style.transition = "none"
            track.style.transform = `translateX(0px)`
            index = 0
        }, 500)
    }
}

let interval

function startCarousel() {
    interval = setInterval(moveCarousel, 2000)
}

function stopCarousel() {
    clearInterval(interval)
}

startCarousel()

const wrapper = document.querySelector('.carousel-wrapper')

wrapper.addEventListener('mouseenter', stopCarousel)

wrapper.addEventListener('mouseleave', startCarousel)

document.querySelector('.contato-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
});
