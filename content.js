function insertScript(scriptName) {
    return new Promise((fulfill, reject) => {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = browser.runtime.getURL(scriptName);
        script.onload = () => fulfill(script);
        document.head.appendChild(script);
    });
}


document.body.innerHTML = "";

browser.storage.sync.get({spec_color: false}).then(function(options) {
    document.body.style.margin = 0;

    var x3dcanvas = document.createElement("X3DCanvas");
    x3dcanvas.style.width = "100%";
    x3dcanvas.style.height = "100%";
    x3dcanvas.style.margin = 0;
    document.body.appendChild(x3dcanvas);

    var css = document.createElement("link");
    css.rel = "stylesheet";
    css.type = "text/css";
    css.href = browser.runtime.getURL("x_ite/x_ite.css");
    document.head.appendChild(css);
    
    insertScript("x_ite/x_ite.js").then(function() {
        if(options.spec_color) {
            insertScript("x_ite_mods/spec_color.js");
        }
        
        x3dcanvas.setAttribute("src", location.href);
    });
    

});

