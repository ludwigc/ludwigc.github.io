!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();var ready=function(){!function(){var e=document.querySelectorAll('a[href^="#"]');[].forEach.call(e,function(e){var t=navigator.userAgent,a=/chrome/i.test(t),o=/firefox/i.test(t),n=/iPad|iPhone|iPod/.test(t)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1;e.addEventListener("click",function(t){var r=!1,i=document.body.parentNode;n&&"none"!=getComputedStyle(i).getPropertyValue("scroll-snap-type")&&(i.setAttribute("data-snap",i.style.scrollSnapType),i.style.scrollSnapType="none",r=!0);var s=0;if(e.hash.length>1){var u=parseFloat(getComputedStyle(document.body).getPropertyValue("zoom"));!o&&u||(u=1);var l=e.hash.slice(1),c=document.getElementById(l);if(null===c&&null===(c=document.querySelector('[name="'+l+'"]')))return;s=a?c.getBoundingClientRect().top*u+pageYOffset:(c.getBoundingClientRect().top+pageYOffset)*u}else if(r)for(var m=document.querySelectorAll("[data-block-group]"),p=0;p<m.length;p++)if("none"!=getComputedStyle(m[p]).getPropertyValue("scroll-snap-align")){c=m[p];break}if(r)window.smoothScroll(t,c,1);else if("scrollBehavior"in document.documentElement.style)scroll({top:s,left:0,behavior:"smooth"});else if("requestAnimationFrame"in window){var d=pageYOffset,f=null;requestAnimationFrame(function e(t){f||(f=t);var a=(t-f)/400;scrollTo(0,d<s?(s-d)*a+d:d-(d-s)*a),a<1?requestAnimationFrame(e):scrollTo(0,s)})}else scrollTo(0,s);t.preventDefault()},!1)})}(),window.smoothScroll=function(e,t,a,o){e.stopImmediatePropagation();var n,r=pageYOffset;t?(("string"==typeof t||t instanceof String)&&(t=document.querySelector(t)),n=t.getBoundingClientRect().top):n=-r;var i=navigator.userAgent,s=/chrome/i.test(i),u=/firefox/i.test(i),l=parseFloat(getComputedStyle(document.body).getPropertyValue("zoom"));!u&&l||(l=1);var c=n*l+(s?0:r*(l-1)),m=null;function p(){d(window.performance.now?window.performance.now():Date.now())}function d(e){null===m&&(m=e);var n=(e-m)/1e3,i=function(e,t,a){switch(o){case"linear":break;case"easeInQuad":e*=e;break;case"easeOutQuad":e=1-(1-e)*(1-e);break;case"easeInCubic":e*=e*e;break;case"easeOutCubic":e=1-Math.pow(1-e,3);break;case"easeInOutCubic":e=e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;break;case"easeInQuart":e*=e*e*e;break;case"easeOutQuart":e=1-Math.pow(1-e,4);break;case"easeInOutQuart":e=e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2;break;case"easeInQuint":e*=e*e*e*e;break;case"easeOutQuint":e=1-Math.pow(1-e,5);break;case"easeInOutQuint":e=e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2;break;case"easeInCirc":e=1-Math.sqrt(1-Math.pow(e,2));break;case"easeOutCirc":e=Math.sqrt(1-Math.pow(0,2));break;case"easeInOutCirc":e=e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2;break;case"easeInOutQuad":default:e=e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2}e>1&&(e=1);return t+a*e}(n/a,r,c);window.scrollTo(0,i),n<a?"requestAnimationFrame"in window?requestAnimationFrame(d):setTimeout(p,1e3/120):(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&(t&&t.scrollIntoView(),setTimeout(function(){var e=document.body.parentNode;e.style.scrollSnapType=e.getAttribute("data-snap"),e.removeAttribute("data-snap")},100))}return"requestAnimationFrame"in window?requestAnimationFrame(d):setTimeout(p,1e3/120),!1};!function(){var e=null;if(location.hash){var t=location.hash.replace("#",""),n=function(){var o=document.getElementById(t);null===o&&(o=document.querySelector('[name="'+t+'"]')),o&&o.scrollIntoView(!0),"0px"===window.getComputedStyle(document.body).getPropertyValue("min-width")?setTimeout(n,100):null!=e&&setTimeout(e,100)};n()}else null!=e&&e()}();wl.addAnimation('.un19',"3.00s","0.00s",1,100);wl.addAnimation('.un20',"2.50s","0.00s",1,100);wl.addAnimation('.un21',"2.50s","0.00s",1,100);wl.addAnimation('.un22',"2.50s","0.00s",1,100);wl.addAnimation('.un23',"2.50s","0.00s",1,0);wl.addAnimation('.un24',"2.50s","0.00s",1,0);wl.addAnimation('.un25',"1.50s","0.00s",1,100);wl.addAnimation('.un26',"2.50s","0.00s",1,100);wl.addAnimation('.un27',"1.50s","0.00s",1,100);wl.addAnimation('.un28',"2.50s","0.00s",1,100);wl.addAnimation('.un29',"2.50s","0.00s",1,100);wl.addAnimation('.un30',"2.50s","0.00s",1,100);wl.addAnimation('.un31',"1.50s","0.00s",1,100);wl.addAnimation('.un32',"2.50s","0.00s",1,100);wl.addAnimation('.un33',"2.50s","0.00s",1,100);wl.addAnimation('.un34',"1.50s","0.00s",1,100);wl.addAnimation('.un35',"2.50s","0.00s",1,100);wl.addAnimation('.un36',"2.50s","0.00s",1,100);wl.addAnimation('.un37',"2.50s","0.00s",1,100);wl.addAnimation('.un38',"1.50s","0.00s",1,100);wl.addAnimation('.un39',"2.50s","0.00s",1,100);wl.addAnimation('.un40',"2.50s","0.00s",1,100);wl.addAnimation('.un41',"1.50s","0.00s",1,100);wl.addAnimation('.un42',"2.50s","0.00s",1,100);wl.addAnimation('.un43',"2.50s","0.00s",1,100);wl.addAnimation('.un44',"1.50s","0.00s",1,100);wl.addAnimation('.un45',"2.50s","0.00s",1,100);wl.addAnimation('.un46',"2.50s","0.00s",1,100);wl.addAnimation('.un47',"1.50s","0.00s",1,100);wl.addAnimation('.un48',"2.50s","0.00s",1,100);wl.addAnimation('.un49',"2.50s","0.00s",1,100);wl.addAnimation('.un50',"1.50s","0.00s",1,100);wl.addAnimation('.un51',"2.50s","0.00s",1,100);wl.addAnimation('.un52',"2.50s","0.00s",1,100);wl.addAnimation('.un53',"1.50s","0.00s",1,100);wl.addAnimation('.un54',"2.50s","0.00s",1,100);wl.addAnimation('.un55',"2.50s","0.00s",1,100);wl.addAnimation('.un56',"1.50s","0.00s",1,100);wl.addAnimation('.un57',"2.50s","0.00s",1,100);wl.addAnimation('.un58',"2.50s","0.00s",1,100);wl.addAnimation('.un59',"1.50s","0.00s",1,100);wl.start();};load=function(){};"interactive"==document.readyState?(ready(),window.addEventListener("load",load)):"complete"==document.readyState?(ready(),load()):document.addEventListener("readystatechange",function(){"interactive"==document.readyState&&ready(),"complete"==document.readyState&&load()});