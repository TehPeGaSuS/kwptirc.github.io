/*! For license information please see plugin-conference.js.LICENSE.txt */
(()=>{var e={758:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(81),r=n.n(i),o=n(645),a=n.n(o)()(r());a.push([e.id,"\n.plugin-conference-button {\n    cursor: pointer;\n}\n",""]);const s=a},211:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(81),r=n.n(i),o=n(645),a=n.n(o)()(r());a.push([e.id,"\n.plugin-conference-jitsi {\n    height: 100%;\n\n    /* fixes firefox showing scrollbar */\n    overflow: hidden;\n}\n.plugin-conference-overlay {\n    background-color: rgba(0, 0, 0, 0.2);\n    color: #fff;\n    padding: 8px;\n    position: absolute;\n    top: 0;\n    z-index: 10;\n}\n.plugin-conference-notsupported {\n    background-color: var(--brand-error);\n    border-radius: 5px;\n    color: var(--brand-default-fg);\n    display: inline-block;\n    font-size: 130%;\n    font-weight: 600;\n    margin: 25px auto;\n    padding: 25px;\n}\n",""]);const s=a},982:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(81),r=n.n(i),o=n(645),a=n.n(o)()(r());a.push([e.id,"\n.plugin-conference-join {\n    background: var(--brand-midtone);\n    box-sizing: border-box;\n    font-size: 1.05em;\n    line-height: 1.05em;\n    padding: 20px;\n    text-align: center;\n    width: 100%;\n}\n.plugin-conference-jointext {\n    display: inline-block;\n    margin-right: 10px;\n    line-height: 2em;\n}\n.plugin-conference-joinbutton {\n    margin-left: 8px;\n}\n",""]);const s=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);i&&a[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},795:function(e,t,n){var i;e=n.nmd(e),function(){"use strict";var r={function:!0,object:!0},o=r[typeof window]&&window||this,a=r[typeof t]&&t,s=r.object&&e&&!e.nodeType&&e,l=a&&s&&"object"==typeof n.g&&n.g;!l||l.global!==l&&l.window!==l&&l.self!==l||(o=l);var c=Math.pow(2,53)-1,u=/\bOpera/,p=Object.prototype,d=p.hasOwnProperty,f=p.toString;function b(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function h(e){return e=x(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:b(e)}function m(e,t){for(var n in e)d.call(e,n)&&t(e[n],n,e)}function g(e){return null==e?b(e):f.call(e).slice(8,-1)}function v(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function S(e,t){var n=null;return function(e,t){var n=-1,i=e?e.length:0;if("number"==typeof i&&i>-1&&i<=c)for(;++n<i;)t(e[n],n);else m(e,t)}(e,(function(i,r){n=t(n,i,r,e)})),n}function x(e){return String(e).replace(/^ +| +$/g,"")}var w=function e(t){var n=o,i=t&&"object"==typeof t&&"String"!=g(t);i&&(n=t,t=null);var r=n.navigator||{},a=r.userAgent||"";t||(t=a);var s,l,c,p,d,b=i?!!r.likeChrome:/\bChrome\b/.test(t)&&!/internal|\n/i.test(f.toString()),w="Object",y=i?w:"ScriptBridgingProxyObject",k=i?w:"Environment",O=i&&n.java?"JavaPackage":g(n.java),C=i?w:"RuntimeObject",E=/\bJava/.test(O)&&n.java,M=E&&g(n.environment)==k,T=E?"a":"α",A=E?"b":"β",P=n.document||{},_=n.operamini||n.opera,I=u.test(I=i&&_?_["[[Class]]"]:g(_))?I:_=null,R=t,B=[],j=null,W=t==a,$=W&&_&&"function"==typeof _.version&&_.version(),L=S([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],(function(e,n){return e||RegExp("\\b"+(n.pattern||v(n))+"\\b","i").exec(t)&&(n.label||n)})),F=S(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"],(function(e,n){return e||RegExp("\\b"+(n.pattern||v(n))+"\\b","i").exec(t)&&(n.label||n)})),N=J([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),G=S({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}},(function(e,n,i){return e||(n[N]||n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(N)]||RegExp("\\b"+v(i)+"(?:\\b|\\w*\\d)","i").exec(t))&&i})),X=S(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "],(function(e,n){var i=n.pattern||v(n);return!e&&(e=RegExp("\\b"+i+"(?:/[\\d.]+|[ \\w.]*)","i").exec(t))&&(e=function(e,t,n){var i={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&n&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(i=i[/[\d.]+$/.exec(e)])&&(e="Windows "+i),e=String(e),t&&n&&(e=e.replace(RegExp(t,"i"),n)),h(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}(e,i,n.label||n)),e}));function J(e){return S(e,(function(e,n){var i=n.pattern||v(n);return!e&&(e=RegExp("\\b"+i+" *\\d+[.\\w_]*","i").exec(t)||RegExp("\\b"+i+" *\\w+-[\\w]*","i").exec(t)||RegExp("\\b"+i+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(t))&&((e=String(n.label&&!RegExp(i,"i").test(n.label)?n.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]),n=n.label||n,e=h(e[0].replace(RegExp(i,"i"),n).replace(RegExp("; *(?:"+n+"[_-])?","i")," ").replace(RegExp("("+n+")[-_.]?(\\w)","i"),"$1 $2"))),e}))}function U(e){return S(e,(function(e,n){return e||(RegExp(n+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(t)||0)[1]||null}))}if(L&&(L=[L]),/\bAndroid\b/.test(X)&&!N&&(s=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t))&&(N=x(s[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null),G&&!N?N=J([G]):G&&N&&(N=N.replace(RegExp("^("+v(G)+")[-_.\\s]","i"),G+" ").replace(RegExp("^("+v(G)+")[-_.]?(\\w)","i"),G+" $2")),(s=/\bGoogle TV\b/.exec(N))&&(N=s[0]),/\bSimulator\b/i.test(t)&&(N=(N?N+" ":"")+"Simulator"),"Opera Mini"==F&&/\bOPiOS\b/.test(t)&&B.push("running in Turbo/Uncompressed mode"),"IE"==F&&/\blike iPhone OS\b/.test(t)?(G=(s=e(t.replace(/like iPhone OS/,""))).manufacturer,N=s.product):/^iP/.test(N)?(F||(F="Safari"),X="iOS"+((s=/ OS ([\d_]+)/i.exec(t))?" "+s[1].replace(/_/g,"."):"")):"Konqueror"==F&&/^Linux\b/i.test(X)?X="Kubuntu":G&&"Google"!=G&&(/Chrome/.test(F)&&!/\bMobile Safari\b/i.test(t)||/\bVita\b/.test(N))||/\bAndroid\b/.test(X)&&/^Chrome/.test(F)&&/\bVersion\//i.test(t)?(F="Android Browser",X=/\bAndroid\b/.test(X)?X:"Android"):"Silk"==F?(/\bMobi/i.test(t)||(X="Android",B.unshift("desktop mode")),/Accelerated *= *true/i.test(t)&&B.unshift("accelerated")):"UC Browser"==F&&/\bUCWEB\b/.test(t)?B.push("speed mode"):"PaleMoon"==F&&(s=/\bFirefox\/([\d.]+)\b/.exec(t))?B.push("identifying as Firefox "+s[1]):"Firefox"==F&&(s=/\b(Mobile|Tablet|TV)\b/i.exec(t))?(X||(X="Firefox OS"),N||(N=s[1])):!F||(s=!/\bMinefield\b/i.test(t)&&/\b(?:Firefox|Safari)\b/.exec(F))?(F&&!N&&/[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(s+"/")+8))&&(F=null),(s=N||G||X)&&(N||G||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(X))&&(F=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(X)?X:s)+" Browser")):"Electron"==F&&(s=(/\bChrome\/([\d.]+)\b/.exec(t)||0)[1])&&B.push("Chromium "+s),$||($=U(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",v(F),"(?:Firefox|Minefield|NetFront)"])),(s=("iCab"==L&&parseFloat($)>3?"WebKit":/\bOpera\b/.test(F)&&(/\bOPR\b/.test(t)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(t)&&!/^(?:Trident|EdgeHTML)$/.test(L)&&"WebKit"||!L&&/\bMSIE\b/i.test(t)&&("Mac OS"==X?"Tasman":"Trident")||"WebKit"==L&&/\bPlayStation\b(?! Vita\b)/i.test(F)&&"NetFront")&&(L=[s]),"IE"==F&&(s=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t)||0)[1])?(F+=" Mobile",X="Windows Phone "+(/\+$/.test(s)?s:s+".x"),B.unshift("desktop mode")):/\bWPDesktop\b/i.test(t)?(F="IE Mobile",X="Windows Phone 8.x",B.unshift("desktop mode"),$||($=(/\brv:([\d.]+)/.exec(t)||0)[1])):"IE"!=F&&"Trident"==L&&(s=/\brv:([\d.]+)/.exec(t))&&(F&&B.push("identifying as "+F+($?" "+$:"")),F="IE",$=s[1]),W){if(p="global",d=null!=(c=n)?typeof c[p]:"number",/^(?:boolean|number|string|undefined)$/.test(d)||"object"==d&&!c[p])g(s=n.runtime)==y?(F="Adobe AIR",X=s.flash.system.Capabilities.os):g(s=n.phantom)==C?(F="PhantomJS",$=(s=s.version||null)&&s.major+"."+s.minor+"."+s.patch):"number"==typeof P.documentMode&&(s=/\bTrident\/(\d+)/i.exec(t))?($=[$,P.documentMode],(s=+s[1]+4)!=$[1]&&(B.push("IE "+$[1]+" mode"),L&&(L[1]=""),$[1]=s),$="IE"==F?String($[1].toFixed(1)):$[0]):"number"==typeof P.documentMode&&/^(?:Chrome|Firefox)\b/.test(F)&&(B.push("masking as "+F+" "+$),F="IE",$="11.0",L=["Trident"],X="Windows");else if(E&&(R=(s=E.lang.System).getProperty("os.arch"),X=X||s.getProperty("os.name")+" "+s.getProperty("os.version")),M){try{$=n.require("ringo/engine").version.join("."),F="RingoJS"}catch(e){(s=n.system)&&s.global.system==n.system&&(F="Narwhal",X||(X=s[0].os||null))}F||(F="Rhino")}else"object"==typeof n.process&&!n.process.browser&&(s=n.process)&&("object"==typeof s.versions&&("string"==typeof s.versions.electron?(B.push("Node "+s.versions.node),F="Electron",$=s.versions.electron):"string"==typeof s.versions.nw&&(B.push("Chromium "+$,"Node "+s.versions.node),F="NW.js",$=s.versions.nw)),F||(F="Node.js",R=s.arch,X=s.platform,$=($=/[\d.]+/.exec(s.version))?$[0]:null));X=X&&h(X)}if($&&(s=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec($)||/(?:alpha|beta)(?: ?\d)?/i.exec(t+";"+(W&&r.appMinorVersion))||/\bMinefield\b/i.test(t)&&"a")&&(j=/b/i.test(s)?"beta":"alpha",$=$.replace(RegExp(s+"\\+?$"),"")+("beta"==j?A:T)+(/\d+\+?/.exec(s)||"")),"Fennec"==F||"Firefox"==F&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(X))F="Firefox Mobile";else if("Maxthon"==F&&$)$=$.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(N))"Xbox 360"==N&&(X=null),"Xbox 360"==N&&/\bIEMobile\b/.test(t)&&B.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(F)&&(!F||N||/Browser|Mobi/.test(F))||"Windows CE"!=X&&!/Mobi/i.test(t))if("IE"==F&&W)try{null===n.external&&B.unshift("platform preview")}catch(e){B.unshift("embedded")}else(/\bBlackBerry\b/.test(N)||/\bBB10\b/.test(t))&&(s=(RegExp(N.replace(/ +/g," *")+"/([.\\d]+)","i").exec(t)||0)[1]||$)?(X=((s=[s,/BB10/.test(t)])[1]?(N=null,G="BlackBerry"):"Device Software")+" "+s[0],$=null):this!=m&&"Wii"!=N&&(W&&_||/Opera/.test(F)&&/\b(?:MSIE|Firefox)\b/i.test(t)||"Firefox"==F&&/\bOS X (?:\d+\.){2,}/.test(X)||"IE"==F&&(X&&!/^Win/.test(X)&&$>5.5||/\bWindows XP\b/.test(X)&&$>8||8==$&&!/\bTrident\b/.test(t)))&&!u.test(s=e.call(m,t.replace(u,"")+";"))&&s.name&&(s="ing as "+s.name+((s=s.version)?" "+s:""),u.test(F)?(/\bIE\b/.test(s)&&"Mac OS"==X&&(X=null),s="identify"+s):(s="mask"+s,F=I?h(I.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(s)&&(X=null),W||($=null)),L=["Presto"],B.push(s));else F+=" Mobile";(s=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(t)||0)[1])&&(s=[parseFloat(s.replace(/\.(\d)$/,".0$1")),s],"Safari"==F&&"+"==s[1].slice(-1)?(F="WebKit Nightly",j="alpha",$=s[1].slice(0,-1)):$!=s[1]&&$!=(s[2]=(/\bSafari\/([\d.]+\+?)/i.exec(t)||0)[1])||($=null),s[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t)||0)[1],537.36==s[0]&&537.36==s[2]&&parseFloat(s[1])>=28&&"WebKit"==L&&(L=["Blink"]),W&&(b||s[1])?(L&&(L[1]="like Chrome"),s=s[1]||((s=s[0])<530?1:s<532?2:s<532.05?3:s<533?4:s<534.03?5:s<534.07?6:s<534.1?7:s<534.13?8:s<534.16?9:s<534.24?10:s<534.3?11:s<535.01?12:s<535.02?"13+":s<535.07?15:s<535.11?16:s<535.19?17:s<536.05?18:s<536.1?19:s<537.01?20:s<537.11?"21+":s<537.13?23:s<537.18?24:s<537.24?25:s<537.36?26:"Blink"!=L?"27":"28")):(L&&(L[1]="like Safari"),s=(s=s[0])<400?1:s<500?2:s<526?3:s<533?4:s<534?"4+":s<535?5:s<537?6:s<538?7:s<601?8:s<602?9:s<604?10:s<606?11:s<608?12:"12"),L&&(L[1]+=" "+(s+="number"==typeof s?".x":/[.+]/.test(s)?"":"+")),"Safari"==F&&(!$||parseInt($)>45)?$=s:"Chrome"==F&&/\bHeadlessChrome/i.test(t)&&B.unshift("headless")),"Opera"==F&&(s=/\bzbov|zvav$/.exec(X))?(F+=" ",B.unshift("desktop mode"),"zvav"==s?(F+="Mini",$=null):F+="Mobile",X=X.replace(RegExp(" *"+s+"$"),"")):"Safari"==F&&/\bChrome\b/.exec(L&&L[1])?(B.unshift("desktop mode"),F="Chrome Mobile",$=null,/\bOS X\b/.test(X)?(G="Apple",X="iOS 4.3+"):X=null):/\bSRWare Iron\b/.test(F)&&!$&&($=U("Chrome")),$&&0==$.indexOf(s=/[\d.]+$/.exec(X))&&t.indexOf("/"+s+"-")>-1&&(X=x(X.replace(s,""))),X&&-1!=X.indexOf(F)&&!RegExp(F+" OS").test(X)&&(X=X.replace(RegExp(" *"+v(F)+" *"),"")),L&&!/\b(?:Avant|Nook)\b/.test(F)&&(/Browser|Lunascape|Maxthon/.test(F)||"Safari"!=F&&/^iOS/.test(X)&&/\bSafari\b/.test(L[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(F)&&L[1])&&(s=L[L.length-1])&&B.push(s),B.length&&(B=["("+B.join("; ")+")"]),G&&N&&N.indexOf(G)<0&&B.push("on "+G),N&&B.push((/^on /.test(B[B.length-1])?"":"on ")+N),X&&(s=/ ([\d.+]+)$/.exec(X),l=s&&"/"==X.charAt(X.length-s[0].length-1),X={architecture:32,family:s&&!l?X.replace(s[0],""):X,version:s?s[1]:null,toString:function(){var e=this.version;return this.family+(e&&!l?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(s=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(R))&&!/\bi686\b/i.test(R)?(X&&(X.architecture=64,X.family=X.family.replace(RegExp(" *"+s),"")),F&&(/\bWOW64\b/i.test(t)||W&&/\w(?:86|32)$/.test(r.cpuClass||r.platform)&&!/\bWin64; x64\b/i.test(t))&&B.unshift("32-bit")):X&&/^OS X/.test(X.family)&&"Chrome"==F&&parseFloat($)>=39&&(X.architecture=64),t||(t=null);var K={};return K.description=t,K.layout=L&&L[0],K.manufacturer=G,K.name=F,K.prerelease=j,K.product=N,K.ua=t,K.version=F&&$,K.os=X||{architecture:null,family:null,version:null,toString:function(){return"null"}},K.parse=e,K.toString=function(){return this.description||""},K.version&&B.unshift($),K.name&&B.unshift(F),X&&F&&(X!=String(X).split(" ")[0]||X!=F.split(" ")[0]&&!N)&&B.push(N?"("+X+")":"on "+X),B.length&&(K.description=B.join(" ")),K}();o.platform=w,void 0===(i=function(){return w}.call(t,n,t,e))||(e.exports=i)}.call(this)},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var o={},a=[],s=0;s<e.length;s++){var l=e[s],c=i.base?l[0]+i.base:l[0],u=o[c]||0,p="".concat(c," ").concat(u);o[c]=u+1;var d=n(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var b=r(f,i);i.byIndex=s,t.splice(s,0,{identifier:p,updater:b,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=i(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=n(o[a]);t[s].references--}for(var l=i(e,r),c=0;c<o.length;c++){var u=n(o[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},380:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={id:i,loaded:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.nc=void 0,(()=>{"use strict";var e="conference",t={tagID:1,secure:!1,server:"meet.jit.si",queries:!0,channels:!0,buttonIcon:"fa-phone",viewHeight:"40%",enabledInChannels:["*"],groupInvitesTTL:3e4,maxParticipantsLength:60,participantsMore:"more...",inviteText:"{{ nick }} is inviting you to a private call.",joinText:"{{ nick }} has joined the conference.",joinButtonText:"Join now!",showLink:!1,useLinkShortener:!1,linkShortenerURL:"https://x0.no/api/?{{ link }}",linkShortenerAPIToken:"",interfaceConfigOverwrite:{SHOW_JITSI_WATERMARK:!1,SHOW_WATERMARK_FOR_GUESTS:!1,TOOLBAR_BUTTONS:["microphone","camera","fullscreen","hangup","settings","videoquality","filmstrip","fodeviceselection","stats","shortcuts"]},configOverwrite:{startWithVideoMuted:!0,startWithAudioMuted:!0}};function i(){kiwi.setConfigDefaults(e,t)}function r(t){return kiwi.state.setting([e,t].join("."))}function o(t){return kiwi.state.getSetting(["settings",e,t].join("."))}var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showButton?n("div",{staticClass:"plugin-conference-button",on:{click:function(t){return e.openJitsi()}}},[n("a",[n("i",{staticClass:"fa",class:e.buttonIcon,attrs:{"aria-hidden":"true"}})])]):e._e()};a._withStripped=!0;var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"plugin-conference-jitsi"},[e.isJoined?n("div",{staticClass:"plugin-conference-overlay"},[e._v("\n        "+e._s(e.roomName)+" @ "+e._s(e.network.name)+"\n    ")]):e._e()])};s._withStripped=!0;var l=n(795),c=n.n(l);const u={props:["componentProps"],data:function(){return{api:null,link:"",token:"",isJoined:!1,loadingAnimation:null}},computed:{roomName:function(){if(this.buffer.isQuery()){var e=[this.network.nick,this.buffer.name];return e.sort(),"query-"+e.join("+")}return this.buffer.name},encodedRoomName:function(){return(this.network.connection.server+"/"+this.roomName).split("").map((function(e){return e.charCodeAt(0).toString(16)})).join("")},buffer:function(){return this.componentProps.buffer},network:function(){return this.buffer.getNetwork()}},mounted:function(){var e=this;if("IE"===c().name){var t=document.createElement("div");return t.style.textAlign="center",t.innerHTML='<div class="plugin-conference-notsupported">This browser is not supported.<br />Please update your browser.</div>',void this.$el.appendChild(t)}this.loadingAnimationStart(),r("showLink")&&this.getLink(),r("secure")?(kiwi.once("irc.raw.EXTJWT",(function(t,n){e.token=n.params[1],e.scriptLoad()})),this.network.ircClient.raw("EXTJWT",this.roomName)):this.scriptLoad(),this.$nextTick((function(){e.$parent.setHeight(r("viewHeight"))}))},beforeDestroy:function(){this.componentProps.pluginState.isActive=!1;var e=this.$el.parentElement;e&&(e.style.height=""),this.api&&this.api.dispose()},methods:{scriptLoad:function(){var e=this,t=document.createElement("script");t.src="https://"+r("server")+"/external_api.js",t.onload=function(){e.scriptLoaded()},t.defer=!0,this.$el.appendChild(t)},scriptLoaded:function(){var e=this,t=r("configOverwrite");t.prejoinPageEnabled=!1;var n=r("server"),i={roomName:this.encodedRoomName,parentNode:this.$el,configOverwrite:t,interfaceConfigOverwrite:r("interfaceConfigOverwrite"),onload:function(){e.api.executeCommand("displayName",e.network.nick),e.api.executeCommand("subject"," "),e.api.once("videoConferenceJoined",(function(){e.loadingAnimationStop(),e.isJoined=!0,r("showLink")&&!e.link||e.sendJoinMessage()})),e.api.once("videoConferenceLeft",(function(){kiwi.emit("mediaviewer.hide")}))}};r("secure")&&(i.jwt=this.token,i.noSsl=!1),this.api=new window.JitsiMeetExternalAPI(n,i)},sendJoinMessage:function(){var e=this.buffer.isQuery()?r("inviteText"):r("joinText");e="* "+e.replace("{{ nick }}",this.network.nick),r("showLink")&&this.link&&(e+=" "+this.link);var t=new this.network.ircClient.Message("PRIVMSG",this.buffer.name,e);t.prefix=this.network.nick,t.tags["+kiwiirc.com/conference"]=o("tagID"),this.network.ircClient.raw(t)},loadingAnimationStart:function(){this.loadingAnimation||(this.loadingAnimation=document.createElement("div"),this.loadingAnimation.style.position="absolute",this.loadingAnimation.style.top="34%",this.loadingAnimation.style.marginLeft="45%",this.loadingAnimation.innerHTML='<i class="fa fa-spin fa-spinner" aria-hidden="true" style="font-size: 100px;"/>',this.$el.appendChild(this.loadingAnimation))},loadingAnimationStop:function(){this.$el.removeChild(this.loadingAnimation),this.loadingAnimation=null},getLink:function(){var e="https://"+r("server")+"/"+this.encodedRoomName;if(r("useLinkShortener")){var t=r("linkShortenerURL");t.indexOf("api-ssl.bitly.com")>-1?this.getBitlyLink(t,e):this.getShortLink(t,e)}else this.link=e},getShortLink:function(e,t){var n=this,i=e.replace("{{ link }}",t);fetch("https://cors-anywhere.herokuapp.com/"+i).then((function(e){return e.text()})).then((function(e){var t=kiwi.require("helpers/TextFormatting").urlRegex;new RegExp("^"+t.source+"$").test(e)&&(n.link=e),n.isJoined&&n.sendJoinMessage()}))},getBitlyLink:function(e,t){var n=this,i=r("linkShortenerAPIToken");fetch(e+"?access_token="+i+"&longUrl="+t).then((function(e){return e.json()})).then((function(e){n.link=e.url,n.isJoined&&n.sendJoinMessage()}))}}},p=u;var d=n(379),f=n.n(d),b=n(380),h=n.n(b),m=n(569),g=n.n(m),v=n(565),S=n.n(v),x=n(216),w=n.n(x),y=n(589),k=n.n(y),O=n(211),C={};function E(e,t,n,i,r,o,a,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:c}}C.styleTagTransform=k(),C.setAttributes=S(),C.insert=g().bind(null,"head"),C.domAPI=h(),C.insertStyleElement=w(),f()(O.Z,C),O.Z&&O.Z.locals&&O.Z.locals;const M=E(p,s,[],!1,null,null,null).exports,T={props:["network","buffer","sidebarState","pluginState"],computed:{showButton:function(){return function(e){if(e.isQuery())return!0;var t=o("enabledInChannels");return t.indexOf("*")>-1||t.indexOf(e.name.toLowerCase())>-1}(this.buffer)},buttonIcon:function(){return r("buttonIcon")}},methods:{openJitsi:function(){if(!this.pluginState.isActive)return this.pluginState.isActive=!0,void kiwi.emit("mediaviewer.show",{component:M,componentProps:{pluginState:this.pluginState,buffer:this.buffer}});window.confirm("Close current conference?")&&kiwi.emit("mediaviewer.hide")}}};var A=n(758),P={};P.styleTagTransform=k(),P.setAttributes=S(),P.insert=g().bind(null,"head"),P.domAPI=h(),P.insertStyleElement=w(),f()(A.Z,P),A.Z&&A.Z.locals&&A.Z.locals;const _=E(T,a,[],!1,null,null,null).exports;var I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"plugin-conference-join"},[n("div",{staticClass:"plugin-conference-jointext"},[e._v("\n        "+e._s(e.buffer.isQuery()?e.inviteText:e.joinText)+"\n    ")]),e._v(" "),e.pluginState.isActive?e._e():n("div",{staticClass:"u-button u-button-primary",on:{click:function(t){return e.openJitsi()}}},[n("i",{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}}),e._v(" "),n("span",{staticClass:"plugin-conference-joinbutton"},[e._v(e._s(e.joinButtonText))])])])};I._withStripped=!0;const R={props:["buffer","message","idx","ml","pluginState","inviteState"],computed:{nicks:function(){for(var e=r("maxParticipantsLength"),t=[],n=0,i=0;i<this.inviteState.members.length;i++){var o=this.inviteState.members[i];if((n+=o.length)>e){t.push(r("participantsMore"));break}t.push(o)}return t},joinButtonText:function(){return r("joinButtonText")},inviteText:function(){return r("inviteText").replace("{{ nick }}",this.nicks.join(", "))},joinText:function(){return r("joinText").replace("{{ nick }}",this.nicks.join(", "))}},methods:{openJitsi:function(){this.pluginState.isActive=!0,kiwi.emit("mediaviewer.show",{component:M,componentProps:{pluginState:this.pluginState,buffer:this.buffer}})}}};var B=n(982),j={};j.styleTagTransform=k(),j.setAttributes=S(),j.insert=g().bind(null,"head"),j.domAPI=h(),j.insertStyleElement=w(),f()(B.Z,j),B.Z&&B.Z.locals&&B.Z.locals;const W=E(R,I,[],!1,null,null,null).exports;kiwi.plugin("conference",(function(e){i();var t=o("tagID").toString(),n={isActive:!1},a={};function s(e){return e&&e["+kiwiirc.com/conference"]===t}(o("channels")||o("queries"))&&(o("channels")&&e.addUi("header_channel",_,{props:{pluginState:n}}),o("queries")&&e.addUi("header_query",_,{props:{pluginState:n}})),e.on("plugin-conference.show",(function(t){!n.isActive&&t.buffer&&(n.isActive=!0,e.emit("mediaviewer.show",{component:M,componentProps:{pluginState:n,buffer:t.buffer}}))})),e.on("plugin-conference.hide",(function(){n.isActive&&e.emit("mediaviewer.hide")})),e.on("irc.message",(function(e,t,n){if(!e.from_server&&s(e.tags)){var i=e.target;e.target===t.nick&&(i=e.nick);var o=a[i.toUpperCase()];o&&o.timeout+r("groupInvitesTTL")>Date.now()&&(-1===o.members.indexOf(e.nick)&&o.members.push(e.nick),n.handled=!0)}})),e.on("message.new",(function(t){var i=t.message,r=t.buffer;if(s(i.tags)){var o=e.Vue.observable({members:[i.nick],timeout:Date.now()});a[r.name.toUpperCase()]=o,i.template=e.Vue.extend(W),i.templateProps={inviteState:o,pluginState:n}}}))}))})()})();