/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function strategyService() {
    document.getElementById("strategy").style.cssText = 'filter: grayscale(0%);';
    service.innerText = "Strategy and Consulting";
    
    servicetext.innerText = " We provide strategy and consulting services to decide what best fits your product and brand. The purpose is to effectively launch the brands into the digital space by providing a strong building platform.";
    
    document.getElementById("design").style.cssText = 'filter: grayscale(100%);';
    
    document.getElementById("market").style.cssText = 'filter: grayscale(100%);';
    
    document.getElementById("development").style.cssText = 'filter: grayscale(100%);';
    
    
    
    return false;
}

function designService() {
    
    
    document.getElementById("design").style.cssText = 'filter: grayscale(0%);';
    service.innerText = "Branding and Design";
    
    servicetext.innerText = " We aim at highlighting your brand with unique and successful ideas that makes it stand out from the rest of market brands. Our custom designs are focused to emphasize the individual essence and creativity.";
    
    document.getElementById("strategy").style.cssText = 'filter: grayscale(100%);';
    
    document.getElementById("market").style.cssText = 'filter: grayscale(100%);';
    
    document.getElementById("development").style.cssText = 'filter: grayscale(100%);';
    
    return false;
}

function marketService() {
    document.getElementById("market").style.cssText = 'filter: grayscale(0%);';
    service.innerText = "Digital Marketing";
    
    servicetext.innerText = "Our advanced marketing system is based on the establishment of driving measurable outcomes. We focus on expanding the traffic conversions, producing better brand loyalty online.";
    
    document.getElementById("strategy").style.cssText = 'filter: grayscale(100%);';
    
    document.getElementById("design").style.cssText = 'filter: grayscale(100%);';
    
    
    document.getElementById("development").style.cssText = 'filter: grayscale(100%);';
    
    return false;
}

function developService() {
    
    document.getElementById("development").style.cssText = 'filter: grayscale(0%);';
    service.innerText = "Web Development";
    
    servicetext.innerText = "From big business level lead era and web based business sites to custom content management frameworks, our web developer team cater every area to deliver an effective website that you desire.";
    
    document.getElementById("strategy").style.cssText = 'filter: grayscale(100%);';
    
    document.getElementById("design").style.cssText = 'filter: grayscale(100%);';
    
    document.getElementById("market").style.cssText = 'filter: grayscale(100%);';
    
    return false;
}
