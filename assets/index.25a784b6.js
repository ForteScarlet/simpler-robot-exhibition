import{o as l,c as m,a as h,t as w,r as d,b as a,w as c,d as B,p as N,e as P,f as b,F as g,g as v,n as C,h as F,i as x,m as S,j as V,k as D}from"./vendor.27463146.js";const R=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}};R();const H="modulepreload",T={},M="/simpler-robot-exhibition/",O=function(s,e){return!e||e.length===0?s():Promise.all(e.map(i=>{if(i=`${M}${i}`,i in T)return;T[i]=!0;const t=i.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${n}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":H,t||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),t)return new Promise((_,u)=>{o.addEventListener("load",_),o.addEventListener("error",u)})})).then(()=>s())};var k=(r,s)=>{const e=r.__vccOpts||r;for(const[i,t]of s)e[i]=t;return e};const z={name:"IconAndName",props:{icon:String,name:String,website:String}},q=["href"],J={class:"box"},K={class:"line"},G={class:"picbox"},Q=["src"],U={class:"title"};function X(r,s,e,i,t,n){return l(),m("a",{href:e.website,target:"_blank"},[h("div",J,[h("div",K,[h("div",G,[h("img",{src:e.icon,alt:"name",class:"pic",draggable:"false"},null,8,Q)]),h("p",U,w(e.name),1)])])],8,q)}var L=k(z,[["render",X],["__scopeId","data-v-499b8fe9"]]);const Y={name:"BaseShowCard",components:{IconAndName:L},props:{authors:Array,work:Z,info:{type:ee,default:{summary:"\u4FDD\u6301\u795E\u79D8\u611F\u4E5F\u662F\u4E00\u79CD\u81EA\u6211\u4ECB\u7ECD",subSummary:"",foot:"foot?"}}}};function Z(r,s){this.title=r,this.logo=s}function ee(r,s,e){this.summary=r,this.subSummary=s,this.foot=e}const W=r=>(N("data-v-15083f97"),r=r(),P(),r),te={class:"top"},oe=W(()=>h("div",{class:"card-bg"},null,-1)),ne=["innerHTML"],re=W(()=>h("br",null,null,-1));function se(r,s,e,i,t,n){const o=d("IconAndName"),_=d("n-divider"),u=d("n-ellipsis"),y=d("n-avatar"),p=d("n-card");return l(),m("div",te,[oe,a(p,{hoverable:"",title:e.work.title,class:"card-bg-sub"},{cover:c(()=>[re,a(y,{class:"no-drag",style:{"box-shadow":"4px 4px 10px rgba(91,85,85,0.18)",width:"50%"},round:"",size:"15",src:e.work.logo||"simbot-logo.png",draggable:!1},null,8,["src"])]),header:c(()=>[h("b",null,w(e.work.title),1)]),footer:c(()=>[a(u,{"line-clamp":"4",innerHTML:e.info.subSummary},null,8,["innerHTML"])]),action:c(()=>[B(w(e.info.foot),1)]),default:c(()=>[a(o,{icon:e.authors[0].avatar,name:e.authors[0].name?e.authors[0].name:"\u65E0\u540D\u7684\u52C7\u8005",website:e.authors[0].website},null,8,["icon","name","website"]),h("p",null,[a(u,{"line-clamp":"4",tooltip:{width:"trigger"}},{default:c(()=>[a(_),h("span",{innerHTML:e.info.summary},null,8,ne)]),_:1})])]),_:1},8,["title"])])}var A=k(Y,[["render",se],["__scopeId","data-v-15083f97"]]);const ie={name:"BaseShowCardType",components:{BaseShowCard:A},props:{name:String,iid:String,pid:String,sub:Array,items:Array,type:String,strong:{type:Boolean,default:!1},sid:String}};function ae(r,s,e,i,t,n){const o=d("n-tag"),_=d("n-divider"),u=d("base-show-card");return l(),m("div",null,[a(_,{"title-placement":"center"},{default:c(()=>[e.strong?(l(),b(o,{key:0,type:e.type,round:"",size:"large"},{default:c(()=>[h("b",null,w(e.name),1)]),_:1},8,["type"])):(l(),b(o,{key:1,type:e.type,round:""},{default:c(()=>[h("span",null,w(e.name),1)]),_:1},8,["type"]))]),_:1}),e.items?(l(!0),m(g,{key:0},v(e.items,y=>(l(),b(u,C(F(y)),null,16))),256)):x("",!0)])}var ce=k(ie,[["render",ae]]);const le={name:"BaseAnchorLinkShow",props:["typeOfWork","offset-target"]};function de(r,s,e,i,t,n){const o=d("n-anchor-link"),_=d("n-anchor");return l(),b(_,{affix:"","offset-top":20,"show-rail":!0,"show-background":!0,"ignore-gap":""},{default:c(()=>[(l(!0),m(g,null,v(e.typeOfWork,u=>(l(),b(o,{title:u.name,href:"#"+u.tid},{default:c(()=>[u.sub?(l(!0),m(g,{key:0},v(u.sub,y=>(l(),b(o,{title:y.name,href:"#"+y.tid},null,8,["title","href"]))),256)):x("",!0)]),_:2},1032,["title","href"]))),256))]),_:1})}var I=k(le,[["render",de]]);const _e={components:{IconAndName:L,BaseShowCard:A,BaseAnchorLinkShow:I,BaseShowCardType:ce},props:["works","typeOfWork"]};function ue(r,s,e,i,t,n){const o=d("n-gi"),_=d("base-show-card-type"),u=d("base-show-card"),y=d("n-grid");return l(),b(y,{"x-gap":"12","y-gap":"12",cols:24},{default:c(()=>[a(o,{span:"2"}),a(o,{span:"20"},{default:c(()=>[(l(!0),m(g,null,v(e.typeOfWork,p=>(l(),m("div",null,[a(_,S(p,{id:p.tid}),null,16,["id"]),p.sub&&e.works[p.iid]?(l(!0),m(g,{key:0},v(p.sub,f=>(l(),m(g,null,[e.works[p.iid][f.iid]?(l(),m(g,{key:0},[a(_,{id:f.tid,name:f.name,iid:f.iid,type:f.type?f.type:p.type,pid:p.pid?p.pid+"-"+p.iid:p.iid,sub:f.sub?f.sub:[],items:f.items?f.items:[],sid:f.tid},null,8,["id","name","iid","type","pid","sub","items","sid"]),a(y,{"x-gap":"50",cols:"1 s:1 m:2 l:3 xl:3 2xl:5",responsive:"screen"},{default:c(()=>[(l(!0),m(g,null,v(e.works[p.iid][f.iid],j=>(l(),b(o,null,{default:c(()=>[a(u,S(j,{class:"exhibition"}),null,16)]),_:2},1024))),256))]),_:2},1024)],64)):x("",!0)],64))),256)):x("",!0)]))),256))]),_:1}),a(o,{span:"2"})]),_:1})}var pe=k(_e,[["render",ue],["__scopeId","data-v-0bde590c"]]),fe=[{name:"\u5B98\u65B9",iid:"official",tid:"TOF-official",type:"info",strong:!0,sub:[{name:"\u6838\u5FC3",iid:"core",tid:"TOF-official-core"},{name:"\u7EC4\u4EF6",iid:"component",tid:"TOF-official-component"},{name:"\u5176\u4ED6",iid:"other",tid:"TOF-official-other"}]},{name:"\u7B2C\u4E09\u65B9",iid:"third-part",tid:"TOF-third-part",type:"success",strong:!0,addAble:!0,sub:[{name:"\u5E94\u7528",iid:"program",tid:"TOF-third-program"},{name:"\u6846\u67B6",iid:"frame",tid:"TOF-third-part-frame"}]}];const me={props:["works"],name:"Exhibition",components:{ExhibitionWorks:pe,BaseAnchorLinkShow:I},data(){return{typeOfWork:fe}},computed:{resolveTypeOfWork(){const r=this.allWorks,s=[];console.log(this.typeOfWork);for(let e=0;e<this.typeOfWork.length;e++){const i=this.typeOfWork[e],t=JSON.parse(JSON.stringify(i));if(t.sub.length&&r[t.iid]){const n=[];for(let o=0;o<t.sub.length;o++){const _=t.sub[o];console.log(_),r[t.iid][_.iid]&&n.push(_)}n.length&&(s.push(t),t.sub=n)}}return s},allWorks(){const r={};for(let s of this.typeOfWork)r[s.iid]={};for(const s of this.works){const e=s.type[0],i=s.type[1];let t=r[e],n;if(!t)t={},t[i]=n,r[e]=t;else{let o=t[i];o?n=o:(n=[],t[i]=n)}n.push(s)}return r}}};function he(r,s,e,i,t,n){const o=d("ExhibitionWorks"),_=d("n-layout-content"),u=d("n-layout"),y=d("BaseAnchorLinkShow"),p=d("n-layout-sider"),f=d("n-space");return l(),b(f,null,{default:c(()=>[a(u,{position:"absolute"},{default:c(()=>[a(_,{"native-scrollbar":!1,position:"absolute"},{default:c(()=>[a(u,{position:"absolute","has-sider":""},{default:c(()=>[a(u,null,{default:c(()=>[a(_,{"native-scrollbar":!1,ref:"showIndexList",position:"absolute"},{default:c(()=>[a(o,{works:n.allWorks,"type-of-work":n.resolveTypeOfWork},null,8,["works","type-of-work"])]),_:1},512)]),_:1}),a(p,{"content-style":"padding: 10px"},{default:c(()=>[a(y,{"type-of-work":n.resolveTypeOfWork,"offset-target":()=>r.$refs.showIndexList},null,8,["type-of-work","offset-target"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}var ye=k(me,[["render",he]]);const be={components:{Exhibition:ye},data(){return{works:[]}}};function ge(r,s,e,i,t,n){const o=d("exhibition"),_=d("n-config-provider");return l(),b(_,null,{default:c(()=>[a(o,{works:t.works},null,8,["works"])]),_:1})}var ke=k(be,[["render",ge]]);const $=V(ke);$.use(D);const ve=$.mount("#app"),E={"./works/catcode.js":()=>O(()=>import("./catcode.65f1c0e6.js"),[]),"./works/simbot-component-mirai.js":()=>O(()=>import("./simbot-component-mirai.5186e616.js"),[]),"./works/simbot-core-api.js":()=>O(()=>import("./simbot-core-api.999d99bb.js"),[]),"./works/simbot-core.js":()=>O(()=>import("./simbot-core.26f2da87.js"),[])};for(const r in E)E[r]().then(e=>e.default.workData()).then(e=>{ve.works.push(e)});