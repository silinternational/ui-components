import{S as v,i as k,s as C,c as f,a as T,m,b as g,t as u,d as $,e as d,f as p,g as E,h as q,j as O,k as z,l as F}from"./index-e2bf008c.js";import{p as G,M as H,D as j,T as J,S as w}from"./collect-stories-f334d7eb.js";import{c as M}from"./helpers-5fa58f44.js";function K(a){let t;return{c(){t=F("Main slot here")},m(n,l){g(n,t,l)},d(n){n&&d(t)}}}function L(a){let t,n;const l=[a[0]];let c={$$slots:{default:[K]},$$scope:{ctx:a}};for(let s=0;s<l.length;s+=1)c=E(c,l[s]);return t=new j.Alert({props:c}),t.$on("chosen",function(){q(a[0]["on:chosen"])&&a[0]["on:chosen"].apply(this,arguments)}),t.$on("closed",function(){q(a[0]["on:closed"])&&a[0]["on:closed"].apply(this,arguments)}),{c(){f(t.$$.fragment)},m(s,r){m(t,s,r),n=!0},p(s,r){a=s;const i=r&1?O(l,[z(a[0])]):{};r&2&&(i.$$scope={dirty:r,ctx:a}),t.$set(i)},i(s){n||(u(t.$$.fragment,s),n=!0)},o(s){$(t.$$.fragment,s),n=!1},d(s){p(t,s)}}}function N(a){let t,n,l,c,s,r,i,b,_,B,A,S,D,I;return t=new H({props:{title:"Atoms/Dialog.Alert",component:j.Alert}}),l=new J({props:{$$slots:{default:[L,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:a}}}),s=new w({props:{name:"Default",args:a[0]}}),i=new w({props:{name:"Title",args:M(a[0],{title:"title"})}}),_=new w({props:{name:"TitleIcon",args:M(a[0],{titleIcon:"warning"})}}),A=new w({props:{name:"Default action",args:M(a[0],{defaultAction:"cancel"})}}),D=new w({props:{name:"Buttons",args:M(a[0],{buttons:[{label:"quit",action:"quit",class:"mdc-dialog__button"},{label:"discard",action:"discard",class:"mdc-dialog__button"}]})}}),{c(){f(t.$$.fragment),n=T(),f(l.$$.fragment),c=T(),f(s.$$.fragment),r=T(),f(i.$$.fragment),b=T(),f(_.$$.fragment),B=T(),f(A.$$.fragment),S=T(),f(D.$$.fragment)},m(e,o){m(t,e,o),g(e,n,o),m(l,e,o),g(e,c,o),m(s,e,o),g(e,r,o),m(i,e,o),g(e,b,o),m(_,e,o),g(e,B,o),m(A,e,o),g(e,S,o),m(D,e,o),I=!0},p(e,[o]){const h={};o&3&&(h.$$scope={dirty:o,ctx:e}),l.$set(h)},i(e){I||(u(t.$$.fragment,e),u(l.$$.fragment,e),u(s.$$.fragment,e),u(i.$$.fragment,e),u(_.$$.fragment,e),u(A.$$.fragment,e),u(D.$$.fragment,e),I=!0)},o(e){$(t.$$.fragment,e),$(l.$$.fragment,e),$(s.$$.fragment,e),$(i.$$.fragment,e),$(_.$$.fragment,e),$(A.$$.fragment,e),$(D.$$.fragment,e),I=!1},d(e){e&&(d(n),d(c),d(r),d(b),d(B),d(S)),p(t,e),p(l,e),p(s,e),p(i,e),p(_,e),p(A,e),p(D,e)}}}function P(a){return[{"on:chosen":n=>console.log(n.detail),"on:closed":n=>console.log(n.detail),open:!0,class:""}]}class Q extends v{constructor(t){super(),k(this,t,P,N,C,{})}}const y=G(Q,{meta:{title:"Atoms/Dialog.Alert"},stories:{"tpl:default":{name:"default",template:!0,source:"<Dialog.Alert {...args} on:chosen={args['on:chosen']} on:closed={args['on:closed']}>Main slot here</Dialog.Alert>",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},Title:{name:"Title",template:!1,source:"",hasArgs:!1},TitleIcon:{name:"TitleIcon",template:!1,source:"",hasArgs:!1},DefaultAction:{name:"Default action",template:!1,source:"",hasArgs:!1},Buttons:{name:"Buttons",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","Dialog","copyAndModifyArgs"]}),W=y.meta,X=["Default","Title","TitleIcon","DefaultAction","Buttons"],Y=y.stories.Default,Z=y.stories.Title,x=y.stories.TitleIcon,ee=y.stories.DefaultAction,te=y.stories.Buttons;export{te as Buttons,Y as Default,ee as DefaultAction,Z as Title,x as TitleIcon,X as __namedExportsOrder,W as default};
