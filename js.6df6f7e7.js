parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QvaY":[function(require,module,exports) {
function e(e){var t=document.querySelector(".container"),n=document.createElement("div"),a=document.createElement("img"),i=document.createElement("p");i.textContent=e.id+". "+e.name,a.src=e.sprites.back_default,n.classList.add("elemento"),n.classList.add("round"),n.classList.add("shadow"),t.appendChild(n),n.addEventListener("mouseover",function(){a.src=e.sprites.front_default}),n.addEventListener("mouseleave",function(){a.src=e.sprites.back_default}),n.appendChild(a),n.appendChild(i)}function t(){var t=[];for(i=1;i<151;i++)t.push("https://pokeapi.co/api/v2/pokemon/"+i+"/");var n=t.map(function(e){return fetch(e)});Promise.all(n).then(function(e){return Promise.all(e.map(function(e){return e.json()}))}).then(function(t){return t.forEach(function(t){e(t)})})}t();
},{}]},{},["QvaY"], null)
//# sourceMappingURL=/dsi-p4-pokedex-alu0100944723/js.6df6f7e7.js.map