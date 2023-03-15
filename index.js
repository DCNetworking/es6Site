
const ABOUT_CONTAINER = document.querySelector("#section-about-containers");

const isInViewPort = (el) => {
    const bounding = el.getBoundingClientRect();
    if (
        bounding.top <= (window.innerHeight * 1) &&
        bounding.bottom >= 0
    ) {
        return true;
    }
    return false;
}
const showAndHideItems = (container, querySelector, classListAdd) => {
    return function () {
        if (isInViewPort(container)) {
            for (const aboutItem of container.querySelectorAll(querySelector)) {
                if (isInViewPort(aboutItem)) {
                    aboutItem.classList.add(classListAdd)
                } else {
                    aboutItem.classList.remove(classListAdd)
                }

            }
        } else {
            for (const aboutItem of container.querySelectorAll(querySelector)) {
                aboutItem.classList.remove(classListAdd)
            }
        }
    }
}
const showAndHideAbout = showAndHideItems(ABOUT_CONTAINER, '.grid__item', 'grid__item--show');
window.addEventListener("scroll", showAndHideAbout);

