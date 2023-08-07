"use strict";(self.webpackChunkvape_market=self.webpackChunkvape_market||[]).push([[349],{52713:(R,f,e)=>{e.d(f,{r:()=>T});var t=e(67294),n=e(41580),l=e(45697),m=e.n(l),v=e(99168);function d(g,r,a){if(!g||!r)return{display:"none"};const{x:s,y:o}=a;return{transform:`translate(${s}px, ${o}px)`}}function T({renderItem:g}){const{itemType:r,isDragging:a,item:s,initialOffset:o,currentOffset:h,mouseOffset:O}=(0,v.useDragLayer)(C=>({item:C.getItem(),itemType:C.getItemType(),initialOffset:C.getInitialSourceClientOffset(),currentOffset:C.getSourceClientOffset(),isDragging:C.isDragging(),mouseOffset:C.getClientOffset()}));return a?t.createElement(n.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%"},t.createElement(n.x,{style:d(o,h,O)},g({type:r,item:s}))):null}T.propTypes={renderItem:m().func.isRequired}},7761:(R,f,e)=>{e.d(f,{pl:()=>g,aY:()=>M,q5:()=>h.q});var t=e(67294),n=e(80120),l=e(18172);const m={data:[],isLoading:!0},d=(p,A)=>(0,l.ZP)(p,y=>{switch(A.type){case"GET_DATA_SUCCEEDED":{y.data=A.data,y.isLoading=!1;break}case"GET_DATA_ERROR":{y.isLoading=!1;break}default:return y}}),g=({ssoEnabled:p})=>{const[A,y]=(0,t.useReducer)(d,m),S=(0,n.lm)(),{get:i}=(0,n.kY)();return(0,t.useEffect)(()=>{(async()=>{try{if(!p){y({type:"GET_DATA_SUCCEEDED",data:[]});return}const{data:w}=await i("/admin/providers");y({type:"GET_DATA_SUCCEEDED",data:w})}catch(w){console.error(w),y({type:"GET_DATA_ERROR"}),S({type:"warning",message:{id:"notification.error"}})}})()},[i,p,S]),A};var r=e(14293),a=e.n(r),s=e(86896),o=e(16550),h=e(71926);const O="strapi-notification-seat-limit",C="https://cloud.strapi.io/profile/billing",I="https://strapi.io/billing/request-seats",M=()=>{const{formatMessage:p}=(0,s.Z)();let{license:A,isError:y,isLoading:S}=(0,h.q)();const i=(0,n.lm)(),{pathname:c}=(0,o.TH)(),{enforcementUserCount:w,permittedSeats:D,licenseLimitStatus:L,isHostedOnStrapiCloud:x}=A;(0,t.useEffect)(()=>{if(y||S)return;const U=!a()(D)&&!window.sessionStorage.getItem(`${O}-${c}`)&&(L==="AT_LIMIT"||L==="OVER_LIMIT");let N;L==="OVER_LIMIT"?N="warning":L==="AT_LIMIT"&&(N="softWarning"),U&&i({type:N,message:p({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:L}),title:p({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:L,enforcementUserCount:w,permittedSeats:D}),link:{url:x?C:I,label:p({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:x})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${O}-${c}`,!0)}})},[i,A,c,p,S,D,L,w,x,y])}},71926:(R,f,e)=>{e.d(f,{q:()=>m});var t=e(67294),n=e(80120),l=e(88767);function m({enabled:v}={enabled:!0}){const{get:d}=(0,n.kY)(),{data:T,isError:g,isLoading:r}=(0,l.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:o}}=await d("/admin/license-limit-information");return o},{enabled:v}),a=T??{},s=t.useCallback(o=>(a?.features??[]).find(O=>O.name===o)?.options??{},[a?.features]);return{license:a,getFeature:s,isError:g,isLoading:r}}},43390:(R,f,e)=>{e.d(f,{eJ:()=>S,lx:()=>A,h4:()=>i,fC:()=>y});var t=e(67294),n=e(17034),l=e(185),m=e(49066),v=e(53979),d=e(80120),T=e(67109),g=e(86896),r=e(52713),a=e(86978),s=e(11047),o=e(75515),h=e(12645),O=e(45697),C=e.n(O),I=e(71997);const P=(0,I.ZP)(s.k)`
  svg path {
    fill: ${({theme:c})=>c.colors.neutral600};
  }
`;function M({name:c}){return t.createElement(s.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,d.Q1)(300)},t.createElement(P,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},t.createElement(h.Z,{width:`${8/16}rem`})),t.createElement(o.Z,{fontWeight:"bold"},c))}M.propTypes={name:C().string.isRequired};function p({type:c,item:w}){switch(c){case a.uL.STAGE:return t.createElement(M,{...w});default:return null}}function A(){return t.createElement(r.r,{renderItem:p})}function y({children:c}){return t.createElement(n.A,null,t.createElement(l.o,{tabIndex:-1},t.createElement(m.D,null,c)))}function S({href:c}){const{formatMessage:w}=(0,g.Z)();return t.createElement(d.rU,{startIcon:t.createElement(T.Z,null),to:c},w({id:"global.back",defaultMessage:"Back"}))}function i({title:c,subtitle:w,navigationAction:D,primaryAction:L}){return t.createElement(t.Fragment,null,t.createElement(d.SL,{name:c}),t.createElement(v.T,{navigationAction:D,primaryAction:L,title:c,subtitle:w}))}},38705:(R,f,e)=>{e.d(f,{uT:()=>p,fC:()=>S,Dx:()=>M});var t=e(67294),n=e(75515),l=e(11047),m=e(42866),v=e(59946),d=e(41580),T=e(12028),g=e(80994),r=e(70968),a=e(45697),s=e.n(a),o=e(86896),h=e(71997);const O=e.p+"0cd5f8915b265d5b1856.png",C="limits-title",I="https://strapi.io/pricing-cloud",P="https://strapi.io/contact-sales";function M({children:i}){return t.createElement(n.Z,{variant:"alpha",id:C},i)}M.propTypes={children:s().node.isRequired};function p({children:i}){return t.createElement(n.Z,{variant:"omega"},i)}p.propTypes={children:s().node.isRequired};function A(){const{formatMessage:i}=(0,o.Z)();return t.createElement(l.k,{gap:2,paddingTop:4},t.createElement(g.Q,{variant:"default",isExternal:!0,href:I},i({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),t.createElement(g.Q,{variant:"tertiary",isExternal:!0,href:P},i({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const y=h.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:i})=>`-${i.spaces[7]}`};
  margin-top: ${({theme:i})=>`-${i.spaces[7]}`};
  width: 360px;
`;function S({children:i,isOpen:c,onClose:w}){const{formatMessage:D}=(0,o.Z)();return c?t.createElement(m.P,{labelledBy:C},t.createElement(v.f,null,t.createElement(l.k,{gap:2,paddingLeft:7,position:"relative"},t.createElement(l.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},i,t.createElement(A,null)),t.createElement(l.k,{justifyContent:"end",height:"100%",width:"40%"},t.createElement(y,{src:O,"aria-hidden":!0,alt:"",loading:"lazy"}),t.createElement(d.x,{display:"flex",position:"absolute",right:0,top:0},t.createElement(T.h,{icon:t.createElement(r.Z,null),"aria-label":D({id:"global.close",defaultMessage:"Close"}),onClick:w})))))):null}S.defaultProps={isOpen:!1},S.propTypes={children:s().node.isRequired,isOpen:s().bool,onClose:s().func.isRequired}},86978:(R,f,e)=>{e.d(f,{$k:()=>g,Ef:()=>h,FT:()=>s,Nj:()=>T,Ot:()=>d,VS:()=>r,_X:()=>O,gu:()=>l,lv:()=>a,qZ:()=>m,sN:()=>n,uL:()=>o,x4:()=>v});var t=e(42675);const n="settings_review-workflows",l="Settings/Review_Workflows/RESET_WORKFLOW",m="Settings/Review_Workflows/SET_WORKFLOW",v="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",d="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",T="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",g="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",r="Settings/Review_Workflows/WORKFLOW_UPDATE",a={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},s=t.W.colors.primary600,o={STAGE:"stage"},h="numberOfWorkflows",O="stagesPerWorkflow"},52258:(R,f,e)=>{e.d(f,{n:()=>l});var t=e(80120),n=e(88767);function l(m={}){const{get:v}=(0,t.kY)(),{id:d="",...T}=m,g={populate:"stages"},{data:r,isLoading:a,status:s,refetch:o}=(0,n.useQuery)(["review-workflows","workflows",d],async()=>(await v(`/admin/review-workflows/workflows/${d}`,{params:{...g,...T}})).data);let h=[];return d&&r?.data?h=[r.data]:Array.isArray(r?.data)&&(h=r.data),{meta:r?.meta??{},workflows:h,isLoading:a,status:s,refetch:o}}},26259:(R,f,e)=>{e.r(f),e.d(f,{default:()=>z});var t=e(67294),n=e(80120),l=e(86706),m=e(36364),v=e(11047),d=e(77197),T=e(38939),g=e(49386),r=e(8060),a=e(79031),s=e(37909),o=e(75515),h=e(63237),O=e(15234),C=e(12028),I=e(96315),P=e(4585),M=e(20022),p=e(86896),A=e(88767),y=e(16550),S=e(71997),i=e(92686),c=e(7761),w=e(43390),D=e(38705),L=e(86978),x=e(52258);const U=(0,S.ZP)(n.rU)`
  align-items: center;
  height: ${(0,n.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:u})=>`${u.spaces[2]}}`};
  width: ${(0,n.Q1)(32)};

  svg {
    height: ${(0,n.Q1)(12)};
    width: ${(0,n.Q1)(12)};

    path {
      fill: ${({theme:u})=>u.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:u})=>u.colors.neutral800};
      }
    }
  }
`;function N(){const{formatMessage:u}=(0,p.Z)(),{push:j}=(0,y.k6)(),{collectionTypes:J,singleTypes:b,isLoading:q}=(0,i.G)(),{meta:B,workflows:K,isLoading:Z,refetch:_}=(0,x.n)(),[H,F]=t.useState(null),[ee,k]=t.useState(!1),{del:te}=(0,n.kY)(),{formatAPIError:ne}=(0,n.So)(),Q=(0,n.lm)(),{getFeature:se,isLoading:V}=(0,c.q5)(),{trackUsage:Y}=(0,n.rS)(),ae=(0,l.v9)(m._),{allowedActions:{canCreate:X,canDelete:oe}}=(0,n.ss)(ae.settings["review-workflows"]),W=se("review-workflows"),{mutateAsync:le,isLoading:re}=(0,A.useMutation)(async({workflowId:E,stages:$})=>{const{data:{data:G}}=await te(`/admin/review-workflows/workflows/${E}`,{data:$});return G},{onSuccess(){Q({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}}),ie=E=>[...J,...b].find(G=>G.uid===E).info.displayName,de=E=>{F(E)},ce=()=>{F(null)},ue=async()=>{try{const E=await le({workflowId:H});return await _(),F(null),E}catch(E){return Q({type:"warning",message:ne(E)}),null}};return t.useEffect(()=>{!Z&&!V&&W?.[L.Ef]&&B?.workflowCount>parseInt(W[L.Ef],10)&&k(!0)},[V,Z,W,B?.workflowCount,B.workflowsTotal]),t.createElement(t.Fragment,null,t.createElement(w.h4,{primaryAction:X&&t.createElement(n.Qj,{startIcon:t.createElement(I.Z,null),size:"S",to:"/settings/review-workflows/create",onClick:E=>{W?.[L.Ef]&&B?.workflowCount>=parseInt(W[L.Ef],10)?(E.preventDefault(),k(!0)):Y("willCreateWorkflow")}},u({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),subtitle:u({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:u({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),t.createElement(w.fC,null,Z||q?t.createElement(v.k,{justifyContent:"center"},t.createElement(d.a,null,u({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"}))):t.createElement(T.i,{colCount:3,footer:X&&t.createElement(g.c,{icon:t.createElement(I.Z,null),onClick:()=>{W?.[L.Ef]&&B?.workflowCount>=parseInt(W[L.Ef],10)?k(!0):(j("/settings/review-workflows/create"),Y("willCreateWorkflow"))}},u({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),rowCount:1},t.createElement(r.h,null,t.createElement(a.Tr,null,t.createElement(s.Th,null,t.createElement(o.Z,{variant:"sigma"},u({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"}))),t.createElement(s.Th,null,t.createElement(o.Z,{variant:"sigma"},u({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"}))),t.createElement(s.Th,null,t.createElement(o.Z,{variant:"sigma"},u({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"}))),t.createElement(s.Th,null,t.createElement(h.T,null,u({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"}))))),t.createElement(O.p,null,K.map(E=>t.createElement(a.Tr,{...(0,n.X7)({fn($){$.target.nodeName!=="BUTTON"&&j(`/settings/review-workflows/${E.id}`)}}),key:`workflow-${E.id}`},t.createElement(s.Td,{width:(0,n.Q1)(250)},t.createElement(o.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0},E.name)),t.createElement(s.Td,null,t.createElement(o.Z,{textColor:"neutral800"},E.stages.length)),t.createElement(s.Td,null,t.createElement(o.Z,{textColor:"neutral800"},(E?.contentTypes??[]).map(ie).join(", "))),t.createElement(s.Td,null,t.createElement(v.k,{alignItems:"center",justifyContent:"end"},t.createElement(U,{to:`/settings/review-workflows/${E.id}`,"aria-label":u({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:E.name})},t.createElement(P.Z,null)),K.length>1&&oe&&t.createElement(C.h,{"aria-label":u({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:t.createElement(M.Z,null),noBorder:!0,onClick:()=>{de(E.id)}}))))))),t.createElement(n.QH,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:re,isOpen:!!H,onToggleDialog:ce,onConfirm:ue}),t.createElement(D.fC,{isOpen:ee,onClose:()=>k(!1)},t.createElement(D.Dx,null,u({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),t.createElement(D.uT,null,u({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})))))}function z(){const u=(0,l.v9)(m._);return t.createElement(n.O4,{permissions:u.settings["review-workflows"].main},t.createElement(N,null))}},49386:(R,f,e)=>{e.d(f,{c:()=>r});var t=e(85893),n=e(71997),l=e(41580),m=e(70004),v=e(11047),d=e(75515);const T=(0,n.ZP)(l.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:a})=>a.colors.primary600};
  }
`,g=(0,n.ZP)(l.x)`
  border-radius: 0 0 ${({theme:a})=>a.borderRadius} ${({theme:a})=>a.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,r=({children:a,icon:s,...o})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(m.i,{}),(0,t.jsx)(g,{as:"button",background:"primary100",padding:5,...o,children:(0,t.jsxs)(v.k,{children:[(0,t.jsx)(T,{"aria-hidden":!0,background:"primary200",children:s}),(0,t.jsx)(l.x,{paddingLeft:3,children:(0,t.jsx)(d.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:a})})]})})]})},67109:(R,f,e)=>{e.d(f,{Z:()=>l});var t=e(85893);const n=m=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...m,children:(0,t.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),l=n}}]);
