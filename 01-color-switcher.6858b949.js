!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){timeColor=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=e,t.disabled=!0}),1e3)})),e.addEventListener("click",(function(){clearInterval(timeColor),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.6858b949.js.map
