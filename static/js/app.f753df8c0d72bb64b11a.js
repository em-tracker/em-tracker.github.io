webpackJsonp([1],{"0OoQ":function(e,t){},"5pZH":function(e,t){},CEwZ:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),r=a("kxiW"),n=a.n(r),s={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){n.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=n.a.auth().currentUser.email)},methods:{logout:function(){var e=this;n.a.auth().signOut().then(function(){e.$router.push("/login")})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("div",{staticClass:"nav-wrapper grey"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[e._v("Time Tracker")]),e._v(" "),a("ul",{staticClass:"right"},[e.isLoggedIn?a("li",[a("span",{staticClass:"email black-text"},[e._v(e._s(e.currentUser))])]):e._e(),e._v(" "),e.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/"}},[e._v("Time Tracker")])],1):e._e(),e._v(" "),e.isLoggedIn?e._e():a("li",[a("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),e._v(" "),e.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/SweDashboard"}},[e._v("Time in")])],1):e._e(),e._v(" "),e.isLoggedIn?a("li",[a("button",{staticClass:"btn black",on:{click:e.logout}},[e._v("Logout")])]):e._e()])],1)])])},staticRenderFns:[]};var l={name:"App",components:{Navbar:a("VU/8")(s,o,!1,function(e){a("5pZH")},null,null).exports}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar",{key:this.$route.fullPath}),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]};var c=a("VU/8")(l,u,!1,function(e){a("zlUi")},null,null).exports,d=a("/ocq"),m=a("Dd8w"),f=a.n(m),v=a("NYxO"),h=(a("z75w"),{name:"manager-view",methods:f()({},Object(v.b)(["retrieveData","logTime"])),computed:Object(v.c)(["allData"]),created:function(){this.retrieveData(),this.logTime()}}),p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manger-view"},[a("h3",[e._v("SWE TimeTable")]),e._v(" "),a("div",{attrs:{id:"timesheet"}},[a("div",{staticClass:"timetable"},[a("table",{attrs:{id:"swe-table"}},[e._m(0),e._v(" "),a("tbody",e._l(e.allData,function(t){return a("tr",{key:t.id},[a("td",[e._v("  "+e._s(t.Name)+" ")]),e._v(" "),a("td",[e._v("  "+e._s(t.Timein)+" ")]),e._v(" "),a("td",[e._v("  "+e._s(t.Timeout)+" ")]),e._v(" "),a("td",[e._v("  "+e._s(t.TotalHours)+" ")]),e._v(" "),a("td",[e._v("  "+e._s(t.NightDiff)+" ")]),e._v(" "),a("td",[e._v("  "+e._s(t.Overtime)+" ")]),e._v(" "),a("td",[e._v("  "+e._s(t.Remarks)+" ")])])}),0)])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("td",[e._v("Name")]),e._v(" "),a("td",[e._v("Time In")]),e._v(" "),a("td",[e._v("Time Out")]),e._v(" "),a("td",[e._v("Total Hours Worked")]),e._v(" "),a("td",[e._v("NightDiff")]),e._v(" "),a("td",[e._v("OT")]),e._v(" "),a("td",[e._v("Remarks")])])])}]};var g=a("VU/8")(h,p,!1,function(e){a("0OoQ")},"data-v-68d34ba7",null).exports,_={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(e){var t=this;n.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){t.$router.push("/")},function(e){alert(e.message)}),e.preventDefault()}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey white-text center"},[a("h3",[e._v("User Login")]),e._v(" "),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"email"}},[e._v("Email Address")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:e.login}},[e._v("Login")])])])])])])])},staticRenderFns:[]};var x=a("VU/8")(_,b,!1,function(e){a("Wb4g")},null,null).exports,w=a("yviF");a("881v");var y=w.initializeApp({apiKey:"AIzaSyAr3fMu2R9V4dex2r6wjC0Gh_JxyN-X_O8",authDomain:"swetimetracker.firebaseapp.com",databaseURL:"https://swetimetracker.firebaseio.com",projectId:"swetimetracker",storageBucket:"swetimetracker.appspot.com",messagingSenderId:"784860893025",appId:"1:784860893025:web:e3a12aa611b7de5e"}).firestore(),k={name:"swe-dashbaord",data:function(){return{timedIn:!1,timeinDisplay:"",timedOut:!1,timeout:"",timeref:""}},methods:{timeIn:function(e){var t=this;this.timeinDisplay=(new Date).toLocaleString(),y.collection("Timsheet").add({Name:n.a.auth().currentUser.email,Timein:new Date,Timeout:"",NightDiff:"",TotalHours:"",Overtime:"",Remarks:""}).then(function(e){t.timedIn=!0,t.timein=new Date,t.timeref=e.id,console.log(t.timeref),alert("you have successfully timed in")}),e.preventDefault()},timeOut:function(e){var t=this,a=this.timein,i=new Date,r=Math.floor(Math.abs((i.getTime()-a.getTime())/36e5));y.collection("Timsheet").doc(this.timeref).update({Timeout:new Date,TotalHours:r}).then(function(){t.timedOut=!0,t.timeout=(new Date).toLocaleString(),alert("you have successfully timed out"),r<9&&y.collection("Timsheet").doc(t.timeref).update({Remarks:"Under Time"})}).catch(function(e){alert("Error in updating",e)}),e.preventDefault()}}},T={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"swe-dashboard"}},[a("h3",[e._v("\n        Time In and Time out of SWE\n    ")]),e._v(" "),a("div",{staticClass:"time-in-out"},[a("button",{staticClass:"btn black",on:{click:e.timeIn}},[e._v("Time-in")]),e._v(" "),a("button",{staticClass:"btn black",on:{click:e.timeOut}},[e._v("Time-out")])]),e._v(" "),e.timedIn?a("div",[e._v("\n        You have timed in : "+e._s(e.timeinDisplay)+"\n    ")]):a("div"),e._v(" "),e.timedOut?a("div",[e._v("\n        You have timed out : "+e._s(e.timeout)+"\n    ")]):a("div")])},staticRenderFns:[]};var D=a("VU/8")(k,T,!1,function(e){a("S1YE")},null,null).exports,C={name:"register-user",data:function(){return{email:"",password:""}},methods:{register:function(e){var t=this;n.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){t.$router.push("/login")},function(e){alert(e.message)}),e.preventDefault()}}},E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey white-text center"},[a("h3",[e._v("Register")]),e._v(" "),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"email"}},[e._v("Email Address")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:e.register}},[e._v("Register")])])])])])])])},staticRenderFns:[]};var S=a("VU/8")(C,E,!1,function(e){a("CEwZ")},null,null).exports;i.a.use(d.a);var N=new d.a({routes:[{path:"/",name:"TimeSheet",component:g,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:x,meta:{requiresGuest:!0}},{path:"/SweDashboard",name:"swe-dashboard",component:D,meta:{requiresAuth:!0}},{path:"/register",name:"register",component:S,meta:{requiresGuest:!0}}]});N.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.requiresAuth})?n.a.auth().currentUser?a():a({path:"/login",query:{redirect:e.fullPath}}):e.matched.some(function(e){return e.meta.requiresGuest})&&n.a.auth().currentUser?a({path:"/SweDashboard",query:{redirect:e.fullPath}}):a()});var F=N,O={state:{timesheet:[]},getters:{allData:function(e){return e.timesheet}},actions:{retrieveData:function(e){y.collection("Timsheet").get().then(function(t){var a=[];t.forEach(function(e){var t=e.data().Timein,i=e.data().Timeout;if(""==i){var r=new Date(1e3*t.seconds).toLocaleDateString(),n=new Date(1e3*t.seconds).toLocaleTimeString(),s={id:e.id,Name:e.data().Name,Timein:r+" "+n,NightDiff:e.data().NigthDiff,TotalHours:e.data().TotalHours,Overtime:e.data().Overtime,Remarks:e.data().Remarks};a.push(s)}else{var o=new Date(1e3*t.seconds).toLocaleDateString(),l=new Date(1e3*t.seconds).toLocaleTimeString(),u=new Date(1e3*i.seconds).toLocaleDateString(),c=new Date(1e3*i.seconds).toLocaleTimeString(),d={id:e.id,Name:e.data().Name,Timein:o+" "+l,Timeout:u+" "+c,NightDiff:e.data().NigthDiff,TotalHours:e.data().TotalHours,Overtime:e.data().Overtime,Remarks:e.data().Remarks};a.push(d)}}),e.commit("retrieveData",a)})},logTime:function(){}},mutations:{retrieveData:function(e,t){e.timesheet=t},logTime:function(e,t){e.timesheet=t}}};i.a.use(v.a);var L=new v.a.Store({modules:{timesheet:O}});i.a.config.productionTip=!1;var R=void 0;n.a.auth().onAuthStateChanged(function(e){R||(R=new i.a({el:"#app",router:F,store:L,components:{App:c},template:"<App/>"}))})},S1YE:function(e,t){},Wb4g:function(e,t){},back:function(e,t,a){"use strict";var i=a("BO1k"),r=a.n(i),n=a("pFYg"),s=a.n(n),o=a("fZjL"),l=a.n(o),u=a("Xxa5"),c=a.n(u),d=a("exGp"),m=a.n(d),f=a("/uqa"),v=a.n(f),h={name:"export-excel",props:{type:{type:String,default:"xls"},data:{type:Array,required:!1,default:null},fields:{type:Object,required:!1},exportFields:{type:Object,required:!1},defaultValue:{type:String,required:!1,default:""},title:{default:null},footer:{default:null},name:{type:String,default:"data.xls"},fetch:{type:Function},meta:{type:Array,default:function(){return[]}},worksheet:{type:String,default:"Sheet1"},beforeGenerate:{type:Function},beforeFinish:{type:Function}},computed:{idName:function(){return"export_"+(new Date).getTime()},downloadFields:function(){return void 0!==this.fields?this.fields:void 0!==this.exportFields?this.exportFields:void 0}},methods:{generate:function(){var e=this;return m()(c.a.mark(function t(){var a,i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e.beforeGenerate){t.next=3;break}return t.next=3,e.beforeGenerate();case 3:if(a=e.data,"function"!=typeof e.fetch&&a){t.next=8;break}return t.next=7,e.fetch();case 7:a=t.sent;case 8:if(a&&a.length){t.next=10;break}return t.abrupt("return");case 10:if(i=e.getProcessedJson(a,e.downloadFields),"html"!==e.type){t.next=15;break}return t.abrupt("return",e.export(e.jsonToXLS(i),e.name.replace(".xls",".html"),"text/html"));case 15:if("csv"!==e.type){t.next=17;break}return t.abrupt("return",e.export(e.jsonToCSV(i),e.name.replace(".xls",".csv"),"application/csv"));case 17:return t.abrupt("return",e.export(e.jsonToXLS(i),e.name,"application/vnd.ms-excel"));case 18:case"end":return t.stop()}},t,e)}))()},export:function(){var e=m()(c.a.mark(function e(t,a,i){var r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.base64ToBlob(t,i),"function"!=typeof this.beforeFinish){e.next=4;break}return e.next=4,this.beforeFinish();case 4:v()(r,a,i);case 5:case"end":return e.stop()}},e,this)}));return function(t,a,i){return e.apply(this,arguments)}}(),jsonToXLS:function(e){var t="<thead>",a=l()(e[0]).length,i=this;for(var r in null!=this.title&&(t+=this.parseExtraData(this.title,'<tr><th colspan="'+a+'">${data}</th></tr>')),t+="<tr>",e[0])t+="<th>"+r+"</th>";return t+="</tr>",t+="</thead>",t+="<tbody>",e.map(function(e,a){for(var r in t+="<tr>",e)t+="<td>"+i.valueReformattedForMultilines(e[r])+"</td>";t+="</tr>"}),t+="</tbody>",null!=this.footer&&(t+="<tfoot>",t+=this.parseExtraData(this.footer,'<tr><td colspan="'+a+'">${data}</td></tr>'),t+="</tfoot>"),'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>'.replace("${table}",t).replace("${worksheet}",this.worksheet)},jsonToCSV:function(e){var t=[];for(var a in null!=this.title&&t.push(this.parseExtraData(this.title,"${data}\r\n")),e[0])t.push(a),t.push(",");return t.pop(),t.push("\r\n"),e.map(function(e){for(var a in e){var i='="'+e[a]+'"';i.match(/[,"\n]/)&&(i='"'+i.replace(/\"/g,'""')+'"'),t.push(i),t.push(",")}t.pop(),t.push("\r\n")}),null!=this.footer&&t.push(this.parseExtraData(this.footer,"${data}\r\n")),t.join("")},getProcessedJson:function(e,t){var a=this.getKeys(e,t),i=[],r=this;return e.map(function(e,t){var n={};for(var s in a){var o=a[s];n[s]=r.getValue(o,e)}i.push(n)}),i},getKeys:function(e,t){if(t)return t;var a={};for(var i in e[0])a[i]=i;return a},parseExtraData:function(e,t){var a="";if(Array.isArray(e))for(var i=0;i<e.length;i++)a+=t.replace("${data}",e[i]);else a+=t.replace("${data}",e);return a},getValue:function(e,t){var a="object"!==(void 0===e?"undefined":s()(e))?e:e.field,i="string"!=typeof a?[]:a.split("."),r=this.defaultValue;return r=a?i.length>1?this.getValueFromNestedItem(t,i):this.parseValue(t[a]):t,e.hasOwnProperty("callback")&&(r=this.getValueFromCallback(r,e.callback)),r},valueReformattedForMultilines:function(e){return"string"==typeof e?e.replace(/\n/gi,"<br/>"):e},getValueFromNestedItem:function(e,t){var a=e,i=!0,n=!1,s=void 0;try{for(var o,l=r()(t);!(i=(o=l.next()).done);i=!0){var u=o.value;a&&(a=a[u])}}catch(e){n=!0,s=e}finally{try{!i&&l.return&&l.return()}finally{if(n)throw s}}return this.parseValue(a)},getValueFromCallback:function(e,t){if("function"!=typeof t)return this.defaultValue;var a=t(e);return this.parseValue(a)},parseValue:function(e){return e||0===e||"boolean"==typeof e?e:this.defaultValue},base64ToBlob:function(e,t){for(var a=window.btoa(window.unescape(encodeURIComponent(e))),i=atob(a),r=i.length,n=new Uint8ClampedArray(r);r--;)n[r]=i.charCodeAt(r);return new Blob([n],{type:t})}}},p={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:this.idName},on:{click:this.generate}},[this._t("default",[this._v("\n        Download "+this._s(this.name)+"\n    ")])],2)},staticRenderFns:[]},g=a("VU/8")(h,p,!1,null,null,null);t.a=g.exports},zlUi:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f753df8c0d72bb64b11a.js.map