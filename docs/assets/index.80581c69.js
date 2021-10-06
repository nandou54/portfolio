var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(a,o,t)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t,r=(e,a)=>{for(var o in a||(a={}))i.call(a,o)&&s(e,o,a[o]);if(t)for(var o of t(a))n.call(a,o)&&s(e,o,a[o]);return e},l=(e,t)=>a(e,o(t));import{u as c,R as d,c as m,a as p,r as u,b as g,P as h}from"./vendor.2f83f20e.js";let b;const y={},v=function(e,a){if(!a)return e();if(void 0===b){const e=document.createElement("link").relList;b=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(a.map((e=>{if(e in y)return;y[e]=!0;const a=e.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const t=document.createElement("link");return t.rel=a?"stylesheet":b,a||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),a?new Promise(((e,a)=>{t.addEventListener("load",e),t.addEventListener("error",a)})):void 0}))).then((()=>e()))};var f="_base_1r2v7_1",k="_dark_1r2v7_16",w="_loader_1r2v7_22";function j(){const{theme:e}=c((({app:e})=>e)),a="dark"===e;return d.createElement("div",{className:`${f} ${a?k:""}`},d.createElement("div",{className:w}))}const I={es:{"navbar.contactMe":"¡Contáctame!","goto.aboutme":"acerca de mí","goto.skills":"habilidades","goto.projects":"mis proyectos","goto.start":"ir al inicio","welcome.status":"(En busca de trabajo)","welcome.presentation":"¡Hola! Soy un Desarrollador Web Fullstack de seniority Junior, con amplios conocimientos en tecnologías web y diseño","welcome.invitation":"¡Te invito a conocer más de mí y mis proyectos más abajo!","aboutme.title":"Acerca de mí","aboutme.text1":"Resido en la capital de Guatemala 🇬🇹, lugar de volcanes, de gran clima y gente alegre. Por supuesto, estoy abierto a trabajar con equipos internacionales mediante teletrabajo.","aboutme.text2":"Estoy cursando un grado de ingeniería en ciencias y sistemas en la Universidad de San Carlos de Guatemala, gracias al cual he desarrollado una gran habilidad en el desarrollo de software, y gran pasión en todo lo relacionado con la tecnología 💻.","aboutme.text3":"Me aficionan los deportes, los videojuegos de muchos géneros y disfruto de desarrollar software con buenas prácticas y clean code 📖.","skills.title":"Habilidades","skills.message":"Haz click para más detalles","skill.html":"Lenguaje de marcado de la web. Poseo alto conocimiento de HTML5 y buenas prácticas en el maquetado de páginas web.","skill.css":"Lenguaje de diseño de la web. Poseo un gran conocimiento de styling de páginas web, así como animaciones y buenas prácticas.","skill.javascript":"Lenguaje de programación de la web. Poseo mucha experiencia con Vanilla JavaScript en la manipulación del DOM, así como el uso del entorno de ejecución Node.js para la creación de scripts y APIs de servidor.","skill.typescript":"Lenguaje de programación supraconjunto de JavaScript. Poseo conocimiento del tipado inherente de TypeScript y el tipado de terceros.","skill.reactjs":"Librería de JavaScript para la construcción de interfaces de usuario. Tengo un vasto conocimiento de los mecanismos de ReactJS, la creación de componentes reutilizables, así como el uso de hooks, creación de custom hooks, optimización de proyectos, etc.","skill.redux":"Librería de JavaScript para el manejo del estado global de aplicaciones web. Tengo experiencia de uso y buenas prácticas de Redux y Redux Toolkit en Vanilla JavaScript y ReactJs.","skill.expressjs":"Framework de JavaSript para la construcción de servidores HTTP. Poseo experiencia en la creación de APIs y REST APIs, creación y uso de middlewares, y análisis estadístico de datos.","skill.go":"Lenguaje de programación simple y eficiente. Tengo conocimiento de creación de aplicaciones de línea de comando y creación de APIs con buenas prácticas.","skill.python":"Lenguaje de programación interpretado y multipropósito. Poseo una gran experiencia en la creación de todo tipo de aplicaciones con Python, desde simples scripts de automatización, hasta APIs de cualquier índole.","skill.mongodb":"Base de datos NO-SQL. Poseo experiencia en el uso eficiente de colecciones, y el despliegue y uso de bases de datos en la nube.","skill.mysql":"Base de datos SQL de Oracle. Poseo una gran experiencia en el modelado normalizado de bases de datos para las necesidades de cualquier negocio.","skill.pl/sql":"Lenguaje de programación SQL de Oracle. Tengo gran experiencia en el modelado normalizado de bases de datos, creación y testing de procedimientos, funciones, triggers y schedules.","skill.java":"Lenguaje de programación multiplataforma de Oracle. Tengo una vasta experiencia en la creación de interfaces de usuario para cualquier necesidad y aplicaciones de línea de comando.","skill.aws":"Colección de servicios en la nube de Amazon. Poseo conocimiento de Amazon S3, Amazon EC2, Amazon RDS y Amazon VPC.","skill.oracle cloud":"Servicios en la nube de Oracle. Poseo conocimiento en la creación y uso de Compute Instances, Autonomous Data Warehouse, Autonomous JSON Database y Buckets.","projects.title":"Mis proyectos","project.typesty":"Interfaz web para ejecutar un lenguaje derivado de JavaScript, llamado Typesty. Facilita el manejo de varios archivos y el debug del lenguaje.","project.mini translator":"Traductor en línea en tiempo real. Facilita la traducción entre más de 100 lenguajes, así como el dictado del texto, todo desde una interfaz de usuario minimalista e intuitiva.","project.regexive":"Interfaz de escritorio para el testing de expresiones regulares. Facilita el manejo de varios archivos y el debug de expresiones regulares.","project.quiniela app":"wip","project.jolc":"Intérprete de JOLC, un lenguaje de programación derivado de Julia, ejecutable en la web. Facilita el debug del lenguaje mediante reportes.","project.notes":"wip","contact.title":"¿Te gusta lo que ves?","contact.invitation":"¡Te invito a mandarme un mensaje por ","contact.alternative":"... o mándame un email a ",quote:"“Lo que nos hace grandes es el hecho de poder ver lo pequeños que somos”"},en:{"navbar.contactMe":"Contact me!","goto.aboutme":"about me","goto.skills":"skills","goto.projects":"my works","goto.start":"go to top","welcome.status":"(Looking for work)","welcome.presentation":"Hi! I'm a Fullstack Web Developer with Junior seniority, with wide knowledge in web technologies and design","welcome.invitation":"Slide down to know about me and my works!","aboutme.title":"About me","aboutme.text1":"I live in the capital of Guatemala 🇬🇹, a place of volcanoes, great weather and nice people. Of course, I'm willing to work with international teams via remote work.","aboutme.text2":'I\'m studying a degree in science and systems engineering at "Universidad de San Carlos de Guatemala", thanks to wich I developed great skills in software development, and a huge love for everything around technology 💻.',"aboutme.text3":"I'm passionate about sports, various-genres videogames and I greatly enjoy developing software with good practices and clean code 📖.","skills.title":"Skills","skills.message":"Click for more details","skill.html":"The web markup language. I have a high knowledge of HTML5 and good practices in web pages layout.","skill.css":"The web design language. I have a great knowledge of styling web pages, as well as animations and good practices.","skill.javascript":"The web programming language. I have a high experience with Vanilla JavaScript in the manipulation of the DOM, and in server side code with Node.js for scripting and APIs.","skill.typescript":"Programming language, supraset of JavaScript. I have knowledge of TypeScript basic typing, and third party libraries typing.","skill.reactjs":"JavaScript library for building web GUI. I have a deep knowledge of React mechanisms, as well as reusable components building, use of hooks, creation of custom hooks, optimization, etc.","skill.redux":"JavaScript library for web application's global state managment. I'm high experienced at Redux and Redux Toolkit usage along with Vanilla JavaScript and ReactJS, with good practices and scalable design.","skill.expressjs":"JavaSript Framework for building HTTP servers. I have a high experience in creating APIs and REST APIs, creation and usage of middlewares, and data statistic analysis.","skill.go":"Efficient programming language from Google. I have knowledge at CLIs building, as well as APIs creation with good practices.","skill.python":"Simple and multipurpose programming. I have a deep experience in creating Python modules for any needs, from simple scripts, to APIs of any kind.","skill.mongodb":"NO-SQL database. I'm experienced in efficient usage of collections and cloud deployment of databases.","skill.mysql":"SQL database from Oracle. I have a high experience of normalized database modeling for all kind of needs.","skill.pl/sql":"SQL programming language from Oracle. I'm high experienced in modeling of databases, creation and testing of procedures, functions, triggers and schedules.","skill.java":"Multiplatform programming language from Oracle. I have a deep experience of desktop GUI creation for any type of needs, as well as CLI building.","skill.aws":"Collection of services from the Amazon Cloud. I have knowledge in Amazon S3, Amazon EC2, Amazon RDS and Amazon VPC.","skill.oracle cloud":"Cloud services from Oracle. I have knowledge in creation and managment of Compute Instances, Autonomous Data Warehouse, Autonomous JSON Database and Buckets.","projects.title":"My works","project.typesty":"Web graphic user interface for interpreting a derived language of JavaScript named Typesty. Mekes it easy to handle multiple files and debugging the language.","project.mini translator":"Real-time translation online. Mini Translator eases the translation between 100+ languages, as well as text spelling, everything from a minimalistic and intuitive GUI.","project.regexive":"Desktop graphic user interface for regular expressions testing. Regexive makes it easy to handle multiples files and debugging of REGEX.","project.quiniela app":"wip","project.jolc":"Web interpreter for a programming language derived from Julia, named JOLC. Eases the debug of the language via AST, error and symbols reports.","project.notes":"wip","contact.title":"Like what you see?","contact.invitation":"I invite you to message me via ","contact.alternative":"... or send me an email to ",quote:"“What makes us great is the fact of being able to see how small we are”"}},S=Object.keys(I),x={activeProject:"",locale:S.includes(localStorage.getItem("locale"))&&localStorage.getItem("locale")||S.find((e=>navigator.language.startsWith(e)))||"en",theme:["light","dark"].includes(localStorage.getItem("theme"))&&localStorage.getItem("theme")||"light"},P={name:"HTML",show:!1},T={app:x,modal:P},L=p(m({app:(e=x,a)=>{switch(a.type){case"@app/toggleTheme":{const a="light"===e.theme?"dark":"light",o=l(r({},e),{theme:a});return localStorage.setItem("theme",a),o}case"@app/toggleLanguage":{const a="es"===e.locale?"en":"es",o=l(r({},e),{locale:a});return localStorage.setItem("locale",a),o}case"@app/expandProject":return l(r({},e),{activeProject:a.payload});default:return e}},modal:(e=P,a)=>{switch(a.type){case"@modal/show":return{show:!0,name:a.payload};case"@modal/hide":return l(r({},e),{show:!1});default:return e}}}),T,void 0),A=u.exports.lazy((()=>Promise.all([v((()=>import("./App.6acc3adc.js")),["/portfolio/assets/App.6acc3adc.js","/portfolio/assets/App.d1b18f3b.css","/portfolio/assets/vendor.2f83f20e.js"]),new Promise((e=>setTimeout(e,900)))]).then((([e])=>e))));g.render(d.createElement(d.StrictMode,null,d.createElement(h,{store:L},d.createElement(u.exports.Suspense,{fallback:d.createElement(j,null)},d.createElement(A,null)))),document.querySelector("main"));export{I as l};
