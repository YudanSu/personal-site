(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[5],{167:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(5),a=n(20),i=n(0),o=function(e){var t=e.data;return Object(i.jsx)("article",{className:"degree-container",children:Object(i.jsxs)("header",{children:[Object(i.jsx)("h4",{className:"degree",children:t.degree}),Object(i.jsxs)("p",{className:"school",children:[Object(i.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(i.jsxs)("div",{className:"education",children:[Object(i.jsx)("div",{className:"link-to",id:"education"}),Object(i.jsx)("div",{className:"title",children:Object(i.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(i.jsx)(o,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(i.jsxs)("article",{className:"jobs-container",children:[Object(i.jsxs)("header",{children:[Object(i.jsxs)("h4",{children:[Object(i.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(i.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(i.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(i.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(i.jsxs)("div",{className:"experience",children:[Object(i.jsx)("div",{className:"link-to",id:"experience"}),Object(i.jsx)("div",{className:"title",children:Object(i.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(i.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var b=d;function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=n(22);function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){if(t&&("object"===y(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var c=f(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return m(this,n)}}var v=n(58),O=n(56),g=function(e){var t=e.handleClick,n=e.active,r=e.label;return Object(i.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},x=function(e){var t=e.data,n=e.categories,r=t.category,c=t.competency,a=t.title,o={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(O.a)(Object(O.a)({},o),{},{width:"".concat(String(Math.min(100,Math.max(c/5*100,0))),"%")});return Object(i.jsxs)("div",{className:"skillbar clearfix",children:[Object(i.jsx)("div",{className:"skillbar-title",style:o,children:Object(i.jsx)("span",{children:a})}),Object(i.jsx)("div",{className:"skillbar-bar",style:s}),Object(i.jsxs)("div",{className:"skill-bar-percent",children:[c," / 5"]})]})};x.defaultProps={categories:[]};var k=x,S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Object(p.a)(e,t)}(a,e);var t,n,r,c=h(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=c.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(O.a)(Object(O.a)({},n),{},Object(v.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(O.a)(Object(O.a)({},e),{},Object(v.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=a,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(i.jsx)(k,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(i.jsx)(g,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"skills",children:[Object(i.jsx)("div",{className:"link-to",id:"skills"}),Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h3",{children:"Skills"}),Object(i.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(i.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(i.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&j(t.prototype,n),r&&j(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.Component);S.defaultProps={skills:[],categories:[]};var w=S,N=function(e){var t=e.data,n=e.last;return Object(i.jsxs)("li",{className:"course-container",children:[Object(i.jsx)("a",{href:t.link,children:Object(i.jsx)("p",{className:"course-name",children:t.title})}),!n&&Object(i.jsx)("div",{className:"course-dot",children:Object(i.jsx)("p",{className:"course-name",children:" \u2022"})})]})};N.defaultProps={last:!1};var P=N,D=function(e){var t,n=e.data;return Object(i.jsxs)("div",{className:"courses",children:[Object(i.jsx)("div",{className:"link-to",id:"courses"}),Object(i.jsx)("div",{className:"title",children:Object(i.jsx)("h3",{children:"Selected Courses"})}),Object(i.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(i.jsx)(P,{data:e,last:n===t.length-1},e.title)})))})]})};D.defaultProps={data:[]};var C=D,E=function(){return Object(i.jsxs)("div",{className:"references",children:[Object(i.jsx)("div",{className:"link-to",id:"references"}),Object(i.jsx)("div",{className:"title",children:Object(i.jsx)(c.b,{to:"/contact",children:Object(i.jsx)("h3",{children:"References are available upon request"})})})]})},J=[{title:"OOP in Java"},{title:"Principles of Software Development"},{title:"Systems Foundations"},{title:"Python Programming"},{title:"Data Structure and Algorithm"},{title:"Advanced Algorithm"},{title:"Scientific Computing"},{title:"Data Processing in Cloud"},{title:"Big data"}],A=[{school:"University of San Francisco",degree:"M.S. Computer Science",link:"https://www.usfca.edu/",year:2022}],R=[{company:"Amazon",position:"Software Dev Engineer Intern",link:"https://aws.amazon.com/privatelink/?privatelink-blogs.sort-by=item.additionalFields.createdDate&privatelink-blogs.sort-order=desc",daterange:"May 2021 - July 2021",points:["Design and develop this new PrivateLink feature, implement it with 1000+LOC in Java,","conduct comprehensive unit-test, run end-to-end test in production environment.","Tools/Skills: GitFarm, AWS CLI, AWS VPC/EC2/S3/Route53, Java OOP."]},{company:"Guangzhou Fengtai Hechuang Industrial Investment Co.",position:"Finance Analyst",daterange:"July 2013 - July 2016",points:["Work on collecting, analyzing, and interpreting financial data for the company\u2019s real estate investment(over $100 millions).","Use financial and statistical software to conduct business valuation, capital budgeting and cash flow forecasting."]}],L=n(17);var W=n(23);var T,I=[{title:"Java",competency:4,category:["Web Development","Languages","Java"]},{title:"Javascript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"Amazon Web Services",competency:2,category:["Web Development","Tools"]},{title:"SQL",competency:3,category:["Web Development","Databases","Languages"]},{title:"D3",competency:1,category:["Web Development","Javascript"]},{title:"Git",competency:3,category:["Tools"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"Numpy",competency:2,category:["Data Science","Data Engineering","Python"]},{title:"Jupyter",competency:2,category:["Data Science","Python"]},{title:"Typescript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"HTML + CSS",competency:2,category:["Web Development","Languages"]},{title:"Python",competency:3,category:["Languages","Python"]},{title:"Data Visualization",competency:2,category:["Data Science","Javascript"]},{title:"Matplotlib",competency:2,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:2,category:["Data Engineering","Data Science","Python"]},{title:"Hadoop",competency:2,category:["Data Engineering","Data Science"]},{title:"Spark",competency:2,category:["Data Engineering","Data Science"]}].map((function(e){return Object(O.a)(Object(O.a)({},e),{},{category:e.category.sort()})})),z=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],F=(T=new Set(I.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(L.a)(e)}(T)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(T)||Object(W.a)(T)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:z[t]}})),M=["Education","Experience","Skills","Courses","References"];t.default=function(){return Object(i.jsx)(a.a,{title:"Resume",description:"Yudan Su's Resume.",children:Object(i.jsxs)("article",{className:"post",id:"resume",children:[Object(i.jsx)("header",{children:Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{"data-testid":"heading",children:Object(i.jsx)(c.b,{to:"resume",children:"Resume"})}),Object(i.jsx)("div",{className:"link-container",children:M.map((function(e){return Object(i.jsx)("h4",{children:Object(i.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(i.jsx)(l,{data:A}),Object(i.jsx)(b,{data:R}),Object(i.jsx)(w,{skills:I,categories:F}),Object(i.jsx)(C,{data:J}),Object(i.jsx)(E,{})]})})}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(58);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},58:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=5.4c0c00ab.chunk.js.map