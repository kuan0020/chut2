(this.webpackJsonpreact_chut2=this.webpackJsonpreact_chut2||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(4),r=n.n(c),a=n(15),s=n.n(a),i=(n(22),n(12)),o=n(8),u=n.n(o),l=n(11),d=(n(24),n(1));var p=function(e){var t=function(e){var t=r.a.useState(e),n=Object(i.a)(t,2),c=n[0],a=n[1];function s(){a(new Date)}return r.a.useEffect((function(){var e=setInterval((function(){return s()}),1e3);return function(){clearInterval(e)}})),c}(new Date);return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{className:"time",children:t.toLocaleTimeString()})})},h=n(9),j=(n(30),n(27),{apiKey:"AIzaSyA5ZNxod7Id7oQLNAPC8aDO7maOoNcR69U",authDomain:"chut2-c2958.firebaseapp.com",databaseURL:"https://chut2-c2958-default-rtdb.firebaseio.com",projectId:"chut2-c2958",storageBucket:"chut2-c2958.appspot.com",messagingSenderId:"861344867001",appId:"1:861344867001:web:01cf3be224a6a9ac743168"}),b=n(17);h.a.initializeApp(j);var f=h.a.auth(),m=h.a.firestore(),x=[];function O(){var e=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new h.a.auth.GoogleAuthProvider,e.next=3,f.signInWithPopup(t);case 3:m.collection("accounts").doc(f.currentUser.uid).get().then((function(e){if(e.exists){console.log("account exists");h.a.firestore().collection("accounts").doc(f.currentUser.uid)}else{console.log("creating account...");var t={useruid:f.currentUser.uid,name:f.currentUser.displayName,email:f.currentUser.email,busStops:[]};h.a.firestore().collection("accounts").doc(f.currentUser.uid).set(t)}}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"time",children:"Welcome to Chut-Chut"}),Object(d.jsxs)("p",{className:"description",children:["This web app stores bus stop #s in"," ",Object(d.jsx)("a",{className:"description",href:"https://firebase.google.com/",children:"Google Firebase"})," ","to display"," ",Object(d.jsx)("a",{className:"description",href:"https://www.metrotransit.org/nextrip",children:"NexTrip"})," ","all in one page. I created this app for my fellow public commuters to conveniently check for arrival times because I am tired of waiting for the"," ",Object(d.jsx)("a",{className:"description",href:"https://www.metrotransit.org/",children:"MetroTransit app"})," ","to load. Sign in to start feeling convenient. Best performance on a mobile device."]})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"sign-in",onClick:e,children:"Sign in with Google"})})]})}function g(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1];function a(){return(a=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://svc.metrotransit.org/NexTrip/".concat(n,"?format=json"));case 3:e.sent.ok?(x.push(n),m.collection("accounts").doc(f.currentUser.uid).get().then((function(e){e.exists&&h.a.firestore().collection("accounts").doc(f.currentUser.uid).update({busStops:h.a.firestore.FieldValue.arrayUnion(n)})})),t.target.reset()):alert("".concat(n," is not a valid Metro Bus Stop ID."));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsxs)("form",{onSubmit:function(e){return a.apply(this,arguments)},children:[Object(d.jsx)("label",{className:"mr-sm-2",htmlFor:"busIDInput",children:"Add Metro Bus Stop ID"}),Object(d.jsx)("input",{type:"number",onChange:function(e){return r(e.target.value)},placeholder:"16086",maxLength:"5",max:"99999",min:"1",id:"busIDInput",required:!0}),Object(d.jsx)("button",{className:"add",type:"submit",disabled:!n,children:"Add"})]})}function v(e){return 1==e.allStops.length||0==e.allStops.length?Object(d.jsxs)("div",{children:[" ",Object(d.jsx)("h2",{children:"Loading..."})]}):Object(d.jsx)("div",{children:e.allStops.map((function(t,n){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{children:[Object(d.jsx)("a",{className:"a-btn",href:"https://www.metrotransit.org/nextrip/".concat(e.busStops[n]),target:"_blank",children:e.busStops[n]}),Object(d.jsx)("button",{className:"delete",type:"button",onClick:function(t){return c=e.busStops[n],x=x.filter((function(e){return e!==c})),void m.collection("accounts").doc(f.currentUser.uid).get().then((function(e){e.exists&&h.a.firestore().collection("accounts").doc(f.currentUser.uid).update({busStops:h.a.firestore.FieldValue.arrayRemove(c.toString())})}));var c},children:"\u2715"})]}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Bus No."}),Object(d.jsx)("th",{children:"Time"})]})}),Object(d.jsx)("tbody",{children:t&&!t.length?Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:" - "}),Object(d.jsx)("td",{children:" - "})]}):t?t.slice(0,5).map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"td ".concat(e.Actual?"active":""),children:e.Route}),Object(d.jsx)("td",{className:"td ".concat(e.Actual?"active":""),children:e.DepartureText})]},"".concat(e.Route,"_").concat(e.DepartureTime,"_").concat(e.RouteDirection))})):void 0})]})]},"".concat(e.busStops[n],"_").concat(n))}))})}var w=function(){var e,t=Object(b.a)(f),n=Object(i.a)(t,1)[0],r=[[{Actual:!1,DepartureText:"Loading..."}]],a=Object(c.useState)([r]),s=Object(i.a)(a,2),o=s[0],h=s[1],j=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return w(e)})));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://svc.metrotransit.org/NexTrip/".concat(t,"?format=json"));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(x);case 2:if(t=e.sent,h(t),!n||!f.currentUser.uid){e.next=9;break}return e.next=7,m.collection("accounts").doc(f.currentUser.uid).get();case 7:c=e.sent,x!==c.data().busStops&&x.length<=c.data().busStops.length&&(x=c.data().busStops);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function N(){return x=[],f.currentUser&&Object(d.jsx)("button",{type:"button",className:"sign-out",onClick:function(){f.signOut().then(h(r))},children:Object(d.jsx)("span",{className:"glyphicon glyphicon-log-out"})})}return Object(c.useEffect)((function(){if(n){var e=setInterval(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S();case 1:case"end":return e.stop()}}),e)}))),1e3);return function(){clearInterval(e)}}}),[o,x,n]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header"}),n?Object(d.jsxs)("div",{className:"main-disp",children:[Object(d.jsx)(p,{}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{children:["Hello ",f.currentUser.displayName," ",Object(d.jsx)(N,{})]}),Object(d.jsxs)("p",{className:"signed-in-with",children:["Signed in with ",f.currentUser.email]})]}),Object(d.jsx)(g,{}),Object(d.jsx)(v,{allStops:o,busStops:x},(e="","".concat(e,"_").concat((new Date).getTime())))]}):Object(d.jsx)(O,{})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),S()}},[[29,1,2]]]);
//# sourceMappingURL=main.088ada59.chunk.js.map