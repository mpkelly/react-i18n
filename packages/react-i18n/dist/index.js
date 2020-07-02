!function(e,t){"use strict";const n=(e,t)=>{const n=[];let r;const a=RegExp(e,"g");for(;null!==(r=a.exec(t));)n.push({offsets:[r.index,r.index+r[0].length],array:r});return n},r=(e,t)=>e.match.offsets[0]-t.match.offsets[0],a=(e,t)=>{if(!t.length)return[e];const a=[],l=[];let o=e;if(t.forEach(e=>{n(e.pattern,o).forEach(t=>{const n=Array.from({length:t.array[0].length}).map(()=>" ").join("");o=o.replace(t.array[0],n),l.push({match:t,rule:e})})}),o===e)return[e];o=e;let s=0;return l.sort(r).forEach((e,t)=>{const[n,r]=e.match.offsets,c=o.substring(s,n);if(c&&a.push(c),a.push(e.rule.onMatch(e.match.array)),s=r,t+1===l.length){const e=o.substring(s);e&&a.push(e)}}),a},l={pattern:/(\*\*|__)(.*?)\1/,onMatch:e=>t.createElement("strong",null,e[2])},o={pattern:/(\*|_)(.*?)\1/,onMatch:e=>t.createElement("em",null,e[2])},s={pattern:/~~(.*?)~~/,onMatch:e=>t.createElement("del",null,e[1])},c={pattern:/`(.*?)`/,onMatch:e=>t.createElement("code",null,e[1])},u={pattern:/\[([^\[]+)\]\(([^\)]+)\)/,onMatch:e=>t.createElement("a",{href:e[2]},e[1])},i=[l,o,c,u,s],f=t.createContext(void 0),h=()=>t.useContext(f),m=e=>{const{bundles:n,children:r,markdownRules:a,lang:l}=e,o=h();let s,c,u={},i=[];o&&(u=o.bundle,s=o.lang,c=o.resolveLanguageBundle,i=o.markdownRules);const m=(a||[]).filter(e=>!i.includes(e)).concat(i),[d,g]=t.useState(),p=l||s;if(!p)throw Error("No `lang` prop specified");t.useEffect(()=>{g(void 0)},[e.lang]);const w=t.useCallback(e=>Promise.all([new Promise(t=>{u&&e===s?t(u):c?c(p).then(t):t({})}),new Promise(t=>{n&&n[e]?n[e]().then(t):t({})})]).then(e=>{let t={};return e.forEach(e=>{t=Object.assign(Object.assign({},t),e)}),t}),[p,s,u,n,c]);return t.useEffect(()=>{d||w(p).then(g)},[d,p,u,n,w]),d?t.createElement(f.Provider,{value:{resolveLanguageBundle:w,lang:p,bundle:d,markdownRules:m}},r):null};m.defaultProps={markdownRules:i},e.BoldRule=l,e.DefaultMarkdownRules=i,e.I18NProvider=m,e.InlineCodeRule=c,e.ItalicRule=o,e.LinkRule=u,e.StrikethroughRule=s,e.findRegex=n,e.formatCurrency=(e,t,n={style:"currency"},r)=>new Intl.NumberFormat(r,Object.assign(Object.assign({},n),{currency:t})).format(e),e.formatDate=(e,t,n)=>new Intl.DateTimeFormat(n,t).format(e),e.pluralize=(e,t,n,r)=>{const a=new Intl.PluralRules(r).select(e);switch(a){case"one":return`${e} ${t}`;case"other":return`${e} ${n}`}throw Error(`Unable to match ${a}.`)},e.transform=a,e.useI18N=h,e.withI18N=function(e,n){return t.forwardRef((r,l)=>{const{bundle:o,markdownRules:s}=h();let c=r;if(o&&r[n]){const e=r[n];let t="";if(e.constructor===Array){const[n,...r]=e;o[n]&&(t=o[n](...r))}else t=o[e],t||console.warn("No i18n value found for key: "+e);t&&(t=a(t,s),c=Object.assign(Object.assign({},r),{children:t}))}return t.createElement(e,Object.assign({},c,{ref:l}))})}}({},React);
