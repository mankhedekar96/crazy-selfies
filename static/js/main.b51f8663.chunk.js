(this["webpackJsonpcrazy-selfies"]=this["webpackJsonpcrazy-selfies"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/circle.b0f2a497.svg"},function(e,t,a){e.exports=a.p+"static/media/square.b7952dc0.svg"},function(e,t,a){e.exports=a.p+"static/media/triangle.01387784.svg"},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(16),a(1)),i=a(2),s=a(4),u=a(3),m=(a(17),a(8)),h=a.n(m),d=a(9),f=a.n(d),v=a(10),p=a.n(v),g=[{name:"Circle",value:"circle",srcImg:h.a},{name:"Square",value:"square",srcImg:f.a},{name:"Triangle",value:"triangle",srcImg:p.a}],F=(a(18),a(5)),C=a.n(F),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e,n){var c;return Object(l.a)(this,a),(c=t.call(this,e,n)).cameraPhoto=null,c.videoRef=r.a.createRef(),c.state={dataUri:""},c}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.cameraPhoto=new C.a(this.videoRef.current),this.startCamera(F.FACING_MODES.USER,{width:window.screen.availWidth,height:window.screen.availHeight})}},{key:"startCamera",value:function(e,t){this.cameraPhoto.startCamera(e,t).then((function(){console.log("camera is started !")})).catch((function(e){console.error("Camera not started!",e)}))}},{key:"startCameraMaxResolution",value:function(e){this.cameraPhoto.startCameraMaxResolution(e).then((function(){console.log("camera is started !")})).catch((function(e){console.error("Camera not started!",e)}))}},{key:"takePhoto",value:function(){var e=this.cameraPhoto.getDataUri({sizeFactor:1});this.setState({dataUri:e})}},{key:"stopCamera",value:function(){this.cameraPhoto.stopCamera().then((function(){console.log("Camera stoped!")})).catch((function(e){console.log("No camera to stop!:",e)}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.closeCamera,n=t.filterImg;return r.a.createElement("div",{className:"camera-container"},r.a.createElement("video",{ref:this.videoRef,autoPlay:!0}),r.a.createElement("img",{src:n,alt:"Filter Overlay"}),r.a.createElement("button",{id:"goBack",onClick:function(){e.stopCamera(),a()}},"Go back"))}}]),a}(n.Component),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).openFullscreen=function(){n.elem.requestFullscreen?n.elem.requestFullscreen():n.elem.mozRequestFullScreen?n.elem.mozRequestFullScreen():n.elem.webkitRequestFullscreen?n.elem.webkitRequestFullscreen():n.elem.msRequestFullscreen&&n.elem.msRequestFullscreen()},n.closeFullscreen=function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},n.submitForm=function(){},n.onSelectChange=function(e){var t=g.find((function(t){return t.value===e.target.value}));n.setState({imagePreview:t.srcImg,selectedFilter:t.srcImg})},n.takePhoto=function(){n.state.selectedFilter?(n.openFullscreen(),n.setState({isCameraScreen:!0})):alert("Please select filter!")},n.goToMainScreen=function(){n.closeFullscreen(),n.setState({isCameraScreen:!1})},n.state={imagePreview:null,selectedFilter:null,isCameraScreen:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.elem=document.documentElement}},{key:"render",value:function(){var e=this.state,t=e.imagePreview,a=e.isCameraScreen,n=e.selectedFilter;return r.a.createElement("div",{className:"App"},!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",null,"Crazy Selfies")),r.a.createElement("section",null,r.a.createElement("form",null,r.a.createElement("input",{type:"text",name:"Name",placeholder:"Enter your name"}),r.a.createElement("select",{name:"filters",id:"selectedFilter",onChange:this.onSelectChange},g.map((function(e){return r.a.createElement("option",{key:"option-"+e.value,value:e.value},e.name)}))),r.a.createElement("input",{type:"button",value:"Take Photo",name:"takephoto",onClick:this.takePhoto}),t&&r.a.createElement("img",{src:t,alt:"Selfie Preview",className:"preview"}),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.submitForm})))),a&&r.a.createElement(E,{filterImg:n,closeCamera:this.goToMainScreen}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.b51f8663.chunk.js.map