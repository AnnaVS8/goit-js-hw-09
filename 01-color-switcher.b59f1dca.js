!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=null;t.addEventListener("click",(function(){e.disabled=!1,n=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=e,t.disabled=!0}),1e3)})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1})),e.disabled=!0}();
//# sourceMappingURL=01-color-switcher.b59f1dca.js.map