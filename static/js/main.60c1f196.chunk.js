(this["webpackJsonpcrazy-selfies"]=this["webpackJsonpcrazy-selfies"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/circle.b0f2a497.svg"},function(e,t,a){e.exports=a.p+"static/media/square.b7952dc0.svg"},function(e,t,a){e.exports=a.p+"static/media/triangle.01387784.svg"},function(e,t,a){e.exports=a.p+"static/media/switch-camera.9c45a307.png"},function(e,t,a){e.exports=a.p+"static/media/back-arrow.16342357.png"},function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),s=(a(20),a(3)),i=a(4),l=a(6),u=a(5),m=(a(21),a(10)),d=a.n(m),f=a(11),h=a.n(f),g=a(12),p=a.n(g),v=[{name:"Circle",value:"circle",srcImg:d.a},{name:"Square",value:"square",srcImg:h.a},{name:"Triangle",value:"triangle",srcImg:p.a}],E=a(1),C=a.n(E),S=a(7),k=(a(23),a(2)),b=a.n(k),F=a(13),w=a.n(F),P=a(14),x=a.n(P),M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e,n){var c;return Object(s.a)(this,a),(c=t.call(this,e,n)).takePhoto=function(){c.setState({isLoading:!0});c.setState({generatedImg:c.cameraPhoto.getDataUri({sizeFactor:1}),isPhotoCaptured:!0}),c.stopCamera()},c.retake=function(){c.setState({generatedImg:"",isPhotoCaptured:!1}),c.startCameraMaxResolution(c.state.facingMode)},c.switchCamera=function(){c.setState({isLoading:!0}),c.state.facingMode===k.FACING_MODES.USER?(c.setState({facingMode:k.FACING_MODES.ENVIRONMENT}),c.startCameraMaxResolution(c.state.facingMode)):(c.setState({facingMode:k.FACING_MODES.USER}),c.startCameraMaxResolution(c.state.facingMode)),c.setState({isLoading:!1})},c.cameraPhoto=null,c.videoRef=r.a.createRef(),c.state={isPhotoCaptured:!1,generatedImg:"",facingMode:k.FACING_MODES.USER,isLoading:!1},c}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.cameraPhoto=new b.a(this.videoRef.current),this.startCameraMaxResolution(this.state.facingMode)}},{key:"startCamera",value:function(){var e=Object(S.a)(C.a.mark((function e(t,a){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,this.cameraPhoto.startCamera(t,a).then((function(){console.log("camera is started !")})).catch((function(e){console.error("Camera not started!",e)}));case 3:this.setState({isLoading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"startCameraMaxResolution",value:function(){var e=Object(S.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,this.cameraPhoto.startCameraMaxResolution(t).then((function(){console.log("camera is started !")})).catch((function(e){console.error("Camera not started!",e)}));case 3:this.setState({isLoading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"stopCamera",value:function(){var e=Object(S.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,this.cameraPhoto.stopCamera().then((function(){console.log("Camera stopped!")})).catch((function(e){console.log("No camera to stop!:",e)}));case 3:this.setState({isLoading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.closeCamera,n=t.filterImg,c=t.savePhoto,o=this.state,s=o.generatedImg,i=o.isPhotoCaptured,l=o.isLoading;return r.a.createElement("div",null,r.a.createElement("div",{className:"camera-container"},r.a.createElement("div",null,r.a.createElement("video",{ref:this.videoRef,autoPlay:!0}),i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:s,alt:"Generated Selfie"})),r.a.createElement("img",{src:n,alt:"Filter Overlay"})),r.a.createElement("div",{className:"capture-controls"},!i&&r.a.createElement("div",null,r.a.createElement("div",{className:"capture-btn-container"},r.a.createElement("button",{className:"capture-btn",onClick:this.takePhoto})),r.a.createElement("img",{src:w.a,className:"switch-camera-btn",onClick:this.switchCamera}),!i&&r.a.createElement("img",{src:x.a,className:"go-back-btn",onClick:function(){e.stopCamera(),a()}})),i&&r.a.createElement("div",{className:"retake-btn-container"},r.a.createElement("button",{className:"retake-btn",onClick:this.retake},"Take Another"),r.a.createElement("button",{className:"retake-btn",onClick:function(){return c(s)}},"Save Picture"))),l&&r.a.createElement("div",{className:"loader"})))}}]),a}(n.Component),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).openFullscreen=function(){n.elem.requestFullscreen?n.elem.requestFullscreen():n.elem.mozRequestFullScreen?n.elem.mozRequestFullScreen():n.elem.webkitRequestFullscreen?n.elem.webkitRequestFullscreen():n.elem.msRequestFullscreen&&n.elem.msRequestFullscreen()},n.closeFullscreen=function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},n.submitForm=function(){},n.onSelectChange=function(e){var t=v.find((function(t){return t.value===e.target.value}));n.setState({imagePreview:t.srcImg,selectedFilter:t.srcImg})},n.takePhoto=function(){n.state.selectedFilter?(n.openFullscreen(),n.setState({isCameraScreen:!0})):alert("Please select filter!")},n.goToMainScreen=function(){n.closeFullscreen(),n.setState({isCameraScreen:!1})},n.savePhoto=function(e){n.goToMainScreen();n.state.filterImg},n.canvasRef=r.a.createRef(),n.state={imagePreview:null,selectedFilter:null,isCameraScreen:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.elem=document.documentElement}},{key:"loadImages",value:function(e,t){for(var a=[],n=0,r=0,c=0;c<e.length;c++)r++;for(var o=0;o<e.length;o++)a[o]=new Image,a[o].onload=function(){++n>=r&&t(a)},a[o].src=e[o]}},{key:"render",value:function(){var e=this.state,t=e.imagePreview,a=e.isCameraScreen,n=e.selectedFilter;return r.a.createElement("div",{className:"App"},!a&&r.a.createElement("div",{className:"main-screen"},r.a.createElement("header",null,r.a.createElement("h1",null,"Crazy Selfies")),r.a.createElement("section",null,r.a.createElement("form",null,r.a.createElement("input",{type:"text",name:"Name",placeholder:"Enter your name"}),r.a.createElement("select",{name:"filters",defaultValue:"default",onChange:this.onSelectChange},r.a.createElement("option",{disabled:!0,value:"default"}," -- Select a filter -- "),v.map((function(e){return r.a.createElement("option",{key:"option-"+e.value,value:e.value},e.name)}))),r.a.createElement("input",{type:"button",value:"Take Photo",name:"takephoto",onClick:this.takePhoto}),t&&r.a.createElement("img",{src:t,alt:"Selfie Preview",className:"preview"}),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.submitForm})))),a&&r.a.createElement(M,{filterImg:n,closeCamera:this.goToMainScreen,savePhoto:this.savePhoto}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.60c1f196.chunk.js.map