import{S as j,i as q,s as C,c as f,a as d,m,b as _,t as $,d as l,e as c,f as p,g as I}from"./index-88099bba.js";import{g as O,a as z}from"./spread-8a54911c.js";import{p as B,M as G,F as v,T as H,S as w}from"./collect-stories-63266911.js";import{c as F}from"./helpers-5fa58f44.js";function J(r){let a,o;const n=[r[0]];let u={};for(let t=0;t<n.length;t+=1)u=I(u,n[t]);return a=new v({props:u}),{c(){f(a.$$.fragment)},m(t,g){m(a,t,g),o=!0},p(t,g){const i=g&1?O(n,[z(t[0])]):{};a.$set(i)},i(t){o||($(a.$$.fragment,t),o=!0)},o(t){l(a.$$.fragment,t),o=!1},d(t){p(a,t)}}}function K(r){let a,o,n,u,t,g,i,E,b,U,y,S,M,x,T,D;return a=new G({props:{title:"Atoms/Fab",component:v}}),n=new H({props:{$$slots:{default:[J,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:r}}}),t=new w({props:{name:"Default",args:r[0]}}),i=new w({props:{name:"Mini",args:F(r[0],{mini:!0})}}),b=new w({props:{name:"Extended",args:F(r[0],{extended:!0})}}),y=new w({props:{name:"Action",args:F(r[0],{action:r[1]})}}),M=new w({props:{name:"Target",args:F(r[0],{target:"_blank",url:"/?path=/story/atoms-fab--target"})}}),T=new w({props:{name:"Url",args:F(r[0],{url:"/?path=/story/atoms-fab--url"})}}),{c(){f(a.$$.fragment),o=d(),f(n.$$.fragment),u=d(),f(t.$$.fragment),g=d(),f(i.$$.fragment),E=d(),f(b.$$.fragment),U=d(),f(y.$$.fragment),S=d(),f(M.$$.fragment),x=d(),f(T.$$.fragment)},m(e,s){m(a,e,s),_(e,o,s),m(n,e,s),_(e,u,s),m(t,e,s),_(e,g,s),m(i,e,s),_(e,E,s),m(b,e,s),_(e,U,s),m(y,e,s),_(e,S,s),m(M,e,s),_(e,x,s),m(T,e,s),D=!0},p(e,[s]){const k={};s&5&&(k.$$scope={dirty:s,ctx:e}),n.$set(k)},i(e){D||($(a.$$.fragment,e),$(n.$$.fragment,e),$(t.$$.fragment,e),$(i.$$.fragment,e),$(b.$$.fragment,e),$(y.$$.fragment,e),$(M.$$.fragment,e),$(T.$$.fragment,e),D=!0)},o(e){l(a.$$.fragment,e),l(n.$$.fragment,e),l(t.$$.fragment,e),l(i.$$.fragment,e),l(b.$$.fragment,e),l(y.$$.fragment,e),l(M.$$.fragment,e),l(T.$$.fragment,e),D=!1},d(e){e&&(c(o),c(u),c(g),c(E),c(U),c(S),c(x)),p(a,e),p(n,e),p(t,e),p(i,e),p(b,e),p(y,e),p(M,e),p(T,e)}}}function L(r){return[{icon:"add",label:"Fab",class:"",action:()=>console.log("click")},()=>alert("This is an action")]}class N extends j{constructor(a){super(),q(this,a,L,K,C,{})}}const A=B(N,{meta:{title:"Atoms/Fab"},stories:{"tpl:default":{name:"default",template:!0,source:"<Fab {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},Mini:{name:"Mini",template:!1,source:"",hasArgs:!1},Extended:{name:"Extended",template:!1,source:"",hasArgs:!1},Action:{name:"Action",template:!1,source:"",hasArgs:!1},Target:{name:"Target",template:!1,source:"",hasArgs:!1},Url:{name:"Url",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","Fab","copyAndModifyArgs"]}),W=A.meta,X=["Default","Mini","Extended","Action","Target","Url"],Y=A.stories.Default,Z=A.stories.Mini,h=A.stories.Extended,ee=A.stories.Action,te=A.stories.Target,se=A.stories.Url;export{ee as Action,Y as Default,h as Extended,Z as Mini,te as Target,se as Url,X as __namedExportsOrder,W as default};