import React from 'react'

export default function Ominphobic() {
    return (
        <section className="ominphobic-wrp">
            <div className="container">
                <div className="ominphobic-block">
                    <div className="titlebar">
                        <h2>Omniphobic <span>windshield</span> treatment</h2>
                        <p>Chemically bonds to glass forming a strong, durable layer that is stronger than the glass itself. Multi-season protection against minor chips, scratches and pitting. HydroX smooth surface extends the life of wiper blades and provides greater visibility in many driving conditions.</p>
                        <ul>
                            <li>
                                <a href="#">HydroX liquid glass formula is the ultimate in <br /> windshield coatings providing multi-season <br /> protection for your vehicle</a>
                            </li>
                            <li>
                                <a href="#">Unlike store brand rain repellants HydroX will<br />not streak and contains no silicone or harmful  <br /> ingredients</a>
                            </li>
                        </ul>
                        <a href="#" className="btn-secondary">Watch Video</a>
                    </div>
                    <div className="ominphobic-info">
                        <ul>
                            <img src="/xcelerate-landing/images/ominphobic-line.svg" alt className="ominphobic-line" />
                            <li className="info1">
                                <h4>Repels water, ice, <br /> snow, oil and road grime</h4>
                                <div className="info-icon">
                                    <img src="/xcelerate-landing/images/ominphobic-icon1.svg" alt />
                                </div>
                            </li>
                            <li className="info2">
                                <h4>Protects against <br />minor chips and scratches</h4>
                                <div className="info-icon">
                                    <img src="/xcelerate-landing/images/ominphobic-icon2.svg" alt />
                                </div>
                            </li>
                            <li className="info3">
                                <h4>Extends the life of <br />your wiper blades</h4>
                                <div className="info-icon">
                                    <img src="/xcelerate-landing/images/ominphobic-icon3.svg" alt />
                                </div>
                            </li>
                            <li className="info4">
                                <h4>Long lasting protection<br /> over multiple seasons</h4>
                                <div className="info-icon">
                                    <img src="/xcelerate-landing/images/ominphobic-icon4.png" alt />
                                </div>
                            </li>
                        </ul>
                        <img src="/xcelerate-landing/images/product-image.png" alt className="product-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}
