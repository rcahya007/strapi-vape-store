(self.webpackChunkvape_market=self.webpackChunkvape_market||[]).push([[5205],{25970:(b,E,s)=>{var a=s(63012),c=s(79095);function v(d,h){return a(d,h,function(y,m){return c(d,m)})}b.exports=v},92052:(b,E,s)=>{var a=s(42980),c=s(13218);function v(d,h,y,m,S,j){return c(d)&&c(h)&&(j.set(h,d),a(d,h,void 0,v,j),j.delete(h)),d}b.exports=v},66913:(b,E,s)=>{var a=s(96874),c=s(5976),v=s(92052),d=s(30236),h=c(function(y){return y.push(void 0,v),a(d,void 0,y)});b.exports=h},30236:(b,E,s)=>{var a=s(42980),c=s(21463),v=c(function(d,h,y,m){a(d,h,y,m)});b.exports=v},78718:(b,E,s)=>{var a=s(25970),c=s(99021),v=c(function(d,h){return d==null?{}:a(d,h)});b.exports=v},98601:(b,E,s)=>{var a=s(57406);function c(v,d){return v==null?!0:a(v,d)}b.exports=c},29558:(b,E,s)=>{"use strict";s.d(E,{Z:()=>vt});var a=s(97582),c=s(67294),v=s(74806),d=s(680),h=s(25687),y=s(16284),m=s(88222),S=s(39943);function j(t,i){return Object.keys(t).reduce(function(r,e){return r[e]=(0,a.pi)({timeZone:i},t[e]),r},{})}function N(t,i){var r=Object.keys((0,a.pi)((0,a.pi)({},t),i));return r.reduce(function(e,o){return e[o]=(0,a.pi)((0,a.pi)({},t[o]||{}),i[o]||{}),e},{})}function W(t,i){if(!i)return t;var r=y.C.formats;return(0,a.pi)((0,a.pi)((0,a.pi)({},r),t),{date:N(j(r.date,i),j(t.date||{},i)),time:N(j(r.time,i),j(t.time||{},i))})}var C=function(t,i,r,e,o){var n=t.locale,l=t.formats,u=t.messages,g=t.defaultLocale,R=t.defaultFormats,p=t.fallbackOnEmptyString,w=t.onError,F=t.timeZone,J=t.defaultRichTextElements;r===void 0&&(r={id:""});var V=r.id,D=r.defaultMessage;(0,h.kG)(!!V,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var M=String(V),L=u&&Object.prototype.hasOwnProperty.call(u,M)&&u[M];if(Array.isArray(L)&&L.length===1&&L[0].type===S.wD.literal)return L[0].value;if(!e&&L&&typeof L=="string"&&!J)return L.replace(/'\{(.*?)\}'/gi,"{$1}");if(e=(0,a.pi)((0,a.pi)({},J),e||{}),l=W(l,F),R=W(R,F),!L){if(p===!1&&L==="")return L;if((!D||n&&n.toLowerCase()!==g.toLowerCase())&&w(new m.$6(r,n)),D)try{var Z=i.getMessageFormat(D,g,R,o);return Z.format(e)}catch(k){return w(new m.X9('Error formatting default message for: "'.concat(M,'", rendering default message verbatim'),n,r,k)),typeof D=="string"?D:M}return M}try{var Z=i.getMessageFormat(L,n,l,(0,a.pi)({formatters:i},o||{}));return Z.format(e)}catch(k){w(new m.X9('Error formatting message: "'.concat(M,'", using ').concat(D?"default message":"id"," as fallback."),n,r,k))}if(D)try{var Z=i.getMessageFormat(D,g,R,o);return Z.format(e)}catch(k){w(new m.X9('Error formatting the default message for: "'.concat(M,'", rendering message verbatim'),n,r,k))}return typeof L=="string"?L:typeof D=="string"?D:M},f=s(82644),T=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function O(t,i,r){var e=t.locale,o=t.formats,n=t.onError;r===void 0&&(r={});var l=r.format,u=l&&(0,f.TB)(o,"number",l,n)||{},g=(0,f.L6)(r,T,u);return i(e,g)}function I(t,i,r,e){e===void 0&&(e={});try{return O(t,i,e).format(r)}catch(o){t.onError(new m.Qe("Error formatting number.",t.locale,o))}return String(r)}function P(t,i,r,e){e===void 0&&(e={});try{return O(t,i,e).formatToParts(r)}catch(o){t.onError(new m.Qe("Error formatting number.",t.locale,o))}return[]}var x=s(11050),A=["numeric","style"];function U(t,i,r){var e=t.locale,o=t.formats,n=t.onError;r===void 0&&(r={});var l=r.format,u=!!l&&(0,f.TB)(o,"relative",l,n)||{},g=(0,f.L6)(r,A,u);return i(e,g)}function Q(t,i,r,e,o){o===void 0&&(o={}),e||(e="second");var n=Intl.RelativeTimeFormat;n||t.onError(new x.u_(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,x.jK.MISSING_INTL_API));try{return U(t,i,o).format(r,e)}catch(l){t.onError(new m.Qe("Error formatting relative time.",t.locale,l))}return String(r)}var B=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function K(t,i,r,e){var o=t.locale,n=t.formats,l=t.onError,u=t.timeZone;e===void 0&&(e={});var g=e.format,R=(0,a.pi)((0,a.pi)({},u&&{timeZone:u}),g&&(0,f.TB)(n,i,g,l)),p=(0,f.L6)(e,B,R);return i==="time"&&!p.hour&&!p.minute&&!p.second&&!p.timeStyle&&!p.dateStyle&&(p=(0,a.pi)((0,a.pi)({},p),{hour:"numeric",minute:"numeric"})),r(o,p)}function _(t,i){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var o=r[0],n=r[1],l=n===void 0?{}:n,u=typeof o=="string"?new Date(o||0):o;try{return K(t,"date",i,l).format(u)}catch(g){t.onError(new m.Qe("Error formatting date.",t.locale,g))}return String(u)}function q(t,i){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var o=r[0],n=r[1],l=n===void 0?{}:n,u=typeof o=="string"?new Date(o||0):o;try{return K(t,"time",i,l).format(u)}catch(g){t.onError(new m.Qe("Error formatting time.",t.locale,g))}return String(u)}function tt(t,i){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var o=r[0],n=r[1],l=r[2],u=l===void 0?{}:l,g=t.timeZone,R=t.locale,p=t.onError,w=(0,f.L6)(u,B,g?{timeZone:g}:{});try{return i(R,w).formatRange(o,n)}catch(F){p(new m.Qe("Error formatting date time range.",t.locale,F))}return String(o)}function et(t,i){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var o=r[0],n=r[1],l=n===void 0?{}:n,u=typeof o=="string"?new Date(o||0):o;try{return K(t,"date",i,l).formatToParts(u)}catch(g){t.onError(new m.Qe("Error formatting date.",t.locale,g))}return[]}function rt(t,i){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var o=r[0],n=r[1],l=n===void 0?{}:n,u=typeof o=="string"?new Date(o||0):o;try{return K(t,"time",i,l).formatToParts(u)}catch(g){t.onError(new m.Qe("Error formatting time.",t.locale,g))}return[]}var at=["type"];function nt(t,i,r,e){var o=t.locale,n=t.onError;e===void 0&&(e={}),Intl.PluralRules||n(new x.u_(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,x.jK.MISSING_INTL_API));var l=(0,f.L6)(e,at);try{return i(o,l).select(r)}catch(u){n(new m.Qe("Error formatting plural.",o,u))}return"other"}var ot=["type","style"],G=Date.now();function it(t){return"".concat(G,"_").concat(t,"_").concat(G)}function st(t,i,r,e){e===void 0&&(e={});var o=z(t,i,r,e).reduce(function(n,l){var u=l.value;return typeof u!="string"?n.push(u):typeof n[n.length-1]=="string"?n[n.length-1]+=u:n.push(u),n},[]);return o.length===1?o[0]:o.length===0?"":o}function z(t,i,r,e){var o=t.locale,n=t.onError;e===void 0&&(e={});var l=Intl.ListFormat;l||n(new x.u_(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,x.jK.MISSING_INTL_API));var u=(0,f.L6)(e,ot);try{var g={},R=r.map(function(p,w){if(typeof p=="object"){var F=it(w);return g[F]=p,F}return String(p)});return i(o,u).formatToParts(R).map(function(p){return p.type==="literal"?p:(0,a.pi)((0,a.pi)({},p),{value:g[p.value]||p.value})})}catch(p){n(new m.Qe("Error formatting list.",o,p))}return r}var lt=["style","type","fallback","languageDisplay"];function ut(t,i,r,e){var o=t.locale,n=t.onError,l=Intl.DisplayNames;l||n(new x.u_(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,x.jK.MISSING_INTL_API));var u=(0,f.L6)(e,lt);try{return i(o,u).of(r)}catch(g){n(new m.Qe("Error formatting display name.",o,g))}}function ft(t){var i=t?t[Object.keys(t)[0]]:void 0;return typeof i=="string"}function mt(t){t.onWarn&&t.defaultRichTextElements&&ft(t.messages||{})&&t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function ct(t,i){var r=(0,f.ax)(i),e=(0,a.pi)((0,a.pi)({},f.Z0),t),o=e.locale,n=e.defaultLocale,l=e.onError;return o?!Intl.NumberFormat.supportedLocalesOf(o).length&&l?l(new m.gb('Missing locale data for locale: "'.concat(o,'" in Intl.NumberFormat. Using default locale: "').concat(n,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(o).length&&l&&l(new m.gb('Missing locale data for locale: "'.concat(o,'" in Intl.DateTimeFormat. Using default locale: "').concat(n,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(l&&l(new m.OV('"locale" was not configured, using "'.concat(n,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),e.locale=e.defaultLocale||"en"),mt(e),(0,a.pi)((0,a.pi)({},e),{formatters:r,formatNumber:I.bind(null,e,r.getNumberFormat),formatNumberToParts:P.bind(null,e,r.getNumberFormat),formatRelativeTime:Q.bind(null,e,r.getRelativeTimeFormat),formatDate:_.bind(null,e,r.getDateTimeFormat),formatDateToParts:et.bind(null,e,r.getDateTimeFormat),formatTime:q.bind(null,e,r.getDateTimeFormat),formatDateTimeRange:tt.bind(null,e,r.getDateTimeFormat),formatTimeToParts:rt.bind(null,e,r.getDateTimeFormat),formatPlural:nt.bind(null,e,r.getPluralRules),formatMessage:C.bind(null,e,r),$t:C.bind(null,e,r),formatList:st.bind(null,e,r.getListFormat),formatListToParts:z.bind(null,e,r.getListFormat),formatDisplayName:ut.bind(null,e,r.getDisplayNames)})}var dt=s(61092);function $(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}function X(t){return t&&Object.keys(t).reduce(function(i,r){var e=t[r];return i[r]=(0,dt.Gt)(e)?(0,d.dt)(e):e,i},{})}var H=function(t,i,r,e){for(var o=[],n=4;n<arguments.length;n++)o[n-4]=arguments[n];var l=X(e),u=C.apply(void 0,(0,a.ev)([t,i,r,l],o,!1));return Array.isArray(u)?c.Children.toArray(u):u},Y=function(t,i){var r=t.defaultRichTextElements,e=(0,a._T)(t,["defaultRichTextElements"]),o=X(r),n=ct((0,a.pi)((0,a.pi)((0,a.pi)({},d.Z0),e),{defaultRichTextElements:o}),i),l={locale:n.locale,timeZone:n.timeZone,fallbackOnEmptyString:n.fallbackOnEmptyString,formats:n.formats,defaultLocale:n.defaultLocale,defaultFormats:n.defaultFormats,messages:n.messages,onError:n.onError,defaultRichTextElements:o};return(0,a.pi)((0,a.pi)({},n),{formatMessage:H.bind(null,l,n.formatters),$t:H.bind(null,l,n.formatters)})},gt=function(t){(0,a.ZT)(i,t);function i(){var r=t!==null&&t.apply(this,arguments)||this;return r.cache=(0,f.Sn)(),r.state={cache:r.cache,intl:Y($(r.props),r.cache),prevConfig:$(r.props)},r}return i.getDerivedStateFromProps=function(r,e){var o=e.prevConfig,n=e.cache,l=$(r);return(0,d.wU)(o,l)?null:{intl:Y(l,n),prevConfig:l}},i.prototype.render=function(){return(0,d.lq)(this.state.intl),c.createElement(v.zt,{value:this.state.intl},this.props.children)},i.displayName="IntlProvider",i.defaultProps=d.Z0,i}(c.PureComponent);const vt=gt},49066:(b,E,s)=>{"use strict";s.d(E,{D:()=>v});var a=s(85893),c=s(41580);const v=({children:d})=>(0,a.jsx)(c.x,{paddingLeft:10,paddingRight:10,children:d})},53979:(b,E,s)=>{"use strict";s.d(E,{T:()=>N});var a=s(85893),c=s(67294),v=s(1565);const d=f=>{const T=(0,c.useRef)(null),[O,I]=(0,c.useState)(!0),P=([x])=>{I(x.isIntersecting)};return(0,c.useEffect)(()=>{const x=T.current,A=new IntersectionObserver(P,f);return x&&A.observe(T.current),()=>{x&&A.disconnect()}},[T,f]),[T,O]};var h=s(79698);const y=(f,T)=>{const O=(0,h.W)(T);(0,c.useLayoutEffect)(()=>{const I=new ResizeObserver(O);return Array.isArray(f)?f.forEach(P=>{P.current&&I.observe(P.current)}):f.current&&I.observe(f.current),()=>{I.disconnect()}},[f,O])};var m=s(41580),S=s(11047),j=s(75515);const N=f=>{const T=(0,c.useRef)(null),[O,I]=(0,c.useState)(null),[P,x]=d({root:null,rootMargin:"0px",threshold:0});return y(P,()=>{P.current&&I(P.current.getBoundingClientRect())}),(0,c.useEffect)(()=>{T.current&&I(T.current.getBoundingClientRect())},[T]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{height:O?.height},ref:P,children:x&&(0,a.jsx)(C,{ref:T,...f})}),!x&&(0,a.jsx)(C,{...f,sticky:!0,width:O?.width})]})};N.displayName="HeaderLayout";const W=(0,v.ZP)(m.x)`
  width: ${({width:f})=>f?`${f/16}rem`:void 0};
  z-index: ${({theme:f})=>f.zIndices[1]};
`,C=c.forwardRef(({navigationAction:f,primaryAction:T,secondaryAction:O,subtitle:I,title:P,sticky:x,width:A,...U},Q)=>{const B=typeof I=="string";return x?(0,a.jsx)(W,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:A,"data-strapi-header-sticky":!0,children:(0,a.jsxs)(S.k,{justifyContent:"space-between",children:[(0,a.jsxs)(S.k,{children:[f&&(0,a.jsx)(m.x,{paddingRight:3,children:f}),(0,a.jsxs)(m.x,{children:[(0,a.jsx)(j.Z,{variant:"beta",as:"h1",...U,children:P}),B?(0,a.jsx)(j.Z,{variant:"pi",textColor:"neutral600",children:I}):I]}),O?(0,a.jsx)(m.x,{paddingLeft:4,children:O}):null]}),(0,a.jsx)(S.k,{children:T?(0,a.jsx)(m.x,{paddingLeft:2,children:T}):void 0})]})}):(0,a.jsxs)(m.x,{ref:Q,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:f?6:8,background:"neutral100","data-strapi-header":!0,children:[f?(0,a.jsx)(m.x,{paddingBottom:2,children:f}):null,(0,a.jsxs)(S.k,{justifyContent:"space-between",children:[(0,a.jsxs)(S.k,{minWidth:0,children:[(0,a.jsx)(j.Z,{as:"h1",variant:"alpha",...U,children:P}),O?(0,a.jsx)(m.x,{paddingLeft:4,children:O}):null]}),T]}),B?(0,a.jsx)(j.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:I}):I]})})},185:(b,E,s)=>{"use strict";s.d(E,{o:()=>h});var a=s(85893),c=s(1565),v=s(41580);const d=(0,c.ZP)(v.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,h=({labelledBy:y="main-content-title",...m})=>(0,a.jsx)(d,{"aria-labelledby":y,as:"main",id:"main-content",tabIndex:-1,...m})},727:(b,E,s)=>{"use strict";s.d(E,{z:()=>h});var a=s(85893),c=s(1565),v=s(41580);const d=(0,c.ZP)(v.x)`
  text-decoration: none;

  &:focus {
    left: ${({theme:y})=>y.spaces[3]};
    top: ${({theme:y})=>y.spaces[3]};
  }
`,h=({children:y})=>(0,a.jsx)(d,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",left:"-100%",padding:3,position:"absolute",top:"-100%",hasRadius:!0,zIndex:9999,children:y})},38992:(b,E,s)=>{"use strict";s.d(E,{$:()=>d});const a={color:{alternative100:"#181826",alternative200:"#4a4a6a",alternative500:"#ac73e6",alternative600:"#ac73e6",alternative700:"#e0c1f4",buttonNeutral0:"#ffffff",buttonPrimary500:"#7b79ff",buttonPrimary600:"#4945ff",danger100:"#181826",danger200:"#4a4a6a",danger500:"#ee5e52",danger600:"#ee5e52",danger700:"#ee5e52",neutral0:"#212134",neutral100:"#181826",neutral1000:"#ffffff",neutral150:"#32324d",neutral200:"#4a4a6a",neutral300:"#666687",neutral400:"#a5a5ba",neutral500:"#c0c0cf",neutral600:"#a5a5ba",neutral700:"#eaeaef",neutral800:"#ffffff",neutral900:"#ffffff",primary100:"#181826",primary200:"#4a4a6a",primary500:"#4945ff",primary600:"#7b79ff",primary700:"#7b79ff",secondary100:"#181826",secondary200:"#4a4a6a",secondary500:"#66b7f1",secondary600:"#66b7f1",secondary700:"#b8e1ff",success100:"#181826",success200:"#4a4a6a",success500:"#5cb176",success600:"#5cb176",success700:"#c6f0c2",warning100:"#181826",warning200:"#4a4a6a",warning500:"#f29d41",warning600:"#f29d41",warning700:"#fae7b9"}},c={shadow:{filterShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",focus:"inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",focusShadow:"0px 0px 6px rgba(76, 191, 255, 0.75)",popupShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",tableShadow:"1px 1px 10px rgba(3, 3, 5, 0.2)"}};var v=s(2128);const d={colors:a.color,shadows:c.shadow,...v.x}}}]);