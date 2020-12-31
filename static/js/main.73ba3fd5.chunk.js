(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),c=n.n(a),r=n(12),s=n.n(r),o=(n(31),n(33),n(34),n(10)),l=n.p+"static/media/logo.6ce24c58.svg";n(35),n(36);var j=function(e){var t={about:!1,projects:!1,links:!1,hosting:!1};""===e.selection?t.about=!0:t[e.selection]=!0;var n=!1;function a(i){n||t[i]||(n=!0,e.change(i))}return Object(i.jsxs)("div",{className:"Navigation-bar",children:[Object(i.jsx)("li",{className:"nav-item btn btn-lg btn-dark "+(t.about?"active":""),onClick:function(){a("about")},children:"About"}),Object(i.jsx)("li",{className:"nav-item btn btn-lg btn-dark "+(t.projects?"active":""),onClick:function(){a("projects")},children:"Projects"}),Object(i.jsx)("li",{className:"nav-item btn btn-lg btn-dark "+(t.links?"active":""),onClick:function(){a("links")},children:"Links"}),Object(i.jsx)("li",{className:"nav-item btn btn-lg btn-dark "+(t.hosting?"active":""),onClick:function(){a("hosting")},children:"Hosting"})]})},d=n(22);function b(){var e=Math.floor(15*Math.random());return e>9?String.fromCharCode(e-10+65):String.fromCharCode(48+e)}function u(e){e=e.toLowerCase();var t,n="",i=Object(d.a)(e);try{for(i.s();!(t=i.n()).done;){n+=" "===t.value?" ":b()}}catch(a){i.e(a)}finally{i.f()}return n}var h=function(e){var t,n;return t=e.iterations?e.iterations:3,n=e.timeout?e.timeout:10,function(e,t,n){var i=Object(a.useState)({currentString:u(e),indexedCharacter:e.length-1,iterations:t,done:!1}),c=Object(o.a)(i,2),r=c[0],s=c[1];function l(e,t){if(t=e.length-1-t," "===e.charAt(t))return e;var n,i=e.substring(0,t);return n=t!==e.length-1?e.substring(t+1):"",i+b()+n}function j(e,t,n){t=e.length-1-t;var i,a=e.substring(0,t);return i=t!==e.length-1?e.substring(t+1):"",a+n.charAt(t)+i}function d(){if(r.iterations>0)s({currentString:l(r.currentString,r.indexedCharacter),indexedCharacter:r.indexedCharacter,iterations:r.iterations-1,done:!1});else if(0!==r.indexedCharacter){var n=r.indexedCharacter-1,i=j(r.currentString,r.indexedCharacter,e);" "===r.currentString[n]&&(i=j(i,n,e),n-=1),s({currentString:i,indexedCharacter:n,iterations:t,done:!1})}else s({currentString:e,indexedCharacter:0,iterations:0,done:!0})}return Object(a.useEffect)((function(){if(!r.done){var e=setInterval((function(){return d()}),n);return function(){clearInterval(e)}}})),r.currentString}(e.textContent,t,n)},x=Object(a.forwardRef)((function(e,t){return Object(i.jsxs)("div",{ref:t,children:[Object(i.jsx)("h1",{className:"text-nowrap",children:Object(i.jsx)(h,{textContent:"Michael Jereza",timeout:25,iterations:3})}),Object(i.jsxs)("div",{className:"col-sm-12 col-lg-8 m-auto text-left",children:[Object(i.jsx)("p",{children:"I am a full-stack web developer with experience working on interactive web applications and exchanging information through API implementations. I want to apply my skillset to protect against known and unknown threats using security practices."}),Object(i.jsx)("p",{children:"I have a detailed background in network security, including network fuzzing and diagnostics. As well as a general security skillset that includes digital forensics, penetration testing, and reverse engineering."}),Object(i.jsx)("p",{children:"I will soon graduate from Oregon State University with a Bachelor of the Sciences in Computer Science. At the University I've gained important developer skills for low-level languages, web applications, and mobile development. I work as an IT developer. At my job I've maintain multiple projects, across different web stacks, bundling web applications, and auditing process logs."})]})]})})),m=n(49);var p=function(e){var t;return t=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,50))})),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:"text-center",children:"Malware Framework"}),Object(i.jsx)("p",{className:"text-left",children:"My 2020 senior capstone project is a demonstration of multiple types of malware. My group is developing a denial of service attack, rootkit, keylogger, and ransomware. The goal of this project is to provide a high-level overview of malware, as well as provide a framework for future malware research capstones projects."}),Object(i.jsx)(a.Suspense,{fallback:Object(i.jsx)("h1",{children:"Loading..."}),children:Object(i.jsx)(t,{})})]})},f=n(6),g=n(11);var O=function(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("span",{className:"row no-gutters justify-content-center",children:[Object(i.jsx)("h2",{children:"Ncrypt"}),Object(i.jsx)("a",{className:"App-link Title-link",target:"_blank",rel:"noreferrer",href:"https://play.google.com/store/apps/details?id=com.mike.android.ncrypt",children:Object(i.jsx)(f.a,{icon:g.b})})]}),Object(i.jsx)("p",{children:'I developed this Java-based Android application in early 2020, during my week-long spring break. My mom used to store passwords in plaintext on her phone, so I wanted to protect her from being compromised. I had also recently finished the Mobile Development class at OSU, and I wanted to design a "fun" and but useful application for security. The conclusion was an encryption vault that is fun and simple to use.'})]})},v=n(14);var k=function(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"row no-gutters justify-content-center",children:[Object(i.jsx)("h2",{children:"Meal Logger"}),Object(i.jsx)("a",{className:"App-link Title-link",target:"_blank",rel:"noreferrer",href:"https://github.com/MichaelJereza/final-project-meal-logger",children:Object(i.jsx)(f.a,{icon:g.a})})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-md-6 col-sm-12 text-left",children:Object(i.jsx)("p",{children:"Meal Logger allows a user to record their meal items, calculating the total nutritional value for the meal. The application uses the USDA Food Data Central API to query food names and their nutritional values.A user can export their meal in the form of a nutritional label. The logging interface also allows the user to capture an image and determines the appropriate meal based on recording time."})}),Object(i.jsx)("div",{className:"col-md-6 col-sm-12 text-center",children:Object(i.jsx)("img",{alt:"Meal Logger Food Label",className:"img-fluid rounded",src:"https://raw.githubusercontent.com/MichaelJereza/final-project-meal-logger/master/images/meal_label.png"})})]})]})};n(42);var w=function(e){var t,n,c=Object(a.useState)({index:0,loadVideo:!0}),r=Object(o.a)(c,2),s=r[0],l=r[1],j=Object(a.useState)({animateIn:!0,nextIndex:null}),d=Object(o.a)(j,2),b=d[0],u=d[1],x=Object(a.useState)({left:!0,right:!0}),g=Object(o.a)(x,2),w=g[0],N=g[1];function C(e){var t=s.index+e;t>=0&&t<=2&&u({animateIn:!1,nextIndex:t})}return t=w.left&&0!==s.index?Object(i.jsx)("button",{onClick:function(){C(-1)},className:"btn btn-link",children:Object(i.jsx)(f.a,{icon:v.a,color:"white"})}):Object(i.jsx)("button",{onClick:function(){C(-1)},className:"btn btn-link",disabled:!0,children:Object(i.jsx)(f.a,{icon:v.a,color:"white"})}),n=w.right&&2!==s.index?Object(i.jsx)("button",{onClick:function(){C(1)},className:"btn btn-link",children:Object(i.jsx)(f.a,{icon:v.b,color:"white"})}):Object(i.jsx)("button",{onClick:function(){C(1)},className:"btn btn-link",disabled:!0,children:Object(i.jsx)(f.a,{icon:v.b,color:"white"})}),Object(a.useEffect)((function(){u({animateIn:!0,nextIndex:null})}),[s.index]),Object(a.useEffect)((function(){!1===b.animateIn&&N({left:!1,right:!1})}),[b.animateIn]),Object(i.jsxs)("div",{className:"text-justify",children:[Object(i.jsxs)("span",{className:"d-flex justify-content-between",children:[t,Object(i.jsx)("h1",{children:Object(i.jsx)(h,{textContent:"Projects",timeout:25,iterations:3})}),n]}),Object(i.jsx)(m.a,{classNames:"project-transition",in:b.animateIn,addEndListener:function(e,t){e.addEventListener("transitionend",(function(e){if(!1===b.animateIn){var n=!1;0==b.nextIndex&&(n=!0),l({index:b.nextIndex,loadVideo:n})}else N({left:!0,right:!0});t(e)}),!1)},children:function(e){var t;switch(e){case 0:t=Object(i.jsx)(p,{lazyVideo:s.loadVideo});break;case 1:t=Object(i.jsx)(O,{});break;case 2:t=Object(i.jsx)(k,{})}return t}(s.index)})]})},N=Object(a.forwardRef)((function(e,t){return Object(i.jsxs)("div",{ref:t,children:[Object(i.jsx)("h1",{children:Object(i.jsx)(h,{textContent:"Links",timeout:25,iterations:3})}),Object(i.jsxs)("div",{className:"text-justify",children:[Object(i.jsx)("h2",{children:Object(i.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://play.google.com/store/apps/details?id=com.mike.android.ncrypt",className:"App-link",children:[Object(i.jsx)(f.a,{icon:g.b,color:"white"}),Object(i.jsx)(h,{textContent:"Ncrypt",timeout:80})]})}),Object(i.jsx)("h2",{children:Object(i.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/michael-jereza-360107181/",className:"App-link",children:[Object(i.jsx)(f.a,{icon:g.c,color:"white"}),Object(i.jsx)(h,{textContent:"LinkedIn",timeout:73})]})}),Object(i.jsx)("h2",{children:Object(i.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/MichaelJereza",className:"App-link",children:[Object(i.jsx)(f.a,{icon:g.a,color:"white"}),Object(i.jsx)(h,{textContent:"Github",timeout:80})]})})]})]})})),C=n(3);var y=Object(a.forwardRef)((function(e,t){return Object(i.jsxs)("header",{ref:t,children:[Object(i.jsx)("img",{src:l,className:"App-logo",alt:"logo"}),Object(i.jsx)("p",{children:"This website was built with:"}),Object(i.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(i.jsx)("li",{className:"list-group-item text-nowrap",children:Object(i.jsx)(h,{textContent:"React",timeout:80,iterations:3})}),Object(i.jsx)("li",{className:"list-group-item text-nowrap",children:Object(i.jsx)(h,{textContent:"Webpack",timeout:80,iterations:3})}),Object(i.jsx)("li",{className:"list-group-item text-nowrap",children:Object(i.jsx)(h,{textContent:"Node Package Manager",timeout:33,iterations:3})}),Object(i.jsx)("li",{className:"list-group-item text-nowrap",children:Object(i.jsx)(h,{textContent:"Express",timeout:80,iterations:3})}),Object(i.jsx)("li",{className:"list-group-item text-nowrap",children:Object(i.jsx)(h,{textContent:"Github",timeout:55,iterations:3})})]})]})})),I=function(){var e,t=Object(a.useState)(!0),n=Object(o.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(Object(C.g)().pathname.slice(1)),l=Object(o.a)(s,2),d=l[0],b=l[1],u=Object(a.useState)(null),h=Object(o.a)(u,2),p=h[0],f=h[1];return console.log("Location ".concat(Object(C.g)().pathname)),Object(a.useEffect)((function(){null!==p?f(null):null===p&&r(!0)}),[p]),e=p?Object(i.jsx)(C.a,{to:"/"+p}):Object(i.jsx)("div",{id:"App-content",children:Object(i.jsx)(m.a,{classNames:"folder",in:c,addEndListener:function(e,t){e.addEventListener("transitionend",(function(e){!1===c&&null===p&&f(d),t(e)}),{once:!0})},unmountOnExit:!0,children:Object(i.jsxs)(C.d,{children:[Object(i.jsx)(C.b,{exact:!0,path:["/","/about"],children:Object(i.jsx)(x,{})}),Object(i.jsx)(C.b,{path:"/projects",children:Object(i.jsx)(w,{})}),Object(i.jsx)(C.b,{path:"/links",children:Object(i.jsx)(N,{})}),Object(i.jsx)(C.b,{path:"/hosting",children:Object(i.jsx)(y,{})})]})})}),Object(i.jsxs)("div",{className:"App container-fluid p-0",children:[Object(i.jsx)(j,{selection:d,change:function(e){r(!1),b(e)}}),e]})},S=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,51)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))},A=n(18);s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(A.a,{children:Object(i.jsx)(I,{})})}),document.getElementById("root")),S()}},[[48,1,2]]]);
//# sourceMappingURL=main.73ba3fd5.chunk.js.map