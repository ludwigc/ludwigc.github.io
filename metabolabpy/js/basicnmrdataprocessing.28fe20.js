var notifyyt,notifyqueue;function onYouTubeIframeAPIReady(){notifyyt(),window.loadyt=function(e){e()}}window.loadyt=function(e){var t=document.createElement("script");t.src="https://www.youtube.com/player_api";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n),notifyqueue||(notifyqueue=[],notifyyt=function(){var e;for(e=0;e<notifyqueue.length;++e){(0,notifyqueue[e])()}}),notifyqueue.push(e)};window.plstp||(window.plstp=[]),plst=function(p,w){for(var n in window.plstp)window.plstp[n]();window.plstp=[],void 0!==p&&(window.plstp[p]=w)},plrm=function(w){delete window.plstp[w]};!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();var ready=function(){!function(){var e=document.querySelectorAll('a[href^="#"]');[].forEach.call(e,function(e){e.addEventListener("click",function(t){var a=!1,o=document.body.parentNode;(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&"none"!=getComputedStyle(o).getPropertyValue("scroll-snap-type")&&(o.setAttribute("data-snap",o.style.scrollSnapType),o.style.scrollSnapType="none",a=!0);var n=0;if(e.hash.length>1){var r=parseFloat(getComputedStyle(document.body).getPropertyValue("zoom"));r||(r=1);var i=e.hash.slice(1),s=document.getElementById(i);if(null===s&&null===(s=document.querySelector('[name="'+i+'"]')))return;var u=/chrome/i.test(navigator.userAgent);n=u?s.getBoundingClientRect().top*r+pageYOffset:(s.getBoundingClientRect().top+pageYOffset)*r}else if(a)for(var l=document.querySelectorAll("[data-block-group]"),c=0;c<l.length;c++)if("none"!=getComputedStyle(l[c]).getPropertyValue("scroll-snap-align")){s=l[c];break}if(a)window.smoothScroll(t,s,1);else if("scrollBehavior"in document.documentElement.style)scroll({top:n,left:0,behavior:"smooth"});else if("requestAnimationFrame"in window){var d=pageYOffset,m=null;requestAnimationFrame(function e(t){m||(m=t);var a=(t-m)/400;scrollTo(0,d<n?(n-d)*a+d:d-(d-n)*a),a<1?requestAnimationFrame(e):scrollTo(0,n)})}else scrollTo(0,n);t.preventDefault()},!1)})}(),window.smoothScroll=function(e,t,a,o){e.stopImmediatePropagation();var n,r=pageYOffset;t?(("string"==typeof t||t instanceof String)&&(t=document.querySelector(t)),n=t.getBoundingClientRect().top):n=-r;var i=parseFloat(getComputedStyle(document.body).getPropertyValue("zoom"));i||(i=1);var s=n*i+(/chrome/i.test(navigator.userAgent)?0:r*(i-1)),u=null;function l(){c(window.performance.now?window.performance.now():Date.now())}function c(e){null===u&&(u=e);var n=(e-u)/1e3,i=function(e,t,a){switch(o){case"linear":break;case"easeInQuad":e*=e;break;case"easeOutQuad":e=1-(1-e)*(1-e);break;case"easeInCubic":e*=e*e;break;case"easeOutCubic":e=1-Math.pow(1-e,3);break;case"easeInOutCubic":e=e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;break;case"easeInQuart":e*=e*e*e;break;case"easeOutQuart":e=1-Math.pow(1-e,4);break;case"easeInOutQuart":e=e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2;break;case"easeInQuint":e*=e*e*e*e;break;case"easeOutQuint":e=1-Math.pow(1-e,5);break;case"easeInOutQuint":e=e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2;break;case"easeInCirc":e=1-Math.sqrt(1-Math.pow(e,2));break;case"easeOutCirc":e=Math.sqrt(1-Math.pow(0,2));break;case"easeInOutCirc":e=e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2;break;case"easeInOutQuad":default:e=e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2}e>1&&(e=1);return t+a*e}(n/a,r,s);if(window.scrollTo(0,i),n<a)"requestAnimationFrame"in window?requestAnimationFrame(c):setTimeout(l,1e3/120);else if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1){if(t)for(var d=t;d!=document.body;){if(d.getAttribute("data-block-group")){d.scrollIntoView();break}d=d.parentNode}setTimeout(function(){var e=document.body.parentNode;e.style.scrollSnapType=e.getAttribute("data-snap"),e.removeAttribute("data-snap")},100)}}return"requestAnimationFrame"in window?requestAnimationFrame(c):setTimeout(l,1e3/120),!1};window.loadyt(function(){var f=0;uq=new YT.Player('pl2',{host:'https://www.youtube-nocookie.com',videoId: 'uUNRintjUIo',playerVars:{'playsinline':1,'rel':0},events:{onStateChange:function(e){if(1===e.data&&!f){f=1;plst('pl2',function(){e.target.pauseVideo()})};if(2===e.data){f=0;plrm('pl2')}if(0===e.data){f=0;plrm('pl2')}}}});});window.loadyt(function(){var f=0;uq2=new YT.Player('pl3',{host:'https://www.youtube-nocookie.com',videoId: 'AeEoq0bwLJg',playerVars:{'playsinline':1,'rel':0},events:{onStateChange:function(e){if(1===e.data&&!f){f=1;plst('pl3',function(){e.target.pauseVideo()})};if(2===e.data){f=0;plrm('pl3')}if(0===e.data){f=0;plrm('pl3')}}}});});!function(){var e=null;if(location.hash){var t=location.hash.replace("#",""),n=function(){var o=document.getElementById(t);null===o&&(o=document.querySelector('[name="'+t+'"]')),o&&o.scrollIntoView(!0),"0px"===window.getComputedStyle(document.body).getPropertyValue("min-width")?setTimeout(n,100):null!=e&&setTimeout(e,100)};n()}else null!=e&&e()}();wl.addAnimation('.un60',"3.00s","0.00s",1,100);wl.addAnimation('.un61',"2.50s","0.00s",1,100);wl.addAnimation('.un62',"2.50s","0.00s",1,100);wl.addAnimation('.un63',"2.50s","0.00s",1,100);wl.addAnimation('.un64',"2.50s","0.00s",1,100);wl.addAnimation('.un65',"2.50s","0.00s",1,100);wl.addAnimation('.un66',"2.50s","0.00s",1,0);wl.addAnimation('.un67',"2.50s","0.00s",1,0);wl.addAnimation('.un68',"1.50s","0.00s",1,100);wl.addAnimation('.un69',"2.50s","0.00s",1,100);wl.addAnimation('.un70',"2.50s","0.00s",1,100);wl.addAnimation('.un71',"2.50s","0.00s",1,100);wl.addAnimation('.un72',"2.50s","0.00s",1,100);wl.addAnimation('.un73',"2.50s","0.00s",1,100);wl.addAnimation('.un74',"1.50s","0.00s",1,100);wl.addAnimation('.un75',"2.50s","0.00s",1,100);wl.addAnimation('.un76',"2.50s","0.00s",1,100);wl.addAnimation('.un77',"2.50s","0.00s",1,100);wl.addAnimation('.un78',"2.50s","0.00s",1,100);wl.addAnimation('.un79',"2.50s","0.00s",1,100);wl.addAnimation('.un80',"1.50s","0.00s",1,100);wl.addAnimation('.un81',"2.50s","0.00s",1,100);wl.addAnimation('.un82',"2.50s","0.00s",1,100);wl.addAnimation('.un83',"2.50s","0.00s",1,100);wl.addAnimation('.un84',"2.50s","0.00s",1,100);wl.addAnimation('.un85',"2.50s","0.00s",1,100);wl.addAnimation('.un86',"2.50s","0.00s",1,100);wl.addAnimation('.un87',"2.50s","0.00s",1,100);wl.addAnimation('.un88',"2.50s","0.00s",1,100);wl.addAnimation('.un89',"2.50s","0.00s",1,100);wl.addAnimation('.un90',"2.50s","0.00s",1,100);wl.addAnimation('.un91',"2.50s","0.00s",1,100);wl.start();};load=function(){};"interactive"==document.readyState?(ready(),window.addEventListener("load",load)):"complete"==document.readyState?(ready(),load()):document.addEventListener("readystatechange",function(){"interactive"==document.readyState&&ready(),"complete"==document.readyState&&load()});