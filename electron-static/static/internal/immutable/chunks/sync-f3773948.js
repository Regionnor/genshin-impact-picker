import{d as A,s as H,e as L,f as T,g as P,h as R,p as $,j as M,k as N,l as V,n as j,o as I,q as W,r as q,t as f,w as m,u as C,x as O,y as _,z as U,A as z,B as J}from"./app-stores-b9b5f9ca.js";import{H as g,B as K,A as r}from"./custom-banner-61a1f4b9.js";import{s as i,b as c}from"./index-123e2351.js";import{w as p}from"./index-0189b6d0.js";import{r as G,b as Y}from"./i18n-9a7a1fd0.js";import{c as Q}from"./api-cookie-d587b0da.js";const{clearIDB:X}=g,Z=async()=>{const e=await caches.keys();for(const a of e)await caches.delete(a);return!0},xe=async({clearCache:e=!1,keepSetting:a=!1}={})=>{if(await X(),e&&await Z(),A.set({point:null,selected:null}),H.set(!0),L.set(20),a){const k=i.get("config"),E=i.get("pity"),D=i.get("balance"),B=i.get("probabilityRates"),w=i.get("export");localStorage.removeItem("WishSimulator.App"),i.set("config",k),i.set("pity",E),i.set("balance",D),i.set("probabilityRates",B),w?.id&&i.set("export",w);return}const t=c.get("locale"),s=i.get("export");localStorage.removeItem("WishSimulator.App"),t&&c.set("locale",t),s?.id&&i.set("export",s);const{fates:o,genesis:b,primogem:v}=J;T.set(o),P.set(o),R.set(b),$.set(v),M.set(0),N.set(0),V.set(0),j.set(0),I.set({}),W.set(!1),c.set("storageVersion",q),c.set("version",`${f}-${m}`),C.set({patch:f,phase:m}),O.set(0),_.set(!1),U.set("default"),z.set({})},l=p({}),y=p(null),F=p(!1),n=p(!1),ee=()=>{const{id:e}=i.get("export"),a=e||`GI${G(111111111,999999999)}`,t=new Date;i.set("export",{id:a,date:t})},u=async()=>{const e=await K.getAll(),a=await g.getAllHistories(),t=Q.get("accessKey");ee();const s=i.getData(),o={banners:e,histories:a,settings:s,accessKey:t};return JSON.stringify(o)},Se=async()=>{const e=await u(),a=new Blob([e],{type:"text/plain"}),t=document.createElement("a"),s=new Date().toLocaleDateString();t.download=`WishSimulator.App_Backup_${s}.bin`,t.href=(window.webkitURL||window.URL).createObjectURL(a),t.dataset.downloadurl=["text/plain",t.download,t.href].join(":"),t.click()},te="application/octet-stream, application/json, text/plain",ae=e=>{const a=te.match(e.type),t=e.name.match(/.(bin|json|txt)$/);return a&&t},se=async e=>{try{const a=await e.text(),t=JSON.parse(a),{id:s}=t?.settings?.data?.export||{};return s?t:null}catch{return null}},h=async e=>{if(!ae(e))throw new Error("Not a valid Backup File");const t=await se(e);if(!t)throw new Error("Failed to parse imported file");return t},be=async e=>{const a=e[0],t=await h(a);return{file:a,parsedFile:t}},ve=()=>{const{isSupported:e}=Y(),a="chooseFileSystemEntries"in window,t="showSaveFilePicker"in window;return e&&(a||t)},ke=e=>isNaN(e)?"...B":`${(e/(1024*1024)).toFixed(2)}MB`,x=async e=>{if(!e)return l.set({});const{name:a,size:t,webkitRelativePath:s,lastModified:o}=await e.getFile();l.set({name:a,size:t,webkitRelativePath:s,lastModified:o})},ie=async e=>{const a={key:"savedFile",fileHandle:e};return await r.put(a)},Ee=async()=>{const{fileHandle:e}=await r.get("savedFile")||{};if(!e)return null;l.set({name:e.name}),y.set(e)},oe=async()=>{await r.delete("savedFile"),l.set({}),F.set(!1)},ne=async e=>{try{return await e.getFile()}catch{return oe(),!1}},De=async(e,{checkOnly:a=!1}={})=>{if(!e)return!1;const t={writable:!0,mode:"readwrite"};return a?await e.queryPermission(t)==="granted":await e.queryPermission(t)==="granted"||await e.requestPermission(t)==="granted"},re=()=>{const a=`WishSimulator.App_Backup_${new Date().toLocaleDateString()}.bin`;if("showSaveFilePicker"in window){const s={suggestedName:a,types:[{description:"Text file",accept:{"text/plain":[".bin"]}}]};return window.showSaveFilePicker(s)}const t={type:"save-file",accepts:[{description:"Text file",extensions:["bin"],mimeTypes:["text/plain"]}]};return window.chooseFileSystemEntries({opts:t})},S=async(e,a)=>{if(e.createWriter){const s=await e.createWriter();await s.write(0,a),await s.close();return}const t=await e.createWritable();await t.write(a),await t.close()},Be=async()=>{try{n.set(!0);const e=await re(),a=await u();return await S(e,a),await ie(e),x(e),y.set(e),F.set(!0),n.set(!1),e}catch(e){console.error("failed to save export",e),n.set(!1)}},ce=async()=>{try{n.set(!0);const{fileHandle:e}=await r.get("savedFile");if(!e)return n.set(!1);if(!await ne(e))throw new Error("Destination File does not exist, Auto Export will be turned off");const t=await u();await S(e,t),await x(e),n.set(!1)}catch(e){console.error("Auto Export Failed:",e.message),n.set(!1)}},le=async e=>{const{fileHandle:a}=await r.get("savedFile");if(await e.isSameEntry(a))throw new Error("You cannot import the currently exported file.");const s=await e.getFile(),o=await h(s);return{handle:e,file:s,parsedFile:o}},Ae=async e=>{const a=[...e].filter(t=>t.kind==="file").map(t=>t.getAsFileSystemHandle());for await(const t of a)if(t.kind==="file")return le(t)},pe=({to:e}={})=>{if(e==="local")return ce();e!="drive"},de=2500;let d=!1;const ue=async()=>{if(d)return;d=!0,await pe({to:"local"});const e=setTimeout(()=>{d=!1,clearTimeout(e)},de)},we=async()=>{},He=e=>{we(),e&&ue()};export{ve as F,F as a,ke as b,Z as c,te as d,y as e,xe as f,l as g,n as h,be as i,ne as j,Ee as k,Se as l,Be as m,Ae as r,He as s,pe as u,De as v};
