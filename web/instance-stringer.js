!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.instanceStringer=t()}}(function(){return function t(e,r,n){function o(c,f){if(!r[c]){if(!e[c]){var u="function"==typeof require&&require;if(!f&&u)return u(c,!0);if(i)return i(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var s=r[c]={exports:{}};e[c][0].call(s.exports,function(t){var r=e[c][1][t];return o(r||t)},s,s.exports,t,e,r,n)}return r[c].exports}for(var i="function"==typeof require&&require,c=0;c<n.length;c++)o(n[c]);return o}({1:[function(t,e,r){"use strict";function n(t){const e=i(t);return f(t)?e:`${t.constructor.name} ${e}`}function o(t){return`[${t.map(t=>{if(Array.isArray(t))return o(t);if(t instanceof Object)return n(t);if("string"==typeof t)return`'${t}'`;return t}).join(", ")}]`}function i(t){let e="",r=0;return c(t,(t,i,c)=>{0===c.index?(e+="{ ",r=c.depth):(r>c.depth&&(e+=" }".repeat(r-c.depth),r=c.depth),e+=", ");Array.isArray(t)?e+=`${c.name}: ${o(t)}`:f(t)?(e+=`${c.name}: `,Object.keys(t).length||(e+="{}")):t instanceof Object?e+=`${c.name}: ${n(t)}`:e+="string"==typeof t?`${c.name}: '${t}'`:`${c.name}: ${t}`}),e+=" }".repeat(r),e.length||(e="{}"),e}const c=t("each-props"),f=t("is-plain-object");n.propsStringer=i,n.arrayStringer=o,e.exports=n},{"each-props":2,"is-plain-object":3}],2:[function(t,e,r){"use strict";function n(t,e,r,o,f){var u=Object.keys(t);if("function"==typeof f.sort){var a=f.sort(u);Array.isArray(a)&&(u=a)}o+=1;for(var s=0,p=u.length;s<p;s++){var l=u[s],y=e+"."+l,b=t[l],j=c({},f);j.name=l,j.index=s,j.count=p,j.depth=o,j.parent=t;!r(b,y.slice(1),j)&&i(b)&&n(b,y,r,o,f)}}function o(t){return"[object Object]"===Object.prototype.toString.call(t)}var i=t("is-plain-object"),c=t("object-assign");e.exports=function(t,e,r){o(t)&&"function"==typeof e&&(i(r)||(r={}),n(t,"",e,0,r))}},{"is-plain-object":3,"object-assign":5}],3:[function(t,e,r){"use strict";function n(t){return!0===o(t)&&"[object Object]"===Object.prototype.toString.call(t)}var o=t("isobject");e.exports=function(t){var e,r;return!1!==n(t)&&("function"==typeof(e=t.constructor)&&(r=e.prototype,!1!==n(r)&&!1!==r.hasOwnProperty("isPrototypeOf")))}},{isobject:4}],4:[function(t,e,r){"use strict";e.exports=function(t){return null!=t&&"object"==typeof t&&!Array.isArray(t)}},{}],5:[function(t,e,r){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var r,f,u=n(t),a=1;a<arguments.length;a++){r=Object(arguments[a]);for(var s in r)i.call(r,s)&&(u[s]=r[s]);if(o){f=o(r);for(var p=0;p<f.length;p++)c.call(r,f[p])&&(u[f[p]]=r[f[p]])}}return u}},{}]},{},[1])(1)});