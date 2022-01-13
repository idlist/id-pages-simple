var k=Object.defineProperty;var g=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var h=(e,i,n)=>i in e?k(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n,a=(e,i)=>{for(var n in i||(i={}))b.call(i,n)&&h(e,n,i[n]);if(g)for(var n of g(i))_.call(i,n)&&h(e,n,i[n]);return e};import{m as t}from"./vendor.fe47eba3.js";const w=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};w();var L="/assets/idlist.fc08cfb1.png",x="/assets/email.1c9cadbe.svg",j="/assets/blog.a273d7e2.svg",C="/assets/twitter.e319f37d.svg",M="/assets/github.a6c49edf.svg",E="/assets/soundcloud.0a264c42.svg";const f=()=>({view({attrs:e}){return[t("a",{class:"contact-list-item",href:e.link,target:"external"in e?e.external?"_blank":"_self":"_blank",noreferer:!0,noopener:!0},[t("div",{class:"item-icon"},[t("img",{class:"item-icon-image",src:e.icon,alt:e.name})]),t("div",{class:"item-name",style:{backgroundColor:e.color}},e.name),t("div",{class:"item-id"},e.id)])]}}),A=[{name:"Email",icon:x,id:"me@idl.ist",link:"mailto:me@idl.ist",color:"#3A8FB7",external:!1},{name:"Blog",icon:j,color:"#5DAC81",id:"Reinventing the Wheel",link:"https://blog.idl.ist/"}],D=[{name:"Twitter",icon:C,id:"@i_dlist",color:"#58B2DC",link:"https://twitter.com/i_dlist"},{name:"GitHub",icon:M,color:"#66327C",id:"i'DLisT",link:"https://github.com/idlist"},{name:"SoundCloud",icon:E,id:"i'DLisT",color:"#ED784A",link:"https://soundcloud.com/idlist"}],N=()=>({view(){return[t("header",{class:"header"},[t("div",{class:"header-icon"},[t("img",{class:"header-icon-image",src:L,alt:"idlist-icon"})]),t("div",{class:"contact-list"},[...A.map(e=>[t(f,a({},e))]),t("hr",{class:"contact-list-divider"}),...D.map(e=>[t(f,a({},e))])])])]}});var T="/assets/star.ff5d76b6.svg",B="/assets/heart.e5ed4c6a.svg",I="/assets/chinese.e931516b.svg",S="/assets/english.6cbd5f46.svg",G="/assets/japanese.e5ceb4a3.svg",O="/assets/mithril.a2d0bda6.svg",W="/assets/react.16eec54d.svg",F="/assets/vue.6dcec66a.svg",P="/assets/vite.3afc587c.svg",R="/assets/koishi.cb62b138.svg",V="/assets/godot.9ccc4c65.svg",H="/assets/digital-art.e1118703.svg",J="/assets/ui.3e47dbfd.svg",K="/assets/vector-graphics.61690b4d.svg",$="/assets/live.47f3e462.svg";const q=[{title:"Language",color:"#9A5034",contents:[{name:"Chinese (native)",icon:I,level:5},{name:"English",icon:S,level:4},{name:"Japanese",icon:G,level:3}]},{title:"JS / Node.js",level:4.5,color:"#6E552F",contents:[{name:"Mithril.js",icon:O,level:4,fav:!0,link:"https://mithril.js.org/"},{name:"React",icon:W,level:3,link:"https://reactjs.org/"},{name:"Vue.js",icon:F,level:1,link:"https://v3.vuejs.org/"},{name:"Vite",icon:P,level:3,link:"https://vitejs.dev/"},{name:"Koishi.js",icon:R,level:4.5,fav:!0,link:"https://koishi.js.org/"}]},{title:"C#",level:1,new:!0,color:"#096148",contents:[{name:"Godot",icon:V,level:.8,new:!0,fav:!0,link:"https://godotengine.org/"}]},{title:"Graphics",level:3,color:"#622954",contents:[{name:"Digital Art",icon:H,level:1,fav:!0},{name:"UI",icon:J,level:3,fav:!0},{name:"Vector Graphics",icon:K,level:2}]},{title:"Desktop Music",level:2,color:"#0B346E",contents:[{name:"Live",icon:$,level:2,link:"https://www.ableton.com/en/live/"}]}],p=()=>({view({attrs:e}){var d;const i=(d=e.width)!=null?d:160,n=24,l=12,s=i-2*l,o={stroke:"#ccc",strokeWidth:2},r={fill:"#ccc"};return[t("svg",{width:i,height:n,class:"skill-bar"},[t("line",{x1:l,y1:l,x2:i-l,y2:l,style:o}),...[0,1].map(v=>{const c=Math.round(l+s*v);return[t("line",{x1:c,y1:6,x2:c,y2:18,style:o})]}),...[1,2,3,4].map(v=>{const c=5,m=Math.round(l+s/5*v),u=n/2;return[t("rect",{x:m-c/2,y:u-c/2,width:c,height:c,style:r,transform:`rotate(45, ${m}, ${u})`})]}),t("image",{x:l+s/5*e.level-8,y:4,width:16,height:16,href:e.fav?B:T})])]}}),y=()=>({view({attrs:e}){return[t("div",{class:"item-icon"},[e.icon&&[t("img",{class:"item-icon-image",src:e.icon,alt:e.name})]]),t("div",{class:e.link&&"item-link-text"},e.name),e.new&&[t("div",{class:"item-new"},"NEW")]]}}),z=()=>({view({attrs:e}){return[t("div",{class:"item"},[e.link?[t("a",{class:"item-link",href:e.link,target:"_blank",noreferer:!0,noopener:!0},[t(y,a({},e))])]:[t("div",{class:"item-info"},[t(y,a({},e))])],t(p,{level:e.level,fav:e.fav})])]}}),U=()=>({view({attrs:e}){return[t("div",{class:"aspect"},[t("div",{class:"aspect-container",style:{backgroundColor:e.color}},[t("div",{class:"aspect-info"},[t("div",{class:"aspect-title"},e.title),e.new&&[t("div",{class:"aspect-new"},"NEW")]]),e.level&&[t(p,{level:e.level})]]),t("div",{class:"aspect-content"},[...e.contents.map(i=>t(z,a({},i)))])])]}}),Q=()=>({view(){return[t("div",{class:"mastery-tree"},[...q.map(e=>t(U,a({},e)))])]}}),X=()=>({view(){return[t("div",{class:"container"},[t(N),t(Q)])]}});t.mount(document.getElementById("root"),X);
