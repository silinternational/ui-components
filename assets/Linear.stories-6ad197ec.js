import{S as P,i as M,s as w,c as f,a as d,m as l,b as c,t as $,d as u,e as A,f as g,g as S,j as v,k as b}from"./index-e2bf008c.js";import{p as T,M as j,P as L,T as C,S as I}from"./collect-stories-f334d7eb.js";import{c as k}from"./helpers-5fa58f44.js";/* empty css               */function q(m){let s,n;const r=[m[0]];let i={};for(let t=0;t<r.length;t+=1)i=S(i,r[t]);return s=new L.Linear({props:i}),{c(){f(s.$$.fragment)},m(t,p){l(s,t,p),n=!0},p(t,p){const o=p&1?v(r,[b(t[0])]):{};s.$set(o)},i(t){n||($(s.$$.fragment,t),n=!0)},o(t){u(s.$$.fragment,t),n=!1},d(t){g(s,t)}}}function x(m){let s,n,r,i,t,p,o,_;return s=new j({props:{title:"Atoms/Progress.Linear",component:L.Linear}}),r=new C({props:{$$slots:{default:[q,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:m}}}),t=new I({props:{name:"Determinate",args:m[0]}}),o=new I({props:{name:"Indeterminate",args:k(m[0],{indeterminate:!0})}}),{c(){f(s.$$.fragment),n=d(),f(r.$$.fragment),i=d(),f(t.$$.fragment),p=d(),f(o.$$.fragment)},m(e,a){l(s,e,a),c(e,n,a),l(r,e,a),c(e,i,a),l(t,e,a),c(e,p,a),l(o,e,a),_=!0},p(e,[a]){const D={};a&3&&(D.$$scope={dirty:a,ctx:e}),r.$set(D)},i(e){_||($(s.$$.fragment,e),$(r.$$.fragment,e),$(t.$$.fragment,e),$(o.$$.fragment,e),_=!0)},o(e){u(s.$$.fragment,e),u(r.$$.fragment,e),u(t.$$.fragment,e),u(o.$$.fragment,e),_=!1},d(e){e&&(A(n),A(i),A(p)),g(s,e),g(r,e),g(t,e),g(o,e)}}}function E(m){return[{class:"",value:.5,barColorProvided:!1}]}class O extends P{constructor(s){super(),M(this,s,E,x,w,{})}}const y=T(O,{meta:{title:"Atoms/Progress.Linear"},stories:{"tpl:default":{name:"default",template:!0,source:"<Progress.Linear {...args} />",hasArgs:!0},Determinate:{name:"Determinate",template:!1,source:"",hasArgs:!1},Indeterminate:{name:"Indeterminate",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","Progress","copyAndModifyArgs"]}),H=y.meta,J=["Determinate","Indeterminate"],K=y.stories.Determinate,N=y.stories.Indeterminate;export{K as Determinate,N as Indeterminate,J as __namedExportsOrder,H as default};
