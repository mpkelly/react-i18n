import e,{createContext as t,useContext as n,useState as r,useEffect as a,useCallback as o,forwardRef as s}from"react";const c=(e,t)=>{const n=[];let r;const a=RegExp(e,"g");for(;null!==(r=a.exec(t));)n.push({offsets:[r.index,r.index+r[0].length],array:r});return n},l=(e,t)=>e.match.offsets[0]-t.match.offsets[0],u=(e,t)=>{if(!t.length)return[e];const n=[],r=[];let a=e;if(t.forEach(e=>{c(e.pattern,a).forEach(t=>{const n=Array.from({length:t.array[0].length}).map(()=>" ").join("");a=a.replace(t.array[0],n),r.push({match:t,rule:e})})}),a===e)return[e];a=e;let o=0;return r.sort(l).forEach((e,t)=>{const[s,c]=e.match.offsets,l=a.substring(o,s);if(l&&n.push(l),n.push(e.rule.onMatch(e.match.array,t)),o=c,t+1===r.length){const e=a.substring(o);e&&n.push(e)}}),n},h={pattern:/(\*\*|__)(.*?)\1/,onMatch:(t,n)=>e.createElement("strong",{key:n},t[2])},i={pattern:/(\*|_)(.*?)\1/,onMatch:(t,n)=>e.createElement("em",{key:n},t[2])},m={pattern:/~~(.*?)~~/,onMatch:(t,n)=>e.createElement("del",{key:n},t[1])},f={pattern:/`(.*?)`/,onMatch:(t,n)=>e.createElement("code",{key:n},t[1])},g={pattern:/\[([^\[]+)\]\(([^\)]+)\)/,onMatch:(t,n)=>e.createElement("a",{key:n,href:t[2]},t[1])},d=[h,i,f,m,g],p=t(void 0),b=()=>n(p),y=t=>{const{bundles:n,children:s,markdownRules:c,lang:l}=t,u=b();let h,i,m={},f=[];u&&(m=u.bundle,h=u.lang,i=u.resolveLanguageBundle,f=u.markdownRules);const g=(c||[]).filter(e=>!f.includes(e)).concat(f),[d,y]=r(),w=l||h;if(!w)throw Error("No `lang` prop specified");a(()=>{y(void 0)},[l]);const E=o(e=>Promise.all([new Promise(t=>{m&&e===h?t(m):i?i(w).then(t):t({})}),new Promise(t=>{n&&n[e]?n[e]().then(t):t({})})]).then(e=>{let t={};return e.forEach(e=>{t=Object.assign(Object.assign({},t),e)}),t}),[w,h,m,n,i]);return a(()=>{d||E(w).then(y)},[d,w,m,n,E]),d?e.createElement(p.Provider,{value:{resolveLanguageBundle:E,lang:w,bundle:d,markdownRules:g}},s):null};function w(t,n){return s((r,a)=>{const{bundle:o,markdownRules:s}=b();let c=r;if(o&&r[n]){const e=r[n];let t="";if(e.constructor===Array){const[n,...r]=e;o[n]&&(t=o[n](...r))}else t=o[e],t||console.warn("No i18n value found for key: "+e);t&&(t=u(t,s),c=Object.assign(Object.assign({},r),{children:t}))}return e.createElement(t,Object.assign({},c,{ref:a}))})}y.defaultProps={markdownRules:d};const E=(e,t,n)=>new Intl.DateTimeFormat(n,t).format(e),k=(e,t,n={style:"currency"},r)=>new Intl.NumberFormat(r,Object.assign(Object.assign({},n),{currency:t})).format(e),j=(e,t,n,r)=>{const a=new Intl.PluralRules(r).select(e);switch(a){case"one":return`${e} ${t}`;case"other":return`${e} ${n}`}throw Error(`Unable to match ${a}.`)};export{h as BoldRule,d as DefaultMarkdownRules,y as I18NProvider,f as InlineCodeRule,i as ItalicRule,g as LinkRule,m as StrikethroughRule,c as findRegex,k as formatCurrency,E as formatDate,j as pluralize,u as transform,b as useI18N,w as withI18N};
