!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./dist",n(n.s=2)}([function(e,t){e.exports=React},function(e,t,n){var r;window,e.exports=(r=n(0),function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./dist",n(n.s=3)}([function(e,t){e.exports=r},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&r(t,e,n);return l(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.I18NProvider=t.useI18N=void 0;const o=u(n(0)),a=o.createContext(void 0);t.useI18N=()=>o.useContext(a),t.I18NProvider=e=>{const{bundles:n,children:r,markdownRules:l,lang:u}=e,i=t.useI18N();let c,s,f={},d=[];i&&(f=i.bundle,c=i.lang,s=i.resolveLanguageBundle,d=i.markdownRules);const b=(l||[]).filter(e=>!d.includes(e)).concat(d),[m,h]=o.useState(),p=u||c;if(!p)throw new Error("No `lang` prop specified");const _=o.useCallback(e=>Promise.all([new Promise(t=>{f&&e===c?t(f):s?s(p).then(t):t({})}),new Promise(t=>{n&&n[e]?n[e]().then(t):t({})})]).then(e=>{let t={};return e.forEach(e=>{t=Object.assign(Object.assign({},t),e)}),t}),[p,c,f,n,s]);if(o.useEffect(()=>{m||_(p).then(h)},[m,p,f,n,_]),!m)return null;const v={resolveLanguageBundle:_,lang:p,bundle:m,markdownRules:b};return o.default.createElement(a.Provider,{value:v},r)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultMarkdownRules=t.LinkRule=t.InlineCodeRule=t.StrikethroughRule=t.ItalicRule=t.BoldRule=t.transform=t.findRegex=void 0;const l=r(n(0));t.findRegex=(e,t)=>{const n=[];let r;const l=new RegExp(e,"g");for(;null!==(r=l.exec(t));)n.push({offsets:[r.index,r.index+r[0].length],array:r});return n};const u=(e,t)=>e.match.offsets[0]-t.match.offsets[0];t.transform=(e,n)=>{if(!n.length)return[e];const r=[],l=[];let o=e;if(n.forEach(e=>{t.findRegex(e.pattern,o).forEach(t=>{const n=Array.from({length:t.array[0].length}).map(()=>" ").join("");o=o.replace(t.array[0],n),l.push({match:t,rule:e})})}),o===e)return[e];o=e;let a=0;return l.sort(u).forEach((e,t)=>{const[n,u]=e.match.offsets,i=o.substring(a,n);if(i&&r.push(i),r.push(e.rule.onMatch(e.match.array)),a=u,t+1===l.length){const e=o.substring(a);e&&r.push(e)}}),r},t.BoldRule={pattern:/(\*\*|__)(.*?)\1/,onMatch:e=>l.default.createElement("strong",null,e[2])},t.ItalicRule={pattern:/(\*|_)(.*?)\1/,onMatch:e=>l.default.createElement("em",null,e[2])},t.StrikethroughRule={pattern:/~~(.*?)~~/,onMatch:e=>l.default.createElement("del",null,e[1])},t.InlineCodeRule={pattern:/`(.*?)`/,onMatch:e=>l.default.createElement("code",null,e[1])},t.LinkRule={pattern:/\[([^[]+)\](([^)]+))/,onMatch:e=>l.default.createElement("a",{href:e[2]},e[1])},t.DefaultMarkdownRules=[t.BoldRule,t.ItalicRule,t.InlineCodeRule,t.LinkRule,t.StrikethroughRule]},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),l=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),l(n(1),t),l(n(4),t),l(n(5),t),l(n(6),t),l(n(7),t),l(n(2),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&r(t,e,n);return l(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.withI18N=void 0;const o=u(n(0)),a=n(1),i=n(2);t.withI18N=function(e,t){return o.forwardRef((n,r)=>{const{bundle:l,markdownRules:u}=a.useI18N();let c=n;if(l&&n[t]){const e=n[t];let r="";if(e.constructor===Array){const[t,...n]=e;l[t]&&(r=l[t](...n))}else r=l[e],r||console.warn("No i18n value found for key: "+e);r&&(r=i.transform(r,u),c=Object.assign(Object.assign({},n),{children:r}))}return o.default.createElement(e,Object.assign({},c,{ref:r}))})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pluralize=t.formatCurrency=t.formatDate=void 0,t.formatDate=(e,t,n)=>new Intl.DateTimeFormat(n,t).format(e),t.formatCurrency=(e,t,n={style:"currency"},r)=>new Intl.NumberFormat(r,Object.assign(Object.assign({},n),{currency:t})).format(e),t.pluralize=(e,t,n,r)=>{const l=new Intl.PluralRules(r).select(e);switch(l){case"one":return`${e} ${t}`;case"other":return`${e} ${n}`}throw new Error(`Unable to match ${l}.`)}}]))},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&r(t,e,n);return l(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=u(n(0)),i=o(n(3)),c=n(1),s=n(4),f=o(n(5)),d=n(6);function b(){return a.default.createElement(c.I18NProvider,{lang:"en",bundles:s.RootBundle},a.default.createElement(m,null))}t.default=b;const m=()=>{const{lang:e,bundle:t}=c.useI18N();return a.default.createElement("div",{className:"App"},a.default.createElement("h1",null,t.hello," is set for ",e),a.default.createElement(h,null))},h=()=>a.default.createElement(c.I18NProvider,{bundles:f.default,lang:"de"},a.default.createElement("h2",null,"Sub Component"),a.default.createElement(p,null)),p=()=>{const{lang:e}=c.useI18N();return a.default.createElement(a.Fragment,null,a.default.createElement(d.Text,null,"Current lang: ",e),a.default.createElement("br",null),a.default.createElement(d.Text,{label:"hello"}),a.default.createElement("br",null),a.default.createElement(d.Text,{label:"markdown"}),a.default.createElement("br",null),a.default.createElement(d.Text,{label:"bye"}),a.default.createElement("br",null))};i.default.render(a.default.createElement(b,null),document.getElementById("app"))},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RootBundle=void 0;const r={hello:"Hi!"},l={hello:"Hallo",bye:"Tsch\xfcss",markdown:"This is **bold** and *italic*? And more **bold** and some `code` plus [this is a link](www.google.com). ~~test~~"};t.RootBundle={en:()=>Promise.resolve(r),de:()=>Promise.resolve(l)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r={en:()=>Promise.resolve({hello:"hello, nested!"})};t.default=r},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Text=void 0;const l=r(n(0)),u=n(1);t.Text=u.withI18N(e=>l.default.createElement("span",Object.assign({},e)),"label")}]);