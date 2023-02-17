import Script from 'next/script'
import React from 'react'

export default function ScriptComponent() {
    return (
        <>
            <Script src="/xcelerate-landing/js/jquery.js"  strategy="afterInteractive"/>
            <Script src="/xcelerate-landing/js/bootstrap.min.js"  strategy="afterInteractive"/>
            <Script src="/xcelerate-landing/js/swiper-bundle.min.js"  strategy="afterInteractive"/>
            <Script src="/xcelerate-landing/js/custom.js"  strategy="afterInteractive"/>
      
        </>
    )
}
