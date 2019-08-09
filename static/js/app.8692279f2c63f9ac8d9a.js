webpackJsonp([1],{CEwZ:function(e,t){},LeRZ:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("7+uW"),i=a("kxiW"),n=a.n(i),s={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){n.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=n.a.auth().currentUser.email)},methods:{logout:function(){var e=this;n.a.auth().signOut().then(function(){e.$router.push("/login")})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",[a("div",{staticClass:"nav-wrapper grey"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[e._v("Time Tracker")]),e._v(" "),e._m(0),e._v(" "),a("ul",{staticClass:"right hide-on-med-and-down",attrs:{id:"nav-mobile"}},[e.isLoggedIn?a("li",[a("span",{staticClass:"email black-text"},[e._v(e._s(e.currentUser))])]):e._e(),e._v(" "),e.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/SweDashboard"}},[e._v("Time in")])],1):e._e(),e._v(" "),e.isLoggedIn?a("li",[a("button",{staticClass:"btn black",on:{click:e.logout}},[e._v("Logout")])]):e._e()])],1)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"sidenav-trigger",attrs:{href:"#","data-target":"mobile-demo"}},[t("i",{staticClass:"material-icons"},[this._v("menu")])])}]};var l={name:"App",components:{Navbar:a("VU/8")(s,o,!1,function(e){a("vLH2")},null,null).exports}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar",{key:this.$route.fullPath}),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]};var c=a("VU/8")(l,u,!1,function(e){a("LeRZ")},null,null).exports,d=a("/ocq"),m=a("Dd8w"),f=a.n(m),h=a("NYxO"),p=a("z75w"),v={name:"manager-view",methods:f()({},Object(h.b)(["retrieveData"])),computed:f()({},Object(h.c)(["allData"]),{filterData:function(){var e=this;return this.allData.filter(function(t){return t.Name.match(e.search)})}}),created:function(){this.retrieveData()},data:function(){return{search:"",json_fields:{Name:"Name","Time in":"Timein","Time out":"Timeout","Total Hours":"TotalHours","Night Diff":"NightDiff",Remarks:"Remarks","Additional Remarks":""},json_meta:[[{key:"charset",value:"utf-8"}]]}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manger-view"},[a("h3",[e._v("SWE TimeTable")]),e._v(" "),a("div",{staticClass:"container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:"Search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),e._v(" "),a("div",{attrs:{id:"timesheet"}},[a("div",{staticClass:"timetable"},[a("table",{staticClass:"highlight",attrs:{id:"swe-table"}},[e._m(0),e._v(" "),a("tbody",e._l(e.filterData,function(t){return a("tr",{key:t.id},[a("td",[e._v("  "+e._s(t.Name)+" ")]),e._v(" "),a("td",[e._v("  "+e._s(t.Timein)+" ")]),e._v(" "),a("td",[e._v("  "+e._s(t.Timeout)+" ")]),e._v(" "),a("td",[e._v("  "+e._s(t.TotalHours)+" ")]),e._v(" "),a("td",[e._v("  "+e._s(t.NightDiff)+" ")]),e._v(" "),a("td",[e._v("  "+e._s(t.Remarks)+" ")])])}),0)])])]),e._v(" "),a("br"),e._v(" "),a("div",[a("export-excel",{staticClass:"btn btn-default",attrs:{data:e.filterData,fields:e.json_fields,worksheet:"SWE TimeTable",name:"timereports.xls"}},[e._v("\n        \n            Download Excel \n        \n        ")])],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("td",[e._v("Name")]),e._v(" "),a("td",[e._v("Time In")]),e._v(" "),a("td",[e._v("Time Out")]),e._v(" "),a("td",[e._v("Total Hours Worked")]),e._v(" "),a("td",[e._v("Night Differential")]),e._v(" "),a("td",[e._v("Remarks")])])])}]};var g=a("VU/8")(v,_,!1,function(e){a("ijQV")},"data-v-3632b704",null).exports,b={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(e){var t=this;n.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){t.$router.push("/")},function(e){alert(e.message)}),e.preventDefault()}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey white-text center"},[a("h3",[e._v("User Login")]),e._v(" "),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"email"}},[e._v("Email Address")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:e.login}},[e._v("Login")])])])])])])])},staticRenderFns:[]};var w=a("VU/8")(b,x,!1,function(e){a("Wb4g")},null,null).exports,y=a("yviF");a("881v");var k=y.initializeApp({apiKey:"AIzaSyAr3fMu2R9V4dex2r6wjC0Gh_JxyN-X_O8",authDomain:"swetimetracker.firebaseapp.com",databaseURL:"https://swetimetracker.firebaseio.com",projectId:"swetimetracker",storageBucket:"swetimetracker.appspot.com",messagingSenderId:"784860893025",appId:"1:784860893025:web:e3a12aa611b7de5e"}).firestore(),T={name:"swe-dashbaord",data:function(){return{timedIn:!1,timeinDisplay:"",timedOut:!1,timeout:"",timeref:""}},methods:{timeIn:function(e){var t=this;this.timeinDisplay=(new Date).toLocaleString(),k.collection("Timsheet").add({Name:n.a.auth().currentUser.email,Timein:new Date,Timeout:"",NightDiff:"",TotalHours:"",Overtime:"",Remarks:""}).then(function(e){t.timedIn=!0,t.timein=new Date,t.timeref=e.id,console.log(t.timeref),alert("you have successfully timed in")}),e.preventDefault()},timeOut:function(e){var t=this,a=this.timein,r=new Date,i=Math.abs((r.getTime()-a.getTime())/36e5),s=0;switch(a.getHours()){case 24:s=6;break;case 21:s=7;break;case 22:s=8}console.log(s),k.collection("Timsheet").doc(this.timeref).update({Timeout:new Date,TotalHours:i.toFixed(2),NightDiff:s}).then(function(){if(t.timedOut=!0,t.timeout=(new Date).toLocaleString(),alert("you have successfully timed out"),i<9)k.collection("Timsheet").doc(t.timeref).update({Remarks:"Undertime".toUpperCase()});else if(i>9){k.collection("Timsheet").doc(t.timeref).update({Remarks:"overtime".toUpperCase()})}n.a.auth().signOut().then(function(){t.$router.push("/login")})}).catch(function(e){alert("Error in updating",e)}),e.preventDefault()}}},D={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"swe-dashboard"}},[a("h3",[e._v("\n        Time In and Time out of SWE\n    ")]),e._v(" "),a("div",{staticClass:"time-in-out"},[e.timedIn?e.timedIn?a("button",{staticClass:"btn black",on:{click:e.timeOut}},[e._v("Time-out")]):e._e():a("button",{staticClass:"btn black",on:{click:e.timeIn}},[e._v("Time-in")])]),e._v(" "),e.timedIn?a("div",[e._v("\n        You have timed in : "+e._s(e.timeinDisplay)+"\n    ")]):a("div"),e._v(" "),e.timedOut?a("div",[e._v("\n        You have timed out : "+e._s(e.timeout)+"\n    ")]):a("div")])},staticRenderFns:[]};var C=a("VU/8")(T,D,!1,function(e){a("W1DG")},null,null).exports,E={name:"register-user",data:function(){return{email:"",password:""}},methods:{register:function(e){var t=this;n.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){t.$router.push("/login")},function(e){alert(e.message)}),e.preventDefault()}}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey white-text center"},[a("h3",[e._v("Register")]),e._v(" "),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"email"}},[e._v("Email Address")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:e.register}},[e._v("Register")])])])])])])])},staticRenderFns:[]};var R=a("VU/8")(E,N,!1,function(e){a("CEwZ")},null,null).exports,S={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"container"},[a("h1",[e._v("Add User")]),e._v(" "),a("p",[e._v("Please fill in this form to create an account.")]),e._v(" "),a("hr"),e._v(" "),a("label",{attrs:{for:"email"}},[a("b",[e._v("Email")])]),e._v(" "),a("input",{attrs:{type:"text",placeholder:"Enter Email",name:"email",required:""}}),e._v(" "),a("label",{attrs:{for:"psw"}},[a("b",[e._v("Password")])]),e._v(" "),a("input",{attrs:{type:"password",placeholder:"Enter Password",name:"psw",required:""}}),e._v(" "),a("label",{attrs:{for:"name"}},[a("b",[e._v("Name")])]),e._v(" "),a("input",{attrs:{type:"text",placeholder:"Enter Name",name:"name",required:""}}),e._v(" "),a("label",{attrs:{for:"name"}},[a("b",[e._v("User Type")])]),e._v(" "),a("input",{attrs:{type:"text",placeholder:"Enter if SWE / Manager",name:"utype",required:""}}),e._v(" "),a("label",{attrs:{for:"name"}},[a("b",[e._v("Team")])]),e._v(" "),a("input",{attrs:{type:"text",placeholder:"Enter Team",name:"team",required:""}}),e._v(" "),a("hr"),e._v(" "),a("button",{staticClass:"registerbtn",attrs:{type:"submit"}},[e._v("Register")])])])])}]};var F=a("VU/8")({name:"add-employee",data:function(){return{name:"",email:"",password:"",usertype:"",team:"",manager:""}}},S,!1,function(e){a("d4EI")},"data-v-48dc55f8",null).exports;r.a.use(d.a);var U=new d.a({routes:[{path:"/",name:"TimeSheet",component:g,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:w,meta:{requiresGuest:!0}},{path:"/SweDashboard",name:"swe-dashboard",component:C,meta:{requiresAuth:!0}},{path:"/register",name:"register",component:R,meta:{requiresGuest:!0}},{path:"/addemployee",name:"add-employee",component:F,meta:{requiresAuth:!0}}]});U.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.requiresAuth})?n.a.auth().currentUser?a():a({path:"/login",query:{redirect:e.fullPath}}):e.matched.some(function(e){return e.meta.requiresGuest})&&n.a.auth().currentUser?a({path:"/SweDashboard",query:{redirect:e.fullPath}}):a()});var V=U,$={state:{timesheet:[]},getters:{allData:function(e){return e.timesheet}},actions:{retrieveData:function(e){k.collection("Timsheet").get().then(function(t){var a=[];t.forEach(function(e){var t=e.data().Timein,r=e.data().Timeout;if(""==r){var i=new Date(1e3*t.seconds).toLocaleDateString(),n=new Date(1e3*t.seconds).toLocaleTimeString(),s={id:e.id,Name:e.data().Name,Timein:i+" "+n,NightDiff:e.data().NightDiff,TotalHours:e.data().TotalHours,Remarks:e.data().Remarks};a.push(s)}else{var o=new Date(1e3*t.seconds).toLocaleDateString(),l=new Date(1e3*t.seconds).toLocaleTimeString(),u=new Date(1e3*r.seconds).toLocaleDateString(),c=new Date(1e3*r.seconds).toLocaleTimeString(),d={id:e.id,Name:e.data().Name,Timein:o+" "+l,Timeout:u+" "+c,NightDiff:e.data().NightDiff,TotalHours:e.data().TotalHours,Remarks:e.data().Remarks};a.push(d)}}),e.commit("retrieveData",a)})}},mutations:{retrieveData:function(e,t){e.timesheet=t}}};r.a.use(h.a);var I=new h.a.Store({modules:{timesheet:$}});r.a.use(p.a),r.a.config.productionTip=!1;var L=void 0;n.a.auth().onAuthStateChanged(function(e){L||(L=new r.a({el:"#app",router:V,store:I,components:{App:c},template:"<App/>"}))})},W1DG:function(e,t){},Wb4g:function(e,t){},back:function(e,t,a){"use strict";var r=a("BO1k"),i=a.n(r),n=a("pFYg"),s=a.n(n),o=a("fZjL"),l=a.n(o),u=a("Xxa5"),c=a.n(u),d=a("exGp"),m=a.n(d),f=a("/uqa"),h=a.n(f),p={name:"export-excel",props:{type:{type:String,default:"xls"},data:{type:Array,required:!1,default:null},fields:{type:Object,required:!1},exportFields:{type:Object,required:!1},defaultValue:{type:String,required:!1,default:""},title:{default:null},footer:{default:null},name:{type:String,default:"data.xls"},fetch:{type:Function},meta:{type:Array,default:function(){return[]}},worksheet:{type:String,default:"Sheet1"},beforeGenerate:{type:Function},beforeFinish:{type:Function}},computed:{idName:function(){return"export_"+(new Date).getTime()},downloadFields:function(){return void 0!==this.fields?this.fields:void 0!==this.exportFields?this.exportFields:void 0}},methods:{generate:function(){var e=this;return m()(c.a.mark(function t(){var a,r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e.beforeGenerate){t.next=3;break}return t.next=3,e.beforeGenerate();case 3:if(a=e.data,"function"!=typeof e.fetch&&a){t.next=8;break}return t.next=7,e.fetch();case 7:a=t.sent;case 8:if(a&&a.length){t.next=10;break}return t.abrupt("return");case 10:if(r=e.getProcessedJson(a,e.downloadFields),"html"!==e.type){t.next=15;break}return t.abrupt("return",e.export(e.jsonToXLS(r),e.name.replace(".xls",".html"),"text/html"));case 15:if("csv"!==e.type){t.next=17;break}return t.abrupt("return",e.export(e.jsonToCSV(r),e.name.replace(".xls",".csv"),"application/csv"));case 17:return t.abrupt("return",e.export(e.jsonToXLS(r),e.name,"application/vnd.ms-excel"));case 18:case"end":return t.stop()}},t,e)}))()},export:function(){var e=m()(c.a.mark(function e(t,a,r){var i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this.base64ToBlob(t,r),"function"!=typeof this.beforeFinish){e.next=4;break}return e.next=4,this.beforeFinish();case 4:h()(i,a,r);case 5:case"end":return e.stop()}},e,this)}));return function(t,a,r){return e.apply(this,arguments)}}(),jsonToXLS:function(e){var t="<thead>",a=l()(e[0]).length,r=this;for(var i in null!=this.title&&(t+=this.parseExtraData(this.title,'<tr><th colspan="'+a+'">${data}</th></tr>')),t+="<tr>",e[0])t+="<th>"+i+"</th>";return t+="</tr>",t+="</thead>",t+="<tbody>",e.map(function(e,a){for(var i in t+="<tr>",e)t+="<td>"+r.valueReformattedForMultilines(e[i])+"</td>";t+="</tr>"}),t+="</tbody>",null!=this.footer&&(t+="<tfoot>",t+=this.parseExtraData(this.footer,'<tr><td colspan="'+a+'">${data}</td></tr>'),t+="</tfoot>"),'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>'.replace("${table}",t).replace("${worksheet}",this.worksheet)},jsonToCSV:function(e){var t=[];for(var a in null!=this.title&&t.push(this.parseExtraData(this.title,"${data}\r\n")),e[0])t.push(a),t.push(",");return t.pop(),t.push("\r\n"),e.map(function(e){for(var a in e){var r='="'+e[a]+'"';r.match(/[,"\n]/)&&(r='"'+r.replace(/\"/g,'""')+'"'),t.push(r),t.push(",")}t.pop(),t.push("\r\n")}),null!=this.footer&&t.push(this.parseExtraData(this.footer,"${data}\r\n")),t.join("")},getProcessedJson:function(e,t){var a=this.getKeys(e,t),r=[],i=this;return e.map(function(e,t){var n={};for(var s in a){var o=a[s];n[s]=i.getValue(o,e)}r.push(n)}),r},getKeys:function(e,t){if(t)return t;var a={};for(var r in e[0])a[r]=r;return a},parseExtraData:function(e,t){var a="";if(Array.isArray(e))for(var r=0;r<e.length;r++)a+=t.replace("${data}",e[r]);else a+=t.replace("${data}",e);return a},getValue:function(e,t){var a="object"!==(void 0===e?"undefined":s()(e))?e:e.field,r="string"!=typeof a?[]:a.split("."),i=this.defaultValue;return i=a?r.length>1?this.getValueFromNestedItem(t,r):this.parseValue(t[a]):t,e.hasOwnProperty("callback")&&(i=this.getValueFromCallback(i,e.callback)),i},valueReformattedForMultilines:function(e){return"string"==typeof e?e.replace(/\n/gi,"<br/>"):e},getValueFromNestedItem:function(e,t){var a=e,r=!0,n=!1,s=void 0;try{for(var o,l=i()(t);!(r=(o=l.next()).done);r=!0){var u=o.value;a&&(a=a[u])}}catch(e){n=!0,s=e}finally{try{!r&&l.return&&l.return()}finally{if(n)throw s}}return this.parseValue(a)},getValueFromCallback:function(e,t){if("function"!=typeof t)return this.defaultValue;var a=t(e);return this.parseValue(a)},parseValue:function(e){return e||0===e||"boolean"==typeof e?e:this.defaultValue},base64ToBlob:function(e,t){for(var a=window.btoa(window.unescape(encodeURIComponent(e))),r=atob(a),i=r.length,n=new Uint8ClampedArray(i);i--;)n[i]=r.charCodeAt(i);return new Blob([n],{type:t})}}},v={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:this.idName},on:{click:this.generate}},[this._t("default",[this._v("\n        Download "+this._s(this.name)+"\n    ")])],2)},staticRenderFns:[]},_=a("VU/8")(p,v,!1,null,null,null);t.a=_.exports},d4EI:function(e,t){},ijQV:function(e,t){},vLH2:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.8692279f2c63f9ac8d9a.js.map