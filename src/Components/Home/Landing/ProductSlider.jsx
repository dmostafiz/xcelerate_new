import React from 'react'

export default function ProductSlider() {
    return (
        <section className="product-wrp" id='productDiv'>
            <div className="container">
                <div className="product-titlebar">
                    <h5>QUALITY PRODUCTS</h5>
                    <h2>OUR <span>PRODUCTS</span></h2>
                </div>
                <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="slider-box">
                                <img src="/xcelerate-landing/images/product-img.png" alt />
                                <div className="box-info">
                                    <h6>1 Pack 6 Tablets</h6>
                                    <h3>$30.00</h3>
                                    <a href="#" className="btn-secondary">ORDER HERE</a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="slider-box">
                                <img src="/xcelerate-landing/images/product-img.png" alt />
                                <div className="box-info">
                                    <h6>3 Pack 18 Tablets</h6>
                                    <h3>$75.00</h3>
                                    <a href="#" className="btn-secondary">ORDER HERE</a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="slider-box">
                                <img src="/xcelerate-landing/images/product-img.png" alt />
                                <div className="box-info">
                                    <h6>10 Pack 60 Tablets</h6>
                                    <h3>$200.00</h3>
                                    <a href="#" className="btn-secondary">ORDER HERE</a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="slider-box">
                                <img src="/xcelerate-landing/images/product-img.png" alt />
                                <div className="box-info">
                                    <h6>1 Bottle HydroX</h6>
                                    <h3>$37.00</h3>
                                    <a href="#" className="btn-secondary">ORDER HERE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slidernav">
                        <div className="container">
                            <ul>
                                <li>
                                    <div className="swiper-button-prev"><i className="fas fa-arrow-left" /></div>
                                </li>
                                <li>
                                    <div className="swiper-button-next"><i className="fas fa-arrow-right" /></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
