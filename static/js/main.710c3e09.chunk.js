(this["webpackJsonpcrazy-selfies"]=this["webpackJsonpcrazy-selfies"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/circle.b0f2a497.svg"},function(e,t,a){e.exports=a.p+"static/media/square.b7952dc0.svg"},function(e,t,a){e.exports=a.p+"static/media/triangle.01387784.svg"},function(e,t,a){e.exports=a.p+"static/media/iron-man-black-bg.04570b6a.png"},function(e,t,a){e.exports=a.p+"static/media/iron-man-white-bg.ab156cca.png"},function(e,t,a){e.exports=a.p+"static/media/iron-man-no-bg.cf7cfa25.png"},function(e,t,a){e.exports=a.p+"static/media/bhaag-milkha.827b96c2.png"},function(e,t,a){e.exports=a.p+"static/media/switch-camera.9c45a307.png"},function(e,t,a){e.exports=a.p+"static/media/back-arrow.16342357.png"},function(e,t,a){e.exports=a.p+"static/media/camera-shutter.d5fb3f65.mp3"},,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),c=(a(24),a(2)),s=a(3),l=a(5),m=a(4),u=(a(25),a(8)),d=a.n(u),h=a(9),g=a.n(h),f=a(10),p=a.n(f),v=a(11),w=a.n(v),E=a(12),C=a.n(E),S=a(13),b=a.n(S),k=a(14),I=a.n(k),R=[{name:"Circle",value:"circle",srcImg:d.a},{name:"Square",value:"square",srcImg:g.a},{name:"Triangle",value:"triangle",srcImg:p.a},{name:"Bhaag Milkha",value:"bhaag-milkha",srcImg:I.a},{name:"Iron Man Black Background",value:"iron-man-black-bg",srcImg:w.a},{name:"Iron Man White Background",value:"iron-man-white-bg",srcImg:C.a},{name:"Iron Man No Background",value:"iron-man-no-bg",srcImg:b.a}],P=(a(26),a(1)),M=a.n(P),F=a(15),y=a.n(F),N=a(16),x=a.n(N),O=a(17),W=a.n(O),q=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e,n){var i;return Object(c.a)(this,a),(i=t.call(this,e,n)).resetState=function(){i.setState({isPhotoCaptured:!1,generatedImg:"",facingMode:P.FACING_MODES.USER,isLoading:!1})},i.takePhoto=function(){i.setState({isLoading:!0}),i.shutterSoundRef.current.play();var e={sizeFactor:1,imageType:P.IMAGE_TYPES.JPG,imageCompression:.95,isImageMirror:i.state.mirrorOffset};i.setState({generatedImg:i.cameraPhoto.getDataUri(e),isPhotoCaptured:!0}),i.stopCamera()},i.retake=function(){i.setState({generatedImg:"",isPhotoCaptured:!1}),i.startCamera(i.state.facingMode,i.aspectRatio)},i.switchCamera=function(){i.setState({isLoading:!0}),i.state.facingMode===P.FACING_MODES.USER?(i.setState({facingMode:P.FACING_MODES.ENVIRONMENT,mirrorOffset:!0}),i.startCamera(i.state.facingMode,i.aspectRatio)):(i.setState({facingMode:P.FACING_MODES.USER,mirrorOffset:!1}),i.startCamera(i.state.facingMode,i.aspectRatio)),i.setState({isLoading:!1})},i.cameraPhoto=null,i.videoRef=r.a.createRef(),i.shutterSoundRef=r.a.createRef(),i.state={isPhotoCaptured:!1,generatedImg:"",facingMode:P.FACING_MODES.USER,isLoading:!1,mirrorOffset:!0},i.aspectRatio={width:window.innerWidth?window.innerWidth:window.screen.width,height:(window.innerWidth?window.innerWidth:window.screen.width)/3*4},i}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.cameraPhoto=new M.a(this.videoRef.current),this.startCamera(this.state.facingMode)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.cameraPhoto=null,this.resetState()}},{key:"startCamera",value:function(e,t){var a=this;this.setState({isLoading:!0}),this.cameraPhoto.startCamera(e,t).then((function(){console.log("camera is started !"),a._isMounted&&a.setState({isLoading:!1})})).catch((function(e){console.error("Camera not started!",e)}))}},{key:"stopCamera",value:function(){var e=this;this.setState({isLoading:!0}),this.cameraPhoto.stopCamera().then((function(){console.log("Camera stopped!"),e._isMounted&&e.setState({isLoading:!1})})).catch((function(e){console.log("No camera to stop!:",e)}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.closeCamera,n=t.filterImg,i=t.savePhoto,o=this.state,c=o.generatedImg,s=o.isPhotoCaptured,l=o.isLoading,m=o.mirrorOffset;return r.a.createElement("div",null,r.a.createElement("audio",{className:"sound-skid",preload:"auto",ref:this.shutterSoundRef},r.a.createElement("source",{src:W.a})),r.a.createElement("div",{className:"camera-container"},r.a.createElement("div",null,r.a.createElement("video",{ref:this.videoRef,autoPlay:!0,style:{width:this.aspectRatio.width,height:this.aspectRatio.height,transform:m?"rotateY(180deg)":"rotateY(0deg)"}}),s&&r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:c,style:this.aspectRatio,alt:"Generated Selfie"})),r.a.createElement("img",{src:n,style:this.aspectRatio,alt:"Filter Overlay"})),r.a.createElement("div",{className:"capture-controls"},!s&&r.a.createElement("div",null,r.a.createElement("div",{className:"capture-btn-container"},r.a.createElement("button",{className:"capture-btn",onClick:this.takePhoto})),r.a.createElement("img",{src:y.a,className:"switch-camera-btn",alt:"Switch Icon",onClick:this.switchCamera}),!s&&r.a.createElement("img",{src:x.a,className:"go-back-btn",alt:"Back Icon",onClick:function(){e.stopCamera(),a()}})),s&&r.a.createElement("div",{className:"retake-btn-container"},r.a.createElement("button",{className:"retake-btn",onClick:this.retake},"Take Another"),r.a.createElement("button",{className:"retake-btn",onClick:function(){i(c)}},"Save Picture"))),l&&r.a.createElement("div",{className:"loader"})))}}]),a}(n.Component),D=a(18),L=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).openFullscreen=function(){n.elem.requestFullscreen?n.elem.requestFullscreen():n.elem.mozRequestFullScreen?n.elem.mozRequestFullScreen():n.elem.webkitRequestFullscreen?n.elem.webkitRequestFullscreen():n.elem.msRequestFullscreen&&n.elem.msRequestFullscreen()},n.closeFullscreen=function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},n.submitForm=function(e){e.preventDefault(),""===n.state.name?alert("Please provide a name!"):null===n.state.cameraImg?alert("No image taken! Please capture your photo!"):Object(D.saveAs)(n.state.cameraImg,n.state.name+".png")},n.onInputChange=function(e){return n.setState({name:e.target.value.trim()})},n.onSelectChange=function(e){var t=R.find((function(t){return t.value===e.target.value}));n.setState({imagePreview:t.srcImg})},n.takePhoto=function(){n.state.imagePreview?(n.openFullscreen(),n.setState({isCameraScreen:!0})):alert("Please select filter!")},n.goToMainScreen=function(){n.setState({isCameraScreen:!1}),n.closeFullscreen()},n.loadImages=function(e,t){for(var a=[],n=0,r=e.length,i=0;i<e.length;i++)a[i]=document.createElement("img"),a[i].onload=function(){++n>=r&&t(a)},a[i].src=e[i]},n.savePhoto=function(e){var t=window.innerWidth?window.innerWidth:window.screen.width,a=t/3*4;n.goToMainScreen();var r=[e,n.state.imagePreview];n.loadImages(r,(function(e){for(var i=n.resultImgRef.current,o=0;o<r.length;o++)n.canvasContext.drawImage(e[o],0,0,t,a);i.src=n.canvasContext.canvas.toDataURL("image/png"),n.canvasContext.canvas.toBlob((function(e){return n.setState({cameraImg:e})}))}))},n.canvasRef=r.a.createRef(),n.resultImgRef=r.a.createRef(),n.state={name:"",imagePreview:null,cameraImg:null,isCameraScreen:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.elem=document.documentElement;var e=this.canvasRef.current;this.canvasContext=e.getContext("2d")}},{key:"render",value:function(){var e=this.state,t=e.imagePreview,a=e.isCameraScreen,n=e.name,i=window.innerWidth?window.innerWidth:window.screen.width,o=i/3*4;return r.a.createElement("div",{className:"App"},!a&&r.a.createElement("div",{className:"main-screen"},r.a.createElement("header",null,r.a.createElement("h1",null,"Crazy Selfies")),r.a.createElement("section",null,r.a.createElement("form",null,r.a.createElement("input",{type:"text",name:"Name",value:n,placeholder:"Enter your name",onChange:this.onInputChange}),r.a.createElement("select",{name:"filters",defaultValue:"default",onChange:this.onSelectChange},r.a.createElement("option",{disabled:!0,value:"default"}," -- Select a filter -- "),R.map((function(e){return r.a.createElement("option",{key:"option-"+e.value,value:e.value},e.name)}))),r.a.createElement("input",{type:"button",value:"Take Photo",name:"takephoto",onClick:this.takePhoto}),t&&r.a.createElement("img",{src:t,ref:this.resultImgRef,alt:"Selfie Preview",className:"preview"}),r.a.createElement("canvas",{style:{display:"none"},width:i,height:o,ref:this.canvasRef}),r.a.createElement("input",{type:"submit",value:"Download",onClick:this.submitForm})))),a&&r.a.createElement(q,{filterImg:t,closeCamera:this.goToMainScreen,savePhoto:this.savePhoto}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.710c3e09.chunk.js.map