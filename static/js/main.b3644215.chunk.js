(this["webpackJsonpcrazy-selfies"]=this["webpackJsonpcrazy-selfies"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/circle.b0f2a497.svg"},function(e,t,n){e.exports=n.p+"static/media/square.b7952dc0.svg"},function(e,t,n){e.exports=n.p+"static/media/triangle.01387784.svg"},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=(n(16),n(1)),l=n(2),s=n(4),u=n(3),m=(n(17),n(8)),h=n.n(m),d=n(9),f=n.n(d),v=n(10),w=n.n(v),g=[{name:"Circle",value:"circle",srcImg:h.a},{name:"Square",value:"square",srcImg:f.a},{name:"Triangle",value:"triangle",srcImg:w.a}],p=(n(18),n(5)),C=n.n(p),F=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e,a){var o;return Object(c.a)(this,n),(o=t.call(this,e,a)).cameraPhoto=null,o.videoRef=r.a.createRef(),o.state={dataUri:""},o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.cameraPhoto=new C.a(this.videoRef.current),console.log({width:window.innerWidth>0?window.innerWidth:window.screen.width,height:window.innerHeight>0?window.innerHeight-100:window.screen.height-100}),this.startCamera(p.FACING_MODES.USER,{width:window.innerWidth>0?window.innerWidth:window.screen.width,height:window.innerHeight>0?window.innerHeight-100:window.screen.height-100})}},{key:"startCamera",value:function(e,t){this.cameraPhoto.startCamera(e,t).then((function(){console.log("camera is started !")})).catch((function(e){console.error("Camera not started!",e)}))}},{key:"startCameraMaxResolution",value:function(e){this.cameraPhoto.startCameraMaxResolution(e).then((function(){console.log("camera is started !")})).catch((function(e){console.error("Camera not started!",e)}))}},{key:"takePhoto",value:function(){var e=this.cameraPhoto.getDataUri({sizeFactor:1});this.setState({dataUri:e})}},{key:"stopCamera",value:function(){this.cameraPhoto.stopCamera().then((function(){console.log("Camera stoped!")})).catch((function(e){console.log("No camera to stop!:",e)}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.closeCamera,a=t.filterImg;return r.a.createElement("div",{className:"camera-container"},r.a.createElement("video",{ref:this.videoRef,autoPlay:!0}),r.a.createElement("img",{src:a,alt:"Filter Overlay"}),r.a.createElement("button",{id:"goBack",onClick:function(){e.stopCamera(),n()}},"Go back"))}}]),n}(a.Component),E=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).openFullscreen=function(){a.elem.requestFullscreen?a.elem.requestFullscreen():a.elem.mozRequestFullScreen?a.elem.mozRequestFullScreen():a.elem.webkitRequestFullscreen?a.elem.webkitRequestFullscreen():a.elem.msRequestFullscreen&&a.elem.msRequestFullscreen()},a.closeFullscreen=function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},a.submitForm=function(){},a.onSelectChange=function(e){var t=g.find((function(t){return t.value===e.target.value}));a.setState({imagePreview:t.srcImg,selectedFilter:t.srcImg})},a.takePhoto=function(){a.state.selectedFilter?(a.openFullscreen(),a.setState({isCameraScreen:!0})):alert("Please select filter!")},a.goToMainScreen=function(){a.closeFullscreen(),a.setState({isCameraScreen:!1})},a.state={imagePreview:null,selectedFilter:null,isCameraScreen:!1},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.elem=document.documentElement}},{key:"render",value:function(){var e=this.state,t=e.imagePreview,n=e.isCameraScreen,a=e.selectedFilter;return r.a.createElement("div",{className:"App"},!n&&r.a.createElement("div",{className:"main-screen"},r.a.createElement("header",null,r.a.createElement("h1",null,"Crazy Selfies")),r.a.createElement("section",null,r.a.createElement("form",null,r.a.createElement("input",{type:"text",name:"Name",placeholder:"Enter your name"}),r.a.createElement("select",{name:"filters",id:"selectedFilter",onChange:this.onSelectChange},g.map((function(e){return r.a.createElement("option",{key:"option-"+e.value,value:e.value},e.name)}))),r.a.createElement("input",{type:"button",value:"Take Photo",name:"takephoto",onClick:this.takePhoto}),t&&r.a.createElement("img",{src:t,alt:"Selfie Preview",className:"preview"}),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.submitForm})))),n&&r.a.createElement(F,{filterImg:a,closeCamera:this.goToMainScreen}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.b3644215.chunk.js.map