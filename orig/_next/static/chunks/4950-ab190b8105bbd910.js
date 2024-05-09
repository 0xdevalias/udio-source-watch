"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4950],{1260:function(t,e,i){let s;i.d(e,{XB:function(){return h}});var n=i(14749),o=i(2265),r=i(44991),a=i(29586),u=i(61266),l=i(39830);let c="dismissableLayer.update",d=(0,o.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),h=(0,o.forwardRef)((t,e)=>{var i;let{disableOutsidePointerEvents:h=!1,onEscapeKeyDown:f,onPointerDownOutside:m,onFocusOutside:y,onInteractOutside:b,onDismiss:E,...w}=t,g=(0,o.useContext)(d),[C,T]=(0,o.useState)(null),P=null!==(i=null==C?void 0:C.ownerDocument)&&void 0!==i?i:null==globalThis?void 0:globalThis.document,[,O]=(0,o.useState)({}),x=(0,u.e)(e,t=>T(t)),D=Array.from(g.layers),[L]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),k=D.indexOf(L),R=C?D.indexOf(C):-1,W=g.layersWithOutsidePointerEventsDisabled.size>0,F=R>=k,M=function(t,e=null==globalThis?void 0:globalThis.document){let i=(0,l.W)(t),s=(0,o.useRef)(!1),n=(0,o.useRef)(()=>{});return(0,o.useEffect)(()=>{let t=t=>{if(t.target&&!s.current){let s={originalEvent:t};function o(){p("dismissableLayer.pointerDownOutside",i,s,{discrete:!0})}"touch"===t.pointerType?(e.removeEventListener("click",n.current),n.current=o,e.addEventListener("click",n.current,{once:!0})):o()}else e.removeEventListener("click",n.current);s.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",t)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",t),e.removeEventListener("click",n.current)}},[e,i]),{onPointerDownCapture:()=>s.current=!0}}(t=>{let e=t.target,i=[...g.branches].some(t=>t.contains(e));!F||i||(null==m||m(t),null==b||b(t),t.defaultPrevented||null==E||E())},P),S=function(t,e=null==globalThis?void 0:globalThis.document){let i=(0,l.W)(t),s=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{let t=t=>{t.target&&!s.current&&p("dismissableLayer.focusOutside",i,{originalEvent:t},{discrete:!1})};return e.addEventListener("focusin",t),()=>e.removeEventListener("focusin",t)},[e,i]),{onFocusCapture:()=>s.current=!0,onBlurCapture:()=>s.current=!1}}(t=>{let e=t.target;[...g.branches].some(t=>t.contains(e))||(null==y||y(t),null==b||b(t),t.defaultPrevented||null==E||E())},P);return!function(t,e=null==globalThis?void 0:globalThis.document){let i=(0,l.W)(t);(0,o.useEffect)(()=>{let t=t=>{"Escape"===t.key&&i(t)};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)},[i,e])}(t=>{R!==g.layers.size-1||(null==f||f(t),!t.defaultPrevented&&E&&(t.preventDefault(),E()))},P),(0,o.useEffect)(()=>{if(C)return h&&(0===g.layersWithOutsidePointerEventsDisabled.size&&(s=P.body.style.pointerEvents,P.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(C)),g.layers.add(C),v(),()=>{h&&1===g.layersWithOutsidePointerEventsDisabled.size&&(P.body.style.pointerEvents=s)}},[C,P,h,g]),(0,o.useEffect)(()=>()=>{C&&(g.layers.delete(C),g.layersWithOutsidePointerEventsDisabled.delete(C),v())},[C,g]),(0,o.useEffect)(()=>{let t=()=>O({});return document.addEventListener(c,t),()=>document.removeEventListener(c,t)},[]),(0,o.createElement)(a.WV.div,(0,n.Z)({},w,{ref:x,style:{pointerEvents:W?F?"auto":"none":void 0,...t.style},onFocusCapture:(0,r.M)(t.onFocusCapture,S.onFocusCapture),onBlurCapture:(0,r.M)(t.onBlurCapture,S.onBlurCapture),onPointerDownCapture:(0,r.M)(t.onPointerDownCapture,M.onPointerDownCapture)}))});function v(){let t=new CustomEvent(c);document.dispatchEvent(t)}function p(t,e,i,{discrete:s}){let n=i.originalEvent.target,o=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:i});e&&n.addEventListener(t,e,{once:!0}),s?(0,a.jH)(n,o):n.dispatchEvent(o)}},37881:function(t,e,i){i.d(e,{h:function(){return a}});var s=i(14749),n=i(2265),o=i(54887),r=i(29586);let a=(0,n.forwardRef)((t,e)=>{var i;let{container:a=null==globalThis?void 0:null===(i=globalThis.document)||void 0===i?void 0:i.body,...u}=t;return a?o.createPortal((0,n.createElement)(r.WV.div,(0,s.Z)({},u,{ref:e})),a):null})},1793:function(t,e,i){i.d(e,{R:function(){return a},m:function(){return r}});var s=i(45139),n=i(2041),o=i(90326),r=class extends n.F{#t;#e;#i;#s;constructor(t){super(),this.mutationId=t.mutationId,this.#e=t.defaultOptions,this.#i=t.mutationCache,this.#t=[],this.state=t.state||a(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.#e,...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#t.includes(t)||(this.#t.push(t),this.clearGcTimeout(),this.#i.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#t=this.#t.filter(e=>e!==t),this.scheduleGc(),this.#i.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#t.length||("pending"===this.state.status?this.scheduleGc():this.#i.remove(this))}continue(){return this.#s?.continue()??this.execute(this.state.variables)}async execute(t){let e="pending"===this.state.status;try{if(!e){this.#n({type:"pending",variables:t}),await this.#i.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#n({type:"pending",context:e,variables:t})}let i=await (this.#s=(0,o.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#n({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#n({type:"pause"})},onContinue:()=>{this.#n({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#s.promise);return await this.#i.config.onSuccess?.(i,t,this.state.context,this),await this.options.onSuccess?.(i,t,this.state.context),await this.#i.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,t,this.state.context),this.#n({type:"success",data:i}),i}catch(e){try{throw await this.#i.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#i.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#n({type:"error",error:e})}}}#n(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,o.Kw)(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),s.V.batch(()=>{this.#t.forEach(e=>{e.onMutationUpdate(t)}),this.#i.notify({mutation:this,type:"updated",action:t})})}};function a(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},2041:function(t,e,i){i.d(e,{F:function(){return n}});var s=i(46063),n=class{#o;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,s.PN)(this.gcTime)&&(this.#o=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(s.sk?1/0:3e5))}clearGcTimeout(){this.#o&&(clearTimeout(this.#o),this.#o=void 0)}}}}]);