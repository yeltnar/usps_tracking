(this["webpackJsonpusps-status"]=this["webpackJsonpusps-status"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=(n(11),n(2),n(5),n(1)),c=(n(13),n(14),!1);function u(e){var t=e.tracking_obj,n=Object(a.useState)(),o=Object(l.a)(n,2);o[0],o[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("a",{href:"https://tools.usps.com/go/TrackConfirmAction?tLabels=".concat(t.tracking_number)},"Tracking Link")),r.a.createElement("br",null),r.a.createElement("div",null,"Name: ",t.tracking_name),r.a.createElement("div",null,"Number: ",t.tracking_number),r.a.createElement("br",null),r.a.createElement("div",null,"Delivered: ",t.has_delivered+""),r.a.createElement("br",null),r.a.createElement("div",null,"Last status (",new Date(t.status_arr[0].date).toString(),"):"),r.a.createElement("div",null,t.status_arr[0].status),r.a.createElement("div",null),r.a.createElement("hr",null))}var s=function(e){var t=e.app_id;if(void 0===t){throw alert("app_id is not defined"),new Error("app_id is not defined")}var n="https://script.google.com/macros/s/".concat(t,"/exec"),o=Object(a.useState)(),i=Object(l.a)(o,2),s=i[0],d=i[1],v=Object(a.useState)(!1),m=Object(l.a)(v,2),p=m[0],f=m[1],h=Object(a.useState)(!1),g=Object(l.a)(h,2),b=g[0],E=g[1],w=!0===p?"Hide Delivered":"Show Delivered";!1===c&&(c=!0,E(!0),fetch(n).then((function(e){return e.json()})).then((function(e){d(e),E(!1)})));var k=[];if(void 0!==s){var _=function(e){var t=JSON.parse(JSON.stringify(e));for(var n in t)p||!0!==t[n].has_delivered||(console.log("have delivered"),delete t[n]);return t}(s);for(var j in _)k.push(r.a.createElement(u,{tracking_obj:_[j]}))}var O={backgroundColor:!0===b?"yellow":"green"};return r.a.createElement("div",null,r.a.createElement("div",{style:O},r.a.createElement("button",{onClick:function(){f(!p)}},w),r.a.createElement("button",{onClick:function(){E(!0),fetch(n,{method:"POST",cache:"no-cache",redirect:"follow"}).then((function(e){return e.json()})).then((function(e){console.log(e),d(e.report_obj),E(!1)}))}},"Update List")),r.a.createElement("div",null,k))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"q",t=window.location.search;if(void 0===(t=t.split("?")[1]))return;var n=t.split("&"),a=n.reduce((function(t,n){if(void 0!==t)return t;var a=n.split("=");return(n={key:a[0],value:a[1]}).key===e&&(t=n.value),t}),void 0);return a}("app_id");if(void 0===e||null===e?e=localStorage.getItem("app_id"):localStorage.setItem("app_id",e),void 0===e||null===e)throw new Error("unknown app_id");return e}();i.a.render(r.a.createElement(s,{app_id:d}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.06d0583b.chunk.js.map