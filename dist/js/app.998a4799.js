(function(t){function e(e){for(var i,o,u=e[0],c=e[1],s=e[2],h=0,d=[];h<u.length;h++)o=u[h],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/auth/dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-container",{attrs:{fluid:""}},[n("v-data-table",{attrs:{items:t.authenticators,headers:t.headers},scopedSlots:t._u([{key:"item.value.idToken",fn:function(e){var i=e.item;return[n("pre",[t._v(t._s(JSON.stringify(i.value.idToken,null,2)))])]}},{key:"item.component",fn:function(e){var i=e.item;return[n(i.component,{tag:"component",model:{value:i.value,callback:function(e){t.$set(i,"value",e)},expression:"item.value"}})]}}])})],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth0"},[t.loading?t._e():n("div",[n("v-row",[n("v-col",[t.isAuthenticated?t._e():n("v-btn",{on:{click:t.loginWithPopup}},[t._v("Log in with Popup")])],1),n("v-col",[t.isAuthenticated?t._e():n("v-btn",{on:{click:t.loginWithRedirect}},[t._v("Log in with Redirect")])],1)],1),t.isAuthenticated?n("v-btn",{on:{click:t.logout}},[t._v("Log out")]):t._e()],1)])},u=[],c=(n("caad"),n("ac1f"),n("2532"),n("841c"),n("96cf"),n("1da1")),s=n("15fd"),l=n("5891"),h=n.n(l),d=n("caef"),p={data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null,idToken:null}},computed:{model:function(){var t=this.idToken?this.idToken:{__raw:null},e=(t.__raw,Object(s["a"])(t,["__raw"]));return{id:"auth0",isAuthenticated:this.isAuthenticated,user:this.user,idToken:e}}},watch:{model:function(t){this.$emit("input",t)}},methods:{loginWithPopup:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.popupOpen=!0,t.prev=1,t.next=4,this.auth0Client.loginWithPopup(e);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](1),console.error(t.t0);case 9:return t.prev=9,this.popupOpen=!1,t.finish(9);case 12:return t.next=14,this.auth0Client.getUser();case 14:return this.user=t.sent,t.next=17,this.auth0Client.getIdTokenClaims();case 17:this.idToken=t.sent,this.isAuthenticated=!0;case 19:case"end":return t.stop()}}),t,this,[[1,6,9,12]])})));function e(e){return t.apply(this,arguments)}return e}(),handleRedirectCallback:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,this.auth0Client.handleRedirectCallback();case 4:return t.next=6,this.auth0Client.getUser();case 6:return this.user=t.sent,t.next=9,this.auth0Client.getIdTokenClaims();case 9:this.idToken=t.sent,this.isAuthenticated=!0,t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](1),this.error=t.t0;case 16:return t.prev=16,this.loading=!1,t.finish(16);case 19:case"end":return t.stop()}}),t,this,[[1,13,16,19]])})));function e(){return t.apply(this,arguments)}return e}(),loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims:function(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup:function(t){return this.auth0Client.getTokenWithPopup(t)},logout:function(){return this.auth0Client.logout({clientId:d["a"],returnTo:window.location.href})}},created:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h()({domain:d["b"],client_id:d["a"],redirect_uri:window.location.href});case 2:if(this.auth0Client=t.sent,t.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){t.next=8;break}return t.next=7,this.auth0Client.handleRedirectCallback();case 7:window.history.replaceState({},document.title,window.location.pathname);case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](3),this.error=t.t0;case 13:return t.prev=13,t.next=16,this.auth0Client.isAuthenticated();case 16:return this.isAuthenticated=t.sent,t.next=19,this.auth0Client.getUser();case 19:return this.user=t.sent,t.next=22,this.auth0Client.getIdTokenClaims();case 22:return this.idToken=t.sent,this.loading=!1,t.finish(13);case 25:case"end":return t.stop()}}),t,this,[[3,10,13,25]])})));function e(){return t.apply(this,arguments)}return e}()},f=p,v=n("2877"),g=Object(v["a"])(f,o,u,!1,null,null,null),m=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isAuthenticated?t._e():n("v-btn",{on:{click:t.login}},[t._v("Log in")]),t.isAuthenticated?n("v-btn",{on:{click:t.logout}},[t._v("Log out")]):t._e()],1)},k=[],w=(n("5319"),n("1276"),n("ede7")),_={data:function(){return{auth2:null,isAuthenticated:!1,authResponse:null,user:null,idToken:null}},computed:{model:function(){return{id:"google",isAuthenticated:this.isAuthenticated,idToken:this.idToken}}},watch:{model:function(t){this.$emit("input",t)}},mounted:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,n,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=document.createElement("meta"),e.setAttribute("name","google-signin-client_id"),e.setAttribute("content","316279479359-iootvac9v6c9vevqpj0378sgaq1lrfdv.apps.googleusercontent.com"),document.head.appendChild(e),t.next=6,this.$loadScript("https://apis.google.com/js/platform.js");case 6:n=window.gapi,n.load("auth2",(function(){i.auth2=n.auth2.init({client_id:w["a"]}),i.auth2.isSignedIn.listen((function(t){i.isAuthenticated=t})),i.auth2.currentUser.listen((function(t){if(i.user=t,i.authResponse=t.getAuthResponse(),i.authResponse.id_token){var e=i.authResponse.id_token.split(".")[1].replace(/-/g,"+").replace(/_/g,"/");i.idToken=JSON.parse(decodeURIComponent(escape(atob(e))))}else i.idToken={}})),i.auth2.attachClickHandler("signin-button",{},i.onSignIn)}));case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{login:function(){this.auth2.signIn()},logout:function(){this.auth2.signOut()}}},x=_,C=Object(v["a"])(x,b,k,!1,null,null,null),T=C.exports,y={data:function(){return{headers:[{text:"id",value:"value.id"},{text:"isAuthenticated",value:"value.isAuthenticated"},{text:"idToken",value:"value.idToken"},{text:"action",value:"component"}],authenticators:[{component:m,value:{}},{component:T,value:{}}]}}},O=y,j=(n("5c0b"),Object(v["a"])(O,r,a,!1,null,null,null)),R=j.exports,A=n("ce5b"),S=n.n(A),P=(n("bf40"),n("dca6")),I=n.n(P);i["default"].use(S.a);var W=new S.a({lang:{locales:{ja:I.a},current:"ja"},theme:{dark:!0}}),$=(n("d5e8"),n("5363"),n("67b0"));i["default"].use($["a"]),i["default"].config.productionTip=!1,new i["default"]({vuetify:W,render:function(t){return t(R)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),r=n.n(i);r.a},"9c0c":function(t,e,n){},caef:function(t){t.exports=JSON.parse('{"b":"danamid.auth0.com","a":"radszMKtDRxuEI1lPSUAE3QiFvBdsLRF"}')},ede7:function(t){t.exports=JSON.parse('{"a":"316279479359-iootvac9v6c9vevqpj0378sgaq1lrfdv.apps.googleusercontent.com"}')}});
//# sourceMappingURL=app.998a4799.js.map