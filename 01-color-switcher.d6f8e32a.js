const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");let a=null;t.addEventListener("click",(()=>{a=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t.setAttribute("disabled",!1)}),500)})),e.addEventListener("click",(()=>{clearInterval(a),t.setAttribute("disabled",!0),t.removeAttribute("disabled")}),500);
//# sourceMappingURL=01-color-switcher.d6f8e32a.js.map
