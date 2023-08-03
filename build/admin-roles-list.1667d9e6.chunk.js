"use strict";(self.webpackChunkvape_market=self.webpackChunkvape_market||[]).push([[3455],{7513:(N,x,t)=>{t.r(x),t.d(x,{default:()=>ge});var e=t(67294),n=t(57993),f=t(86706),T=t(36364),y=t(185),b=t(53979),W=t(29728),U=t(36989),S=t(49066),E=t(38939),F=t(49386),K=t(8060),k=t(79031),v=t(37909),O=t(75515),z=t(63237),X=t(15234),G=t(65186),J=t(4585),Y=t(20022),V=t(96315),w=t(27361),q=t.n(w),Z=t(86896),_=t(16550),ee=t(14900);const te=()=>"todo empty role";var ne=t(11047),le=t(41580),se=t(12028),ae=t(45697),L=t.n(ae);const $=({id:s,name:d,description:l,usersCount:h,icons:c,rowIndex:o,canUpdate:M})=>{const{formatMessage:p}=(0,Z.Z)(),[,r]=c,C=p({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:h});return e.createElement(k.Tr,{"aria-rowindex":o,key:s,...M?(0,n.X7)({fn:r.onClick}):{}},e.createElement(v.Td,{maxWidth:(0,n.Q1)(130)},e.createElement(O.Z,{ellipsis:!0,textColor:"neutral800"},d)),e.createElement(v.Td,{maxWidth:(0,n.Q1)(250)},e.createElement(O.Z,{ellipsis:!0,textColor:"neutral800"},l)),e.createElement(v.Td,null,e.createElement(O.Z,{textColor:"neutral800"},C)),e.createElement(v.Td,null,e.createElement(ne.k,{justifyContent:"flex-end",...n.UW},c.map((u,R)=>u?e.createElement(le.x,{key:u.label,paddingLeft:R===0?0:1},e.createElement(se.h,{onClick:u.onClick,label:u.label,noBorder:!0,icon:u.icon})):null))))};$.propTypes={id:L().number.isRequired,name:L().string.isRequired,description:L().string.isRequired,usersCount:L().number.isRequired,icons:L().array.isRequired,rowIndex:L().number.isRequired,canUpdate:L().bool},$.defaultProps={canUpdate:!1};const oe=$;var re=t(18172);const ie={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},de=(s,d)=>(0,re.ZP)(s,l=>{switch(d.type){case"ON_REMOVE_ROLES":{l.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{l.shouldRefetchData=!0,l.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{l.shouldRefetchData=!1,l.roleToDelete=null,l.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{l.roleToDelete=d.id;break}default:return l}}),ce=()=>{(0,n.go)();const{locale:s}=(0,Z.Z)(),d=(0,f.v9)(T._),{isLoading:l,allowedActions:{canCreate:h,canDelete:c,canRead:o,canUpdate:M}}=(0,n.ss)(d.settings.roles),{getData:p,roles:r,isLoading:C}=(0,ee.bF)(!1),[{query:u}]=(0,n.Kx)(),R=u?._q||"",{includes:D}=(0,n.L0)(s,{sensitivity:"base"}),P=(0,n.Xe)(s,{sensitivity:"base"}),j=(r||[]).filter(m=>D(m.name,R)||D(m.description,R)).sort((m,A)=>P.compare(m.name,A.name)||P.compare(m.description,A.description));return(0,e.useEffect)(()=>{!l&&o&&p()},[l,o,p]),{isLoadingForPermissions:l,canCreate:h,canDelete:c,canRead:o,canUpdate:M,isLoading:C,getData:p,sortedRoles:j,roles:r}},ue=({getData:s,canCreate:d,canDelete:l,canUpdate:h})=>{const{formatMessage:c}=(0,Z.Z)(),o=(0,n.lm)(),[M,p]=(0,e.useState)(!1),{push:r}=(0,_.k6)(),[{selectedRoles:C,showModalConfirmButtonLoading:u,roleToDelete:R},D]=(0,e.useReducer)(de,ie),{post:P}=(0,n.tg)(),j=async()=>{try{D({type:"ON_REMOVE_ROLES"}),await P("/admin/roles/batch-delete",{ids:[R]}),await s(),D({type:"RESET_DATA_TO_DELETE"})}catch(a){const i=q()(a,["response","payload","data","ids"],null);if(i&&Array.isArray(i)){const he=i.join(`
`);o({type:"warning",message:he})}else o({type:"warning",message:{id:"notification.error"}})}g()},m=(0,e.useCallback)(a=>{r(`/settings/roles/duplicate/${a}`)},[r]),A=()=>r("/settings/roles/new"),B=(0,e.useCallback)(a=>{D({type:"SET_ROLE_TO_DELETE",id:a}),g()},[]),g=()=>p(a=>!a),I=(0,e.useCallback)(a=>{r(`/settings/roles/${a}`)},[r]),H=(0,e.useCallback)((a,i)=>{a.preventDefault(),a.stopPropagation(),i.usersCount?o({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):B(i.id)},[o,B]),Q=(0,e.useCallback)((a,i)=>{a.preventDefault(),a.stopPropagation(),m(i.id)},[m]),Ee=(0,e.useCallback)(a=>[...d?[{onClick:i=>Q(i,a),label:c({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:e.createElement(G.Z,null)}]:[],...h?[{onClick:()=>I(a.id),label:c({id:"app.utils.edit",defaultMessage:"Edit"}),icon:e.createElement(J.Z,null)}]:[],...l?[{onClick:i=>H(i,a),label:c({id:"global.delete",defaultMessage:"Delete"}),icon:e.createElement(Y.Z,null)}]:[]],[c,H,Q,I,d,h,l]);return{handleNewRoleClick:A,getIcons:Ee,selectedRoles:C,isWarningDeleteAllOpened:M,showModalConfirmButtonLoading:u,handleToggleModal:g,handleDeleteData:j}},me=()=>{const{formatMessage:s}=(0,Z.Z)(),{isLoadingForPermissions:d,canCreate:l,canRead:h,canDelete:c,canUpdate:o,isLoading:M,getData:p,sortedRoles:r}=ce(),{handleNewRoleClick:C,getIcons:u,isWarningDeleteAllOpened:R,showModalConfirmButtonLoading:D,handleToggleModal:P,handleDeleteData:j}=ue({getData:p,canCreate:l,canDelete:c,canUpdate:o}),m=r.length+1,A=6;if(d)return e.createElement(y.o,null,e.createElement(n.dO,null));const B=s({id:"global.roles",defaultMessage:"roles"});return e.createElement(y.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(b.T,{primaryAction:l?e.createElement(W.z,{onClick:C,startIcon:e.createElement(V.Z,null),size:"S"},s({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})):null,title:B,subtitle:s({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),h&&e.createElement(U.Z,{startActions:e.createElement(n.m,{label:s({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:B})})}),h&&e.createElement(S.D,null,e.createElement(E.i,{colCount:A,rowCount:m,footer:l?e.createElement(F.c,{onClick:C,icon:e.createElement(V.Z,null)},s({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})):null},e.createElement(K.h,null,e.createElement(k.Tr,{"aria-rowindex":1},e.createElement(v.Th,null,e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},s({id:"global.name",defaultMessage:"Name"}))),e.createElement(v.Th,null,e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},s({id:"global.description",defaultMessage:"Description"}))),e.createElement(v.Th,null,e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},s({id:"global.users",defaultMessage:"Users"}))),e.createElement(v.Th,null,e.createElement(z.T,null,s({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(X.p,null,r?.map((g,I)=>e.createElement(oe,{key:g.id,id:g.id,name:g.name,description:g.description,usersCount:g.usersCount,icons:u(g),rowIndex:I+2,canUpdate:o})))),!m&&!M&&e.createElement(te,null)),e.createElement(n.QH,{isOpen:R,onConfirm:j,isConfirmButtonLoading:D,onToggleDialog:P}))},ge=()=>{const s=(0,f.v9)(T._);return e.createElement(n.O4,{permissions:s.settings.roles.main},e.createElement(me,null))}},36989:(N,x,t)=>{t.d(x,{Z:()=>f});var e=t(85893),n=t(11047);const f=({startActions:T,endActions:y})=>!T&&!y?null:(0,e.jsxs)(n.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(n.k,{gap:2,wrap:"wrap",children:T}),(0,e.jsx)(n.k,{gap:2,shrink:0,wrap:"wrap",children:y})]})},49386:(N,x,t)=>{t.d(x,{c:()=>S});var e=t(85893),n=t(1565),f=t(41580),T=t(70004),y=t(11047),b=t(75515);const W=(0,n.ZP)(f.x)`
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
    fill: ${({theme:E})=>E.colors.primary600};
  }
`,U=(0,n.ZP)(f.x)`
  border-radius: 0 0 ${({theme:E})=>E.borderRadius} ${({theme:E})=>E.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,S=({children:E,icon:F,...K})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(T.i,{}),(0,e.jsx)(U,{as:"button",background:"primary100",padding:5,...K,children:(0,e.jsxs)(y.k,{children:[(0,e.jsx)(W,{"aria-hidden":!0,background:"primary200",children:F}),(0,e.jsx)(f.x,{paddingLeft:3,children:(0,e.jsx)(b.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:E})})]})})]})}}]);
