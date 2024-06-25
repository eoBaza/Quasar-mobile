import{Q as u}from"./QToolbarTitle.fca1f4ce.js";import{Q as c}from"./QHeader.947f196e.js";import{Q as l}from"./QInput.146b8fb0.js";import{Q as g}from"./QBtn.3966bacc.js";import{Q as f}from"./QForm.38be43ab.js";import{Q as h}from"./QCardSection.d0f1b305.js";import{Q}from"./QCard.bcef68f9.js";import{Q as _}from"./QPage.0f877eba.js";import{l as i,G as n,f as e,n as t,F as P,H as V,I as w,J as m,K as d,L as b}from"./index.2eb7711c.js";import{_ as y}from"./Home2.3af6e089.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import"./render.4b456007.js";import"./QResizeObserver.d30df9a7.js";import"./use-key-composition.e809075d.js";import"./focus-manager.d3efdf79.js";import"./dom.26cec04e.js";const M={name:"LoginRegistro",data(){return{pessoas:[],newPessoa:{cpf:"",nome:"",endereco:""},errorMessage:""}},created(){const s=localStorage.getItem("pessoas");s&&(this.pessoas=JSON.parse(s))},methods:{isValidCpf(s){return s=s.replace(/\D/g,""),s.length===11},handleLogin(){if(this.errorMessage="",this.successMessage="",!this.isValidCpf(this.newPessoa.cpf)){this.errorMessage="CPF deve ter 11 d\xEDgitos!";return}this.pessoas.push({...this.newPessoa}),localStorage.setItem("pessoas",JSON.stringify(this.pessoas)),localStorage.setItem("loggedInCpf",this.newPessoa.cpf),this.errorMessage="",this.successMessage="Cliente cadastrado e logado com sucesso!",this.newPessoa={cpf:"",nome:"",endereco:""},this.$router.push("/Home")}}},S={key:0,class:"text-negative q-mt-md"},x={key:1,class:"text-positive q-mt-md"},v=b("img",{src:y,alt:"Locuos por frango",style:{width:"100%",opacity:"0.4"}},null,-1);function q(s,r,L,N,o,p){return i(),n(P,null,[e(c,{class:"qheader",elevated:"",style:{"background-color":"rgba(255, 0, 0, 0.85)"}},{default:t(()=>[e(u,{style:{"text-align":"center"}},{default:t(()=>[V("Tela Login Registro ")]),_:1})]),_:1}),e(_,{style:{"max-height":"987px"}},{default:t(()=>[e(Q,{style:{"margin-top":"50px","background-color":"transparent"}},{default:t(()=>[e(h,null,{default:t(()=>[e(f,{onSubmit:w(p.handleLogin,["prevent"])},{default:t(()=>[e(l,{color:"red",modelValue:o.newPessoa.cpf,"onUpdate:modelValue":r[0]||(r[0]=a=>o.newPessoa.cpf=a),type:"number",label:"CPF",required:""},null,8,["modelValue"]),e(l,{color:"red",modelValue:o.newPessoa.nome,"onUpdate:modelValue":r[1]||(r[1]=a=>o.newPessoa.nome=a),label:"Nome",required:""},null,8,["modelValue"]),e(l,{color:"red",modelValue:o.newPessoa.endereco,"onUpdate:modelValue":r[2]||(r[2]=a=>o.newPessoa.endereco=a),label:"Endere\xE7o",required:""},null,8,["modelValue"]),e(g,{label:"ACESSAR",type:"submit",color:"red",class:"q-mt-md"})]),_:1},8,["onSubmit"]),o.errorMessage?(i(),n("div",S,m(o.errorMessage),1)):d("",!0),s.successMessage?(i(),n("div",x,m(s.successMessage),1)):d("",!0)]),_:1})]),_:1}),v]),_:1})],64)}var z=C(M,[["render",q]]);export{z as default};
