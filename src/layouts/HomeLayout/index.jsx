import Head from 'next/head'
import React, { useEffect } from 'react'
import Script from 'next/script'

import dynamic from 'next/dynamic'
import JsLoader from '@/Helpers/JsLoader'
import Navbar from './Inc/Navbar'
// const ScriptComponent = dynamic(() => import('@/layouts/HomeLayout/ScriptComponent'), {
//     ssr: false
// })

export default function HomeLayout({ children }) {

    function loadScripts() {
        JsLoader("/xcelerate-landing/js/jquery.js")
        JsLoader("/xcelerate-landing/js/bootstrap.min.js")
        JsLoader("/xcelerate-landing/js/swiper-bundle.min.js")
        setTimeout(() => {
            JsLoader("/xcelerate-landing/js/custom.js")
        }, 1)
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            loadScripts()
        }
    }, [])
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
                <link rel="stylesheet" type="text/css" href="/xcelerate-landing/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="/xcelerate-landing/css/swiper-bundle.min.css" />
                <link rel="stylesheet" type="text/css" href="/xcelerate-landing/css/style.css" />
                <link rel="stylesheet" type="text/css" href="/xcelerate-landing/css/responsive.css" />
            </Head>

            <div className="main-wrpper">

                {/* Header */}
                <header>
                    <div className="container">
                        <nav className="navbar navbar-expand-sm navbar-light">
                            <a className="navbar-brand" href="index.html"><img src="/xcelerate-landing/images/logo.png" alt="Logo" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavbarToggle" aria-controls="NavbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="NavbarToggle">
                                <Navbar />
                            </div>
                        </nav>
                    </div>
                </header>
                {/* End Header */}


                {children}

                {/* Footer */}
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-12">
                                <div className="footer-logo">
                                    <img src="/xcelerate-landing/images/footer-logo.png" alt />
                                </div>
                            </div>
                            <div className="copyright">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <p>2023 Xcelerate International. All Right Reserved</p>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <h6> <a href="#">Policies and Procedures </a> <a href="#"> Terms and Conditions</a><a href="#"> Privacy Policy</a> <a href="#">Support</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* End Footer */}

                {/* <ScriptComponent /> */}
            </div>
        </>
    )
}
