"use strict";(self.webpackChunklandings=self.webpackChunklandings||[]).push([[50],{346:(a,e,n)=>{n.r(e),n.d(e,{default:()=>F});var s=n(43),c=n(568),i=n(579);const t=a=>{let{className:e,img:n,index:s,title:t,text:l}=a;const{t:o}=(0,c.Bd)();return(0,i.jsxs)("div",{className:"card ".concat(e||""),children:[(0,i.jsxs)("div",{className:"card__top",children:[(0,i.jsx)("div",{className:"card__img",children:n}),(0,i.jsx)("div",{className:"card__title",children:(0,i.jsx)("h3",{children:o(t)})})]}),(0,i.jsx)("div",{className:"card__bot",children:(0,i.jsx)("p",{children:o(l)})})]},s)},l=a=>{let{cards:e,className:n}=a;return(0,i.jsx)("div",{className:"cards ".concat(n||""),children:null===e||void 0===e?void 0:e.map(((a,e)=>(0,i.jsx)(t,{className:a.className,img:a.img,index:e,title:a.title,text:a.text})))})};var o=n(465);const d=a=>{let{box:e,className:n,cats:s,start:t}=a;const{i18n:l}=(0,c.Bd)();return(0,i.jsx)("div",{className:"cat-popup ".concat(n||""," ").concat(t?"--pop":""),children:(0,i.jsxs)("div",{className:"cat-popup__container",children:[s.map(((a,e)=>(0,i.jsx)(o.A,{alt:"",className:"cat ".concat(a.className?a.className:""," ").concat((l.language||window.localStorage.i18nextLng)===a.nationality?"--meow":""),src:a.img},e))),(0,i.jsx)(o.A,{alt:"",className:"barrel",src:e})]})})},r=a=>{let{className:e}=a;const n=(new Date).getFullYear();return(0,i.jsx)("footer",{className:"".concat(e||""),children:(0,i.jsx)("div",{className:"footer",children:(0,i.jsx)("span",{className:"footer__content",children:(0,i.jsxs)("p",{children:["Jonathan Medina \xa9 ",n]})})})})};const m=n.p+"static/media/menu.4786e4d399b197e8b19f3eed82116479.svg",x=a=>{let{className:e,centerItem:n,icon:c,options:t,title:l}=a;const[d,r]=(0,s.useState)(!1);let x=t&&(0,i.jsx)("span",{className:"header__menu",children:t.map(((a,e)=>(0,i.jsx)("span",{className:"header__option",onClick:()=>null===a||void 0===a?void 0:a.action,onKeyDown:()=>null===a||void 0===a?void 0:a.action,tabIndex:e,children:a.label},e)))});return(0,i.jsxs)("header",{className:"header ".concat(e||""),children:[(0,i.jsxs)("div",{className:"header__inner",children:[(0,i.jsxs)("div",{className:"header__left",children:[c&&(0,i.jsx)("span",{className:"header-icon",children:c}),l&&(0,i.jsx)("span",{className:"header-title",children:l})]}),(0,i.jsx)("span",{className:"header__switch ".concat(d?"--hide":""),children:n}),(0,i.jsx)("div",{className:"header__right",children:x&&x}),(0,i.jsx)("span",{className:"header__md",onClick:()=>r(!d),onKeyDown:()=>r(!d),tabIndex:0,children:(0,i.jsx)(o.A,{alt:"menu",className:"menu-icon",src:m})})]}),d&&(0,i.jsx)("span",{className:"header__menu-drop ".concat(d?"--active":""),children:d&&t.map(((a,e)=>(0,i.jsx)("span",{className:"header__option-drop",onClick:()=>null===a||void 0===a?void 0:a.action,onKeyDown:()=>null===a||void 0===a?void 0:a.action,tabIndex:e,children:a.label},e)))})]})},p=a=>{let{action:e,children:n}=a;const[c,t]=(0,s.useState)(!1),l=()=>{t(!c),e()};return(0,i.jsx)("span",{onMouseEnter:l,onMouseLeave:l,children:n})};const g=n.p+"static/media/copy.1a8932c7b97eb29eaa9254ec7df9e40a.svg";var h=n(475);const b=a=>{let{className:e,content:n,link:s,isOuterLink:c}=a;return(0,i.jsx)(i.Fragment,{children:c?(0,i.jsx)("a",{className:e||"",href:s,rel:"noopener noreferrer",target:"_blank",children:n}):(0,i.jsx)(h.N_,{className:e,to:"/contact",children:n})})},j=a=>{let{alt:e,icon:n,index:s,link:c,linkDesktop:t,onClick:l,isActive:d}=a;return(0,i.jsxs)("div",{className:"icon ".concat(d?"--active":""),index:s,children:[t?(0,i.jsx)("span",{className:"icon__container",onClick:l,onKeyDown:l,children:(0,i.jsx)(o.A,{alt:e,className:"icon__img",src:n})}):(0,i.jsx)(b,{className:"icon__link",content:(0,i.jsx)(o.A,{alt:e,className:"icon__img",src:n}),link:"".concat(c),isOuterLink:!0}),t&&d&&(0,i.jsxs)("span",{className:"icon__info",children:[(0,i.jsx)("span",{children:t}),(0,i.jsx)("span",{className:"icon__container",onClick:()=>{navigator.clipboard.writeText(t)},onKeyDown:()=>{navigator.clipboard.writeText(t)},children:(0,i.jsx)(o.A,{alt:"copy",className:"icon__copy",src:g})})]})]})},N=n.p+"static/media/spanish-icon.4b6d60164b84fd8e393a.png",A=n.p+"static/media/british-icon.ae619d004741b8b1fd5b.png",u=a=>{let{active:e,onClick:n}=a;const{i18n:s}=(0,c.Bd)(),t=()=>s.language||window.localStorage.i18nextLng,l=()=>{switch(n(),t()){case"en":s.changeLanguage("es");break;case"es":s.changeLanguage("en")}};return(0,i.jsxs)("div",{className:"switch-currency ".concat(e?"--active":""),children:[(0,i.jsx)("span",{className:"".concat("es"===t()?"":"--inactive"),onClick:()=>"en"===t()?l():"",onKeyDown:()=>"en"===t()?l():"",children:(0,i.jsx)(o.A,{className:"spanish",src:N,alt:"sp-flag"})}),(0,i.jsxs)("label",{className:"switch",children:[(0,i.jsx)("input",{checked:"en"===t(),onChange:()=>l(),type:"checkbox"}),(0,i.jsx)("span",{className:"slider round"})]}),(0,i.jsx)("span",{className:"".concat("en"===t()?"":"--inactive"),onClick:()=>"es"===t()&&l(),onKeyDown:()=>"es"===t()&&l(),children:(0,i.jsx)(o.A,{className:"british",src:A,alt:"gb-flag"})})]})},v=a=>{let{className:e,buttons:n,bgImgStyle:s,contentLeft:c,contentRight:t,isReversed:l}=a;return(0,i.jsxs)("div",{className:"section ".concat(e||""),children:[s&&(0,i.jsx)("div",{className:"section__img ".concat(s||"")}),(0,i.jsxs)("div",{className:"section__content ".concat(l?"--reversed":""),children:[(0,i.jsxs)("div",{className:"section__left",children:[c&&c,n&&(0,i.jsx)("div",{className:"section__buttons",children:null===n||void 0===n?void 0:n.map(((a,e)=>{const n=a.className?a.className:"",s=a.action?a.action:()=>console.log("no action assigned for button ".concat(e+1)),c=a.label?a.label:"no label";return(0,i.jsx)("span",{className:"btn ".concat(n," section__button"),onClick:s,onKeyDown:s,children:c},e)}))})]}),t&&(0,i.jsx)("div",{className:"section__right",children:t})]})]})};const f=n.p+"static/media/aws.e10a5fecc9dcbf1e029965e719e01e47.svg",k=n.p+"static/media/cat-brit.74a5f0d8a2147c05092b.png",E=n.p+"static/media/cat-mexican.f2eb140db0594584be0a.png",U=n.p+"static/media/digitalocean.7466161edf17b67f6fad.png";const K=n.p+"static/media/express.9ea5259ecae0ffb5efde4bb945d01bc5.svg";const q=n.p+"static/media/git.8ee81345da1c18b6cdb4bbe93b464810.svg";const V=n.p+"static/media/gmail.29ac350df92c649ab87525a839df486e.svg",D=n.p+"static/media/heroku.1def193feb18a1432d19.png";const R=n.p+"static/media/letter.a184e7296c86000abb50809174982360.svg";const C=n.p+"static/media/linkedin.c341cc1c307221b0fe42599c619ceeaf.svg";const I=n.p+"static/media/mongo.1072addd081dacc6e959e31d5f3a2e7e.svg";const z=n.p+"static/media/node.e2c4b38c25f1896d81085e68914412d8.svg",w=n.p+"static/media/programer.1f698211485b10934317.png";const M=n.p+"static/media/portfolio.aed3ccbb5e4215c44a40e5ab78bb66a0.svg";const Y=n.p+"static/media/whatsapp.bc8eeb10aad7ab8ef44005f1e5ab26f0.svg";const Q=n.p+"static/media/react.0a9e18792a07c47a983e4b0d9c001847.svg",T=n.p+"static/media/second-bg-md.290685931e098d167569.jpg",F=()=>{const{t:a}=(0,c.Bd)(),[e,n]=(0,s.useState)(!1),[t,m]=(0,s.useState)(!1);let g=[{nationality:"en",img:k},{nationality:"es",img:E}];const h=[{label:"Landing 1",action:()=>console.log("Landing 1")},{label:"Landing 2",action:()=>console.log("Landing 2")},{label:"Landing 3",action:()=>console.log("Landing 3")},{label:"Landing 4",action:()=>console.log("Landing 4")}],b=(0,i.jsxs)("span",{className:"main-landing__titles --text-center",children:[(0,i.jsx)("h1",{children:a("global.miN4me")}),(0,i.jsx)("p",{children:a("global.w3bD3v")})]}),N=(0,i.jsx)("span",{className:"main-img-cont",children:(0,i.jsx)(o.A,{alt:"phones",className:"main-img",src:w})}),A=(0,i.jsxs)("span",{className:"main-landing__titles",children:[(0,i.jsx)("p",{className:"--text-magenta --uppercase --bold --mb-1 --font-90",children:a("global.ab0ut")}),(0,i.jsx)("h1",{children:a("global.intr0ducti0n")}),(0,i.jsx)("span",{className:"line --line-50 --bg-magenta --mb-2"}),(0,i.jsx)("p",{className:"--color-gray-darker",children:a("global.ab0utFul1")})]}),F=[{className:"--left",img:(0,i.jsx)(o.A,{alt:"mongo",className:"mongo-icon",src:I}),text:"global.mong0exp",title:"MongoDB"},{img:(0,i.jsx)(o.A,{alt:"express",className:"express-icon",src:K}),text:"global.expr3ssExp",title:"Express"},{img:(0,i.jsx)(o.A,{alt:"react",className:"react-icon",src:Q}),text:"global.re4ctExp",title:"React"},{img:(0,i.jsx)(o.A,{alt:"node",className:"node-icon",src:z}),text:"global.n0deExp",title:"Node"}];const S=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("span",{className:"main-landing__titles",children:[(0,i.jsx)("p",{className:"--text-magenta --uppercase --bold --mb-1 --font-90",children:a("global.mito0ls")}),(0,i.jsx)("h1",{children:a("global.m4inSt4ck")}),(0,i.jsx)("span",{className:"line --line-50 --bg-magenta --mt-1"}),(0,i.jsx)("p",{className:"--color-gray-darker --my-2 --bold",children:(0,i.jsxs)(c.x6,{i18nKey:"global.m4inXpl4in",children:[(0,i.jsx)("span",{className:"--text-purple"}),{stack:"MERN"}]})})]}),(0,i.jsx)(l,{cards:F,className:"--four-colored  --bg-blue"})]}),W=[{img:(0,i.jsx)(o.A,{alt:"aws",className:"aws-icon",src:f}),text:"global.amaz0nExp",title:"Amazon Web Services"},{img:(0,i.jsx)(o.A,{alt:"digitalocean",className:"digital-icon",src:U}),text:"global.dig1talExp",title:"DigitalOcean"},{img:(0,i.jsx)(o.A,{alt:"heroku",className:"heroku-icon",src:D}),text:"global.herokuExp",title:"Heroku"}],L=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("span",{className:"main-landing__titles",children:[(0,i.jsx)("p",{className:"--text-magenta --uppercase --bold --mb-1 --font-90",children:a("global.mito0ls")}),(0,i.jsx)("h1",{children:a("global.D3pl0ym3nt")}),(0,i.jsx)("span",{className:"line --line-50 --bg-magenta --mb-2"})]}),(0,i.jsx)(l,{cards:W})]}),P=(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("span",{className:"img-right",children:[(0,i.jsx)(o.A,{alt:"right-img",className:"right-img",src:T}),","]})}),y=[{alt:"git-icon",icon:q,link:"https://github.com/Jonathanmedhed"},{alt:"linked-icon",icon:C,link:"https://www.linkedin.com/in/jonathan-medina-heddrich-49164196/"},{alt:"portfolio-icon",icon:M,link:"https://portfolio-v3-six-alpha.vercel.app/"},{alt:"whatsapp-icon",icon:Y,link:"https://wa.me/+584128364157",linkDesktop:"+1-407-516-3241"},{alt:"gmail-icon",icon:V,link:"mailto:jonathanmedinaheddrich@gmail.com",linkDesktop:"jonathanmedinaheddrich@gmail.com"}];return(0,i.jsxs)("div",{className:"main-landing",children:[(0,i.jsx)(x,{className:"",centerItem:(0,i.jsx)(u,{active:!0,onClick:()=>m(!0)}),icon:(0,i.jsx)(o.A,{alt:"icon",className:"letter-icon",src:R}),options:h,title:a("global.p0rtf0lio")}),(0,i.jsx)(v,{bgImgStyle:"main-bg",className:"main-section",contentLeft:b,contentRight:N}),(0,i.jsx)(p,{action:()=>m(!1),children:(0,i.jsx)(d,{box:"data:image/png;base64,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",cats:g,className:"main-cat",start:t})}),(0,i.jsx)(v,{className:"second-section --bg-white-dark",contentLeft:A,contentRight:(0,i.jsx)("div",{className:"section-empty"})}),(0,i.jsx)(v,{className:"colored-section --pt-2",contentLeft:S}),(0,i.jsx)("div",{className:"shaped --bg-white",children:(0,i.jsx)("div",{className:"shaped__content --bg-white-dark",children:(0,i.jsx)(v,{className:"section__img-r --bg-white-dark",contentLeft:L,contentRight:P})})}),(0,i.jsxs)("div",{className:"main-landing__titles no-section",children:[(0,i.jsx)("p",{className:"--text-magenta --uppercase --bold --mb-1 --font-90",children:a("global.m0reInf0")}),(0,i.jsx)("h1",{className:"",children:a("global.miL1nks")}),(0,i.jsx)("span",{className:"line --line-50 --bg-magenta --my-1"})]}),(0,i.jsx)("div",{className:"main-landing__icons --pt-2",children:y.map(((a,s)=>(0,i.jsx)(j,{alt:a.alt,icon:a.icon,index:s,isActive:e===s,link:a.link,linkDesktop:a.linkDesktop,onClick:()=>n(e!==s&&s)},s)))}),(0,i.jsx)(r,{className:"--mt-5"})]})}}}]);
//# sourceMappingURL=50.b10715b0.chunk.js.map