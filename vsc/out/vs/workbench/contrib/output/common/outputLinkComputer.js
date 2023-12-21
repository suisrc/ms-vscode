/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/(function(){var M=["require","exports","vs/base/common/platform","vs/base/common/strings","vs/base/common/extpath","vs/base/common/network","vs/base/common/uri","vs/base/common/path","vs/base/common/resources","vs/base/common/types","vs/base/common/errors","vs/workbench/contrib/output/common/outputLinkComputer","vs/editor/common/core/range"],U=function(k){for(var e=[],$=0,a=k.length;$<a;$++)e[$]=M[k[$]];return e};define(M[4],U([0,1,7,2,3,9]),function(k,e,$,a,d,b){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$_f=e.$$f=e.$0f=e.$9f=e.$8f=e.$7f=e.$6f=e.$5f=e.$4f=e.$3f=e.$2f=e.$1f=e.$Zf=e.$Yf=e.$Xf=e.$Wf=void 0;function h(n){return n===47||n===92}e.$Wf=h;function C(n){return n.replace(/[\\/]/g,$.$gc.sep)}e.$Xf=C;function A(n){return n.indexOf("/")===-1&&(n=C(n)),/^[a-zA-Z]:(\/|$)/.test(n)&&(n="/"+n),n}e.$Yf=A;function w(n,l=$.$gc.sep){if(!n)return"";const g=n.length,m=n.charCodeAt(0);if(h(m)){if(h(n.charCodeAt(1))&&!h(n.charCodeAt(2))){let v=3;const O=v;for(;v<g&&!h(n.charCodeAt(v));v++);if(O!==v&&!h(n.charCodeAt(v+1))){for(v+=1;v<g;v++)if(h(n.charCodeAt(v)))return n.slice(0,v+1).replace(/[\\/]/g,l)}}return l}else if(u(m)&&n.charCodeAt(1)===58)return h(n.charCodeAt(2))?n.slice(0,2)+l:n.slice(0,2);let P=n.indexOf("://");if(P!==-1){for(P+=3;P<g;P++)if(h(n.charCodeAt(P)))return n.slice(0,P+1)}return""}e.$Zf=w;function R(n){if(!a.$i||!n||n.length<5)return!1;let l=n.charCodeAt(0);if(l!==92||(l=n.charCodeAt(1),l!==92))return!1;let g=2;const m=g;for(;g<n.length&&(l=n.charCodeAt(g),l!==92);g++);return!(m===g||(l=n.charCodeAt(g+1),isNaN(l)||l===92))}e.$1f=R;const T=/[\\/:\*\?"<>\|]/g,f=/[\\/]/g,r=/^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])(\.(.*?))?$/i;function t(n,l=a.$i){const g=l?T:f;return!(!n||n.length===0||/^\s+$/.test(n)||(g.lastIndex=0,g.test(n))||l&&r.test(n)||n==="."||n===".."||l&&n[n.length-1]==="."||l&&n.length!==n.trim().length||n.length>255)}e.$2f=t;function i(n,l,g){const m=n===l;return!g||m?m:!n||!l?!1:(0,d.$8e)(n,l)}e.$3f=i;function c(n,l,g,m=$.sep){if(n===l)return!0;if(!n||!l||l.length>n.length)return!1;if(g){if(!(0,d.$9e)(n,l))return!1;if(l.length===n.length)return!0;let v=l.length;return l.charAt(l.length-1)===m&&v--,n.charAt(v)===m}return l.charAt(l.length-1)!==m&&(l+=m),n.indexOf(l)===0}e.$4f=c;function u(n){return n>=65&&n<=90||n>=97&&n<=122}e.$5f=u;function o(n,l){return a.$i&&n.endsWith(":")&&(n+=$.sep),(0,$.$ic)(n)||(n=(0,$.$jc)(l,n)),n=(0,$.$hc)(n),a.$i?(n=(0,d.$Qe)(n,$.sep),n.endsWith(":")&&(n+=$.sep)):(n=(0,d.$Qe)(n,$.sep),n||(n=$.sep)),n}e.$6f=o;function s(n){const l=(0,$.$hc)(n);return a.$i?n.length>3?!1:y(l)&&(n.length===2||l.charCodeAt(2)===92):l===$.$gc.sep}e.$7f=s;function y(n,l=a.$i){return l?u(n.charCodeAt(0))&&n.charCodeAt(1)===58:!1}e.$8f=y;function I(n,l=a.$i){return y(n,l)?n[0]:void 0}e.$9f=I;function N(n,l,g){return l.length>n.length?-1:n===l?0:(g&&(n=n.toLowerCase(),l=l.toLowerCase()),n.indexOf(l))}e.$0f=N;function L(n){const l=n.split(":");let g,m,P;for(const v of l){const O=Number(v);(0,b.$If)(O)?m===void 0?m=O:P===void 0&&(P=O):g=g?[g,v].join(":"):v}if(!g)throw new Error("Format for `--goto` should be: `FILE:LINE(:COLUMN)`");return{path:g,line:m!==void 0?m:void 0,column:P!==void 0?P:m!==void 0?1:void 0}}e.$$f=L;const q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",E="BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789";function j(n,l,g=8){let m="";for(let v=0;v<g;v++){let O;v===0&&a.$i&&!l&&(g===3||g===4)?O=E:O=q,m+=O.charAt(Math.floor(Math.random()*O.length))}let P;return l?P=`${l}-${m}`:P=m,n?(0,$.$jc)(n,P):P}e.$_f=j}),define(M[5],U([0,1,10,2,3,6]),function(k,e,$,a,d,b){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.COI=e.$kg=e.$jg=e.$ig=e.$hg=e.$gg=e.$fg=e.$eg=e.$dg=e.$cg=e.$bg=e.$ag=e.Schemas=void 0;var h;(function(f){f.inMemory="inmemory",f.vscode="vscode",f.internal="private",f.walkThrough="walkThrough",f.walkThroughSnippet="walkThroughSnippet",f.http="http",f.https="https",f.file="file",f.mailto="mailto",f.untitled="untitled",f.data="data",f.command="command",f.vscodeRemote="vscode-remote",f.vscodeRemoteResource="vscode-remote-resource",f.vscodeManagedRemoteResource="vscode-managed-remote-resource",f.vscodeUserData="vscode-userdata",f.vscodeCustomEditor="vscode-custom-editor",f.vscodeNotebookCell="vscode-notebook-cell",f.vscodeNotebookCellMetadata="vscode-notebook-cell-metadata",f.vscodeNotebookCellOutput="vscode-notebook-cell-output",f.vscodeInteractiveInput="vscode-interactive-input",f.vscodeSettings="vscode-settings",f.vscodeWorkspaceTrust="vscode-workspace-trust",f.vscodeTerminal="vscode-terminal",f.vscodeChatSesssion="vscode-chat-editor",f.webviewPanel="webview-panel",f.vscodeWebview="vscode-webview",f.extension="extension",f.vscodeFileResource="vscode-file",f.tmp="tmp",f.vsls="vsls",f.vscodeSourceControl="vscode-scm"})(h||(e.Schemas=h={}));function C(f,r){return b.URI.isUri(f)?(0,d.$8e)(f.scheme,r):(0,d.$9e)(f,r+":")}e.$ag=C;function A(f,...r){return r.some(t=>C(f,t))}e.$bg=A,e.$cg="vscode-tkn",e.$dg="tkn";class w{constructor(){this.a=Object.create(null),this.b=Object.create(null),this.c=Object.create(null),this.d="http",this.e=null,this.f=`/${h.vscodeRemoteResource}`}setPreferredWebSchema(r){this.d=r}setDelegate(r){this.e=r}setServerRootPath(r){this.f=`${r}/${h.vscodeRemoteResource}`}set(r,t,i){this.a[r]=t,this.b[r]=i}setConnectionToken(r,t){this.c[r]=t}getPreferredWebSchema(){return this.d}rewrite(r){if(this.e)try{return this.e(r)}catch(s){return $.$1(s),r}const t=r.authority;let i=this.a[t];i&&i.indexOf(":")!==-1&&i.indexOf("[")===-1&&(i=`[${i}]`);const c=this.b[t],u=this.c[t];let o=`path=${encodeURIComponent(r.path)}`;return typeof u=="string"&&(o+=`&${e.$dg}=${encodeURIComponent(u)}`),b.URI.from({scheme:a.$o?this.d:h.vscodeRemoteResource,authority:`${i}:${c}`,path:this.f,query:o})}}e.$eg=new w,e.$fg="vs/../../extensions",e.$gg="vs/../../node_modules",e.$hg="vs/../../node_modules.asar",e.$ig="vs/../../node_modules.asar.unpacked",e.$jg="vscode-app";class R{static{this.a=e.$jg}asBrowserUri(r){const t=this.b(r,k);return this.uriToBrowserUri(t)}uriToBrowserUri(r){return r.scheme===h.vscodeRemote?e.$eg.rewrite(r):r.scheme===h.file&&(a.$m||a.$q===`${h.vscodeFileResource}://${R.a}`)?r.with({scheme:h.vscodeFileResource,authority:r.authority||R.a,query:null,fragment:null}):r}asFileUri(r){const t=this.b(r,k);return this.uriToFileUri(t)}uriToFileUri(r){return r.scheme===h.vscodeFileResource?r.with({scheme:h.file,authority:r.authority!==R.a?r.authority:null,query:null,fragment:null}):r}b(r,t){return b.URI.isUri(r)?r:b.URI.parse(t.toUrl(r))}}e.$kg=new R;var T;(function(f){const r=new Map([["1",{"Cross-Origin-Opener-Policy":"same-origin"}],["2",{"Cross-Origin-Embedder-Policy":"require-corp"}],["3",{"Cross-Origin-Opener-Policy":"same-origin","Cross-Origin-Embedder-Policy":"require-corp"}]]);f.CoopAndCoep=Object.freeze(r.get("3"));const t="vscode-coi";function i(u){let o;typeof u=="string"?o=new URL(u).searchParams:u instanceof URL?o=u.searchParams:b.URI.isUri(u)&&(o=new URL(u.toString(!0)).searchParams);const s=o?.get(t);if(s)return r.get(s)}f.getHeadersFromQuery=i;function c(u,o,s){if(!globalThis.crossOriginIsolated)return;const y=o&&s?"3":s?"2":"1";u instanceof URLSearchParams?u.set(t,y):u[t]=y}f.addSearchParam=c})(T||(e.COI=T={}))}),define(M[8],U([0,1,4,5,7,2,3,6]),function(k,e,$,a,d,b,h,C){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$Ng=e.DataUri=e.$Mg=e.$Lg=e.$Kg=e.$Jg=e.$Ig=e.$Hg=e.$Gg=e.$Fg=e.$Eg=e.$Dg=e.$Cg=e.$Bg=e.$Ag=e.$zg=e.$yg=e.$xg=e.$wg=e.$vg=e.$ug=e.$tg=e.$sg=e.$rg=void 0;function A(r){return(0,C.$wc)(r,!0)}e.$rg=A;class w{constructor(t){this.a=t}compare(t,i,c=!1){return t===i?0:(0,h.$1e)(this.getComparisonKey(t,c),this.getComparisonKey(i,c))}isEqual(t,i,c=!1){return t===i?!0:!t||!i?!1:this.getComparisonKey(t,c)===this.getComparisonKey(i,c)}getComparisonKey(t,i=!1){return t.with({path:this.a(t)?t.path.toLowerCase():void 0,fragment:i?null:void 0}).toString()}ignorePathCasing(t){return this.a(t)}isEqualOrParent(t,i,c=!1){if(t.scheme===i.scheme){if(t.scheme===a.Schemas.file)return $.$4f(A(t),A(i),this.a(t))&&t.query===i.query&&(c||t.fragment===i.fragment);if((0,e.$Ig)(t.authority,i.authority))return $.$4f(t.path,i.path,this.a(t),"/")&&t.query===i.query&&(c||t.fragment===i.fragment)}return!1}joinPath(t,...i){return C.URI.joinPath(t,...i)}basenameOrAuthority(t){return(0,e.$Ag)(t)||t.authority}basename(t){return d.$gc.basename(t.path)}extname(t){return d.$gc.extname(t.path)}dirname(t){if(t.path.length===0)return t;let i;return t.scheme===a.Schemas.file?i=C.URI.file(d.$mc(A(t))).path:(i=d.$gc.dirname(t.path),t.authority&&i.length&&i.charCodeAt(0)!==47&&(console.error(`dirname("${t.toString})) resulted in a relative path`),i="/")),t.with({path:i})}normalizePath(t){if(!t.path.length)return t;let i;return t.scheme===a.Schemas.file?i=C.URI.file(d.$hc(A(t))).path:i=d.$gc.normalize(t.path),t.with({path:i})}relativePath(t,i){if(t.scheme!==i.scheme||!(0,e.$Ig)(t.authority,i.authority))return;if(t.scheme===a.Schemas.file){const o=d.$lc(A(t),A(i));return b.$i?$.$Xf(o):o}let c=t.path||"/";const u=i.path||"/";if(this.a(t)){let o=0;for(const s=Math.min(c.length,u.length);o<s&&!(c.charCodeAt(o)!==u.charCodeAt(o)&&c.charAt(o).toLowerCase()!==u.charAt(o).toLowerCase());o++);c=u.substr(0,o)+c.substr(o)}return d.$gc.relative(c,u)}resolvePath(t,i){if(t.scheme===a.Schemas.file){const c=C.URI.file(d.$kc(A(t),i));return t.with({authority:c.authority,path:c.path})}return i=$.$Yf(i),t.with({path:d.$gc.resolve(t.path,i)})}isAbsolutePath(t){return!!t.path&&t.path[0]==="/"}isEqualAuthority(t,i){return t===i||t!==void 0&&i!==void 0&&(0,h.$8e)(t,i)}hasTrailingPathSeparator(t,i=d.sep){if(t.scheme===a.Schemas.file){const c=A(t);return c.length>$.$Zf(c).length&&c[c.length-1]===i}else{const c=t.path;return c.length>1&&c.charCodeAt(c.length-1)===47&&!/^[a-zA-Z]:(\/$|\\$)/.test(t.fsPath)}}removeTrailingPathSeparator(t,i=d.sep){return(0,e.$Jg)(t,i)?t.with({path:t.path.substr(0,t.path.length-1)}):t}addTrailingPathSeparator(t,i=d.sep){let c=!1;if(t.scheme===a.Schemas.file){const u=A(t);c=u!==void 0&&u.length===$.$Zf(u).length&&u[u.length-1]===i}else{i="/";const u=t.path;c=u.length===1&&u.charCodeAt(u.length-1)===47}return!c&&!(0,e.$Jg)(t,i)?t.with({path:t.path+"/"}):t}}e.$sg=w,e.$tg=new w(()=>!1),e.$ug=new w(r=>r.scheme===a.Schemas.file?!b.$k:!0),e.$vg=new w(r=>!0),e.$wg=e.$tg.isEqual.bind(e.$tg),e.$xg=e.$tg.isEqualOrParent.bind(e.$tg),e.$yg=e.$tg.getComparisonKey.bind(e.$tg),e.$zg=e.$tg.basenameOrAuthority.bind(e.$tg),e.$Ag=e.$tg.basename.bind(e.$tg),e.$Bg=e.$tg.extname.bind(e.$tg),e.$Cg=e.$tg.dirname.bind(e.$tg),e.$Dg=e.$tg.joinPath.bind(e.$tg),e.$Eg=e.$tg.normalizePath.bind(e.$tg),e.$Fg=e.$tg.relativePath.bind(e.$tg),e.$Gg=e.$tg.resolvePath.bind(e.$tg),e.$Hg=e.$tg.isAbsolutePath.bind(e.$tg),e.$Ig=e.$tg.isEqualAuthority.bind(e.$tg),e.$Jg=e.$tg.hasTrailingPathSeparator.bind(e.$tg),e.$Kg=e.$tg.removeTrailingPathSeparator.bind(e.$tg),e.$Lg=e.$tg.addTrailingPathSeparator.bind(e.$tg);function R(r,t){const i=[];for(let c=0;c<r.length;c++){const u=t(r[c]);r.some((o,s)=>s===c?!1:(0,e.$xg)(u,t(o)))||i.push(r[c])}return i}e.$Mg=R;var T;(function(r){r.META_DATA_LABEL="label",r.META_DATA_DESCRIPTION="description",r.META_DATA_SIZE="size",r.META_DATA_MIME="mime";function t(i){const c=new Map;i.path.substring(i.path.indexOf(";")+1,i.path.lastIndexOf(";")).split(";").forEach(s=>{const[y,I]=s.split(":");y&&I&&c.set(y,I)});const o=i.path.substring(0,i.path.indexOf(";"));return o&&c.set(r.META_DATA_MIME,o),c}r.parseMetaData=t})(T||(e.DataUri=T={}));function f(r,t,i){if(t){let c=r.path;return c&&c[0]!==d.$gc.sep&&(c=d.$gc.sep+c),r.with({scheme:i,authority:t,path:c})}return r.with({scheme:i})}e.$Ng=f}),define(M[11],U([0,1,6,4,8,3,12,2,5]),function(k,e,$,a,d,b,h,C,A){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.create=e.OutputLinkComputer=void 0;class w{constructor(f,r){this.b=f,this.a=new Map,this.c(r)}c(f){const r=f.workspaceFolders.sort((t,i)=>i.length-t.length).map(t=>$.URI.parse(t));for(const t of r){const i=w.createPatterns(t);this.a.set(t,i)}}d(f){return this.b.getMirrorModels().find(t=>t.uri.toString()===f)}computeLinks(f){const r=this.d(f);if(!r)return[];const t=[],i=b.$Ve(r.getValue());for(const[c,u]of this.a){const o={toResource:s=>typeof s=="string"?d.$Dg(c,s):null};for(let s=0,y=i.length;s<y;s++)t.push(...w.detectLinks(i[s],s+1,u,o))}return t}static createPatterns(f){const r=[],t=f.scheme===A.Schemas.file?f.fsPath:f.path,i=[t];C.$i&&f.scheme===A.Schemas.file&&i.push(a.$Xf(t));for(const c of i){const u='[^\\s\\(\\):<>"]',s=`${`(?:${u}| ${u})`}+\\.${u}+`,y=`${u}+`;r.push(new RegExp(b.$Ke(c)+`(${s}) on line ((\\d+)(, column (\\d+))?)`,"gi")),r.push(new RegExp(b.$Ke(c)+`(${s}):line ((\\d+)(, column (\\d+))?)`,"gi")),r.push(new RegExp(b.$Ke(c)+`(${s})(\\s?\\((\\d+)(,(\\d+))?)\\)`,"gi")),r.push(new RegExp(b.$Ke(c)+`(${y})(:(\\d+))?(:(\\d+))?`,"gi"))}return r}static detectLinks(f,r,t,i){const c=[];return t.forEach(u=>{u.lastIndex=0;let o,s=0;for(;(o=u.exec(f))!==null;){const y=b.$Qe(o[1],".").replace(/\\/g,"/");let I;try{const E=i.toResource(y);E&&(I=E.toString())}catch{continue}if(o[3]){const E=o[3];if(o[5]){const j=o[5];I=b.$He("{0}#{1},{2}",I,E,j)}else I=b.$He("{0}#{1}",I,E)}const N=b.$Qe(o[0],"."),L=f.indexOf(N,s);s=L+N.length;const q={startColumn:L+1,startLineNumber:r,endColumn:L+1+N.length,endLineNumber:r};if(c.some(E=>h.$Gs.areIntersectingOrTouching(E.range,q)))return;c.push({range:q,url:I})}}),c}}e.OutputLinkComputer=w;function R(T,f){return new w(T,f)}e.create=R})}).call(this);

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/0ee08df0cf4527e40edc9aa28f4b5bd38bbff2b2/core/vs/workbench/contrib/output/common/outputLinkComputer.js.map