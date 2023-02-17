import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Benefits() {
    return (
        <Box bg='black'>
            <section className="benefits-wrp">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-12">
                            <div className="titlebar">
                                <h6>BENEFITS</h6>
                                <h5>Go further for less </h5>
                                <h2>Great for your <span>wallet</span>  <br /> and the <span>environment</span> </h2>
                                <p>One tab treats up to 20 gallons of fuel. Effective in Diesel, Gasoline and Propane. </p>
                                <a href="#" className="btn-secondary">READ MORE NOW</a>
                                <img src="/xcelerate-landing/images/car-img.png" alt />
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <div className="benefits-block">
                                <ul>
                                    <li>
                                        <div className="benefit-icon">
                                            <img src="/xcelerate-landing/images/benefit-icon1.png" />
                                        </div>
                                        <h3>OEM Compliant</h3>
                                        <p>Use of our product will not void your manufacturers warranty if used as directed. Our fuel tabs do not alter the chemistry of fuel.</p>
                                    </li>
                                    <li>
                                        <div className="benefit-icon">
                                            <img src="/xcelerate-landing/images/benefit-icon2.png" />
                                        </div>
                                        <h3>Proven Results</h3>
                                        <p>Billions of gallons of fuel treated and millions of satisfied customers.  3rd party tested.</p>
                                    </li>
                                    <li>
                                        <div className="benefit-icon">
                                            <img src="/xcelerate-landing/images/benefit-icon3.png" />
                                        </div>
                                        <h3>Patented Technology</h3>
                                        <p>Millions of dollars and decades invested into the formulation and development of this exclusive formula.</p>
                                    </li>
                                    <li>
                                        <div className="benefit-icon">
                                            <img src="/xcelerate-landing/images/benefit-icon4.png" />
                                        </div>
                                        <h3>The ORIGINAL</h3>
                                        <p>We invented the fuel tab industry. Often imitated but never duplicated.  No other fuel tab comes close.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="titlebar-info">
                                <a href="#" className="btn-secondary">Watch Video</a>
                                <img src="/xcelerate-landing/images/car-img.png" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Box>
    )
}
