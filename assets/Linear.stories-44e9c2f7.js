import{S as P,i as M,s as w,c as f,a as d,m as l,b as c,t as $,d as g,e as A,f as u,g as S}from"./index-88099bba.js";import{g as v,a as b}from"./spread-8a54911c.js";import{p as T,M as C,P as L,T as j,S as I}from"./collect-stories-63266911.js";import{c as q}from"./helpers-5fa58f44.js";/* empty css               */function x(m){let s,n;const r=[m[0]];let i={};for(let t=0;t<r.length;t+=1)i=S(i,r[t]);return s=new L.Linear({props:i}),{c(){f(s.$$.fragment)},m(t,p){l(s,t,p),n=!0},p(t,p){const o=p&1?v(r,[b(t[0])]):{};s.$set(o)},i(t){n||($(s.$$.fragment,t),n=!0)},o(t){g(s.$$.fragment,t),n=!1},d(t){u(s,t)}}}function E(m){let s,n,r,i,t,p,o,_;return s=new C({props:{title:"Atoms/Progress.Linear",component:L.Linear}}),r=new j({props:{$$slots:{default:[x,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:m}}}),t=new I({props:{name:"Determinate",args:m[0]}}),o=new I({props:{name:"Indeterminate",args:q(m[0],{indeterminate:!0})}}),{c(){f(s.$$.fragment),n=d(),f(r.$$.fragment),i=d(),f(t.$$.fragment),p=d(),f(o.$$.fragment)},m(e,a){l(s,e,a),c(e,n,a),l(r,e,a),c(e,i,a),l(t,e,a),c(e,p,a),l(o,e,a),_=!0},p(e,[a]){const D={};a&3&&(D.$$scope={dirty:a,ctx:e}),r.$set(D)},i(e){_||($(s.$$.fragment,e),$(r.$$.fragment,e),$(t.$$.fragment,e),$(o.$$.fragment,e),_=!0)},o(e){g(s.$$.fragment,e),g(r.$$.fragment,e),g(t.$$.fragment,e),g(o.$$.fragment,e),_=!1},d(e){e&&(A(n),A(i),A(p)),u(s,e),u(r,e),u(t,e),u(o,e)}}}function O(m){return[{class:"",value:.5,barColorProvided:!1}]}class k extends P{constructor(s){super(),M(this,s,O,E,w,{})}}const y=T(k,{meta:{title:"Atoms/Progress.Linear"},stories:{"tpl:default":{name:"default",template:!0,source:"<Progress.Linear {...args} />",hasArgs:!0},Determinate:{name:"Determinate",template:!1,source:"",hasArgs:!1},Indeterminate:{name:"Indeterminate",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","Progress","copyAndModifyArgs"]}),J=y.meta,K=["Determinate","Indeterminate"],N=y.stories.Determinate,Q=y.stories.Indeterminate;export{N as Determinate,Q as Indeterminate,K as __namedExportsOrder,J as default};