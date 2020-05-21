
document.body.innerHTML = "";

document.body.style.margin = 0;

var x3dcanvas = document.createElement("X3DCanvas");
x3dcanvas.setAttribute("src", location.href);
x3dcanvas.style.width = "100%";
x3dcanvas.style.height = "100%";
x3dcanvas.style.margin = 0;
document.body.appendChild(x3dcanvas);

var css = document.createElement("link");
css.rel = "stylesheet";
css.type = "text/css";
css.href = browser.runtime.getURL("x_ite/x_ite.css");
document.head.appendChild(css);

var script = document.createElement("script");
script.type = "text/javascript";
script.src = browser.runtime.getURL("x_ite/x_ite.min.js");
document.head.appendChild(script);