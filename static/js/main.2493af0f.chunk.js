(this["webpackJsonpimage-enhancer"]=this["webpackJsonpimage-enhancer"]||[]).push([[0],{10:function(e,a,t){e.exports={main:"ContactUs_main__1FKxw",imageText:"ContactUs_imageText__3DvE3",enhancerText:"ContactUs_enhancerText__UGxiN",names:"ContactUs_names__1gUNn",name:"ContactUs_name__I7BfL",references:"ContactUs_references__1Hu-j",refTitle:"ContactUs_refTitle__1Q8XM",text:"ContactUs_text__3WqU5",devs:"ContactUs_devs__bSpnc",title:"ContactUs_title__2gZGD"}},14:function(e,a,t){e.exports={container:"ImageUploader_container__7E9Lr",mainTitle:"ImageUploader_mainTitle__2rAjj",main:"ImageUploader_main__1FLND",input:"ImageUploader_input__3xBNN",uploadContainer:"ImageUploader_uploadContainer__2OazH",uploadButton:"ImageUploader_uploadButton__23AQo"}},16:function(e,a,t){e.exports={main:"Info_main__13iEO",text:"Info_text__k94za",title:"Info_title__2OVLp",description:"Info_description__167Ov",tryItButton:"Info_tryItButton__25tUv",imageHolder:"Info_imageHolder__2nYMG"}},19:function(e,a,t){e.exports={wrapper:"SlideShow_wrapper__2ZnLU",container:"SlideShow_container__1YKWf",img:"SlideShow_img__2t4VN",bannerTitle:"SlideShow_bannerTitle__tEU-8",leftContainer:"SlideShow_leftContainer__11J_H",leftImageContainer:"SlideShow_leftImageContainer__37_ie"}},26:function(e,a,t){e.exports={main:"TopBar_main__1p266",imageText:"TopBar_imageText__2Fvg4",enhancerText:"TopBar_enhancerText__3_SX6"}},27:function(e,a,t){e.exports={main:"SlideShowButtons_main__295o6",roundButton:"SlideShowButtons_roundButton__1CB1n",active:"SlideShowButtons_active__3lI3R SlideShowButtons_roundButton__1CB1n",inactive:"SlideShowButtons_inactive__qZwCA SlideShowButtons_roundButton__1CB1n"}},36:function(e,a,t){e.exports={App:"App_App__8BSgS"}},37:function(e,a,t){e.exports=t.p+"static/media/illustration.a9519faa.png"},39:function(e,a,t){e.exports={main:"ScrollToTop_main__2btEz"}},41:function(e,a,t){e.exports=t(54)},46:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(35),r=t.n(l),c=(t(46),t(40)),o=t(36),s=t.n(o),m=t(21),u=t(22),d=t(25),_=t(24),p=t(14),E=t.n(p),h=function(e){Object(d.a)(t,e);var a=Object(_.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).onInputChange=function(e){var a=e.target.value;fetch(a).then((function(e){console.log(e)}))},e.onButtonClick=function(e){console.log("UPLOAD not implemented")},e.state={validUrl:!0},e}return Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:E.a.container},i.a.createElement("div",{className:E.a.mainTitle},"Enter a URL or upload a photo from your device. The site me require some time to load the photo from a url so please be patient!"),i.a.createElement("div",{className:E.a.main},i.a.createElement("input",{type:"text",placeholder:"Enter a URL",className:E.a.input,onChange:this.onInputChange}),i.a.createElement("div",{className:E.a.uploadContainer},i.a.createElement("div",{className:E.a.title},"Or upload a photo"),i.a.createElement("div",{className:E.a.uploadButtonContainer},i.a.createElement("button",{className:E.a.uploadButton,onClick:this.onButtonClick},"UPLOAD")))))}}]),t}(i.a.Component),g=t(26),v=t.n(g),N=function(){return i.a.createElement("div",{className:v.a.main},i.a.createElement("div",null,i.a.createElement("span",{className:v.a.imageText},"IMAGE "),i.a.createElement("span",{className:v.a.enhancerText},"ENHANCER")))},f=t(16),x=t.n(f),b=t(37),T=t.n(b),C=t(23),I=function(){return i.a.createElement("div",{className:x.a.main},i.a.createElement("div",{className:x.a.text},i.a.createElement("div",{className:x.a.title},"Enhance your images"),i.a.createElement("div",{className:x.a.description},"Increase the resolution of ",i.a.createElement("br",null),"those low quality images ",i.a.createElement("br",null),"to high definition in one click!"),i.a.createElement("button",{className:x.a.tryItButton},i.a.createElement(C.b,{to:"/enhance"},"Try it now!"))),i.a.createElement("div",{className:x.a.imageHolder},i.a.createElement("img",{src:T.a,alt:"illustration"})))},w=t(9),S=t.n(w),k=t(18),B=t(17),U=function(){return i.a.createElement("div",{className:S.a.main},i.a.createElement("div",{className:S.a.mainTitle},"Why ",i.a.createElement("span",{className:S.a.imageText},"IMAGE "),i.a.createElement("span",{className:S.a.enhancerText},"ENHANCER"),"?"),i.a.createElement("div",{className:S.a.gridContainer},i.a.createElement("div",{className:S.a.container},i.a.createElement("div",{className:S.a.text},i.a.createElement("div",{className:S.a.title},"Lightning fast",i.a.createElement(B.a,{icon:k.b,className:S.a.icon})),i.a.createElement("div",{className:S.a.description},"The image enhancing ",i.a.createElement("br",null),"model used in here ",i.a.createElement("br",null),"is optimized version of SRGAN")),i.a.createElement("div",{className:S.a.text},i.a.createElement("div",{className:S.a.title},"Optimized for animals",i.a.createElement(B.a,{icon:k.c,className:S.a.icon})),i.a.createElement("div",{className:S.a.description},"The model is trained ",i.a.createElement("br",null),"mostly on animals to ",i.a.createElement("br",null),"cover every small detail")),i.a.createElement("div",{className:S.a.text},i.a.createElement("div",{className:S.a.title},"Is it free",i.a.createElement(B.a,{icon:k.d,className:S.a.icon})),i.a.createElement("div",{className:S.a.description},"Yes! This is a hobby ",i.a.createElement("br",null),"project and is completely ",i.a.createElement("br",null),"free to use!")))))},y=t(10),A=t.n(y),O=function(){return i.a.createElement("div",{className:A.a.main},i.a.createElement("div",{className:A.a.devs},i.a.createElement("div",{className:A.a.title},i.a.createElement("span",{className:A.a.imageText},"IMAGE "),i.a.createElement("span",{className:A.a.enhancerText},"ENHANCER")),i.a.createElement("div",{className:A.a.names},i.a.createElement("div",{className:A.a.name},i.a.createElement("span",{className:A.a.text},"Yash Kandalkar")),i.a.createElement("div",{className:A.a.name},i.a.createElement("span",{className:A.a.text},"Akash Jaiswal")))),i.a.createElement("div",{className:A.a.references},i.a.createElement("div",{className:A.a.refTitle},i.a.createElement("span",{className:A.a.text},"References")),i.a.createElement("div",{className:A.a.names},i.a.createElement("div",{className:A.a.name},i.a.createElement("span",{className:A.a.text,onClick:function(){return window.open("https://arxiv.org/abs/1809.00219","_blank")}},"ESRGAN")),i.a.createElement("div",{className:A.a.name},i.a.createElement("span",{className:A.a.text,onClick:function(){return window.open("https://github.com/xinntao/ESRGAN","_blank")}},"ESRGAN GitHub")))))},W=t(39),j=t.n(W),M=function(){var e=document.body.scrollTop||document.documentElement.scrollTop,a=setInterval((function(){e>0?(e-=20,document.body.scrollTop=e,document.documentElement.scrollTop=e):clearInterval(a)}),1)},G=function(e){return e.show?i.a.createElement("div",{className:j.a.main,onClick:M},i.a.createElement(B.a,{icon:k.a,size:"4x"})):""},R=t(19),z=t.n(R),H=t(27),L=t.n(H),D=function(e){for(var a=e.pageCount,t=e.currPage,n=[],l=0;l<a;l++)n.push({key:l});return i.a.createElement("div",{className:L.a.main},n.map((function(e,a){return i.a.createElement("div",{key:a,className:t===a?L.a.active:L.a.inactive})})))},F=t(28),q=t(4),J={low:["/image-enhancer/assets/oldman.webp","/image-enhancer/assets/girl.webp","/image-enhancer/assets/dogs.webp"],high:["/image-enhancer/assets/oldman_rlt.webp","/image-enhancer/assets/girl_rlt.webp","/image-enhancer/assets/dogs_rlt.webp"],text:["Stunning details","Amazing colors","Optimized for animals"]},Y={enter:function(e){return{x:"100%"}},center:{zIndex:1,x:0},exit:function(e){return{zIndex:0,x:"-100%"}}},Z={duration:.5,ease:"easeInOut"},P=function(e){Object(d.a)(t,e);var a=Object(_.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={page:1,dir:0,imageIndex:0},e._isMounted=!1,e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0;var a=setInterval((function(){e._isMounted?e.setState({page:e.state.page+1,dir:1,imageIndex:Object(q.m)(0,J.high.length,e.state.page)}):clearInterval(a)}),8e3)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:z.a.wrapper},i.a.createElement(F.a,{initial:!1,custom:this.state.dir},i.a.createElement(F.b.div,{className:z.a.container,key:this.state.page,custom:this.state.dir,variants:Y,transition:Z,initial:"enter",animate:"center",exit:"exit"},i.a.createElement("div",{className:z.a.leftContainer},i.a.createElement("div",{className:z.a.bannerTitle},i.a.createElement("span",{style:{color:"#e67e22"}},J.text[this.state.imageIndex].split(" ")[0])," "+J.text[this.state.imageIndex].split(" ").splice(1).join(" "))),i.a.createElement(F.b.img,{src:J.high[this.state.imageIndex],className:z.a.img,alt:"high-res"})))),i.a.createElement(D,{pageCount:J.high.length,currPage:this.state.imageIndex}))}}]),t}(i.a.Component),K=t(7);var V=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],l=a[1];return document.body.onscroll=function(){document.body.scrollTop>350||document.documentElement.scrollTop>350?l(!0):l(!1)},i.a.createElement(C.a,null,i.a.createElement(N,null),i.a.createElement(K.c,null,i.a.createElement(K.a,{path:"/enhance"},i.a.createElement(h,null)),i.a.createElement(K.a,{path:"/"},i.a.createElement("div",{className:s.a.App},i.a.createElement(P,null),i.a.createElement(I,null),i.a.createElement(U,null),i.a.createElement(O,null),i.a.createElement(G,{show:t})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports={main:"Working_main__WiJqo",mainTitle:"Working_mainTitle__Ie1cZ",imageText:"Working_imageText__3B5F_",enhancerText:"Working_enhancerText__3FIYB",gridContainer:"Working_gridContainer__1W4hF",container:"Working_container__3eZf5",text:"Working_text__1db6d",title:"Working_title__1MFVX",icon:"Working_icon__32v3B",description:"Working_description__2Dgj8"}}},[[41,1,2]]]);
//# sourceMappingURL=main.2493af0f.chunk.js.map