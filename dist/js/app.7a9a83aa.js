(function(e){function t(t){for(var i,u,o=t[0],c=t[1],s=t[2],h=0,d=[];h<o.length;h++)u=o[h],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var i={},r={app:0},a=[];function u(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=i,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)u.d(n,i,function(t){return e[t]}.bind(null,i));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/auth/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-container",{attrs:{fluid:""}},[n("v-data-table",{attrs:{items:e.authenticators,headers:e.headers},scopedSlots:e._u([{key:"item.value.idToken",fn:function(t){var i=t.item;return[n("pre",[e._v(e._s(JSON.stringify(i.value.idToken,null,2)))])]}},{key:"item.component",fn:function(t){var i=t.item;return[n(i.component,{tag:"component",model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"item.value"}})]}}])})],1)],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auth0"},[e.loading?e._e():n("div",[n("v-row",[n("v-col",[e.isAuthenticated?e._e():n("v-btn",{on:{click:e.loginWithPopup}},[e._v("Log in with Popup")])],1),n("v-col",[e.isAuthenticated?e._e():n("v-btn",{on:{click:e.loginWithRedirect}},[e._v("Log in with Redirect")])],1)],1),e.isAuthenticated?n("v-btn",{on:{click:e.logout}},[e._v("Log out")]):e._e()],1)])},o=[],c=(n("caad"),n("ac1f"),n("2532"),n("841c"),n("96cf"),n("1da1")),s=n("15fd"),l=n("5891"),h=n.n(l),d=n("caef"),p={data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null,idToken:null}},computed:{model:function(){var e=this.idToken?this.idToken:{__raw:null},t=(e.__raw,Object(s["a"])(e,["__raw"]));return{id:"auth0",isAuthenticated:this.isAuthenticated,user:this.user,idToken:t}}},watch:{model:function(e){this.$emit("input",e)}},methods:{loginWithPopup:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.popupOpen=!0,e.prev=1,e.next=4,this.auth0Client.loginWithPopup(t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),console.error(e.t0);case 9:return e.prev=9,this.popupOpen=!1,e.finish(9);case 12:return e.next=14,this.auth0Client.getUser();case 14:return this.user=e.sent,e.next=17,this.auth0Client.getIdTokenClaims();case 17:this.idToken=e.sent,this.isAuthenticated=!0;case 19:case"end":return e.stop()}}),e,this,[[1,6,9,12]])})));function t(t){return e.apply(this,arguments)}return t}(),handleRedirectCallback:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,this.auth0Client.handleRedirectCallback();case 4:return e.next=6,this.auth0Client.getUser();case 6:return this.user=e.sent,e.next=9,this.auth0Client.getIdTokenClaims();case 9:this.idToken=e.sent,this.isAuthenticated=!0,e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](1),this.error=e.t0;case 16:return e.prev=16,this.loading=!1,e.finish(16);case 19:case"end":return e.stop()}}),e,this,[[1,13,16,19]])})));function t(){return e.apply(this,arguments)}return t}(),loginWithRedirect:function(e){return this.auth0Client.loginWithRedirect(e)},getIdTokenClaims:function(e){return this.auth0Client.getIdTokenClaims(e)},getTokenSilently:function(e){return this.auth0Client.getTokenSilently(e)},getTokenWithPopup:function(e){return this.auth0Client.getTokenWithPopup(e)},logout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href;return this.auth0Client.logout(e)}},created:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h()({domain:d["b"],client_id:d["a"],redirect_uri:window.location.href});case 2:if(this.auth0Client=e.sent,e.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=8;break}return e.next=7,this.auth0Client.handleRedirectCallback();case 7:window.history.replaceState({},document.title,window.location.pathname);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),this.error=e.t0;case 13:return e.prev=13,e.next=16,this.auth0Client.isAuthenticated();case 16:return this.isAuthenticated=e.sent,e.next=19,this.auth0Client.getUser();case 19:return this.user=e.sent,e.next=22,this.auth0Client.getIdTokenClaims();case 22:return this.idToken=e.sent,this.loading=!1,e.finish(13);case 25:case"end":return e.stop()}}),e,this,[[3,10,13,25]])})));function t(){return e.apply(this,arguments)}return t}()},f=p,v=n("2877"),g=Object(v["a"])(f,u,o,!1,null,null,null),m=g.exports,b={components:{Auth0:m},data:function(){return{headers:[{text:"id",value:"value.id"},{text:"isAuthenticated",value:"value.isAuthenticated"},{text:"idToken",value:"value.idToken"},{text:"action",value:"component"}],authenticators:[{component:m,value:{}}]}}},k=b,w=(n("5c0b"),Object(v["a"])(k,r,a,!1,null,null,null)),x=w.exports,_=n("ce5b"),y=n.n(_),C=(n("bf40"),n("dca6")),T=n.n(C);i["default"].use(y.a);var O=new y.a({lang:{locales:{ja:T.a},current:"ja"},theme:{dark:!0}});n("d5e8"),n("5363");i["default"].config.productionTip=!1,new i["default"]({vuetify:O,render:function(e){return e(x)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),r=n.n(i);r.a},"9c0c":function(e,t,n){},caef:function(e){e.exports=JSON.parse('{"b":"danamid.auth0.com","a":"radszMKtDRxuEI1lPSUAE3QiFvBdsLRF"}')}});
//# sourceMappingURL=app.7a9a83aa.js.map