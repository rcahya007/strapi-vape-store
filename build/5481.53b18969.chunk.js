"use strict";(self.webpackChunkvape_market=self.webpackChunkvape_market||[]).push([[5481],{7761:(S,r,t)=>{t.d(r,{pl:()=>A,aY:()=>M,q5:()=>I.q});var i=t(67294),n=t(80120),l=t(18172);const u={data:[],isLoading:!0},T=(s,a)=>(0,l.ZP)(s,e=>{switch(a.type){case"GET_DATA_SUCCEEDED":{e.data=a.data,e.isLoading=!1;break}case"GET_DATA_ERROR":{e.isLoading=!1;break}default:return e}}),A=({ssoEnabled:s})=>{const[a,e]=(0,i.useReducer)(T,u),m=(0,n.lm)(),{get:E}=(0,n.kY)();return(0,i.useEffect)(()=>{(async()=>{try{if(!s){e({type:"GET_DATA_SUCCEEDED",data:[]});return}const{data:c}=await E("/admin/providers");e({type:"GET_DATA_SUCCEEDED",data:c})}catch(c){console.error(c),e({type:"GET_DATA_ERROR"}),m({type:"warning",message:{id:"notification.error"}})}})()},[E,s,m]),a};var h=t(14293),d=t.n(h),v=t(86896),f=t(16550),I=t(71926);const g="strapi-notification-seat-limit",R="https://cloud.strapi.io/profile/billing",y="https://strapi.io/billing/request-seats",M=()=>{const{formatMessage:s}=(0,v.Z)();let{license:a,isError:e,isLoading:m}=(0,I.q)();const E=(0,n.lm)(),{pathname:L}=(0,f.TH)(),{enforcementUserCount:c,permittedSeats:p,licenseLimitStatus:o,isHostedOnStrapiCloud:D}=a;(0,i.useEffect)(()=>{if(e||m)return;const U=!d()(p)&&!window.sessionStorage.getItem(`${g}-${L}`)&&(o==="AT_LIMIT"||o==="OVER_LIMIT");let C;o==="OVER_LIMIT"?C="warning":o==="AT_LIMIT"&&(C="softWarning"),U&&E({type:C,message:s({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:o}),title:s({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:o,enforcementUserCount:c,permittedSeats:p}),link:{url:D?R:y,label:s({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:D})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${g}-${L}`,!0)}})},[E,a,L,s,m,p,o,c,D,e])}},71926:(S,r,t)=>{t.d(r,{q:()=>u});var i=t(67294),n=t(80120),l=t(88767);function u({enabled:O}={enabled:!0}){const{get:T}=(0,n.kY)(),{data:P,isError:A,isLoading:h}=(0,l.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:f}}=await T("/admin/license-limit-information");return f},{enabled:O}),d=P??{},v=i.useCallback(f=>(d?.features??[]).find(g=>g.name===f)?.options??{},[d?.features]);return{license:d,getFeature:v,isError:A,isLoading:h}}},17403:(S,r,t)=>{t.r(r),t.d(r,{UserListPageEE:()=>u});var i=t(67294),n=t(61611),l=t(7761);function u(){return(0,l.aY)(),i.createElement(n.W,null)}}}]);
