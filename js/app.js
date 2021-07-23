const dom = {
    header: {
        toggle: document.querySelector(".header__toggle"),
        menu: document.querySelector(".header__navigation")
    },
    home: {}
}

const toggle = {
    class(element, className) {
        return element.classList.toggle(className);
    }
}

dom.header.toggle.addEventListener("click", () => {
    toggle.class(dom.header.menu, "header__navigation--active");
    toggle.class(dom.header.toggle, "header__toggle--active");
})