import{B as e,C as l,L as a,p as t,a as d,r as o,o as u,c as i,f as n,h as r,t as s,J as m,M as p,w as h}from"./vendor.62413589.js";import{g as c,p as b,a as f,d as V}from"./request.61a9cc87.js";import"./index.e1526510.js";const y={name:"basetable",data:()=>({query:{method:null,name:null,page:1,pageSize:10},tableData:e([]),pageTotal:e(0),addVisible:!1,editVisible:!1,form:{id:null,type:"",name:"",method:"",url:"",enable:""},edit:{id:null,type:"",name:"",method:"",url:"",enable:""}}),methods:{searchFun(){""===this.query.method&&(this.query.method=null),c("/resource",this.query).then((e=>{this.tableData=e.data.result,this.pageTotal=e.data.total||0}))},pageChange(e){this.query.page=e,this.searchFun()},createFun(e,l){void 0!==l&&Object.keys(this.form).forEach((e=>{this.form[e]=l[e]})),this.addVisible=!0},editFun(e,l){void 0!==l&&Object.keys(this.form).forEach((e=>{this.edit[e]=l[e]})),this.editVisible=!0},saveFun(){this.addVisible=!1,null===this.form.id?this.addFun():this.updateFun(this.form.id)},addFun(){b("/resource",this.form).then((e=>{this.addVisible=!1,this.searchFun(),l.success(e.msg)}))},updateFun(){f("/resource/"+this.edit.id,this.edit).then((e=>{this.editVisible=!1,l.success(e.msg),this.searchFun()}))},delFun(e,t){a.confirm("确定要删除吗？","提示",{type:"warning"}).then((()=>{V("/resource/"+t.id,null).then((e=>{l.success(e.msg),this.searchFun()}))})).catch((()=>{}))}},mounted(){this.searchFun()}},g=h();t("data-v-74012110");const _={class:"container"},k={class:"handle-box"},T=r("新增"),v=r("搜索"),E=r("编辑 "),U=r("删除"),w={class:"pagination"},C={class:"dialog-footer"},F=r("取 消"),x=r("确 定"),P={class:"dialog-footer"},q=r("取 消"),D=r("确 定");d();const L=g(((e,l,a,t,d,h)=>{const c=o("el-button"),b=o("el-input"),f=o("el-option"),V=o("el-select"),y=o("el-table-column"),L=o("el-tag"),O=o("el-table"),S=o("el-pagination"),G=o("el-rate"),j=o("el-form-item"),z=o("el-form"),I=o("el-dialog");return u(),i("div",null,[n("div",_,[n("div",k,[n(c,{type:"primary",icon:"el-icon-add",onClick:h.createFun},{default:g((()=>[T])),_:1},8,["onClick"]),n(c,{type:"primary",icon:"el-icon-search",onClick:h.searchFun,class:"right"},{default:g((()=>[v])),_:1},8,["onClick"]),n(b,{modelValue:d.query.name,"onUpdate:modelValue":l[1]||(l[1]=e=>d.query.name=e),placeholder:"名称",clearable:"",class:"handle-input mr10 right"},null,8,["modelValue"]),n(V,{modelValue:d.query.method,"onUpdate:modelValue":l[2]||(l[2]=e=>d.query.method=e),clearable:"",placeholder:"请求方式",class:"handle-select mr10 right",onChange:h.searchFun},{default:g((()=>[n(f,{key:"1",label:"GET",value:"GET"}),n(f,{key:"2",label:"POST",value:"POST"}),n(f,{key:"3",label:"PUT",value:"PUT"}),n(f,{key:"4",label:"DELETE",value:"DELETE"})])),_:1},8,["modelValue","onChange"])]),n(O,{data:d.tableData,border:"",class:"table",ref:"multipleTable","row-style":{height:"40px"},"header-row-style":{height:"40px"},"header-cell-style":{padding:"0px"},"cell-style":{padding:"0px"}},{default:g((()=>[n(y,{type:"index"}),n(y,{prop:"resourceNo",label:"资源编号"}),n(y,{prop:"type",label:"类型"}),n(y,{prop:"name",label:"名称"}),n(y,{label:"请求方式",align:"center"},{default:g((e=>[n(L,{type:"GET"===e.row.method?"":"POST"===e.row.method?"success":"DELETE"===e.row.method?"danger":"PUT"===e.row.method?"warning":""},{default:g((()=>[r(s(e.row.method),1)])),_:2},1032,["type"])])),_:1}),n(y,{prop:"url",label:"URL",width:"200","show-overflow-tooltip":"true"}),n(y,{label:"状态",width:"60"},{default:g((e=>[r(s(1===e.row.enable?"启用":"禁用"),1)])),_:1}),n(y,{prop:"updateTime",width:"160",label:"更新时间"}),n(y,{prop:"updateBy",label:"更新人"}),n(y,{label:"操作",width:"180",align:"center"},{default:g((e=>[n(c,{type:"text",icon:"el-icon-edit",onClick:l=>h.editFun(e.$index,e.row)},{default:g((()=>[E])),_:2},1032,["onClick"]),n(c,{type:"text",icon:"el-icon-delete",class:"red",onClick:l=>h.delFun(e.$index,e.row)},{default:g((()=>[U])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),n("div",w,[n(S,{background:"",layout:"total, prev, pager, next","current-page":d.query.page,"page-size":d.query.pageSize,total:d.pageTotal,onCurrentChange:h.pageChange},null,8,["current-page","page-size","total","onCurrentChange"])])]),n(I,{title:"新增",modelValue:d.addVisible,"onUpdate:modelValue":l[11]||(l[11]=e=>d.addVisible=e),width:"30%"},{footer:g((()=>[n("span",C,[n(c,{onClick:l[10]||(l[10]=e=>d.addVisible=!1)},{default:g((()=>[F])),_:1}),n(c,{type:"primary",onClick:h.addFun},{default:g((()=>[x])),_:1},8,["onClick"])])])),default:g((()=>[n(z,{"label-width":"70px"},{default:g((()=>[n(j,{label:""},{default:g((()=>[n(G,{modelValue:e.v1,"onUpdate:modelValue":l[3]||(l[3]=l=>e.v1=l),"show-text":""},null,8,["modelValue"])])),_:1}),m(n(j,{label:"ID"},{default:g((()=>[n(b,{modelValue:d.form.id,"onUpdate:modelValue":l[4]||(l[4]=e=>d.form.id=e),type:"hidden"},null,8,["modelValue"])])),_:1},512),[[p,!1]]),n(j,{label:"类型"},{default:g((()=>[n(b,{modelValue:d.form.type,"onUpdate:modelValue":l[5]||(l[5]=e=>d.form.type=e)},null,8,["modelValue"])])),_:1}),n(j,{label:"名称"},{default:g((()=>[n(b,{modelValue:d.form.name,"onUpdate:modelValue":l[6]||(l[6]=e=>d.form.name=e)},null,8,["modelValue"])])),_:1}),n(j,{label:"请求方式"},{default:g((()=>[n(V,{modelValue:d.form.method,"onUpdate:modelValue":l[7]||(l[7]=e=>d.form.method=e),placeholder:"请求方式",class:"handle-select mr10"},{default:g((()=>[n(f,{key:"1",label:"GET",value:"GET"}),n(f,{key:"2",label:"POST",value:"POST"}),n(f,{key:"3",label:"PUT",value:"PUT"}),n(f,{key:"4",label:"DELETE",value:"DELETE"})])),_:1},8,["modelValue"])])),_:1}),n(j,{label:"URL"},{default:g((()=>[n(b,{modelValue:d.form.url,"onUpdate:modelValue":l[8]||(l[8]=e=>d.form.url=e)},null,8,["modelValue"])])),_:1}),n(j,{label:"状态"},{default:g((()=>[n(V,{modelValue:d.form.enable,"onUpdate:modelValue":l[9]||(l[9]=e=>d.form.enable=e),placeholder:"状态",class:"handle-select mr10"},{default:g((()=>[n(f,{key:"0",label:"禁用",value:0}),n(f,{key:"1",label:"启用",value:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),n(I,{title:"编辑",modelValue:d.editVisible,"onUpdate:modelValue":l[19]||(l[19]=e=>d.editVisible=e),width:"30%"},{footer:g((()=>[n("span",P,[n(c,{onClick:l[18]||(l[18]=e=>d.addVisible=!1)},{default:g((()=>[q])),_:1}),n(c,{type:"primary",onClick:h.updateFun},{default:g((()=>[D])),_:1},8,["onClick"])])])),default:g((()=>[n(z,{"label-width":"70px"},{default:g((()=>[m(n(j,{label:"ID"},{default:g((()=>[n(b,{modelValue:d.edit.id,"onUpdate:modelValue":l[12]||(l[12]=e=>d.edit.id=e),type:"hidden"},null,8,["modelValue"])])),_:1},512),[[p,!1]]),n(j,{label:"类型"},{default:g((()=>[n(b,{modelValue:d.edit.type,"onUpdate:modelValue":l[13]||(l[13]=e=>d.edit.type=e)},null,8,["modelValue"])])),_:1}),n(j,{label:"名称"},{default:g((()=>[n(b,{modelValue:d.edit.name,"onUpdate:modelValue":l[14]||(l[14]=e=>d.edit.name=e)},null,8,["modelValue"])])),_:1}),n(j,{label:"请求方式"},{default:g((()=>[n(V,{modelValue:d.edit.method,"onUpdate:modelValue":l[15]||(l[15]=e=>d.edit.method=e),placeholder:"请求方式",class:"handle-select mr10"},{default:g((()=>[n(f,{key:"1",label:"GET",value:"GET"}),n(f,{key:"2",label:"POST",value:"POST"}),n(f,{key:"3",label:"PUT",value:"PUT"}),n(f,{key:"4",label:"DELETE",value:"DELETE"})])),_:1},8,["modelValue"])])),_:1}),n(j,{label:"URL"},{default:g((()=>[n(b,{modelValue:d.edit.url,"onUpdate:modelValue":l[16]||(l[16]=e=>d.edit.url=e)},null,8,["modelValue"])])),_:1}),n(j,{label:"状态"},{default:g((()=>[n(V,{modelValue:d.edit.enable,"onUpdate:modelValue":l[17]||(l[17]=e=>d.edit.enable=e),placeholder:"状态",class:"handle-select mr10"},{default:g((()=>[n(f,{key:"0",label:"禁用",value:0}),n(f,{key:"1",label:"启用",value:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}));y.render=L,y.__scopeId="data-v-74012110";export default y;
