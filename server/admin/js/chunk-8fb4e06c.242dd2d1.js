(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8fb4e06c"],{"42f4":function(e,r,t){"use strict";var n=t("60f8"),o=t.n(n);o.a},"60f8":function(e,r,t){},a55b:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login"},[t("el-card",{staticClass:"login-card"},[t("el-form",{ref:"loginFormRef",staticClass:"login-form",attrs:{"label-width":"0",rules:e.LoginRules,model:e.LoginForm}},[t("h3",{staticClass:"title"},[e._v("管理员登录")]),t("el-form-item",{staticClass:"username",attrs:{prop:"username"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-user-solid",placeholder:"用户名"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.login(r)}},model:{value:e.LoginForm.username,callback:function(r){e.$set(e.LoginForm,"username",r)},expression:"LoginForm.username"}})],1),t("el-form-item",{staticClass:"password",attrs:{prop:"password"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-lock",type:"password",placeholder:"密码"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.login(r)}},model:{value:e.LoginForm.password,callback:function(r){e.$set(e.LoginForm,"password",r)},expression:"LoginForm.password"}})],1),t("el-form-item",{staticClass:"btns"},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.login()}}},[e._v("登陆")]),t("el-button",{attrs:{type:"info"},on:{click:function(r){return e.resetLoginForm()}}},[e._v("重置")])],1)],1)],1)],1)},o=[],s=(t("96cf"),t("1da1")),a=t("1bab");function i(e){return Object(a["b"])({url:"/login",method:"post",data:e})}var u={name:"Login",data:function(){var e=function(e,r,t){var n=/^[a-zA-Z][\w]{2,9}$/;if(n.test(r))return t();t(new Error("请输入合法的用户名"))},r=function(e,r,t){var n=/^[\w.]{6,15}$/;if(n.test(r))return t();t(new Error("请输入合法的登陆密码"))};return{LoginForm:{username:"test",password:"123456"},LoginRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{validator:e,trigger:"blur"}],password:[{required:!0,message:"请输入登陆密码",trigger:"blur"},{validator:r,trigger:"blur"}]}}},methods:{resetLoginForm:function(){this.$refs.loginFormRef.resetFields()},login:function(){var e=this;this.$refs.loginFormRef.validate(function(){var r=Object(s["a"])(regeneratorRuntime.mark((function r(t){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t){r.next=2;break}return r.abrupt("return",e.$message.error("请输入格式正确的用户名和密码"));case 2:return r.next=4,i(e.LoginForm);case 4:if(n=r.sent,n){r.next=7;break}return r.abrupt("return");case 7:e.$message.success("登陆成功"),sessionStorage.setItem("token",n.data.token),e.$router.push("/");case 10:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}}},l=u,c=(t("42f4"),t("2877")),f=Object(c["a"])(l,n,o,!1,null,"0cacf538",null);r["default"]=f.exports}}]);
//# sourceMappingURL=chunk-8fb4e06c.242dd2d1.js.map