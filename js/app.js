const dom = {
    header: {
        toggle: document.querySelector(".header__toggle"),
        menu: document.querySelector(".header__navigation")
    },
    hero: {
        video: document.querySelector(".video__video"),
        videoModal: document.querySelector(".video__modal"),
        playButton: document.querySelector(".video__play"),
        videoBackground: document.querySelector(".video__")
    },
    concept: {
        arrows: document.querySelectorAll(".concept__arrow"),
        images: document.querySelectorAll(".concept__image"),
        why: document.querySelectorAll(".concept__why-box"),
        how: document.querySelectorAll(".concept__how-box"),
        overlay: document.querySelector(".concept__overlay"),
        labels: document.querySelectorAll(".concept__label"),
        active: 0
    }
}

const constants = {
    conceptLength: dom.concept.images.length
}

// const fn = {
//     toggleClass(element, className) {
//         return element.classList.toggle(className);
//     },
//     onClick(element, action) {
//         return element.addEventListener("click", function(event) {
//             action();
//         });
//     },
//     resetVideo(element) {
//         let src = element.src;
//         element.src = src;
//     }
// }


dom.header.toggle.addEventListener("click", function() {
    dom.header.menu.classList.toggle("header__navigation--active");
    dom.header.toggle.classList.toggle("header__toggle--active");
});

dom.hero.playButton.addEventListener("click", function() {
    dom.hero.videoModal.classList.toggle("video__modal--active");
});

dom.hero.videoModal.addEventListener("click", function() {
    dom.hero.videoModal.classList.toggle("video__modal--active");
    setTimeout(() => {
        let src = dom.hero.video.src;
        dom.hero.video.src = src;
    }, 500);
});

dom.concept.arrows.forEach(arrow => arrow.addEventListener("click", function() {
    const { concept } = dom;
    const oldNumber = concept.active;
    const length = constants.conceptLength;
    const currentWhy = concept.why[concept.active];
    const currentHow = concept.how[concept.active];
    const currentImage = concept.images[concept.active];
    const currentLabel = concept.labels[concept.active];
    if (arrow.classList.contains("concept__arrow--right")) {
        concept.active++;
        concept.active = (concept.active === length) ? 0 : concept.active;
    } else {
        concept.active--;
        concept.active = (concept.active === -1) ? length - 1 : concept.active;
    }
    const nextWhy = concept.why[concept.active];
    const nextHow = concept.how[concept.active];
    const nextImage = concept.images[concept.active];
    const nextLabel = concept.labels[concept.active];
    currentWhy.classList.replace("concept__why-box--active", "concept__why-box--exit");
    currentHow.classList.replace("concept__how-box--active", "concept__how-box--exit");
    currentImage.classList.replace("concept__image--active", "concept__image--exit");
    currentLabel.classList.remove("concept__label--active");
    concept.overlay.classList.replace(`concept__overlay--${oldNumber}`, `concept__overlay--${concept.active}`)
    nextWhy.classList.add("concept__why-box--active");
    nextHow.classList.add("concept__how-box--active");
    nextImage.classList.add("concept__image--active");
    nextLabel.classList.add("concept__label--active");
    setTimeout(() => {
        currentWhy.classList.remove("concept__why-box--exit");
        currentHow.classList.remove("concept__how-box--exit");
        currentImage.classList.remove("concept__image--exit");
    }, 500);
}));