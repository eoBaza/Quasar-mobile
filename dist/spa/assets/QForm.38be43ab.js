import{p as E,r as P,u as q,Y as A,Z as B,o as I,h as R,g as V,W as S,D,_ as Q}from"./index.2eb7711c.js";import{a as j}from"./focus-manager.d3efdf79.js";import{h as O}from"./render.4b456007.js";import{v as $}from"./QBtn.3966bacc.js";var Y=E({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(a,{slots:F,emit:l}){const C=V(),u=P(null);let s=0;const i=[];function d(e){const r=typeof e=="boolean"?e:a.noErrorFocus!==!0,f=++s,h=(t,o)=>{l(`validation${t===!0?"Success":"Error"}`,o)},p=t=>{const o=t.validate();return typeof o.then=="function"?o.then(n=>({valid:n,comp:t}),n=>({valid:!1,comp:t,err:n})):Promise.resolve({valid:o,comp:t})};return(a.greedy===!0?Promise.all(i.map(p)).then(t=>t.filter(o=>o.valid!==!0)):i.reduce((t,o)=>t.then(()=>p(o).then(n=>{if(n.valid===!1)return Promise.reject(n)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return f===s&&h(!0),!0;if(f===s){const{comp:o,err:n}=t[0];if(n!==void 0&&console.error(n),h(!1,o),r===!0){const x=t.find(({comp:g})=>typeof g.focus=="function"&&$(g.$)===!1);x!==void 0&&x.comp.focus()}}return!1})}function m(){s++,i.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function v(e){e!==void 0&&S(e);const r=s+1;d().then(f=>{r===s&&f===!0&&(a.onSubmit!==void 0?l("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function b(e){e!==void 0&&S(e),l("reset"),D(()=>{m(),a.autofocus===!0&&a.noResetFocus!==!0&&c()})}function c(){j(()=>{if(u.value===null)return;const e=u.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(u.value.querySelectorAll("[tabindex]"),r=>r.tabIndex!==-1);e!=null&&e.focus({preventScroll:!0})})}q(Q,{bindComponent(e){i.push(e)},unbindComponent(e){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}});let y=!1;return A(()=>{y=!0}),B(()=>{y===!0&&a.autofocus===!0&&c()}),I(()=>{a.autofocus===!0&&c()}),Object.assign(C.proxy,{validate:d,resetValidation:m,submit:v,reset:b,focus:c,getValidationComponents:()=>i}),()=>R("form",{class:"q-form",ref:u,onSubmit:v,onReset:b},O(F.default))}});export{Y as Q};
