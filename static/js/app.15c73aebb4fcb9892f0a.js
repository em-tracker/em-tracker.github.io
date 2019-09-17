webpackJsonp([1],{"1d0q":function(e,t){},"1qaU":function(e,t){},CEwZ:function(e,t){},LeRZ:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),r=a("kxiW"),n=a.n(r),s={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){n.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=n.a.auth().currentUser.email)},methods:{logout:function(){var e=this;n.a.auth().signOut().then(function(){window.localStorage.clear(),e.$router.push("/login")})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",[a("div",{staticClass:"nav-wrapper grey"},[a("div",{staticClass:"container"},[a("div",{staticClass:"brand-logo"},[e._v("Time Tracker")]),e._v(" "),a("ul",{staticClass:"right hide-on-med-and-down",attrs:{id:"nav-mobile"}},[e.isLoggedIn?a("li",[a("div",{staticClass:"email black-text"},[e._v(e._s(e.currentUser)+" ")])]):e._e(),e._v(" "),e.isLoggedIn?a("li",[a("button",{staticClass:"btn black",on:{click:e.logout}},[e._v("Logout")])]):e._e()])])])])])},staticRenderFns:[]};var l={name:"App",components:{Navbar:a("VU/8")(s,o,!1,function(e){a("nosF")},null,null).exports}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar",{key:this.$route.fullPath}),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]};var u=a("VU/8")(l,c,!1,function(e){a("LeRZ")},null,null).exports,m=a("/ocq"),d=a("Dd8w"),h=a.n(d),v=a("NYxO"),f=a("z75w"),p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("select",[t("option",{attrs:{value:"volvo"}},[this._v("Volvo")]),this._v(" "),t("option",{attrs:{value:"saab"}},[this._v("Saab")]),this._v(" "),t("option",{attrs:{value:"mercedes"}},[this._v("Mercedes")]),this._v(" "),t("option",{attrs:{value:"audi"}},[this._v("Audi")])])])}]};var g={name:"manager-view",components:{FilterSwes:a("VU/8")({name:"FilterSwes"},p,!1,function(e){a("aUlb")},null,null).exports},methods:h()({},Object(v.b)(["retrieveData"])),computed:h()({},Object(v.c)(["allData"]),{filterData:function(){var e=this;return this.allData.filter(function(t){return t.Name.match(e.search)})}}),created:function(){this.retrieveData()},data:function(){return{search:"",json_fields:{Name:"Name","Time in":"Timein","Time out":"Timeout","Total Hours":"TotalHours","Night Diff":"NightDiff",Remarks:"Remarks","Additional Remarks":""},json_meta:[[{key:"charset",value:"utf-8"}]]}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manger-view"},[a("h3",[e._v("Employee TimeTable")]),e._v(" "),a("div",{staticClass:"container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:"Search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),e._v(" "),a("FilterSwes"),e._v(" "),a("div",{attrs:{id:"timesheet"}},[a("div",{staticClass:"timetable"},[a("table",{staticClass:"highlight",attrs:{id:"swe-table"}},[e._m(0),e._v(" "),a("tbody",e._l(e.filterData,function(t){return a("tr",{key:t.id},[a("td",[e._v("  "+e._s(t.Name)+" ")]),e._v(" "),a("td",[e._v("  "+e._s(t.Timein)+" ")]),e._v(" "),a("td",[e._v("  "+e._s(t.Timeout)+" ")]),e._v(" "),a("td",[e._v("  "+e._s(t.TotalHours)+" ")]),e._v(" "),a("td",[e._v("  "+e._s(t.NightDiff)+" ")]),e._v(" "),a("td",[e._v("  "+e._s(t.Remarks)+" ")])])}),0)])])]),e._v(" "),a("br"),e._v(" "),a("div",[a("export-excel",{staticClass:"btn btn-default",attrs:{data:e.filterData,fields:e.json_fields,worksheet:"SWE TimeTable",name:"timereports.xls"}},[e._v("\n        \n            Download Excel \n        \n        ")])],1)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("td",[e._v("Name")]),e._v(" "),a("td",[e._v("Time In")]),e._v(" "),a("td",[e._v("Time Out")]),e._v(" "),a("td",[e._v("Total Hours Worked")]),e._v(" "),a("td",[e._v("Night Differential")]),e._v(" "),a("td",[e._v("Remarks")])])])}]};var w=a("VU/8")(g,_,!1,function(e){a("tViX")},"data-v-05320068",null).exports,b={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(e){var t=this;n.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){t.email.includes("admin")?t.$router.push("/timesheet"):t.$router.push("/")},function(e){alert(e.message)}),e.preventDefault()}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey white-text center"},[a("h3",[e._v("User Login")]),e._v(" "),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"email"}},[e._v("Email Address")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:e.login}},[e._v("Login")])])])])])])])},staticRenderFns:[]};var y=a("VU/8")(b,x,!1,function(e){a("1d0q")},null,null).exports,k=a("mvHQ"),T=a.n(k),D=a("yviF");a("881v");var C=D.initializeApp({apiKey:"AIzaSyAr3fMu2R9V4dex2r6wjC0Gh_JxyN-X_O8",authDomain:"swetimetracker.firebaseapp.com",databaseURL:"https://swetimetracker.firebaseio.com",projectId:"swetimetracker",storageBucket:"swetimetracker.appspot.com",messagingSenderId:"784860893025",appId:"1:784860893025:web:e3a12aa611b7de5e"}).firestore(),E={name:"swe-dashbaord",data:function(){return{timedIn:!1,timeinDisplay:"",timedOut:!1,timeout:"",timeref:"",timein:"",manager:""}},created:function(){var e=JSON.parse(localStorage.getItem("localTimeRef"));e?(this.timeref=e.storedRef,this.timedIn=!0,this.timeinDisplay=e.storedTimeDisplay,this.timein=e.storedTime):console.log("first entry of this component")},methods:{timeIn:function(e){var t=this,a=new Date;this.timeinDisplay=a.toLocaleString();var i=a.toLocaleString("en-US",{hour:"numeric",hour12:!0}),r=n.a.auth().currentUser.email.includes("maurice");parseInt(i)<7&&!r?(alert("You are not allowed to time in at this time, allowable timein 8PM-12AM"),this.timedIn=!1):(C.collection("Timesheet").add({Name:n.a.auth().currentUser.email,Timein:new Date,Timeout:"",NightDiff:"",TotalHours:"",Overtime:"",Remarks:""}).then(function(e){alert("you have successfully timed in"),t.timedIn=!0,t.timein=new Date,t.timeref=e.id;var a=new Date,i=new Date,r={storedRef:e.id,storedTime:a.getTime(),storedTimeDisplay:i.toLocaleString()};localStorage.setItem("localTimeRef",T()(r)),console.log(r)}),e.preventDefault()),e.preventDefault()},timeOut:function(e){var t=this,a=this.timein,i=new Date,r=Math.abs((i.getTime()-a)/36e5),s=parseInt(a.toLocaleString("en-US",{hour:"numeric",hour12:!0})),o=parseInt(i.toLocaleString("en-US",{hour:"numeric",hour12:!0})),l=0,c=0;s<10?(l=10,console.log("first if of this iteration for date1")):(l=s,console.log("im at else of the date1 convertion")),9>o&&o>6?(c=18,console.log("this is the first if of date2 convertion")):o>9?(c=o,console.log("im at the 1st else if of this else if component")):o<6&&(c=o+12,console.log("im at the 2nd else if of this component...")),console.log(c+" "+l);var u=c-l;C.collection("Timesheet").doc(this.timeref).update({Timeout:new Date,TotalHours:r.toFixed(2),NightDiff:u}).then(function(){if(t.timedOut=!0,t.timeout=(new Date).toLocaleString(),alert("you have successfully timed out"),r<9)C.collection("Timesheet").doc(t.timeref).update({Remarks:"Undertime".toUpperCase()});else if(r>9){C.collection("Timesheet").doc(t.timeref).update({Remarks:"overtime".toUpperCase()})}n.a.auth().signOut().then(function(){window.localStorage.clear(),t.$router.push("/login")})}).catch(function(e){alert("Error in updating",e)}),e.preventDefault()}}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"swe-dashboard"}},[a("h3",[e._v("\n        Time-in/Time-out\n    ")]),e._v(" "),a("div",{staticClass:"time-in-out"},[e.timedIn?e.timedIn?a("button",{staticClass:"btn black",on:{click:e.timeOut}},[e._v("Time-out")]):e._e():a("button",{staticClass:"btn black",on:{click:e.timeIn}},[e._v("Time-in")])]),e._v(" "),e.timedIn?a("div",[e._v("\n        You have timed in : "+e._s(e.timeinDisplay)+"\n    ")]):a("div"),e._v(" "),e.timedOut?a("div",[e._v("\n        You have timed out : "+e._s(e.timeout)+"\n    ")]):a("div")])},staticRenderFns:[]};var S=a("VU/8")(E,N,!1,function(e){a("ds4Y")},null,null).exports,R={name:"register-user",data:function(){return{email:"",password:""}},methods:{register:function(e){var t=this;n.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){t.$router.push("/login")},function(e){alert(e.message)}),e.preventDefault()}}},U={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey white-text center"},[a("h3",[e._v("Register")]),e._v(" "),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"email"}},[e._v("Email Address")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:e.register}},[e._v("Register")])])])])])])])},staticRenderFns:[]};var F=a("VU/8")(R,U,!1,function(e){a("CEwZ")},null,null).exports,$={name:"add-employee",data:function(){return{name:"",email:"",password:"",usertype:"",team:"",manager:""}},methods:{addEmployee:function(e){var t=this;n.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){C.collection("UserInfo").doc(e.user.uid).set({name:t.name,manager:t.manager}),console.log(e)}),e.preventDefault(),console.log("im adding ",this.name,this.email,this.usertype,this.team,this.manager)}}},I={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"container"},[a("h1",[e._v("Add User")]),e._v(" "),a("p",[e._v("Please fill in this form to create an account.")]),e._v(" "),a("hr"),e._v(" "),e._m(0),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Enter Email",name:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),e._m(1),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Enter Password",name:"psw",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),e._m(2),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Enter Name",name:"name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),e._m(3),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.manager,expression:"manager"}],attrs:{type:"text",placeholder:"Manager",name:"manager",required:""},domProps:{value:e.manager},on:{input:function(t){t.target.composing||(e.manager=t.target.value)}}}),e._v(" "),a("hr"),e._v(" "),a("button",{staticClass:"registerbtn",on:{click:e.addEmployee}},[e._v("Register")])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"email"}},[t("b",[this._v("Email")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"psw"}},[t("b",[this._v("Password")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"name"}},[t("b",[this._v("Name")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"manager"}},[t("b",[this._v("manager")])])}]};var V=a("VU/8")($,I,!1,function(e){a("1qaU")},"data-v-201f0fbc",null).exports;i.a.use(m.a);var L=new m.a({mode:"history",routes:[{path:"/timesheet",name:"TimeSheet",component:w,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:y,meta:{requiresGuest:!0}},{path:"/",name:"swe-dashboard",component:S,meta:{requiresAuth:!0}},{path:"/register",name:"register",component:F,meta:{requiresGuest:!0}},{path:"/addemployee",name:"add-employee",component:V,meta:{requiresGuest:!0}}]});L.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.requiresAuth})?n.a.auth().currentUser?a():a({path:"/login",query:{redirect:e.fullPath}}):e.matched.some(function(e){return e.meta.requiresGuest})&&n.a.auth().currentUser?a({path:"/",query:{redirect:e.fullPath}}):a()});var P=L,A={state:{timesheet:[]},getters:{allData:function(e){return e.timesheet}},actions:{retrieveData:function(e){C.collection("Timesheet").orderBy("Timein","desc").get().then(function(t){var a=[];t.forEach(function(e){var t=e.data().Timein,i=e.data().Timeout;if(""==i){var r=new Date(1e3*t.seconds).toLocaleDateString(),n=new Date(1e3*t.seconds).toLocaleTimeString(),s={id:e.id,Name:e.data().Name,Timein:r+" "+n,NightDiff:e.data().NightDiff,TotalHours:e.data().TotalHours,Remarks:e.data().Remarks};a.push(s)}else{var o=new Date(1e3*t.seconds).toLocaleDateString(),l=new Date(1e3*t.seconds).toLocaleTimeString(),c=new Date(1e3*i.seconds).toLocaleDateString(),u=new Date(1e3*i.seconds).toLocaleTimeString(),m={id:e.id,Name:e.data().Name,Timein:o+" "+l,Timeout:c+" "+u,NightDiff:e.data().NightDiff,TotalHours:e.data().TotalHours,Remarks:e.data().Remarks};a.push(m)}}),e.commit("retrieveData",a)})}},mutations:{retrieveData:function(e,t){e.timesheet=t}}};i.a.use(v.a);var q=new v.a.Store({modules:{timesheet:A}});i.a.use(f.a),i.a.config.productionTip=!1;var O=void 0;n.a.auth().onAuthStateChanged(function(e){O||(O=new i.a({el:"#app",router:P,store:q,components:{App:u},template:"<App/>"}))})},aUlb:function(e,t){},back:function(e,t,a){"use strict";var i=a("BO1k"),r=a.n(i),n=a("pFYg"),s=a.n(n),o=a("fZjL"),l=a.n(o),c=a("Xxa5"),u=a.n(c),m=a("exGp"),d=a.n(m),h=a("/uqa"),v=a.n(h),f={name:"export-excel",props:{type:{type:String,default:"xls"},data:{type:Array,required:!1,default:null},fields:{type:Object,required:!1},exportFields:{type:Object,required:!1},defaultValue:{type:String,required:!1,default:""},title:{default:null},footer:{default:null},name:{type:String,default:"data.xls"},fetch:{type:Function},meta:{type:Array,default:function(){return[]}},worksheet:{type:String,default:"Sheet1"},beforeGenerate:{type:Function},beforeFinish:{type:Function}},computed:{idName:function(){return"export_"+(new Date).getTime()},downloadFields:function(){return void 0!==this.fields?this.fields:void 0!==this.exportFields?this.exportFields:void 0}},methods:{generate:function(){var e=this;return d()(u.a.mark(function t(){var a,i;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e.beforeGenerate){t.next=3;break}return t.next=3,e.beforeGenerate();case 3:if(a=e.data,"function"!=typeof e.fetch&&a){t.next=8;break}return t.next=7,e.fetch();case 7:a=t.sent;case 8:if(a&&a.length){t.next=10;break}return t.abrupt("return");case 10:if(i=e.getProcessedJson(a,e.downloadFields),"html"!==e.type){t.next=15;break}return t.abrupt("return",e.export(e.jsonToXLS(i),e.name.replace(".xls",".html"),"text/html"));case 15:if("csv"!==e.type){t.next=17;break}return t.abrupt("return",e.export(e.jsonToCSV(i),e.name.replace(".xls",".csv"),"application/csv"));case 17:return t.abrupt("return",e.export(e.jsonToXLS(i),e.name,"application/vnd.ms-excel"));case 18:case"end":return t.stop()}},t,e)}))()},export:function(){var e=d()(u.a.mark(function e(t,a,i){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.base64ToBlob(t,i),"function"!=typeof this.beforeFinish){e.next=4;break}return e.next=4,this.beforeFinish();case 4:v()(r,a,i);case 5:case"end":return e.stop()}},e,this)}));return function(t,a,i){return e.apply(this,arguments)}}(),jsonToXLS:function(e){var t="<thead>",a=l()(e[0]).length,i=this;for(var r in null!=this.title&&(t+=this.parseExtraData(this.title,'<tr><th colspan="'+a+'">${data}</th></tr>')),t+="<tr>",e[0])t+="<th>"+r+"</th>";return t+="</tr>",t+="</thead>",t+="<tbody>",e.map(function(e,a){for(var r in t+="<tr>",e)t+="<td>"+i.valueReformattedForMultilines(e[r])+"</td>";t+="</tr>"}),t+="</tbody>",null!=this.footer&&(t+="<tfoot>",t+=this.parseExtraData(this.footer,'<tr><td colspan="'+a+'">${data}</td></tr>'),t+="</tfoot>"),'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>'.replace("${table}",t).replace("${worksheet}",this.worksheet)},jsonToCSV:function(e){var t=[];for(var a in null!=this.title&&t.push(this.parseExtraData(this.title,"${data}\r\n")),e[0])t.push(a),t.push(",");return t.pop(),t.push("\r\n"),e.map(function(e){for(var a in e){var i='="'+e[a]+'"';i.match(/[,"\n]/)&&(i='"'+i.replace(/\"/g,'""')+'"'),t.push(i),t.push(",")}t.pop(),t.push("\r\n")}),null!=this.footer&&t.push(this.parseExtraData(this.footer,"${data}\r\n")),t.join("")},getProcessedJson:function(e,t){var a=this.getKeys(e,t),i=[],r=this;return e.map(function(e,t){var n={};for(var s in a){var o=a[s];n[s]=r.getValue(o,e)}i.push(n)}),i},getKeys:function(e,t){if(t)return t;var a={};for(var i in e[0])a[i]=i;return a},parseExtraData:function(e,t){var a="";if(Array.isArray(e))for(var i=0;i<e.length;i++)a+=t.replace("${data}",e[i]);else a+=t.replace("${data}",e);return a},getValue:function(e,t){var a="object"!==(void 0===e?"undefined":s()(e))?e:e.field,i="string"!=typeof a?[]:a.split("."),r=this.defaultValue;return r=a?i.length>1?this.getValueFromNestedItem(t,i):this.parseValue(t[a]):t,e.hasOwnProperty("callback")&&(r=this.getValueFromCallback(r,e.callback)),r},valueReformattedForMultilines:function(e){return"string"==typeof e?e.replace(/\n/gi,"<br/>"):e},getValueFromNestedItem:function(e,t){var a=e,i=!0,n=!1,s=void 0;try{for(var o,l=r()(t);!(i=(o=l.next()).done);i=!0){var c=o.value;a&&(a=a[c])}}catch(e){n=!0,s=e}finally{try{!i&&l.return&&l.return()}finally{if(n)throw s}}return this.parseValue(a)},getValueFromCallback:function(e,t){if("function"!=typeof t)return this.defaultValue;var a=t(e);return this.parseValue(a)},parseValue:function(e){return e||0===e||"boolean"==typeof e?e:this.defaultValue},base64ToBlob:function(e,t){for(var a=window.btoa(window.unescape(encodeURIComponent(e))),i=atob(a),r=i.length,n=new Uint8ClampedArray(r);r--;)n[r]=i.charCodeAt(r);return new Blob([n],{type:t})}}},p={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:this.idName},on:{click:this.generate}},[this._t("default",[this._v("\n        Download "+this._s(this.name)+"\n    ")])],2)},staticRenderFns:[]},g=a("VU/8")(f,p,!1,null,null,null);t.a=g.exports},ds4Y:function(e,t){},nosF:function(e,t){},tViX:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.15c73aebb4fcb9892f0a.js.map