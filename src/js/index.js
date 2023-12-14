import './../scss/main.scss'
// swiper
window.addEventListener('DOMContentLoaded', () => {
    const resizeSwiper = (breakpoint, swiperClass, swiperSettings) => {
        let swiper

        breakpoint = window.matchMedia(breakpoint)

        const enableSwiper = function (className, settings) {
            swiper = new Swiper(className, settings)
        }

        const checkBreakpointDestroy = function () {
            if (breakpoint.matches) {
                // попадаем ли мы в промежуток медиа
                return enableSwiper(swiperClass, swiperSettings)
            } else {
                if (swiper !== undefined) {
                    // если свайпера нет, то не нужно удалять его
                    swiper.destroy(true, true) // удалить инстанс и стили
                }
                return
            }
        }

        breakpoint.addEventListener('change', checkBreakpointDestroy)
        checkBreakpointDestroy()
    }

    resizeSwiper(
        '(max-width: 580px)',
        '.slider-brands', // отдельный класс для этого свайпера
        {
            direction: 'horizontal',
            loop: false,
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.3
                },
                360: {
                    slidesPerView: 1.6
                },
                470: {
                    slidesPerView: 2
                }
            },
            autoplay: {
                delay: 4000
            }
        }
    )

    resizeSwiper(
        '(max-width: 580px)',
        '.slider-devices', // отдельный класс для этого свайпера
        {
            direction: 'horizontal',
            loop: false,
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.3
                },
                360: {
                    slidesPerView: 1.6
                },
                470: {
                    slidesPerView: 2
                }
            },
            autoplay: {
                delay: 4000
            }
        }
    )

    resizeSwiper(
        '(max-width: 580px)',
        '.slider-prices', // отдельный класс для этого свайпера
        {
            direction: 'horizontal',
            loop: false,
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2
                },
                360: {
                    slidesPerView: 1.3
                },
                420: {
                    slidesPerView: 1.5
                },
                480: {
                    slidesPerView: 1.7
                },
                530: {
                    slidesPerView: 2
                }
            },
            autoplay: {
                delay: 4000
            }
        }
    )
})

// show more buttons
const showContentButtons = document.querySelectorAll('.btn--more')

showContentButtons.forEach(function (showContentButton) {
    let showContentButtonText = showContentButton.textContent

    showContentButton.addEventListener('click', function () {
        const content = this.previousElementSibling
        content.classList.toggle('visible-block')
        this.classList.toggle('btn--more--active')
        this.textContent = 
            this.textContent === showContentButtonText ? 'Скрыть' : showContentButtonText
    })
})

// menu burger btn 
const sidebarMenu = document.querySelector('.sidebar')
const menuOpenBtn = document.querySelector('.header__menu-btn')
const menuCloseBtn = document.querySelector('.sidebar__close-btn')
const mainBlock = document.querySelector('main')
const footerBlock = document.querySelector('.footer')
const body = document.querySelector('body')
const headerBlock = document.querySelector('.header')

const classesAddLocked = function () {
    mainBlock.classList.add('locked')
    footerBlock.classList.add('locked')
    headerBlock.classList.add('locked')
    body.classList.add('no-scroll')
}

const classesRemoveLocked = function () {
    mainBlock.classList.remove('locked')
    footerBlock.classList.remove('locked')
    headerBlock.classList.remove('locked')
    body.classList.remove('no-scroll')
}

menuOpenBtn.addEventListener('click', function () {
    sidebarMenu.classList.add('sidebar--active')
    classesAddLocked()
})

const closeSidebarMenu = function () {
    sidebarMenu.classList.remove('sidebar--active')
    classesRemoveLocked()
}

menuCloseBtn.addEventListener('click', function () {
    closeSidebarMenu()
})

document.addEventListener('click', (e) => {
    if (sidebarMenu.classList.contains('sidebar--active')) {
        const clickSidebarBlock = e.composedPath().includes(sidebarMenu)

        if (!clickSidebarBlock) {
            closeSidebarMenu()
        }
    }
}, {capture: true})

// feedback block 
const feedbackBlock = document.querySelector('.feedback')
const feedbackBlockInput = feedbackBlock.querySelector('input')
const feedbackOpenBtns = document.querySelectorAll('.btn-feedback')
const feedbackCloseBtn = document.querySelector('.feedback__close-btn')

feedbackOpenBtns.forEach(function (feedbackOpenBtn) {
    feedbackOpenBtn.addEventListener('click', function () {
        if (sidebarMenu.classList.contains('sidebar--active')) {
            closeSidebarMenu()
        }
        feedbackBlock.classList.add('feedback--visible')
        sidebarMenu.classList.add('locked')
        classesAddLocked()
        feedbackBlockInput.focus()
    })
})

const closeFeedbackBlock = function () {
    feedbackBlock.classList.remove('feedback--visible')
    sidebarMenu.classList.remove('locked')
    classesRemoveLocked()
    feedbackBlockInput.blur()
}

feedbackCloseBtn.addEventListener('click', function () {
    closeFeedbackBlock()
})

document.addEventListener('click', (e) => {
    if (feedbackBlock.classList.contains('feedback--visible')) {
        const clickFeedbackBlock = e.composedPath().includes(feedbackBlock)

        if (!clickFeedbackBlock) {
            closeFeedbackBlock()
        }
    }
}, {capture: true})

// modal call block 
const modalcallBlock = document.querySelector('.call')
const modalcallBlockInput = modalcallBlock.querySelector('input')
const modalcallOpenBtns = document.querySelectorAll('.btn-modal-call')
const modalcallCloseBtn = document.querySelector('.call__close-btn')

modalcallOpenBtns.forEach(function (modalcallOpenBtn) {
    modalcallOpenBtn.addEventListener('click', function () {
        if (sidebarMenu.classList.contains('sidebar--active')) {
            closeSidebarMenu()
        }
        modalcallBlock.classList.add('call--visible')
        sidebarMenu.classList.add('locked')
        classesAddLocked()
        modalcallBlockInput.focus()
    })
})

const closeModalcallBlock = function () {
    modalcallBlock.classList.remove('call--visible')
    sidebarMenu.classList.remove('locked')
    classesRemoveLocked()
    modalcallBlockInput.blur()
}

modalcallCloseBtn.addEventListener('click', function () {
    closeModalcallBlock()
})

document.addEventListener('click', (e) => {
    if (modalcallBlock.classList.contains('call--visible')) {
        const clickModalcallBlock = e.composedPath().includes(modalcallBlock)

        if (!clickModalcallBlock) {
            closeModalcallBlock()
        }
    }
}, {capture: true})

document.onkeydown = function (e) {
    if (e.keyCode == 27) {
        closeFeedbackBlock()
        closeSidebarMenu()
        closeModalcallBlock()
    }
}