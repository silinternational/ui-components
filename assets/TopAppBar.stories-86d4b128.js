import{S as M,i as S,s as N,c as $,a as A,m as l,b,t as i,d as u,e as c,f as d,g as C,h as I,j,k}from"./index-e2bf008c.js";import{p as x,M as q,r as H,T as E,S as D}from"./collect-stories-f334d7eb.js";import{c as w}from"./helpers-5fa58f44.js";function O(r){let s,o;const n=[r[0]];let f={};for(let t=0;t<n.length;t+=1)f=C(f,n[t]);return s=new H({props:f}),s.$on("nav",function(){I(r[0].onNav)&&r[0].onNav.apply(this,arguments)}),{c(){$(s.$$.fragment)},m(t,m){l(s,t,m),o=!0},p(t,m){r=t;const p=m&1?j(n,[k(r[0])]):{};s.$set(p)},i(t){o||(i(s.$$.fragment,t),o=!0)},o(t){u(s.$$.fragment,t),o=!1},d(t){d(s,t)}}}function V(r){let s,o,n,f,t,m,p,y,g,B,_,T;return s=new q({props:{title:"Atoms/TopAppBar",component:H}}),n=new E({props:{$$slots:{default:[O,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:r}}}),t=new D({props:{name:"Default",args:r[0]}}),p=new D({props:{name:"Dense",args:w(r[0],{dense:!0})}}),g=new D({props:{name:"Fixed",args:w(r[0],{fixed:!0})}}),_=new D({props:{name:"Hide above tablet",args:w(r[0],{navIconBreakpointClass:"hide-above-tablet"})}}),{c(){$(s.$$.fragment),o=A(),$(n.$$.fragment),f=A(),$(t.$$.fragment),m=A(),$(p.$$.fragment),y=A(),$(g.$$.fragment),B=A(),$(_.$$.fragment)},m(e,a){l(s,e,a),b(e,o,a),l(n,e,a),b(e,f,a),l(t,e,a),b(e,m,a),l(p,e,a),b(e,y,a),l(g,e,a),b(e,B,a),l(_,e,a),T=!0},p(e,[a]){const F={};a&3&&(F.$$scope={dirty:a,ctx:e}),n.$set(F)},i(e){T||(i(s.$$.fragment,e),i(n.$$.fragment,e),i(t.$$.fragment,e),i(p.$$.fragment,e),i(g.$$.fragment,e),i(_.$$.fragment,e),T=!0)},o(e){u(s.$$.fragment,e),u(n.$$.fragment,e),u(t.$$.fragment,e),u(p.$$.fragment,e),u(g.$$.fragment,e),u(_.$$.fragment,e),T=!1},d(e){e&&(c(o),c(f),c(m),c(y),c(B)),d(s,e),d(n,e),d(t,e),d(p,e),d(g,e),d(_,e)}}}function z(r){return[{class:"",bgColorIsVariant:!1,onNav:()=>{}}]}class G extends M{constructor(s){super(),S(this,s,z,V,N,{})}}const v=x(G,{meta:{title:"Atoms/TopAppBar"},stories:{"tpl:default":{name:"default",template:!0,source:"<TopAppBar {...args} on:nav={args.onNav} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},Dense:{name:"Dense",template:!1,source:"",hasArgs:!1},Fixed:{name:"Fixed",template:!1,source:"",hasArgs:!1},HideAboveTablet:{name:"Hide above tablet",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","TopAppBar","copyAndModifyArgs"]}),P=v.meta,Q=["Default","Dense","Fixed","HideAboveTablet"],R=v.stories.Default,U=v.stories.Dense,W=v.stories.Fixed,X=v.stories.HideAboveTablet;export{R as Default,U as Dense,W as Fixed,X as HideAboveTablet,Q as __namedExportsOrder,P as default};
