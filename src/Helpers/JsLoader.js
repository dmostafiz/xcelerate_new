const JsLoader = (src) => {
    let script = document.querySelector(`script[src="${src}"]`)
    
    if( script ){
        script.remove()
    }
    // console.log('Loaded Script: '.script)   

    script = document.createElement("script");
    script.src = src;
    script.async = true;
    // script.setAttribute("data-status", "loading");
    // Add script to document body
    return document.body.appendChild(script);
    
}

export default JsLoader