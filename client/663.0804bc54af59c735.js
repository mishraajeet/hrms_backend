"use strict";(self.webpackChunkmagnet_frontend=self.webpackChunkmagnet_frontend||[]).push([[663],{7663:(x,r,e)=>{e.r(r),e.d(r,{LoginModule:()=>h});var a=e(6814),g=e(95),l=e(5961),s=e(9527),n=e(5879),d=e(4221);function m(t,i){1&t&&(n.TgZ(0,"div"),n._uU(1,"Please enter email'id"),n.qZA())}function p(t,i){if(1&t&&(n.TgZ(0,"div",33),n.YNc(1,m,2,0,"div",34),n.qZA()),2&t){const o=n.oxw();n.xp6(1),n.Q6J("ngIf",o.f.email.errors.required)}}function u(t,i){1&t&&(n.TgZ(0,"div"),n._uU(1,"Please enter password"),n.qZA())}function f(t,i){if(1&t&&(n.TgZ(0,"div",33),n.YNc(1,u,2,0,"div",34),n.qZA()),2&t){const o=n.oxw();n.xp6(1),n.Q6J("ngIf",o.f.password.errors.required)}}const C=[{path:"",component:(()=>{class t{constructor(o,c){this._formBuilder=o,this.store=c,this.isSubmitted=!1}ngOnInit(){this.createForm()}createForm(){this.loginForm=this._formBuilder.group({email:["",[g.kI.required,g.kI.email]],password:["",[g.kI.required]]})}get f(){return this.loginForm.controls}onSubmit(){this.isSubmitted=!0,!this.loginForm.invalid&&this.store.dispatch(s.h8(this.loginForm.value))}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(g.qu),n.Y36(d.yh))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:63,vars:3,consts:[[1,"main-bg"],["href","javascript:void(0)","target","blanck",1,"qr-img"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-12"],[1,"food-img-bg"],[1,"top-logo"],["src","./assets/img/srlm-logo.png","alt","",1,"UPSRLM"],[1,"main-bg-con"],[1,"row","g-0"],[1,"col-lg-8"],[1,"left-content"],[1,"clearfix"],[1,"Bottom-Content",2,"margin-top","3rem"],[1,"footerSec"],[1,"copyrightline"],[1,"footer_img"],["src","./assets/img/flg.jpg","alt",""],[1,"col-lg-4"],[1,"login-sec"],[1,"login-sec-con"],[3,"formGroup","ngSubmit"],[1,""],[1,"form-group"],["type","text","id","uername","placeholder","Email","formControlName","email",1,"form-control","user-bg"],["class","invalid-feedback",4,"ngIf"],["type","password","id","","placeholder","Password","formControlName","password",1,"form-control","user-password"],[1,"col-md-12"],["type","submit",1,"btn","btn-primary","btn-lg","login_btn",2,"width","100%","text-decoration","none"],["href","forgot.html",1,"forget_password"],[1,"captcha-text"],["href","https://policies.google.com/privacy","target","_blank"],["href","https://policies.google.com/terms","target","_blank"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(o,c){1&o&&(n.TgZ(0,"section",0),n._UZ(1,"a",1),n.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),n._UZ(7,"img",7),n.qZA(),n.TgZ(8,"div",8)(9,"div",9)(10,"div",10)(11,"div",11)(12,"h3"),n._uU(13,"Welcome to"),n._UZ(14,"br"),n._uU(15," PRERNA Budget Management System"),n.qZA(),n.TgZ(16,"span"),n._uU(17,"\u092a\u094d\u0930\u0947\u0930\u0923\u093e \u092c\u091c\u091f \u092a\u094d\u0930\u092c\u0902\u0927\u0928 \u092a\u094d\u0930\u0923\u093e\u0932\u0940"),n.qZA(),n._UZ(18,"div",12),n.TgZ(19,"div",13)(20,"p"),n._uU(21,"PRERNA Budget Management System (PBMS) is a web-based online software application. PBMS is being rolled out with the objective of tracking the funds released under all Plan schemes under the State Rural Livelihood Mission, and real-time reporting of expenditure at all levels of Programme/Scheme implementation."),n.qZA(),n.TgZ(22,"p"),n._uU(23,"PBMS has established an interface with the Public Financial Management System (PFMS) developed & implemented by the Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance, Government of India."),n.qZA(),n.TgZ(24,"div",14)(25,"div",15)(26,"p"),n._uU(27,"\xa9 2021-22 | All Right Reserved | Version 1.0.1 | Last Update 15 Mar 2022"),n.qZA()(),n.TgZ(28,"div",16),n._UZ(29,"img",17),n.qZA()()()()(),n.TgZ(30,"div",18)(31,"div",19)(32,"h2"),n._uU(33,"Login"),n.qZA(),n.TgZ(34,"p"),n._uU(35,"Login to your PBMS system portal"),n.qZA(),n.TgZ(36,"div",20)(37,"form",21),n.NdJ("ngSubmit",function(){return c.onSubmit()}),n.TgZ(38,"div",22)(39,"div",23),n._UZ(40,"input",24),n.YNc(41,p,2,1,"div",25),n.qZA()(),n.TgZ(42,"div",22)(43,"div",23),n._UZ(44,"input",26),n.YNc(45,f,2,1,"div",25),n.qZA()(),n._UZ(46,"div",27),n.TgZ(47,"div",23)(48,"button",28),n._uU(49,"Login"),n.qZA()(),n.TgZ(50,"div")(51,"a",29),n._uU(52,"Forgot Password?"),n.qZA()(),n._UZ(53,"div",12),n.TgZ(54,"div",30)(55,"p"),n._uU(56,"Protected by reCAPTCHA. Google "),n.TgZ(57,"a",31),n._uU(58,"Privacy Policy"),n.qZA(),n._uU(59," & "),n.TgZ(60,"a",32),n._uU(61,"Terms of Service"),n.qZA(),n._uU(62," apply."),n.qZA()()()()()()()()()()()()()),2&o&&(n.xp6(37),n.Q6J("formGroup",c.loginForm),n.xp6(4),n.Q6J("ngIf",c.isSubmitted&&c.f.email.errors),n.xp6(4),n.Q6J("ngIf",c.isSubmitted&&c.f.password.errors))},dependencies:[a.O5,g._Y,g.Fj,g.JJ,g.JL,g.sg,g.u],styles:['@import"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap";@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{margin:0;padding:0}[_ngcontent-%COMP%]::selection{background-color:#b9000d;color:#fff}.main-bg[_ngcontent-%COMP%]{background-color:#f4f4f4;height:100vh;width:100vw;display:flex;justify-content:center;align-items:center;font-family:Roboto,sans-serif}.main-bg-con[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;border:1.5px solid #838181}.main-bg-con[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.left-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:800;font-size:3rem;color:#444;margin:0 0 14px;line-height:35px}.left-content[_ngcontent-%COMP%]{margin:2.5rem 2.5rem 0;position:relative;min-height:45rem}.left-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;background:#e92428;padding:7px 20px;font-size:2.5rem;font-weight:600}.left-content[_ngcontent-%COMP%]   .Bottom-Content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 10px;font-size:14px;color:#282828;line-height:22px;font-weight:500;text-align:justify}.left-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:1.9rem;color:#768f31;font-weight:600;margin:1.5rem 0 .8rem;font-family:Roboto,sans-serif}.left-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.3rem;color:#444;line-height:1.7rem}.troo-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:15%;margin-top:12px}.login-sec[_ngcontent-%COMP%]{background:#fff;border-radius:10px;border:1px solid #cfcece;height:600px;margin:-60px 15px -60px 0;position:relative;padding:2.5rem}.login-sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.4rem;color:#5a5a5a;margin-bottom:5%}.login-sec-con[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:3%;padding:15px 0 15px 40px;height:42px;border-radius:8px}.login-sec-con[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{color:#212529;background-color:#fff;border-color:#ced4da;outline:0;box-shadow:none}.login-sec-con[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{padding-left:1px}.login-sec[_ngcontent-%COMP%]   .user-bg[_ngcontent-%COMP%]{background:url(user-t.0b0bfb304cd3dafe.png)no-repeat 3%;background-size:2.2rem}.login-sec[_ngcontent-%COMP%]   .user-password[_ngcontent-%COMP%]{background:url(key.387bddf2084231f0.png)no-repeat 3%;background-size:2.2rem}.login-sec[_ngcontent-%COMP%]   .email-bg[_ngcontent-%COMP%]{background:url(email.9ccfc4e6eb0bcd21.png)no-repeat 3%;background-size:2.2rem}.login-sec[_ngcontent-%COMP%]   .mobile-bg[_ngcontent-%COMP%]{background:url(cell-phone.dbde2edb70f82641.png)no-repeat 3%;background-size:2.2rem}.login-sec[_ngcontent-%COMP%]   .confirm-password[_ngcontent-%COMP%]{background:url(padlock.2765027001d5f727.png)no-repeat 3%;background-size:2.2rem}.login-sec-con[_ngcontent-%COMP%]   .login_btn[_ngcontent-%COMP%]{background:#4caf50;border:none;border-radius:8px;padding:10px 0 11px;font-size:1.9rem}.login-sec[_ngcontent-%COMP%]   .forget_password[_ngcontent-%COMP%]{color:#a3a3a3;float:right;margin:.75rem 0 .5rem;font-size:1.3rem;text-decoration:none}.login-sec[_ngcontent-%COMP%]   .Create_Account[_ngcontent-%COMP%]{font-size:1.3rem;text-align:center;margin-top:4%}.login-sec[_ngcontent-%COMP%]   .Create_Account[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ff3636;text-decoration:none}.login-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:3.5rem;color:#444;margin-bottom:3%}.captcha-text[_ngcontent-%COMP%]{text-align:center;position:absolute;bottom:0;width:90%;margin:0 auto}.captcha-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:11px}a[_ngcontent-%COMP%]{text-decoration:underline;color:#2196f3}.colorBlue[_ngcontent-%COMP%]{color:#2196f3!important}#recaptcha[_ngcontent-%COMP%]{margin:1rem 0px}.login-sec-con[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%]{margin-top:-10px!important;margin-bottom:10px!important;font-size:1.4rem!important}.moreDetail[_ngcontent-%COMP%]{font-weight:600}.userRadio[_ngcontent-%COMP%]{margin-bottom:1rem}.userRadio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{vertical-align:sub}.userRadio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:last-child{margin-left:1rem}.welcomQr[_ngcontent-%COMP%]{display:flex;align-items:center}.welcomQr[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20%;margin-left:3rem}.welcomQr[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:20px;font-weight:400;color:#444;line-height:25px}.top-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-bottom:1rem}.top-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{top:0}.SupportBtn[_ngcontent-%COMP%]{margin-top:3rem}.SupportBtn[_ngcontent-%COMP%]{margin-top:1.5rem}.SupportBtn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#ff3636;font-size:13px;text-decoration:none;border-radius:30px;padding:7px 13px;color:#fff}.left-content[_ngcontent-%COMP%]   .Bottom-Content[_ngcontent-%COMP%]   .infoSection[_ngcontent-%COMP%]{margin-top:2rem}.left-content[_ngcontent-%COMP%]   .Bottom-Content[_ngcontent-%COMP%]   .infoSection[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;display:inline}.left-content[_ngcontent-%COMP%]   .Bottom-Content[_ngcontent-%COMP%]   .infoSection[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-size:1.3rem;color:#000;font-weight:500;margin-right:1.5rem}.left-content[_ngcontent-%COMP%]   .Bottom-Content[_ngcontent-%COMP%]   .infoSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:.8rem;width:20px}.left-content[_ngcontent-%COMP%]   .Bottom-Content[_ngcontent-%COMP%]   .copyrightline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.left-content[_ngcontent-%COMP%]   .Bottom-Content[_ngcontent-%COMP%]   .footer_img[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;display:inline;margin-right:4rem}.left-content[_ngcontent-%COMP%]   .Bottom-Content[_ngcontent-%COMP%]   .footer_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%}.footerSec[_ngcontent-%COMP%]{position:absolute;bottom:0}.circle-img[_ngcontent-%COMP%]{display:flex;text-align:center;margin:1.5rem 0}.circle-img[_ngcontent-%COMP%]   .circle-1[_ngcontent-%COMP%]{flex-grow:1}.circle-img[_ngcontent-%COMP%]   .circle-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;margin:0 0 8px}@media only screen and (max-width: 1024px){.login-sec[_ngcontent-%COMP%]{height:650px;margin-top:10rem}.top-logo[_ngcontent-%COMP%]{display:none}.main-bg-con[_ngcontent-%COMP%]{background-color:#fff}.captcha-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:5px}.left-content[_ngcontent-%COMP%]{display:none}.main-bg-con[_ngcontent-%COMP%]{background:none;border-radius:0;border:none}.troo-logo[_ngcontent-%COMP%]{display:none}.captcha-text[_ngcontent-%COMP%]{bottom:7px;width:97%}.login-sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:3%}.login-sec[_ngcontent-%COMP%]   .user-bg[_ngcontent-%COMP%]{background:url(user-t.0b0bfb304cd3dafe.png)no-repeat 1%;background-size:2.2rem}.login-sec[_ngcontent-%COMP%]   .user-password[_ngcontent-%COMP%]{background:url(key.387bddf2084231f0.png)no-repeat 1%;background-size:16px}.login-sec[_ngcontent-%COMP%]   .email-bg[_ngcontent-%COMP%]{background:url(email.9ccfc4e6eb0bcd21.png)no-repeat 1%;background-size:16px}.login-sec[_ngcontent-%COMP%]   .mobile-bg[_ngcontent-%COMP%]{background:url(cell-phone.dbde2edb70f82641.png)no-repeat 1%;background-size:16px}.login-sec[_ngcontent-%COMP%]   .confirm-password[_ngcontent-%COMP%]{background:url(padlock.2765027001d5f727.png)no-repeat 1%;background-size:16px}.captcha-text[_ngcontent-%COMP%]{bottom:-12px}.qr-img[_ngcontent-%COMP%]{display:none}}@media only screen and (max-width: 768px){body[_ngcontent-%COMP%]{height:100%}.login-sec[_ngcontent-%COMP%]{height:600px;margin-top:5rem}.troo-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30%;margin-bottom:1.5rem}.captcha-text[_ngcontent-%COMP%]{bottom:7px;width:94%}.captcha-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.7rem}}@media only screen and (max-width: 425px){.captcha-text[_ngcontent-%COMP%]{width:83%}.captcha-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:10px;line-height:2rem}.cii-logo[_ngcontent-%COMP%]{width:39%}.cii-face[_ngcontent-%COMP%]{width:25%}.troo-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%;margin:0 0 1rem}.top-logo[_ngcontent-%COMP%]{margin-top:1rem}.login-sec[_ngcontent-%COMP%]{height:550px;margin:6.5rem 1rem 0}.login-sec[_ngcontent-%COMP%]   .user-bg[_ngcontent-%COMP%]{background:url(user-t.0b0bfb304cd3dafe.png)no-repeat 4%;background-size:1.7rem}.login-sec[_ngcontent-%COMP%]   .user-password[_ngcontent-%COMP%]{background:url(key.387bddf2084231f0.png)no-repeat 4%;background-size:1.7rem}.login-sec[_ngcontent-%COMP%]   .email-bg[_ngcontent-%COMP%]{background:url(email.9ccfc4e6eb0bcd21.png)no-repeat 4%;background-size:1.7rem}.login-sec[_ngcontent-%COMP%]   .mobile-bg[_ngcontent-%COMP%]{background:url(cell-phone.dbde2edb70f82641.png)no-repeat 4%;background-size:1.7rem}.login-sec[_ngcontent-%COMP%]   .confirm-password[_ngcontent-%COMP%]{background:url(padlock.2765027001d5f727.png)no-repeat 4%;background-size:1.7rem}}@media only screen and (max-width: 375px){.login-sec[_ngcontent-%COMP%]{margin:7.5rem 1rem 0;height:550px}.login-sec[_ngcontent-%COMP%]   .user-bg[_ngcontent-%COMP%]{background:url(user-t.0b0bfb304cd3dafe.png)no-repeat 4%;background-size:1.7rem}.login-sec[_ngcontent-%COMP%]   .user-password[_ngcontent-%COMP%]{background:url(key.387bddf2084231f0.png)no-repeat 4%;background-size:1.7rem}.login-sec[_ngcontent-%COMP%]   .email-bg[_ngcontent-%COMP%]{background:url(email.9ccfc4e6eb0bcd21.png)no-repeat 4%;background-size:1.7rem}.login-sec[_ngcontent-%COMP%]   .mobile-bg[_ngcontent-%COMP%]{background:url(cell-phone.dbde2edb70f82641.png)no-repeat 4%;background-size:1.7rem}.login-sec[_ngcontent-%COMP%]   .confirm-password[_ngcontent-%COMP%]{background:url(padlock.2765027001d5f727.png)no-repeat 4%;background-size:1.7rem}}@media only screen and (max-width: 320px){.cii-logo[_ngcontent-%COMP%]{width:35%}.cii-face[_ngcontent-%COMP%]{width:25%}.troo-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%}}']}),t})()}];let _=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[l.Bz.forChild(C),l.Bz]}),t})();var M=e(4796),P=e(205),O=e(6465),b=e(4752);let h=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[a.ez,_,g.UX,O.sQ.forFeature([b.s]),d.Aw.forFeature(M.a,P.l)]}),t})()}}]);