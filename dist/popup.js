(()=>{"use strict";var e,n,t,o={8771:(e,n,t)=>{t.d(n,{Z:()=>m});var o=t(8081),a=t.n(o),r=t(3645),i=t.n(r),l=t(1667),s=t.n(l),c=new URL(t(8324),t.b),d=i()(a()),u=s()(c);d.push([e.id,`/*\n! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured \`sans\` font-family by default.\n5. Use the user's configured \`sans\` font-feature-settings by default.\n6. Use the user's configured \`sans\` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured \`mono\` font family by default.\n2. Correct the odd \`em\` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \`inherit\` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.relative {\n  position: relative;\n}\n.-mt-4 {\n  margin-top: -1rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.table {\n  display: table;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-full {\n  width: 100%;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-24 {\n  gap: 6rem;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-5 {\n  gap: 1.25rem;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.border {\n  border-width: 1px;\n}\n.bg-blue-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(96 165 250 / var(--tw-bg-opacity));\n}\n.bg-blue-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\n.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\n.bg-green-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(134 239 172 / var(--tw-bg-opacity));\n}\n.bg-red-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(252 165 165 / var(--tw-bg-opacity));\n}\n.bg-slate-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(203 213 225 / var(--tw-bg-opacity));\n}\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\n.from-slate-100 {\n  --tw-gradient-from: #f1f5f9 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(241 245 249 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.via-slate-300 {\n  --tw-gradient-to: rgb(203 213 225 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #cbd5e1 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n.to-slate-400 {\n  --tw-gradient-to: #94a3b8 var(--tw-gradient-to-position);\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.pb-4 {\n  padding-bottom: 1rem;\n}\n.pt-2 {\n  padding-top: 0.5rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-light {\n  font-weight: 300;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.leading-tight {\n  line-height: 1.25;\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n@font-face {\n  src: url(${u});\n  font-family: MaterialIcons;\n}\n\nbody {\n  width: 300px;\n  height: 400px;\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}`,""]);const m=d},2051:(e,n,t)=>{var o=t(7294),a=t(745),r=t(3379),i=t.n(r),l=t(7795),s=t.n(l),c=t(569),d=t.n(c),u=t(3565),m=t.n(u),p=t(9216),f=t.n(p),g=t(4589),b=t.n(g),h=t(8771),w={};w.styleTagTransform=b(),w.setAttributes=m(),w.insert=d().bind(null,"head"),w.domAPI=s(),w.insertStyleElement=f(),i()(h.Z,w),h.Z&&h.Z.locals&&h.Z.locals;const v=({title:e,icon:n})=>o.createElement("div",{className:"flex flex-1 flex-col gap-2"},o.createElement("div",{className:"flex flex-1 flex-row py-2 bg-slate-300 justify-center items-center"},o.createElement("img",{src:"talentlytica.png",className:"w-6"})),o.createElement("div",{className:"flex flex-1 flex-row items-center justify-center gap-2"},o.createElement("p",{className:"flex"},e),n&&o.createElement("img",{src:n,className:"w-5"})));var y=t(9250),x=t(9655),k=function(e,n,t,o){return new(t||(t=Promise))((function(a,r){function i(e){try{s(o.next(e))}catch(e){r(e)}}function l(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}s((o=o.apply(e,n||[])).next())}))};function E(e){const n={token:e};return new Promise((e=>{chrome.storage.local.set(n,(()=>{e()}))}))}function S(){return k(this,void 0,void 0,(function*(){const e=["token"];return new Promise((n=>{chrome.storage.local.get(e,(e=>{var t;n(null!==(t=e.token)&&void 0!==t?t:"")}))}))}))}const N=()=>{const e=(0,y.s0)(),[n,t]=(0,o.useState)("");return o.createElement("div",{className:"flex flex-1 flex-col p-4 gap-3 justify-center items-center"},o.createElement("p",null,"Login Token"),o.createElement("div",{className:"w-full rounded-lg bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 p-1"},o.createElement("input",{type:"text",placeholder:"Input Your Coda Token !",className:"w-full p-2 rounded-md",onChange:e=>{E(e.target.value),t(e.target.value)}})),o.createElement("button",{onClick:()=>(E(n),e("/document")),type:"button",className:"flex flex-1 justify-center items-center bg-blue-500 px-5 py-2 rounded-lg text-center text-white font-semibold text-sm"},"Sign"))};var j=t(394),C=t(2277),O=function(e,n,t,o){return new(t||(t=Promise))((function(a,r){function i(e){try{s(o.next(e))}catch(e){r(e)}}function l(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}s((o=o.apply(e,n||[])).next())}))};const z="https://coda.io/apis/v1";let T;O(void 0,void 0,void 0,(function*(){const e=yield S();return T=new C.XI(e),e}));const $=(e,n,t)=>O(void 0,void 0,void 0,(function*(){const o=yield fetch(`${z}/docs?isOwner=false`),a=(yield o.json(),yield fetch(`${z}/docs/${e}/tables`)),r=(yield a.json(),yield fetch(`${z}/docs/${e}/tables/grid-VAAAD2nWgS/rows?useColumnNames=${n}&valueFormat=${t}`));return(yield r.json()).items})),_=(e,n,t)=>O(void 0,void 0,void 0,(function*(){const o=yield fetch(`${z}/docs/${e}/tables/${n}/rows/${t}`);return yield o.json()})),P=e=>O(void 0,void 0,void 0,(function*(){var n;n=yield fetch(`${e}`,{method:"POST"});const t=yield n.json();if(!Object.keys(t).includes("statusCode")){const n=/\/buttons\/[^/]+/,t=e.replace(n,""),o=yield fetch(`${t}?useColumnNames=true`);return yield o.json()}n=yield fetch(`${e}`,{method:"POST"})}));var A=t(44),R=t(9260),F=t.n(R);const I=JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"形状图层 2","ks":{"o":{"k":100},"r":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[270]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":17,"s":[270],"e":[360]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":35.167,"s":[360],"e":[630]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":51,"s":[630],"e":[720]},{"t":69}]},"p":{"k":[400.621,310.313,0]},"a":{"k":[0.621,10.313,0]},"s":{"k":[300,300,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[47.704,47.704]},"p":{"k":[0,0]},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"k":[0.04,0.71,0.69,1]},"o":{"k":100},"w":{"k":2},"lc":1,"lj":1,"ml":4,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"tr","p":{"k":[0.621,10.313],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"变换"}],"nm":"椭圆 1","np":3,"mn":"ADBE Vector Group"},{"ty":"tm","s":{"k":0,"ix":1},"e":{"k":25,"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":1,"ty":4,"nm":"形状图层 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[400.621,310.313,0]},"a":{"k":[0.621,10.313,0]},"s":{"k":[300,300,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[47.704,47.704]},"p":{"k":[0,0]},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"k":[0.91,0.91,0.91,1]},"o":{"k":100},"w":{"k":2},"lc":1,"lj":1,"ml":4,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"tr","p":{"k":[0.621,10.313],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"变换"}],"nm":"椭圆 1","np":3,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1}],"v":"4.5.4","ddd":0,"ip":0,"op":69,"fr":25,"w":800,"h":600}');var M=function(e,n,t,o){return new(t||(t=Promise))((function(a,r){function i(e){try{s(o.next(e))}catch(e){r(e)}}function l(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}s((o=o.apply(e,n||[])).next())}))};const D=()=>{const{docId:e,tableId:n,rowId:t}=(0,y.UO)(),[a,r]=(0,o.useState)([]),[i,l]=(0,o.useState)(""),[s,c]=(0,o.useState)(!1);(0,o.useEffect)((()=>{r([]),c(!0),u(),setTimeout((()=>{c(!1)}),2e3)}),[]),(0,o.useEffect)((()=>{d()}),[a]);const d=()=>{_(e,n,t).then((e=>M(void 0,void 0,void 0,(function*(){const n=yield function(){return k(this,void 0,void 0,(function*(){const e=["selectTask"];return new Promise((n=>{chrome.storage.local.get(e,(e=>{var t;n(null!==(t=e.selectTask)&&void 0!==t?t:{})}))}))}))}();l((null==e?void 0:e.name)||n)}))))},u=()=>M(void 0,void 0,void 0,(function*(){r([]);const n=(yield $(e,!0,"simple")).map((e=>Object.assign({},Object.assign({id:e.id},e.values))));yield m(n),r(n)})),m=n=>M(void 0,void 0,void 0,(function*(){(yield $(e,!1,"simpleWithArrays")).map(((e,t)=>{for(const o in e.values)e.values.hasOwnProperty(o)&&e.values[o]===n[t]["Clock in"]&&(n[t]["Clock in"]={api_push:`${e.href}/buttons/${o}`,row_id:e.id,column_id:o,columnName:"Clock in",data:n[t]["Clock in"]});for(const o in e.values)e.values.hasOwnProperty(o)&&e.values[o]===n[t]["Clock out"]&&(n[t]["Clock out"]={api_push:`${e.href}/buttons/${o}`,row_id:e.id,column_id:o,columnName:"Clock out",data:n[t]["Clock out"]})}))})),p=n=>M(void 0,void 0,void 0,(function*(){var t,o;c(!0),r([]),t=yield P(n);const a=yield $(e,!0,"simpleWithArrays");for(o=a.map((e=>JSON.stringify(e.values)===JSON.stringify(t.values)));o.includes(!0);)t=yield P(n),o=a.map((e=>JSON.stringify(e.values)===JSON.stringify(t.values)));console.log("======checkerRow======== ",o),u(),setTimeout((()=>{c(!1)}),2e3)}));return o.createElement("div",{className:"px-2 -mt-4",style:{width:"19rem"}},s?o.createElement(F(),{animationData:I}):o.createElement(o.Fragment,null,o.createElement("div",{className:"flex flex-1 flex-row justify-center items-center mb-3 gap-2"},o.createElement("div",null,o.createElement("p",null,"Time Tracking")),o.createElement("div",null,o.createElement("img",{src:"https://cdn.coda.io/icons/svg/color/alarm-clock.svg",className:"w-6 h-6"}))),o.createElement("div",{className:"flex flex-1 flex-row gap-2 px-2 mb-4"},o.createElement("p",null,"Choose Task : "),o.createElement("input",{type:"text",value:i,placeholder:i})),o.createElement("div",{className:"flex flex-1 flex-col gap-2 px-2 pt-2 pb-4"},o.createElement(A.ZP,{columns:[{name:"Category",selector:e=>e.Category},{name:"Clock in",selector:e=>{var n;const t=JSON.parse(null!==(n=e["Clock in"].data)&&void 0!==n?n:e["Clock in"]);return o.createElement(o.Fragment,null,o.createElement(t.formatType,{disabled:null==t?void 0:t.disabled,className:(null==t?void 0:t.disabled)?"bg-slate-300 rounded-md p-2 font-semibold":"bg-green-300 rounded-md p-2 font-semibold",onClick:()=>{var n;return p(null===(n=e["Clock in"])||void 0===n?void 0:n.api_push)}},"Clock in"))}},{name:"Clock out",selector:e=>{var n;const t=JSON.parse(null!==(n=e["Clock out"].data)&&void 0!==n?n:e["Clock out"]);return o.createElement(o.Fragment,null,o.createElement(t.formatType,{disabled:null==t?void 0:t.disabled,className:(null==t?void 0:t.disabled)?"bg-slate-300 rounded-md p-2 font-semibold":"bg-red-300 rounded-md p-2 font-semibold",onClick:()=>{var n;return p(null===(n=e["Clock out"])||void 0===n?void 0:n.api_push)}},"Clock Out"))}},{name:"Total today",selector:e=>e["Total today"]},{name:"Current duration",selector:e=>e["Current duration"]}],data:s?[]:a.filter((e=>new RegExp(`${i}`).test(e.Task))),selectableRows:!1}))))};var U=function(e,n,t,o){return new(t||(t=Promise))((function(a,r){function i(e){try{s(o.next(e))}catch(e){r(e)}}function l(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}s((o=o.apply(e,n||[])).next())}))};const V=()=>{var e,n,t,a,r,i,l;const s=(0,y.s0)(),[c,d]=(0,o.useState)(),[u,m]=(0,o.useState)([]),[p,f]=(0,o.useState)([]),[g,b]=(0,o.useState)([]),[h,w]=(0,o.useState)([]),[v,x]=(0,o.useState)({docs:"",table:"",row:""});(0,o.useEffect)((()=>{E()}),[v]),(0,o.useEffect)((()=>{(function(){return k(this,void 0,void 0,(function*(){const e=["formData"];return new Promise((n=>{chrome.storage.local.get(e,(e=>{var t;n(null!==(t=e.formData)&&void 0!==t?t:{})}))}))}))})().then((e=>{x({docs:e.docs,table:e.table,row:e.row})}))}),[]);const E=()=>U(void 0,void 0,void 0,(function*(){const e=yield O(void 0,void 0,void 0,(function*(){return yield T.whoAmI()}));d(e);const n=yield O(void 0,void 0,void 0,(function*(){const e=yield fetch(`${z}/docs?isOwner=false`);return(yield e.json()).items}));if(m(n),v.docs){const e=yield(t=v.docs,O(void 0,void 0,void 0,(function*(){const e=yield fetch(`${z}/docs/${t}/tables`);return(yield e.json()).items})));f(e)}var t;if(v.docs&&v.table){const e=yield((e,n)=>O(void 0,void 0,void 0,(function*(){const t=yield fetch(`${z}/docs/${e}/tables/${n}/columns`);return(yield t.json()).items})))(v.docs,v.table);b(e)}if(v.docs&&v.table){const e=yield((e,n)=>O(void 0,void 0,void 0,(function*(){const t=yield fetch(`${z}/docs/${e}/tables/${n}/rows?useColumnNames=true`);return(yield t.json()).items})))(v.docs,v.table);w(e)}}));return o.createElement("div",{className:"w-full px-2 -mt-4"},o.createElement("div",{className:"flex flex-1 flex-row gap-2 px-2 mb-4"},o.createElement("div",{className:"rounded-full bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400",style:{padding:"2px"}},o.createElement("img",{src:null!==(e=null==c?void 0:c.pictureLink)&&void 0!==e?e:"",className:"w-10 h-10 rounded-full"})),o.createElement("div",null,o.createElement("div",{className:"flex flex-1 flex-col"},o.createElement("p",{className:"text-sm font-semibold"},null==c?void 0:c.name),o.createElement("p",{className:"text-xs font-light"},null==c?void 0:c.loginId)))),o.createElement("div",{className:"flex flex-1 flex-row items-center justify-between p-2"},o.createElement("div",null,o.createElement("p",{className:"text-sm font-semibold"},"Record Task"))),o.createElement("div",{className:"flex flex-1 flex-col gap-2 px-2 pt-2 pb-4"},o.createElement("div",{className:"mb-2"},o.createElement("label",{className:"block text-gray-700 text-xs font-light mb-2  uppercase"},"Select Document"),o.createElement("select",{defaultValue:v.docs,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",onChange:e=>x(Object.assign(Object.assign({},v),{docs:e.target.value}))},o.createElement("option",{value:null!==(n=v.docs)&&void 0!==n?n:""},v.docs?null===(t=u.find(((e,n)=>v.docs===e.id)))||void 0===t?void 0:t.name:"Select Document"),u&&u.map(((e,n)=>o.createElement("option",{key:e.id,value:e.id},e.name))))),o.createElement("div",{className:"mb-2"},o.createElement("label",{className:"block text-gray-700 text-xs font-light mb-2  uppercase"},"Select Table"),o.createElement("select",{defaultValue:v.table,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",onChange:e=>x(Object.assign(Object.assign({},v),{table:e.target.value}))},o.createElement("option",{value:null!==(a=v.table)&&void 0!==a?a:""},v.table?null===(r=p.find(((e,n)=>v.table===e.id)))||void 0===r?void 0:r.name:"Select Table"),p&&p.map(((e,n)=>o.createElement("option",{key:e.id,value:e.id},e.name))))),o.createElement("div",{className:"mb-2"},o.createElement("label",{className:"block text-gray-700 text-xs font-light mb-2  uppercase"},"Select Task"),o.createElement("select",{defaultValue:v.row,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",onChange:e=>x(Object.assign(Object.assign({},v),{row:e.target.value}))},o.createElement("option",{value:null!==(i=v.row)&&void 0!==i?i:""},v.row?null===(l=h.find(((e,n)=>v.row===e.id)))||void 0===l?void 0:l.name:"Select Task"),h&&h.map(((e,n)=>o.createElement("option",{key:e.id,value:e.id},e.name))))),Object.values(v).includes("")?o.createElement("div",{className:"flex flex-1 flex-row justify-end items-center mb-2"},o.createElement("button",{type:"button",className:"p-2 text-gray-400 rounded-full bg-gray-300",disabled:!0},"Find Task")):o.createElement("div",{className:"flex flex-1 flex-row justify-end items-center mb-2"},o.createElement("button",{type:"button",className:"p-2 text-white rounded-full bg-blue-400",onClick:()=>U(void 0,void 0,void 0,(function*(){!function(e){const n={formData:e};new Promise((e=>{chrome.storage.local.set(n,(()=>{e()}))}))}(v),_(v.docs,v.table,v.row).then((e=>{!function(e){const n={selectTask:e};new Promise((e=>{chrome.storage.local.set(n,(()=>{e()}))}))}(null==e?void 0:e.name),function(e){const n={currentTask:e};new Promise((e=>{chrome.storage.local.set(n,(()=>{e()}))}))}({id:e.id,name:e.name})})),s(`/time-sheet/${v.docs}/${v.table}/${v.row}`)}))},"Find Task"))))},B=document.createElement("div");document.body.appendChild(B),a.createRoot(B).render(o.createElement((()=>{const[e,n]=(0,o.useState)(null),t=({token:e,redirectPath:n="/login",children:t})=>null===e?o.createElement(y.Fg,{to:"/login",replace:!0}):t;return(0,o.useEffect)((()=>{S().then((e=>{n(e),E(e)}))}),[e]),o.createElement(j.StyleSheetManager,{shouldForwardProp:e=>"responsive"!==e},o.createElement(o.Fragment,null,o.createElement("div",{className:"flex flex-1 wrapper",style:{position:"relative",top:0,height:"50vh"}},o.createElement("div",{className:"flex flex-col flex-1 gap-5"},o.createElement("div",{className:"flex flex-row items-center justify-start gap-24"},o.createElement(v,{title:""})),o.createElement(x.UT,null,o.createElement("div",{className:"flex flex-1"},o.createElement(y.Z5,null,o.createElement(y.AW,{path:"/",element:""===e?o.createElement(N,null):o.createElement(V,null)}),o.createElement(y.AW,{path:"/login",element:o.createElement(N,null)}),o.createElement(y.AW,{path:"/document",element:o.createElement(t,{token:e,redirectPath:"/document"},o.createElement(V,null))}),o.createElement(y.AW,{path:"/time-sheet/:docId/:tableId/:rowId",element:o.createElement(t,{token:e,redirectPath:"/time-sheet/:docId/:tableId/:rowId"},o.createElement(D,null))}))))))))}),null))}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var t=a[e]={id:e,exports:{}};return o[e].call(t.exports,t,t.exports,r),t.exports}r.m=o,r.amdO={},e=[],r.O=(n,t,o,a)=>{if(!t){var i=1/0;for(d=0;d<e.length;d++){for(var[t,o,a]=e[d],l=!0,s=0;s<t.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](t[s])))?t.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[t,o,a]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);r.r(a);var i={};n=n||[null,t({}),t([]),t(t)];for(var l=2&o&&e;"object"==typeof l&&!~n.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((n=>i[n]=()=>e[n]));return i.default=()=>e,r.d(a,i),a},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!e;)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r.b=document.baseURI||self.location.href;var e={42:0};r.O.j=n=>0===e[n];var n=(n,t)=>{var o,a,[i,l,s]=t,c=0;if(i.some((n=>0!==e[n]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var d=s(r)}for(n&&n(t);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},t=self.webpackChunktalent_coda=self.webpackChunktalent_coda||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),r.nc=void 0;var i=r.O(void 0,[166,308],(()=>r(2051)));i=r.O(i)})();