(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),r=a.n(s),i=(a(9),a(3)),o=a(0),d="6803895a2f0ff4ac726f8485e5a1a734",u="https://api.openweathermap.org/data/2.5/";var h=function(){var e,t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)({}),h=Object(i.a)(r,2),l=h[0],j=h[1];return Object(o.jsx)("div",{className:"undefined"!=typeof l.main&&l.main.temp>16?"app warm":"app",children:Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:"search-box",children:Object(o.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return s(e.target.value)},value:c,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(u,"weather?q=").concat(c,"&units=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){j(e),s(""),console.log(e)}))}})}),"undefined"!=typeof l.main?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"location-box",children:[Object(o.jsxs)("div",{className:"location",children:[l.name,", ",l.sys.country]}),Object(o.jsx)("div",{className:"date",children:(e=new Date,""+["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]+e.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]+e.getFullYear())})]}),Object(o.jsxs)("div",{className:"weather-box",children:[Object(o.jsxs)("div",{className:"temp",children:[Math.round(l.main.temp),"\xb0c"]}),Object(o.jsx)("div",{className:"weather",children:l.weather[0].main})]})]}):""]})})},l=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),l()},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.f244672b.chunk.js.map