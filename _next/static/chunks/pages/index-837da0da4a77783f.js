(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4369)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,l=n(7273).Z,r=o(n(7294)),u=n(1003),a=n(7795),f=n(4465),i=n(2692),c=n(8245),s=n(9246),d=n(227),p=n(3468);let h=new Set;function v(e,t,n,o){if(u.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let l=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,r=t+"%"+n+"%"+l;if(h.has(r))return;h.add(r)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function y(e){return"string"==typeof e?e:a.formatUrl(e)}let _=r.default.forwardRef(function(e,t){let n,o;let{href:a,as:h,children:_,prefetch:b,passHref:g,replace:m,shallow:j,scroll:C,locale:M,onClick:E,onMouseEnter:k,onTouchStart:P,legacyBehavior:x=!1}=e,O=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=_,x&&("string"==typeof n||"number"==typeof n)&&(n=r.default.createElement("a",null,n));let w=!1!==b,S=r.default.useContext(i.RouterContext),L=r.default.useContext(c.AppRouterContext),T=null!=S?S:L,I=!S,{href:N,as:R}=r.default.useMemo(()=>{if(!S){let e=y(a);return{href:e,as:h?y(h):e}}let[t,n]=u.resolveHref(S,a,!0);return{href:t,as:h?u.resolveHref(S,h):n||t}},[S,a,h]),D=r.default.useRef(N),K=r.default.useRef(R);x&&(o=r.default.Children.only(n));let U=x?o&&"object"==typeof o&&o.ref:t,[H,A,B]=s.useIntersection({rootMargin:"200px"}),X=r.default.useCallback(e=>{(K.current!==R||D.current!==N)&&(B(),K.current=R,D.current=N),H(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[R,U,N,B,H]);r.default.useEffect(()=>{T&&A&&w&&v(T,N,R,{locale:M})},[R,N,A,M,w,null==S?void 0:S.locale,T]);let Z={ref:X,onClick(e){x||"function"!=typeof E||E(e),x&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,n,o,l,a,f,i,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[l?"replace":"push"](n,o,{shallow:a,locale:i,scroll:f}):t[l?"replace":"push"](o||n,{forceOptimisticNavigation:!s})};c?r.default.startTransition(h):h()}(e,T,N,R,m,j,C,M,I,w)},onMouseEnter(e){x||"function"!=typeof k||k(e),x&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),T&&(w||!I)&&v(T,N,R,{locale:M,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){x||"function"!=typeof P||P(e),x&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),T&&(w||!I)&&v(T,N,R,{locale:M,priority:!0,bypassPrefetchedCheck:!0})}};if(!x||g||"a"===o.type&&!("href"in o.props)){let q=void 0!==M?M:null==S?void 0:S.locale,z=(null==S?void 0:S.isLocaleDomain)&&d.getDomainLocale(R,q,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);Z.href=z||p.addBasePath(f.addLocale(R,q,null==S?void 0:S.defaultLocale))}return x?r.default.cloneElement(o,Z):r.default.createElement("a",Object.assign({},O,Z),n)});t.default=_,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:f}=e,i=f||!r,[c,s]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(r){if(!i&&!c&&d&&d.tagName){let e=function(e,t,n){let{id:o,observer:l,elements:r}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=u.get(o)))return t;let l=new Map,r=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:r,elements:l},a.push(n),u.set(n,t),t}(n);return r.set(e,t),l.observe(e),function(){if(r.delete(e),l.unobserve(e),0===r.size){l.disconnect(),u.delete(o);let t=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&a.splice(t,1)}}}(d,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!c){let o=l.requestIdleCallback(()=>s(!0));return()=>l.cancelIdleCallback(o)}},[d,i,n,t,c]);let h=o.useCallback(()=>{s(!1)},[]);return[p,c,h]};var o=n(7294),l=n(4686);let r="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4369:function(e,t,n){"use strict";n.r(t);var o=n(5893),l=n(1664),r=n.n(l);let u=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:"Welcome to Next.js!"}),(0,o.jsx)(r(),{href:"/linkSample",children:(0,o.jsx)("a",{children:"link Sample Page"})})]});t.default=u},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);