import JsLoader from '@/Helpers/JsLoader'
import Script from 'next/script'
import React from 'react'

export default function ScriptComponent() {
    return (
        <>
            <Script src="/xcelerate-landing/js/swiper-bundle.min.js" strategy="afterInteractive" />
            {/* <Script src="/xcelerate-landing/js/bootstrap.min.js" strategy="afterInteractive" /> */}
            <Script
                src="/xcelerate-landing/js/jquery.js"
                // strategy="afterInteractive"
                onLoad={() => {
                    JsLoader("/xcelerate-landing/js/bootstrap.min.js")
                    // JsLoader("/xcelerate-landing/js/swiper-bundle.min.js")
                    JsLoader("/xcelerate-landing/js/custom.js")
                }}
            />
            {/* <Script src="/xcelerate-landing/js/custom.js"  strategy="afterInteractive"/> */}

        </>
    )
}
