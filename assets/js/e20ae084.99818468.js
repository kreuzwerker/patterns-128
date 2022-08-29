"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[181],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?i.createElement(h,a(a({ref:t},c),{},{components:r})):i.createElement(h,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7704:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=r(7462),n=(r(7294),r(4137));const o={},a="Match Utilization Requirements With Pre-Configured Servers",l={unversionedId:"catalog/cloud/match-utilization-requirements-with-pre-configured-server",id:"catalog/cloud/match-utilization-requirements-with-pre-configured-server",title:"Match Utilization Requirements With Pre-Configured Servers",description:"Version",source:"@site/docs/catalog/cloud/match-utilization-requirements-with-pre-configured-server.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/match-utilization-requirements-with-pre-configured-server",permalink:"/catalog/cloud/match-utilization-requirements-with-pre-configured-server",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/cloud/match-utilization-requirements-with-pre-configured-server.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Match Utilization Requirements of Virtual Machines (VMs)",permalink:"/catalog/cloud/match-utilization-requirements-of-vm"},next:{title:"Minimising the size of data transmitted with compression",permalink:"/catalog/cloud/minimising-data-size-transmitted-with-compression"}},s={},u=[{value:"Version",id:"version",level:2},{value:"Submitted By",id:"submitted-by",level:2},{value:"Published Date",id:"published-date",level:2},{value:"Tag Category",id:"tag-category",level:2},{value:"Tags",id:"tags",level:2},{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"match-utilization-requirements-with-pre-configured-servers"},"Match Utilization Requirements With Pre-Configured Servers"),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("p",null,"1.0"),(0,n.kt)("h2",{id:"submitted-by"},"Submitted By"),(0,n.kt)("p",null,"Bill Johnson (@dubrie)"),(0,n.kt)("h2",{id:"published-date"},"Published Date"),(0,n.kt)("p",null,"TBD"),(0,n.kt)("h2",{id:"tag-category"},"Tag Category"),(0,n.kt)("p",null,"Cloud"),(0,n.kt)("h2",{id:"tags"},"Tags"),(0,n.kt)("p",null,"Compute, Cloud Engineer, Small"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"It's better to have one VM running at a higher utilization than two running at low utilization rates. This is both from an energy proportionality angle. 2 servers running at low utilization rates will consume more energy than one server running at a high rate of utilization. But also, from an embodied carbon angle, the unused capacity on the underutilized server could be more efficiently used for another task or process."),(0,n.kt)("h2",{id:"solution"},"Solution"),(0,n.kt)("p",null,"Rightsize your machine by selecting a pre-configured server that better matches the utilization requirements of the process."),(0,n.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R")),(0,n.kt)("p",null,"With respect to the SCI equation. Rightsizing oversized VMs will impact two parts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"M"),": By reducing the total number of servers required to run a process, we reduce the total embodied carbon, the ",(0,n.kt)("inlineCode",{parentName:"li"},"M")," of the equation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"E"),": Rightsizing oversized VMs will ",(0,n.kt)("strong",{parentName:"li"},"increase")," the total server utilization. The more a server is utilized, the more efficient it becomes at turning energy into useful operations. Therefore rightsizing VMs should reduce the energy consumption of your processes, and consequently, the ",(0,n.kt)("inlineCode",{parentName:"li"},"E")," number should decrease.")),(0,n.kt)("h2",{id:"assumptions"},"Assumptions"),(0,n.kt)("p",null,"If we chose an oversized VM because ",(0,n.kt)("em",{parentName:"p"},"occasionally")," there is a burst of work, a peak load, then undersizing them will reduce the headroom available to handle the peak traffic. A better solution would be to consider an auto-scaling architecture that would automatically scale the number of VM."),(0,n.kt)("h2",{id:"considerations"},"Considerations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It may reduce your cloud bill as reducing the spec of your VMs will cost less."),(0,n.kt)("li",{parentName:"ul"},"If you do not have an auto-scaling architecture, there is less overhead for handling spikes in load.")))}d.isMDXComponent=!0}}]);