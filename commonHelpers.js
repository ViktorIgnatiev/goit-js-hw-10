import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as l,i as u}from"./assets/vendor-77e16229.js";const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const c=e[0],s=new Date;c.getTime()<=s.getTime()?(u.error({title:"Error",message:"Please choose a date in the future"}),document.querySelector("[data-start]").disabled=!0):document.querySelector("[data-start]").disabled=!1}};l("#datetime-picker",f);document.querySelector("[data-start]").addEventListener("click",()=>{const e=new Date(document.getElementById("datetime-picker").value),c=setInterval(s,1e3);document.querySelector("[data-start]").disabled=!0,document.getElementById("datetime-picker").disabled=!0;function s(){const n=e-new Date;if(n<=0){clearInterval(c),d(0,0,0,0),u.success({title:"Success",message:"Countdown finished!"}),document.querySelector("[data-start]").disabled=!1;return}const{days:r,hours:a,minutes:i,seconds:m}=y(n);d(r,a,i,m)}function o(t){return t<10?`0${t}`:t}function d(t,n,r,a){document.querySelector("[data-days]").textContent=o(t),document.querySelector("[data-hours]").textContent=o(n),document.querySelector("[data-minutes]").textContent=o(r),document.querySelector("[data-seconds]").textContent=o(a)}});function y(e){const t=Math.floor(e/864e5),n=Math.floor(e%864e5/36e5),r=Math.floor(e%864e5%36e5/6e4),a=Math.floor(e%864e5%36e5%6e4/1e3);return{days:t,hours:n,minutes:r,seconds:a}}
//# sourceMappingURL=commonHelpers.js.map
