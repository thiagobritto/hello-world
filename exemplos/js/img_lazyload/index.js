document.addEventListener('DOMContentLoaded', () => {

    const img = document.querySelector('img')
    
    window.onscroll = () => {
        if (isVisible(img) && !img.src) {
            img.src = img.getAttribute('data-src')
        }
    }

})

// lazyload
function isVisible(element) {
    let boundingTop = element.getBoundingClientRect().top
    return boundingTop >= 0 && boundingTop <= window.innerHeight;
}
