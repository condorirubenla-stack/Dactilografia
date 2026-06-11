const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('F:\\DACTILOGRAFIA\\MecaWeb\\index.html', 'utf8');
const js = fs.readFileSync('F:\\DACTILOGRAFIA\\MecaWeb\\script.js', 'utf8');
const textos = fs.readFileSync('F:\\DACTILOGRAFIA\\MecaWeb\\textos.js', 'utf8');

const dom = new JSDOM(html, { runScripts: "outside-only" });
dom.window.eval(textos);
try {
    dom.window.eval(js);
    console.log("No global errors in script.js");
    dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));
    console.log("DOMContentLoaded finished without crashing");
} catch (e) {
    console.error("Crash:", e);
}
