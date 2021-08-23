import{_ as e}from"./cropper.c59a2b9e.js";import{a}from"./index.c04142d6.js";import{B as l,p as t,a as s,r as o,o as r,c as p,f as c,w as n,h as u}from"./vendor.62413589.js";const d={name:"upload",components:{VueCropper:e},setup(){const e=l(""),t=l(a),s=l(!1),o=l(null);return{cropper:o,imgSrc:e,cropImg:t,dialogVisible:s,setImage:a=>{const l=a.target.files[0];if(!l.type.includes("image/"))return;const t=new FileReader;t.onload=a=>{s.value=!0,e.value=a.target.result,o.value&&o.value.replace(a.target.result)},t.readAsDataURL(l)},cropImage:()=>{t.value=o.value.getCroppedCanvas().toDataURL()},cancelCrop:()=>{s.value=!1,t.value=a}}}},i=n();t("data-v-6d5bae33");const m={class:"crumbs"},v=c("i",{class:"el-icon-lx-calendar"},null,-1),g=u(" 表单 "),b=u("图片上传"),f={class:"container"},_=c("div",{class:"content-title"},"支持拖拽",-1),h=c("div",{class:"plugins-tips"},[u(" Element UI自带上传组件。 访问地址： "),c("a",{href:"http://element.eleme.io/#/zh-CN/component/upload",target:"_blank"},"Element UI Upload")],-1),j=c("i",{class:"el-icon-upload"},null,-1),I=c("div",{class:"el-upload__text"},[u(" 将文件拖到此处，或 "),c("em",null,"点击上传")],-1),C=c("div",{class:"el-upload__tip"},"只能上传 jpg/png 文件，且不超过 500kb",-1),U=c("div",{class:"content-title"},"支持裁剪",-1),k=c("div",{class:"plugins-tips"},[u(" vue-cropperjs：一个封装了 cropperjs 的 Vue 组件。 访问地址： "),c("a",{href:"https://github.com/Agontuk/vue-cropperjs",target:"_blank"},"vue-cropperjs")],-1);s();const x=i(((e,a,l,t,s,n)=>{const u=o("el-breadcrumb-item"),d=o("el-breadcrumb"),x=o("el-upload");return r(),p("div",null,[c("div",m,[c(d,{separator:"/"},{default:i((()=>[c(u,null,{default:i((()=>[v,g])),_:1}),c(u,null,{default:i((()=>[b])),_:1})])),_:1})]),c("div",f,[_,h,c(x,{class:"upload-demo",drag:"",action:"http://jsonplaceholder.typicode.com/api/posts/",multiple:""},{tip:i((()=>[C])),default:i((()=>[j,I])),_:1}),U,k])])}));d.render=x,d.__scopeId="data-v-6d5bae33";export default d;
