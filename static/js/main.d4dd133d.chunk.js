(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{26:function(t,e,n){"use strict";var r=n(17);e.a=function(t,e){switch(e){case"success":return r.b.success(t,{position:r.b.POSITION.BOTTOM_RIGHT,className:"toast-message toast-success"});case"error":return r.b.error(t,{position:r.b.POSITION.BOTTOM_RIGHT,className:"toast-message toast-error"});case"info":return r.b.info(t,{position:r.b.POSITION.BOTTOM_RIGHT,className:"toast-message toast-info"})}}},34:function(t,e,n){"use strict";var r=function(t,e){var n=0;return t=parseInt(t),e=parseInt(e),t&&e&&null!==t&&null!==e&&void 0!==t&&void 0!==e&&(n=t>e?1:t===e?0:-1),n},a={compare:r,setOddsUpdate:function(t,e){e.forEach(function(n){var a=e.indexOf(n);if(t[a]&&t[a].id===n.id)for(var o=t[a].betState,s=e[a].betState,i=0;i<3;){var c="o"+i;e[a].betState.matchOdds102["u"+i]=0,o.timestamp!==s.timestamp?e[a].betState.matchOdds102["u"+i]=r(o.matchOdds102[c],s.matchOdds102[c]):o.timestamp===s.timestamp&&(e[a].betState.matchOdds102["u"+i]=t[a].betState.matchOdds102["u"+i]),i++}})}};e.a=a},42:function(t,e,n){"use strict";var r=n(0),a=n.n(r).a.createContext({});e.a=a},5:function(t,e,n){"use strict";n.d(e,"q",function(){return r}),n.d(e,"p",function(){return a}),n.d(e,"d",function(){return o}),n.d(e,"c",function(){return s}),n.d(e,"b",function(){return i}),n.d(e,"e",function(){return c}),n.d(e,"h",function(){return u}),n.d(e,"g",function(){return l}),n.d(e,"i",function(){return d}),n.d(e,"k",function(){return p}),n.d(e,"m",function(){return f}),n.d(e,"n",function(){return h}),n.d(e,"j",function(){return m}),n.d(e,"l",function(){return g}),n.d(e,"r",function(){return y}),n.d(e,"a",function(){return v}),n.d(e,"f",function(){return b}),n.d(e,"o",function(){return O});var r="SET_CURRENT_USER",a="PASSWORD_CHANGE",o="GET_ERRORS",s="GET_ALL_USERS",i="GET_ALL_MATCHES",c="GET_MATCHES",u="GET_TYPE_LIST",l="GET_TOP_LEAGUE",d="MOBILE_GET_ALL_MATCHES",p="MOBILE_GET_MATCHES",f="MOBILE_GET_TOP_LEAGUE",h="MOBILE_GET_TYPE_LIST",m="MOBILE_GET_LEAGUE_SORTS",g="MOBILE_GET_RESULT",y="SET_LOCALIZE",v="BET_SELECT",b="GET_MY_BETS",O="NEW_BETS"},51:function(t,e,n){"use strict";var r=n(32),a=n(5),o=n(20),s=n(28),i=n(6),c={updateCurrentUser:function(t){return o.a.post(i.g+"/user/update",t).then(function(t){var e=t.data.token;localStorage.setItem("jwtToken",e),Object(i.h)(e);var n=Object(s.a)(e),r=i.d[n.lang].name;return localStorage.setItem("lang",r),n})},passwordChange:function(t){return o.a.post(i.g+"/user/changepass",t).then(function(t){return t})},login:function(t){return o.a.post(i.g+"/user/login",t).then(function(t){var e=t.data.token;localStorage.setItem("jwtToken",e),Object(i.h)(e);var n=Object(s.a)(e);console.log("login",n);var r=i.d[n.lang].name;return localStorage.setItem("lang",r),n})},logout:function(){localStorage.removeItem("jwtToken"),Object(i.h)(!1),window.location.href="/"}},u=n(26);function l(){l=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function i(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(_){i=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var a=e&&e.prototype instanceof p?e:p,o=Object.create(a.prototype),s=new j(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return w()}for(n.method=a,n.arg=o;;){var s=n.delegate;if(s){var i=T(s,n);if(i){if(i===d)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,s),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(_){return{type:"throw",arg:_}}}t.wrap=c;var d={};function p(){}function f(){}function h(){}var m={};i(m,a,function(){return this});var g=Object.getPrototypeOf,y=g&&g(g(S([])));y&&y!==e&&n.call(y,a)&&(m=y);var v=h.prototype=p.prototype=Object.create(m);function b(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function O(t,e){var r;this._invoke=function(a,o){function s(){return new e(function(r,s){!function r(a,o,s,i){var c=u(t[a],t,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then(function(t){r("next",t,s,i)},function(t){r("throw",t,s,i)}):e.resolve(d).then(function(t){l.value=t,s(l)},function(t){return r("throw",t,s,i)})}i(c.arg)}(a,o,r,s)})}return r=r?r.then(s,s):s()}}function T(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,T(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:w}}function w(){return{value:void 0,done:!0}}return f.prototype=h,i(v,"constructor",h),i(h,"constructor",f),f.displayName=i(h,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i(t,s,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},b(O.prototype),i(O.prototype,o,function(){return this}),t.AsyncIterator=O,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var s=new O(c(e,n,r,a),o);return t.isGeneratorFunction(n)?s:s.next().then(function(t){return t.done?t.value:s.next()})},b(v),i(v,s,"Generator"),i(v,a,function(){return this}),i(v,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return s.type="throw",s.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;E(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}n.d(e,"a",function(){return d}),n.d(e,"e",function(){return p}),n.d(e,"c",function(){return f}),n.d(e,"d",function(){return h}),n.d(e,"b",function(){return m});var d=function(t){return function(){var e=Object(r.a)(l().mark(function e(n){var r;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.login(t);case 3:return r=e.sent,Object(u.a)("Login Success!","success"),window.location.href="/",e.abrupt("return",n(h(r)));case 9:return e.prev=9,e.t0=e.catch(0),Object(u.a)("Login Error!","error"),e.abrupt("return",n({type:a.d,payload:e.t0.response}));case 13:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},p=function(t){return function(){var e=Object(r.a)(l().mark(function e(n){var r;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.updateCurrentUser(t);case 3:return r=e.sent,e.abrupt("return",n(h(r)));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",n({type:a.d,payload:e.t0.response}));case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()},f=function(t){return function(){var e=Object(r.a)(l().mark(function e(n){var r;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.passwordChange(t);case 3:return r=e.sent,Object(u.a)("Update Success!","success"),e.abrupt("return",n({type:a.p,payload:r}));case 8:return e.prev=8,e.t0=e.catch(0),Object(u.a)("Update Error!","error"),e.abrupt("return",n({type:a.d,payload:e.t0.response}));case 12:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()},h=function(t){return{type:a.q,payload:t}},m=function(){return function(t){c.logout(),t(h({}))}}},57:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"e",function(){return a}),n.d(e,"a",function(){return o}),n.d(e,"c",function(){return s});var r=[[1,"X",2],[1,"X",2],["Over","Under"],[1,"X",2],[1,"X",2],["1X",12,"X2"],["Yes","No"]],a=["RM","Winner","O/U","HC","NG","DC","BS"],o=[{title:"Rest of Match",shortName:"RM"},{title:"Winner",shortName:"Winner"},{title:"Over/Under",shortName:"O/U"},{title:"Handicap",shortName:"HC"},{title:"Next Goal",shortName:"NG"},{title:"Double Chance",shortName:"DC"},{title:"Both Teams To Score",shortName:"BS"},{title:"Rest of Match - Winner",shortName:""},{title:"Rest of Match - Handicap",shortName:""},{title:"Rest of Match - Double Chance",shortName:""},{title:"Rest of Match - Both Teams To Score",shortName:""},{title:"Rest of Match - Draw No Bet",shortName:""},{title:"Draw No Bet",shortName:""},{title:"1st Half",shortName:""},{title:"1st Half Handicap",shortName:""},{title:"1st Half Double Chance",shortName:""},{title:"1st Half Next Goal",shortName:""},{title:"1st Half Draw No Bet",shortName:""},{title:"1st Half Both Teams To Score",shortName:""},{title:"1st Half Over/Under",shortName:""}],s={"UEFA%20Champions%20League":393,"UEFA%20Europa%20League":393,"Premier%20League":1,LaLiga:32,Bundesliga:30,"Serie%20A":31,"Ligue%201":7,"S\xfcper%20Lig":46,Eredivisie:35,"Primeira%20Liga":44};e.b=[{sportTypeId:1,name:"Football",icon:"../assets/images/sports/football.png",m_icon:"../assets/images/micons/football.svg",order:1},{sportTypeId:5,name:"Tennis",icon:"../assets/images/sports/tennis.png",m_icon:"../assets/images/micons/tennis.svg",order:2},{sportTypeId:2,name:"Basketball",icon:"../assets/images/sports/basketball.png",m_icon:"../assets/images/micons/basketball.svg",order:3},{sportTypeId:4,name:"IceHockey",icon:"../assets/images/sports/icehockey.png",m_icon:"../assets/images/micons/icehockey.svg",order:4},{sportTypeId:23,name:"Volleyball",icon:"../assets/images/sports/volleyball.png",m_icon:"../assets/images/micons/volleyball.svg",order:5},{sportTypeId:6,name:"Handball",icon:"../assets/images/sports/handball.png",m_icon:"../assets/images/micons/handball.svg",order:6},{sportTypeId:29,name:"Futsal",icon:"../assets/images/sports/futsal.png",m_icon:"../assets/images/micons/futsal.svg",order:7},{sportTypeId:22,name:"Darts",icon:"../assets/images/sports/darts.png",m_icon:"../assets/images/micons/darts.svg",order:8},{sportTypeId:10,name:"Boxing",icon:"../assets/images/sports/boxing.png",m_icon:"../assets/images/micons/boxing.svg",order:9},{sportTypeId:19,name:"Snooker",icon:"../assets/images/sports/snooker.png",m_icon:"../assets/images/micons/snooker.svg",order:10},{sportTypeId:12,name:"Rugby",icon:"../assets/images/sports/rugby.png",m_icon:"../assets/images/micons/rugby.svg",order:11},{sportTypeId:3,name:"Baseball",icon:"../assets/images/sports/baseball.png",m_icon:"../assets/images/micons/baseball.svg",order:12},{sportTypeId:16,name:"American Football",icon:"../assets/images/sports/american_football.png",m_icon:"../assets/images/micons/american_football.svg",order:13},{sportTypeId:7,name:"xxx",order:29},{sportTypeId:8,name:"xxx",order:29},{sportTypeId:9,name:"xxx",order:29},{sportTypeId:11,name:"xxx",order:29},{sportTypeId:13,name:"xxx",order:29},{sportTypeId:14,name:"xxx",order:29},{sportTypeId:15,name:"xxx",order:29},{sportTypeId:17,name:"xxx",order:29},{sportTypeId:18,name:"xxx",order:29},{sportTypeId:20,name:"xxx",order:29},{sportTypeId:21,name:"xxx",order:29},{sportTypeId:24,name:"xxx",order:29},{sportTypeId:25,name:"xxx",order:29},{sportTypeId:26,name:"xxx",order:29},{sportTypeId:27,name:"xxx",order:29},{sportTypeId:28,name:"xxx",order:29}]},6:function(t,e,n){"use strict";var r=n(3),a=n(8),o=n(11),s=n(12),i=function(){function t(){Object(o.a)(this,t)}return Object(s.a)(t,null,[{key:"generateRoutesFromConfigs",value:function(t){var e=this,n=[];return t.forEach(function(t){n=[].concat(Object(a.a)(n),Object(a.a)(e.setRoutes(t)))}),n}},{key:"setRoutes",value:function(t){var e=Object(a.a)(t.routes);return t.auth&&(e=e.map(function(e){var n=t.auth?Object(a.a)(t.auth):[];return n=e.auth?[].concat(Object(a.a)(n),Object(a.a)(e.auth)):n,Object(r.a)({},e,{auth:n})})),Object(a.a)(e)}},{key:"hasPermission",value:function(t,e){return null===t||void 0===t||(0===t.length?!e||0===e.length:e&&Array.isArray(e)?t.some(function(t){return e.indexOf(t)>=0}):t.includes(e))}}]),t}(),c=n(57),u=[{id:0,name:"de_DE",icon:"assets/images/flags/de_DE.png",title:"Deutsch"},{id:1,name:"en_US",icon:"assets/images/flags/en_US.png",title:"English"},{id:2,name:"nl_NL",icon:"assets/images/flags/nl_NL.png",title:"Dutch"},{id:3,name:"tr_TR",icon:"assets/images/flags/tr_TR.png",title:"T\xfcrk\xe7e"},{id:4,name:"fr_FR",icon:"assets/images/flags/fr_FR.png",title:"Fran\xe7ais"},{id:5,name:"el_GR",icon:"assets/images/flags/el_GR.png",title:"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"},{id:6,name:"bu_BU",icon:"assets/images/flags/bu_BU.png",title:"\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"}],l=n(0),d=n.n(l),p=n(29),f=function(){return Object(p.j)("(min-width: 640px)")?d.a.createElement("div",{className:"load_style"},d.a.createElement("div",{className:"load_content"},d.a.createElement("i",{className:"fa fa-refresh fa-spin fa-5x fa-fw"}))):d.a.createElement("div",{className:"m_load_style"},d.a.createElement("div",{className:"m_load_content"},d.a.createElement("img",{src:"assets/images/micons/load.gif",alt:""})))},h=n(20),m=function(t){t?h.a.defaults.headers.common.Authorization=t:delete h.a.defaults.headers.common.Authorization},g=n(47),y=n(41),v=n(49),b=n(42),O=n(25),T=n(45),x=n(89),E=function(t){function e(t,n){var r;Object(o.a)(this,e),r=Object(g.a)(this,Object(y.a)(e).call(this,t));var a=n.routes;return r.state={accessGranted:!0,routes:a},r}return Object(v.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.state.accessGranted||this.redirectRoute()}},{key:"shouldComponentUpdate",value:function(t,e){return e.accessGranted!==this.state.accessGranted}},{key:"componentDidUpdate",value:function(){this.state.accessGranted||this.redirectRoute()}},{key:"redirectRoute",value:function(){var t=this.props,e=t.location,n=t.userData,r=t.history,a=e.pathname,o=e.state,s=o&&o.redirectUrl?o.redirectUrl:"/";n?r.push({pathname:"/",state:{redirectUrl:a}}):r.push({pathname:s})}},{key:"render",value:function(){return this.state.accessGranted?d.a.createElement(d.a.Fragment,null,this.props.children):null}}],[{key:"getDerivedStateFromProps",value:function(t,e){var n=t.location,r=t.userData,a=t.routes,o=n.pathname,s=!!a&&Object(T.a)(a,o)[0];return{accessGranted:!s||i.hasPermission(s.route.auth,r?r.role:"guest")}}}]),e}(l.Component);E.contextType=b.a;var j=Object(x.f)(Object(O.a)(function(t){return{userData:t.authReducers.user}})(E)),S="unmounted",w={entering:{opacity:0},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},_=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(g.a)(this,Object(y.a)(e).call(this,t))).state={status:S},n}return Object(v.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.props.show&&this.performEnter()}},{key:"componentDidUpdate",value:function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.show?"entering"!==n&&"entered"!==n&&(e="entering"):"entering"!==n&&"entered"!==n||(e="exiting")}this.updateStatus(e)}},{key:"updateStatus",value:function(t){null!==t?"entering"===t?this.performEnter():this.performExit():"exited"===this.state.status&&this.setState({status:S})}},{key:"performEnter",value:function(){var t=this;this.setState({status:"entering"},function(){setTimeout(function(){t.setState({status:"entered"},function(){})},0)})}},{key:"performExit",value:function(){var t=this,e=this.props.duration;this.setState({status:"exiting"},function(){setTimeout(function(){t.setState({status:"exited"},function(){})},e)})}},{key:"render",value:function(){var t=this.state.status;if(t===S)return null;var e=this.props,n=e.children,a=e.duration,o=e.className,s=e.style;return d.a.createElement("div",{className:o,style:Object(r.a)({},s,{transition:"opacity ".concat(a,"ms ease-in-out"),opacity:.1},w[t])},n)}}]),e}(l.Component);_.defaultProps={show:!1,duration:300};var L=_,k=function(t){var e=new Date(t),n=e.getMonth()+1;return e.getDate()+"."+n+"."+e.getFullYear()+" "+e.getUTCHours()+":"+e.getUTCMinutes()},I=n(34),N=function(t){return void 0===t||null===t||"object"===typeof t&&0===Object.keys(t).length||"string"===typeof t&&0===t.trim().length};n.d(e,"j",function(){return i}),n.d(e,"i",function(){return c.b}),n.d(e,"d",function(){return u}),n.d(e,"e",function(){return f}),n.d(e,"h",function(){return m}),n.d(e,"a",function(){return j}),n.d(e,"g",function(){return"https://volley90.de"}),n.d(e,"b",function(){return L}),n.d(e,"c",function(){return k}),n.d(e,"f",function(){return I.a}),n.d(e,"k",function(){return N})},73:function(t,e,n){t.exports=n(99)},78:function(t,e,n){},97:function(t){t.exports={"Sports Betting":"Sports Betting","In-Play":"In-Play",Outrights:"Outrights",Results:"Results","Admin Panel":"Admin Panel","Login Success!":"Login Success!","Single/Multiple":"Single/Multiple",SYSTEM:"SYSTEM","Place bet":"Place bet",Reset:"Reset","Stake:":"Stake:","Tax:":"Tax:","Total stake:":"Total stake:","Stake per bet:":"Stake per bet:","Number of bets:":"Number of bets:","Max Winning:":"Max Winning:","Combinations:":"Combinations:"}},98:function(t){t.exports={"Sports Betting":"Spor Bahisleri","In-Play":"Canl\u0131",Outrights:"S\xfcreli Bahis",Results:"Sonu\xe7lar","Admin Panel":"Admin Paneli","Login Success!":"Giri\u015f ba\u015far\u0131l\u0131!","Single/Multiple":"Tek/\xc7oklu",SYSTEM:"S\u0130STEM","Place bet":"Bahsi teslim et",Reset:"S\u0131f\u0131rla","Stake:":"Bahis Bedeli:","Tax:":"Vergi:","Total stake:":"Bahis Bedeli:","Stake per bet:":"Bahis Ba\u015f\u0131na Bedel:","Number of bets:":"Bahislerin Say\u0131s\u0131:","Max Winning:":"Maks. Kazan\xe7:",Username:"Kullan\u0131c\u0131",Password:"\u015eifre","Combinations:":"Kombinasyonlar:"}},99:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(30),s=n.n(o),i=(n(78),n(8)),c=n(89),u=n(6),l=n(29),d={routes:[{path:"/sportsbetting",component:Object(r.lazy)(function(){return Promise.all([n.e(1),n.e(2),n.e(4)]).then(n.bind(null,168))})}]},p={routes:[{path:"/inplay",component:Object(r.lazy)(function(){return Promise.all([n.e(1),n.e(2),n.e(5)]).then(n.bind(null,170))})}]},f={routes:[{path:"/outrights",component:Object(r.lazy)(function(){return Promise.all([n.e(1),n.e(2),n.e(6)]).then(n.bind(null,171))})}]},h={routes:[{path:"/results",component:Object(r.lazy)(function(){return Promise.all([n.e(1),n.e(2),n.e(7)]).then(n.bind(null,172))})}]},m={routes:[{path:"/m_home",component:Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,115))})}]},g={routes:[{path:"/m_highlights",component:Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,173))})}]},y={routes:[{path:"/m_results",component:Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,174))})}]},v={routes:[{path:"/m_live",exact:!0,component:Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,175))})}]},b={routes:[{path:"/mybets",component:Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,176))})}]},O={routes:[{path:"/m_login",exact:!0,component:Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,177))})},{path:"/m_changepassword",exact:!0,component:Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,178))})}]},T=function(){return a.a.createElement("div",null,"Error404.")},x=[d,p,f,h],E=[O,m,v,b,g,y];var j=function(){var t=Object(l.j)("(max-width: 640px)");return[].concat(Object(i.a)(u.j.generateRoutesFromConfigs(t?E:x)),[{path:"/",exact:!0,component:function(){return t?a.a.createElement(c.a,{to:"/m_home"}):a.a.createElement(c.a,{to:"/sportsbetting"})}},{component:T}])},S=n(42),w=n(28),_=n(23),L=n(68),k=n(70),I=n(3),N=n(5),R=JSON.parse(localStorage.getItem("user")),M=R?{isAuthenticated:!0,user:R}:{isAuthenticated:!1,user:null},B=n(34),P={getAllMatches:[],getMatches:[],getTypeList:[],getTopLeague:[],isLoading:!0},G={getAllMatches:[],getMatches:[],getLeagueSorts:[],getTopLeague:[],getTypeList:[],getResult:[],isLoading:!0},U={lang:"en_US"};if(localStorage.lang){var C=localStorage.getItem("lang");U={lang:C}}var A={betCollectList:[],myBetData:[],isLoading:!0},D=Object(_.combineReducers)({authReducers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case N.q:return Object(I.a)({},t,{isAuthenticated:!0,user:e.payload});case N.c:return Object(I.a)({},t,{users:e.payload});default:return t}},sportsReducers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case N.b:return Object(I.a)({},t,{getAllMatches:e.payload.data,isLoading:!1});case N.e:return t.getMatches.data&&e.payload.data&&B.a.setOddsUpdate(t.getMatches.data.matches,e.payload.data.data.matches),Object(I.a)({},t,{getMatches:e.payload.data,isLoading:!1});case N.h:return Object(I.a)({},t,{getTypeList:e.payload,isLoading:!1});case N.g:return Object(I.a)({},t,{getTopLeague:e.payload,isLoading:!1});default:return t}},mobileSportsReducers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case N.i:return Object(I.a)({},t,{getAllMatches:e.payload.data,isLoading:Object(u.k)(e.payload.data)});case N.k:return t.getMatches.data&&e.payload.data&&u.f.setOddsUpdate(t.getMatches.data.matches,e.payload.data.data.matches),Object(I.a)({},t,{getMatches:e.payload.data,isLoading:Object(u.k)(e.payload.data)});case N.j:return Object(I.a)({},t,{getLeagueSorts:e.payload.data,isLoading:Object(u.k)(e.payload.data)});case N.m:return Object(I.a)({},t,{getTopLeague:e.payload.data,isLoading:Object(u.k)(e.payload.data)});case N.n:return Object(I.a)({},t,{getTypeList:e.payload});case N.l:return Object(I.a)({},t,{getResult:e.payload.data,isLoading:Object(u.k)(e.payload.data)});default:return t}},betReducers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case N.a:return Object(I.a)({},t,{betCollectList:Object(i.a)(e.payload.list)});case N.f:return Object(I.a)({},t,{myBetData:Object(i.a)(e.payload.myBetData),isLoading:!1});case N.o:return Object(I.a)({},t,{isLoading:!1});default:return t}},settingReducers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case N.r:return Object(I.a)({},t,{lang:e.payload});default:return t}}}),H=n(33),F=n(16).a(),z=n(51),W=n(17),Y=n(25),X=n(45);var q=function(t){var e=Object(Y.c)(function(t){return t.mobileSportsReducers.isLoading}),n=Object(Y.c)(function(t){return t.betReducers.isLoading});return console.log("isLoading2",n),a.a.createElement(a.a.Fragment,null,e&&n?a.a.createElement(u.e,null):null,Object(X.b)(t.real_routes))},J=(n(95),Object(_.createStore)(D,Object(L.composeWithDevTools)(Object(_.applyMiddleware)(k.a))));if(localStorage.jwtToken){Object(u.h)(localStorage.jwtToken);var K=Object(w.a)(localStorage.jwtToken);J.dispatch(Object(z.d)(K));var V=Date.now()/1e3;K.exp<V&&(J.dispatch(Object(z.b)()),window.location.href="/")}var Z=function(){var t=j();return a.a.createElement(S.a.Provider,{value:{real_routes:t}},a.a.createElement(H.a,{store:J},a.a.createElement(r.Suspense,{fallback:a.a.createElement(u.e,null)},a.a.createElement(c.c,{history:F,lang:"en_US"},a.a.createElement(u.a,{routes:t},a.a.createElement(q,{real_routes:t}))),a.a.createElement(W.a,{autoClose:4e3}))))},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(t){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(t){console.error("Error during service worker registration:",t)})}var tt=n(50),et=n(116);tt.a.use(et.e).init({fallbackLng:"en_US",lng:"en_US",resources:{en_US:{translations:n(97)},tr_TR:{translations:n(98)}},ns:["translations"],defaultNS:"translations"}),tt.a.languages=["en_US","tr_TR"];tt.a;s.a.render(a.a.createElement(Z,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");$?function(t){fetch(t).then(function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):Q(t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t):Q(t)})}}()}},[[73,16,15]]]);
//# sourceMappingURL=main.d4dd133d.chunk.js.map