import React from 'react'

export default function MainSlider() {
    return (
        <section className="main-slider">
            <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="slider-box">
                            <img src="/xcelerate-landing/images/main-slider1.png" alt className="main-slider" />
                            <img src="/xcelerate-landing/images/mobile-slider-img1.png" alt className="mobile-main-slider" />
                            <div className="slider-info">
                                <div className="container">
                                    <h2>
                                        EASY TO SHARE<br />
                                        PRODUCTS THAT IMPRESS
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="slider-box">
                            <img src="/xcelerate-landing/images/main-slider1.png" alt className="main-slider" />
                            <img src="/xcelerate-landing/images/mobile-slider-img1.png" alt className="mobile-main-slider" />
                            <div className="slider-info">
                                <div className="container">
                                    <h2>
                                        SAVING PEOPLE MONEY<br />
                                        FOR A LIVING
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="slider-box">
                            <img src="/xcelerate-landing/images/main-slider1.png" alt className="main-slider" />
                            <img src="/xcelerate-landing/images/mobile-slider-img1.png" alt className="mobile-main-slider" />
                            <div className="slider-info">
                                <div className="container">
                                    <h2>
                                        TIME AND<br />
                                        FINANCIAL FREEDOM
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="slider-box">
                            <img src="/xcelerate-landing/images/main-slider1.png" alt className="main-slider" />
                            <img src="/xcelerate-landing/images/mobile-slider-img1.png" alt className="mobile-main-slider" />
                            <div className="slider-info">
                                <div className="container">
                                    <h2>
                                        GREAT PRODUCTS <br />
                                        INCREDIBLE BUSINESS
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slidernav">
                    <div className="container">
                        <div className="swiper-pagination" />
                        <ul>
                            <li><div className="swiper-button-prev"><i className="fas fa-arrow-left" /></div></li>
                            <li><div className="swiper-button-next"><i className="fas fa-arrow-right" /></div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
