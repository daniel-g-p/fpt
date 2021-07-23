const dom = {
    header: {
        toggle: document.querySelector(".header__toggle"),
        menu: document.querySelector(".header__navigation")
    },
    home: {
        video: document.querySelector(".video__video"),
        videoModal: document.querySelector(".video__modal"),
        playButton: document.querySelector(".video__play"),
        videoBackground: document.querySelector(".video__")
    }
}

const fn = {
    toggleClass(element, className) {
        return element.classList.toggle(className);
    },
    onClick(element, action) {
        return element.addEventListener("click", function(event) {
            action();
        });
    },
    resetVideo(element) {
        let src = element.src;
        element.src = src;
    }
}


fn.onClick(dom.header.toggle, function() {
    fn.toggleClass(dom.header.menu, "header__navigation--active");
    fn.toggleClass(dom.header.toggle, "header__toggle--active");
});

fn.onClick(dom.home.playButton, function() {
    fn.toggleClass(dom.home.videoModal, "video__modal--active");
});

fn.onClick(dom.home.videoModal, function() {
    fn.toggleClass(dom.home.videoModal, "video__modal--active");
    setTimeout(() => { fn.resetVideo(dom.home.video) }, 500);
});

