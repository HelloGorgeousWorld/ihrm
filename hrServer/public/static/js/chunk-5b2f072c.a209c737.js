(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b2f072c"],{"01f5":function(e,t,r){"use strict";t["a"]={hireType:[{id:1,value:"正式"},{id:2,value:"非正式"}],subjection:[{id:"1",value:"总部"},{id:"2",value:"分城市"}],workingState:[{id:"1",value:"在职"},{id:"2",value:"离职"}],leaveType:[{id:"1",value:"主动离职"},{id:"2",value:"被动离职"},{id:"3",value:"退休"}],attritionMonth:[{id:"1",value:"离职日本月"},{id:"2",value:"离职日次月"}],informaltype:[{id:"2",value:"实习"},{id:"3",value:"劳务"},{id:"4",value:"顾问"},{id:"5",value:"返聘"},{id:"6",value:"外包"}],highestDegree:[{id:"1",value:"初中"},{id:"2",value:"高中"},{id:"3",value:"中专"},{id:"4",value:"大专"},{id:"5",value:"本科"},{id:"6",value:"硕士"},{id:"7",value:"博士"},{id:"8",value:"其他"}],isOverseas:[{id:"1",value:"中国大陆"},{id:"2",value:"港澳台国外"}],gender:[{id:"1",value:"男"},{id:"2",value:"女"}],maritaStatus:[{id:"1",value:"未婚"},{id:"2",value:"已婚"},{id:"3",value:"离异"}],animalSymbol:[{id:"1",value:"鼠"},{id:"2",value:"牛"},{id:"3",value:"虎"},{id:"4",value:"兔"},{id:"5",value:"龙"},{id:"6",value:"蛇"},{id:"7",value:"马"},{id:"8",value:"羊"},{id:"9",value:"猴"},{id:"10",value:"鸡"},{id:"11",value:"狗"},{id:"12",value:"猪"}],constellation:[{code:1,value:"水瓶座"},{code:2,value:"双鱼座"},{code:3,value:"白羊座"},{code:4,value:"金牛座"},{code:5,value:"双子座"},{code:6,value:"巨蟹座"},{code:7,value:"狮子座"},{code:8,value:"处女座"},{code:9,value:"天秤座"},{code:10,value:"天蝎座"},{code:11,value:"射手座"},{code:12,value:"摩羯座"}],bloodType:[{id:"1",value:"A型"},{id:"2",value:"B型"},{id:"3",value:"O型"},{id:"4",value:"AB型"}],educationType:[{id:"1",value:"统招"},{id:"2",value:"自考"},{id:"3",value:"成考"}],positiveType:[{id:"1",value:"已转正"},{id:"2",value:"未转正"}],contractPeriod:[{id:"1",value:"6月"},{id:"2",value:"12月"},{id:"3",value:"24月"},{id:"4",value:"36月"},{id:"5",value:"其他"}],renewalCount:[{id:1,value:"0次"},{id:2,value:"1次"},{id:3,value:"2次"},{id:4,value:"3次"},{id:5,value:"4次或以上"}],resumeSource:[{id:"1",value:"智联招聘"},{id:"2",value:"拉勾网"},{id:"3",value:"前程无忧"},{id:"4",value:"猎聘网"},{id:"5",value:"校园宣讲"},{id:"6",value:"猎头"},{id:"7",value:"内部推荐"}],hireSourceType:[{id:"1",value:"社招"},{id:"2",value:"校招"}],departments:[{id:"1",value:"总裁办"},{id:"2",value:"研究院"}],stausInfos:[{id:"1",value:"在职"},{id:"2",value:"入职"},{id:"3",value:"离职"}]}},"0b62":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-container"},[a("div",{staticClass:"app-container"},[a("PageTools",{attrs:{"show-before":!0}},[a("span",{attrs:{slot:"before"},slot:"before"},[e._v("共"+e._s(e.page.total)+"条记录")]),a("template",{slot:"after"},[a("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(t){return e.$router.push("/import?type=user")}}},[e._v("excel导入")]),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:e.exportData}},[e._v("excel导出")]),a("el-button",{attrs:{disabled:!e.checkPermission("POINT-USER-ADD"),icon:"plus",size:"small",type:"primary"},on:{click:function(t){e.showDialog=!0}}},[e._v("新增员工")])],1)],2),a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("el-table",{attrs:{border:"",data:e.list}},[a("el-table-column",{attrs:{label:"序号",sortable:"",type:"index"}}),a("el-table-column",{attrs:{label:"姓名",sortable:"",prop:"username"}}),a("el-table-column",{attrs:{label:"头像",sortable:"",prop:"username"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("img",{directives:[{name:"imagerror",rawName:"v-imagerror",value:r("bae5"),expression:"require('@/assets/common/bigUserHeader.png')"}],staticStyle:{"border-radius":"50%",width:"100px",height:"100px",padding:"10px"},attrs:{slot:"reference",src:n.staffPhoto,alt:""},on:{click:function(t){return e.showQrCode(n.staffPhoto)}},slot:"reference"})]}}])}),a("el-table-column",{attrs:{label:"工号",sortable:"",prop:"workNumber"}}),a("el-table-column",{attrs:{label:"聘用形式",sortable:"",formatter:e.formatEmployment}}),a("el-table-column",{attrs:{label:"部门",sortable:"",prop:"departmentName"}}),a("el-table-column",{attrs:{label:"入职时间",sortable:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(e._s(e._f("formatDate")(r.timeOfEntry)))]}}])}),a("el-table-column",{attrs:{label:"账户状态",sortable:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[a("el-switch",{attrs:{value:1===t.enableState}})]}}])}),a("el-table-column",{attrs:{label:"操作",sortable:"",fixed:"right",width:"280"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.$router.push("/employees/detail/"+r.id)}}},[e._v("查看")]),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("转正")]),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("调岗")]),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("离职")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.editRole(r.id)}}},[e._v("角色")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.delEmployee(r.id)}}},[e._v("删除")])]}}])})],1),a("el-row",{staticStyle:{height:"60px"},attrs:{type:"flex",justify:"center",align:"middle"}},[a("el-pagination",{attrs:{layout:"prev, pager, next","page-size":e.page.size,"current-page":e.page.page,total:e.page.total},on:{"current-change":e.changePage}})],1)],1)],1),a("add-employee",{attrs:{"show-dialog":e.showDialog},on:{"update:showDialog":function(t){e.showDialog=t},"update:show-dialog":function(t){e.showDialog=t}}}),a("el-dialog",{attrs:{visible:e.showCodeDialog,title:"二维码"},on:{"update:visible":function(t){e.showCodeDialog=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("canvas",{ref:"myCanvas"})])],1),a("AssignRole",{ref:"RoleDialog",attrs:{"show-role-dialog":e.showRoleDialog,"user-id":e.userId},on:{"update:showRoleDialog":function(t){e.showRoleDialog=t},"update:show-role-dialog":function(t){e.showRoleDialog=t}}})],1)},n=[],o=r("1da1"),l=(r("7db0"),r("d3b7"),r("3ca3"),r("ddb0"),r("b64b"),r("d81d"),r("96cf"),r("8f00")),i=r("01f5"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"新增员工",visible:e.showDialog},on:{close:e.btnCancel},scopedSlots:e._u([{key:"footer",fn:function(){return[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-col",{attrs:{span:6}},[r("el-button",{attrs:{size:"small"},on:{click:e.btnCancel}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.btnOK}},[e._v("确定")])],1)],1)]},proxy:!0}])},[r("el-form",{ref:"addEmployee",attrs:{"label-width":"120px",model:e.formData,rules:e.rules}},[r("el-form-item",{attrs:{label:"姓名",prop:"username"}},[r("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入姓名"},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入手机号"},model:{value:e.formData.mobile,callback:function(t){e.$set(e.formData,"mobile",t)},expression:"formData.mobile"}})],1),r("el-form-item",{attrs:{label:"入职时间",prop:"timeOfEntry"}},[r("el-date-picker",{staticStyle:{width:"50%"},attrs:{placeholder:"请选择入职时间"},model:{value:e.formData.timeOfEntry,callback:function(t){e.$set(e.formData,"timeOfEntry",t)},expression:"formData.timeOfEntry"}})],1),r("el-form-item",{attrs:{label:"聘用形式",prop:"formOfEmployment"}},[r("el-select",{staticStyle:{width:"50%"},attrs:{placeholder:"请选择"},model:{value:e.formData.formOfEmployment,callback:function(t){e.$set(e.formData,"formOfEmployment",t)},expression:"formData.formOfEmployment"}},e._l(e.EmployeeEnum.hireType,(function(e){return r("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})})),1)],1),r("el-form-item",{attrs:{label:"工号",prop:"workNumber"}},[r("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入工号"},model:{value:e.formData.workNumber,callback:function(t){e.$set(e.formData,"workNumber",t)},expression:"formData.workNumber"}})],1),r("el-form-item",{attrs:{label:"部门",prop:"departmentName"}},[r("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请选择部门"},on:{focus:e.getDepartments},model:{value:e.formData.departmentName,callback:function(t){e.$set(e.formData,"departmentName",t)},expression:"formData.departmentName"}}),e.showTree?r("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.treeData,props:{label:"name"}},on:{"node-click":e.selectNode}}):e._e()],1),r("el-form-item",{attrs:{label:"转正时间",prop:"correctionTime"}},[r("el-date-picker",{staticStyle:{width:"50%"},attrs:{placeholder:"请选择转正时间"},model:{value:e.formData.correctionTime,callback:function(t){e.$set(e.formData,"correctionTime",t)},expression:"formData.correctionTime"}})],1)],1)],1)},s=[],c=(r("b0c0"),r("1eef")),d=r("ed08"),m={props:{showDialog:{type:Boolean,default:!1}},data:function(){return{EmployeeEnum:i["a"],treeData:[],showTree:!1,loading:!1,formData:{username:"",mobile:"",formOfEmployment:"",workNumber:"",departmentName:"",timeOfEntry:"",correctionTime:""},rules:{username:[{required:!0,message:"用户姓名不能为空",trigger:"blur"},{min:1,max:4,message:"用户姓名为1-4位"}],mobile:[{required:!0,message:"手机号不能为空",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"手机号格式不正确",trigger:"blur"}],formOfEmployment:[{required:!0,message:"聘用形式不能为空",trigger:"blur"}],workNumber:[{required:!0,message:"工号不能为空",trigger:"blur"}],departmentName:[{required:!0,message:"部门不能为空",trigger:"change"}],timeOfEntry:[{required:!0,message:"入职时间",trigger:"blur"}]}}},methods:{getDepartments:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,e.showTree=!0,t.next=4,Object(c["d"])();case 4:r=t.sent,a=r.depts,e.treeData=Object(d["a"])(a,""),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()},selectNode:function(e){this.formData.departmentName=e.name,this.showTree=!1},btnCancel:function(){this.formData={username:"",mobile:"",formOfEmployment:"",workNumber:"",departmentName:"",timeOfEntry:"",correctionTime:""},this.$refs.addEmployee.resetFields(),this.$emit("update:showDialog",!1)},btnOK:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$refs.addEmployee.validate();case 3:return t.next=5,Object(l["a"])(e.formData);case 5:e.$parent.getEmployeeList(),e.$parent.showDialog=!1,t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},f=m,p=r("2877"),b=Object(p["a"])(f,u,s,!1,null,null,null),v=b.exports,g=r("8975"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{visible:e.showRoleDialog,title:"分配权限"},on:{close:e.btnCancel}},[r("el-checkbox-group",{model:{value:e.roleIds,callback:function(t){e.roleIds=t},expression:"roleIds"}},e._l(e.list,(function(t){return r("el-checkbox",{key:t.id,attrs:{label:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1),r("el-row",{attrs:{slot:"footer",type:"flex",justify:"center"},slot:"footer"},[r("el-col",{attrs:{span:6}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.btnOk}},[e._v("确认")]),r("el-button",{attrs:{size:"small"},on:{click:e.btnCancel}},[e._v("取消")])],1)],1)],1)},y=[],w=r("90e7"),O=r("c24f"),x={props:{showRoleDialog:{type:Boolean,default:!1},userId:{type:String,default:null}},data:function(){return{list:[],roleIds:[]}},created:function(){this.getRoleList()},methods:{getRoleList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(w["f"])({page:1,pagesize:20});case 2:r=t.sent,a=r.rows,console.log("huoqujuese",a),e.list=a;case 6:case"end":return t.stop()}}),t)})))()},getUserDetailById:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(O["a"])(e);case 2:a=r.sent,n=a.roleIds,t.roleIds=n;case 5:case"end":return r.stop()}}),r)})))()},btnOk:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["b"])({id:e.userId,roleIds:e.roleIds});case 2:e.$message.success("保存成功"),e.$emit("update:showRoleDialog",!1);case 4:case"end":return t.stop()}}),t)})))()},btnCancel:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.roleIds=[],e.$emit("update:showRoleDialog",!1);case 2:case"end":return t.stop()}}),t)})))()}}},D=x,k=Object(p["a"])(D,h,y,!1,null,null,null),j=k.exports,E=r("d055"),R=r.n(E),_={components:{AddEmployee:v,AssignRole:j},data:function(){return{showDialog:!1,loading:!1,list:[],page:{page:1,size:10,total:0},showCodeDialog:!1,showRoleDialog:!1,userId:""}},created:function(){this.getEmployeeList()},methods:{changePage:function(e){this.page.page=e,this.getEmployeeList()},getEmployeeList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(l["d"])(e.page);case 3:r=t.sent,a=r.total,n=r.rows,e.page.total=a,e.list=n,e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()},formatEmployment:function(e,t,r,a){var n=i["a"].hireType.find((function(t){return t.id===e.formOfEmployment}));return n?n.value:"未知"},delEmployee:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$confirm("您确定删除该员工");case 3:return r.next=5,Object(l["c"])(e);case 5:t.getEmployeeList(),t.$message.success("删除员工成功"),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](0),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()},exportData:function(){var e=this,t={"姓名":"username","手机号":"mobile","入职日期":"timeOfEntry","聘用形式":"formOfEmployment","转正日期":"correctionTime","工号":"workNumber","部门":"departmentName"};Promise.all([r.e("chunk-519483dc"),r.e("chunk-09290bef")]).then(r.bind(null,"4bf8")).then(function(){var r=Object(o["a"])(regeneratorRuntime.mark((function r(a){var n,o,i,u,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(l["d"])({page:1,size:e.page.total});case 2:n=r.sent,o=n.rows,i=e.formatJson(t,o),u=[["姓名","主要信息","","","","","部门"]],s=["A1:A2","B1:F1","G1:G2"],a.export_json_to_excel({header:Object.keys(t),data:i,filename:"员工导出表",autoWidth:!0,multiHeader:u,merges:s});case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},formatJson:function(e,t){return t.map((function(t){return Object.keys(e).map((function(r){if("timeOfEntry"===e[r]||"correctionTime"===e[r])return Object(g["formatDate"])(t[e[r]]);if("formOfEmployment"===e[r]){var a=i["a"].hireType.find((function(a){return a.id===t[e[r]]}));return a?a.value:"未知"}return t[e[r]]}))}))},showQrCode:function(e){var t=this;e?(this.showCodeDialog=!0,this.$nextTick((function(){R.a.toCanvas(t.$refs.myCanvas,e)}))):this.$message.warning("该用户还未上传头像")},editRole:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.userId=e,r.next=3,t.$refs.RoleDialog.getUserDetailById(e);case 3:t.showRoleDialog=!0;case 4:case"end":return r.stop()}}),r)})))()}}},$=_,T=Object(p["a"])($,a,n,!1,null,null,null);t["default"]=T.exports},"1eef":function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return l})),r.d(t,"c",(function(){return i})),r.d(t,"e",(function(){return u}));var a=r("b775");function n(){return Object(a["a"])({url:"/company/department",method:"GET"})}function o(e){return Object(a["a"])({url:"/company/department/".concat(e),method:"DELETE"})}function l(e){return Object(a["a"])({url:"/company/department",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/company/department/".concat(e)})}function u(e){return Object(a["a"])({url:"/company/department/".concat(e.id),method:"put",data:e})}},"8f00":function(e,t,r){"use strict";r.d(t,"e",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return i})),r.d(t,"h",(function(){return u})),r.d(t,"i",(function(){return s})),r.d(t,"g",(function(){return c})),r.d(t,"k",(function(){return d})),r.d(t,"f",(function(){return m})),r.d(t,"j",(function(){return f})),r.d(t,"b",(function(){return p}));var a=r("b775");function n(){return Object(a["a"])({url:"sys/user/simple"})}function o(e){return Object(a["a"])({url:"/sys/user",params:e})}function l(e){return Object(a["a"])({url:"/sys/user/".concat(e),method:"delete"})}function i(e){return Object(a["a"])({method:"post",url:"/sys/user",data:e})}function u(e){return Object(a["a"])({url:"/sys/user/batch",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/sys/user/".concat(e.id),method:"put",data:e})}function c(e){return Object(a["a"])({url:"/employees/".concat(e,"/personalInfo")})}function d(e){return Object(a["a"])({url:"/employees/".concat(e.userId,"/personalInfo"),method:"put",data:e})}function m(e){return Object(a["a"])({url:"/employees/".concat(e,"/jobs")})}function f(e){return Object(a["a"])({url:"/employees/".concat(e.userId,"/jobs"),method:"put",data:e})}function p(e){return Object(a["a"])({url:"/sys/user/assignRoles",data:e,method:"put"})}},"90e7":function(e,t,r){"use strict";r.d(t,"f",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return l})),r.d(t,"g",(function(){return i})),r.d(t,"e",(function(){return u})),r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c}));var a=r("b775");function n(e){return Object(a["a"])({url:"/sys/role",params:e})}function o(e){return Object(a["a"])({url:"/company/".concat(e)})}function l(e){return Object(a["a"])({url:"/sys/role/".concat(e),method:"delete"})}function i(e){return Object(a["a"])({url:"/sys/role/".concat(e.id),data:e,method:"put"})}function u(e){return Object(a["a"])({url:"/sys/role/".concat(e)})}function s(e){return Object(a["a"])({url:"/sys/role",data:e,method:"post"})}function c(e){return Object(a["a"])({url:"/sys/role/assignPrem",method:"put",data:e})}},bae5:function(e,t,r){e.exports=r.p+"static/img/bigUserHeader.fda3837f.png"},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("53ca"),r("ac1f"),r("00b4"),r("5319"),r("4d63"),r("2c3e"),r("25f0"),r("d3b7"),r("4d90"),r("1276"),r("159b");function a(e,t){var r=[];return e.forEach((function(n){if(n.pid===t){var o=a(e,n.id);o.length&&(n.children=o),r.push(n)}})),r}}}]);