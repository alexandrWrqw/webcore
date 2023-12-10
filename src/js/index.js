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

menuCloseBtn.addEventListener('click', function () {
    sidebarMenu.classList.remove('sidebar--active')
    mainBlock.classList.remove('locked')
    headerBlock.classList.remove('locked')
    body.classList.remove('no-scroll')
})