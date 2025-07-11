gsap.from("h1", {delay: 1, y: 200, ease: "bounce", duration:3, opacity: 0})

gsap.from(".one", {delay: 1, y: -200, ease: "power2.inOut", duration:3, opacity: 0})
gsap.from(".two", {delay: 1.3, y: -200, ease: "power2.inOut", duration:3, opacity: 0})
gsap.from(".three", {delay: 1.6, y: -200, ease: "power2.inOut", duration:3, opacity: 0})
gsap.from(".four", {delay: 1.9, y: -200, ease: "power2.inOut", duration:3, opacity: 0})
gsap.from(".five", {delay: 2.2, y: -200, ease: "power2.inOut", duration:3, opacity: 0})
gsap.from(".six", {delay: 2.5, y: -200, ease: "power2.inOut", duration:3, opacity: 0})

const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('mouseover', function(){
        removeFocus();
        item.classList.add('selected')
    })
})

removeFocus = function() {
    items.forEach(item => {
        item.classList.remove('selected')
    })
}