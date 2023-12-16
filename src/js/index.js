import './../scss/main.scss'
import Swiper from './../../node_modules/swiper/swiper-bundle'
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
                return enableSwiper(swiperClass, swiperSettings)
            } else {
                if (swiper !== undefined) {
                    swiper.destroy(true, true) 
                }
                return
            }
        }

        breakpoint.addEventListener('change', checkBreakpointDestroy)
        checkBreakpointDestroy()
    }

    const swiperSettings = {
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

    resizeSwiper(
        '(max-width: 580px)',
        '.slider-brands',
        swiperSettings
    )

    resizeSwiper(
        '(max-width: 580px)',
        '.slider-devices', 
        swiperSettings
    )

    resizeSwiper(
        '(max-width: 580px)',
        '.slider-prices',
        swiperSettings
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

// locked classes
const body = document.querySelector('body')
const headerBlock = document.querySelector('.header')
const mainBlock = document.querySelector('main')
const footerBlock = document.querySelector('.footer')

const classesToggleLocked = function () {
    body.classList.toggle('no-scroll')
    headerBlock.classList.toggle('locked')
    mainBlock.classList.toggle('locked')
    footerBlock.classList.toggle('locked')
}

// menu burger btn 
const sidebarMenu = document.querySelector('.sidebar')
const menuOpenBtn = document.querySelector('.header__menu-btn')

const opencloseToggleSidebar = function () {
    sidebarMenu.classList.toggle('modal-visible')
}

menuOpenBtn.addEventListener('click', function () {
    opencloseToggleSidebar()
    classesToggleLocked()
})

const checkSidebarVisible = function () {
    if (sidebarMenu.classList.contains('modal-visible')) {
        opencloseToggleSidebar()
    } else {
        classesToggleLocked()
    }
}

// modal feedback block 
const feedbackBlock = document.querySelector('.feedback')
const feedbackBlockInput = feedbackBlock.querySelector('input')
const feedbackOpenBtns = document.querySelectorAll('.btn-feedback')

feedbackOpenBtns.forEach(function (feedbackOpenBtn) {
    feedbackOpenBtn.addEventListener('click', function () {
        checkSidebarVisible()
        feedbackBlock.classList.add('modal-visible')
        sidebarMenu.classList.add('locked')
        feedbackBlockInput.focus()
    })
})

// modal call block 
const modalcallBlock = document.querySelector('.call')
const modalcallBlockInput = modalcallBlock.querySelector('input')
const modalcallOpenBtns = document.querySelectorAll('.btn-modal-call')

modalcallOpenBtns.forEach(function (modalcallOpenBtn) {
    modalcallOpenBtn.addEventListener('click', function () {
        checkSidebarVisible()
        modalcallBlock.classList.add('modal-visible')
        sidebarMenu.classList.add('locked')
        modalcallBlockInput.focus()
    })
})

// close modal window 
const closeModalWindowBtns = document.querySelectorAll('.btn--close')

closeModalWindowBtns.forEach(function (closeModalWindowBtn) {
    closeModalWindowBtn.addEventListener('click', function () {
        const visibleBlock = document.querySelector('.modal-visible')
        visibleBlock.classList.remove('modal-visible')
        sidebarMenu.classList.remove('locked')
        classesToggleLocked()
    })
})

document.onkeydown = function (e) {
    const visibleBlock = document.querySelector('.modal-visible')
    if (visibleBlock) {
        if (e.keyCode == 27) {
            const visibleBlock = document.querySelector('.modal-visible')
    
            if (visibleBlock.classList.contains('feedback') || visibleBlock.classList.contains('call')) {
                const visibleBlockFocusInput = visibleBlock.querySelector('input')
                visibleBlockFocusInput.blur()
            }
            
            visibleBlock.classList.remove('modal-visible')
            sidebarMenu.classList.remove('locked')
            classesToggleLocked()
        }
    }
}

const checkClickOutsideModal = function (block, e) {
    if (block.classList.contains('modal-visible')) {
        const click = e.composedPath().includes(block)

        if (!click) {
            block.classList.remove('modal-visible')
            sidebarMenu.classList.remove('locked')
            classesToggleLocked()
        }
    }
}

document.addEventListener('click', (e) => {
    checkClickOutsideModal(modalcallBlock, e)
    checkClickOutsideModal(feedbackBlock, e)
    checkClickOutsideModal(sidebarMenu, e)
}, {capture: true})