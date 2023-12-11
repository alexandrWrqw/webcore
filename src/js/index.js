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
                delay: 3000
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
                delay: 3000
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
                delay: 3000
            }
        }
    )
})

// info block read btn
const infoContent = document.querySelector('.info__text-wrapper')
const text = infoContent.querySelector('.info__text')
const readBtn = infoContent.querySelector('.btn--more')

readBtn.addEventListener('click', function () {
    this.classList.toggle('btn--more--active')
    text.classList.toggle('info__text--visible')
    this.textContent =
        this.textContent === 'Читать далее' ? 'Скрыть' : 'Читать далее'
})

// brands block show btn
const brandsContainer = document.querySelector('.brands__container')
const brandsList = brandsContainer.querySelector('.brands__list')
const brandsShowBtn = brandsContainer.querySelector('.btn-show')

brandsShowBtn.addEventListener('click', function () {
    this.classList.toggle('btn--more--active')
    brandsList.classList.toggle('brands__list--visible')
    this.textContent =
        this.textContent === 'Показать все' ? 'Скрыть' : 'Показать все'
})

// devices block show btn
const devicesContainer = document.querySelector('.devices__container')
const devicesList = devicesContainer.querySelector('.devices__list')
const devicesShowBtn = devicesContainer.querySelector('.btn-show')

devicesShowBtn.addEventListener('click', function () {
    this.classList.toggle('btn--more--active')
    devicesList.classList.toggle('devices__list--visible')
    this.textContent =
        this.textContent === 'Показать все' ? 'Скрыть' : 'Показать все'
})

// menu burger btn 
const sidebarMenu = document.querySelector('.sidebar')
const menuOpenBtn = document.querySelector('.header__menu-btn')
const menuCloseBtn = document.querySelector('.sidebar__close-btn')
const mainBlock = document.querySelector('main')
const body = document.querySelector('body')
const headerBlock = document.querySelector('.header')

menuOpenBtn.addEventListener('click', function () {
    sidebarMenu.classList.add('sidebar--active')
    mainBlock.classList.add('locked')
    headerBlock.classList.add('locked')
    body.classList.add('no-scroll')
})

const closeSidebarMenu = function () {
    sidebarMenu.classList.remove('sidebar--active')
    mainBlock.classList.remove('locked')
    headerBlock.classList.remove('locked')
    body.classList.remove('no-scroll')
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
const feedbackOpenBtns = document.querySelectorAll('.btn-feedback')
const feedbackCloseBtn = document.querySelector('.feedback__close-btn')

feedbackOpenBtns.forEach(function (feedbackOpenBtn) {
    feedbackOpenBtn.addEventListener('click', function () {
        if (sidebarMenu.classList.contains('sidebar--active')) {
            closeSidebarMenu()
        }
        feedbackBlock.classList.add('feedback--visible')
        mainBlock.classList.add('locked')
        headerBlock.classList.add('locked')
        sidebarMenu.classList.add('locked')
        body.classList.add('no-scroll')
    })
})

const closeFeedbackBlock = function () {
    feedbackBlock.classList.remove('feedback--visible')
    mainBlock.classList.remove('locked')
    headerBlock.classList.remove('locked')
    sidebarMenu.classList.remove('locked')
    body.classList.remove('no-scroll')
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
const modalcallBlock = document.querySelector('.modal-call')
const modalcallOpenBtns = document.querySelectorAll('.btn-modal-call')
const modalcallCloseBtn = document.querySelector('.modal-call__close-btn')

modalcallOpenBtns.forEach(function (modalcallOpenBtn) {
    modalcallOpenBtn.addEventListener('click', function () {
        if (sidebarMenu.classList.contains('sidebar--active')) {
            closeSidebarMenu()
        }
        modalcallBlock.classList.add('modal-call--visible')
        mainBlock.classList.add('locked')
        headerBlock.classList.add('locked')
        sidebarMenu.classList.add('locked')
        body.classList.add('no-scroll')
    })
})

const closeModalcallBlock = function () {
    modalcallBlock.classList.remove('modal-call--visible')
    mainBlock.classList.remove('locked')
    headerBlock.classList.remove('locked')
    sidebarMenu.classList.remove('locked')
    body.classList.remove('no-scroll')
}

modalcallCloseBtn.addEventListener('click', function () {
    closeModalcallBlock()
})

document.addEventListener('click', (e) => {
    if (modalcallBlock.classList.contains('modal-call--visible')) {
        const clickModalcallBlock = e.composedPath().includes(modalcallBlock)

        if (!clickModalcallBlock) {
            closeModalcallBlock()
        }
    }
}, {capture: true})