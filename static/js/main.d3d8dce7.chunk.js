(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(20),c=n.n(r),i=(n(27),n(4)),s=n(5),l=n(7),u=n(6),d=n(21),h=(n(28),n(0)),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={keyWord:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,o=n.value;t.setState(Object(d.a)({},a,o))},t.handleSubmit=function(e){e.preventDefault(),""!==t.state.keyWord.trim()?(t.props.onSubmit(t.state.keyWord),t.resetForm()):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e")},t.resetForm=function(){t.setState({keyWord:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"keyWord",value:this.state.keyWord,onChange:this.handleChange})]})})})}}]),n}(a.Component),m=n(8),f=n(11),b=n.n(f),g=(n(49),n(50),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).getId=function(e){var n=e.currentTarget.id;t.props.onClick(n)},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("li",{id:this.props.id,className:"ImageGalleryItem",onClick:this.getId,children:Object(h.jsx)("img",{src:this.props.src,alt:this.props.alt,className:"ImageGalleryItem-image"})})}}]),n}(a.Component)),j=n(22),y=n.n(j);n(71);var O=function(t){var e=t.onClick;return Object(h.jsx)("button",{onClick:e,type:"button",className:"Button",children:"Load more..."})},v=(n(72),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).handleKeyDown=function(e){"Escape"===e.code&&(console.log("\u041d\u0430\u0436\u0430\u043b\u0438 ESC, \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"),t.props.onClose())},t.handleBackdropClick=function(e){e.currentTarget===e.target&&t.props.onClose()},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:this.props.src,alt:this.props.alt})})})}}]),n}(a.Component)),k=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={images:[],loading:!1,page:1,id:"",showModal:!1},t.hundleButtonClick=function(){t.setState((function(t){return{page:t.page+1}}))},t.formSubmitHandler=function(e){t.setState({id:e}),t.toggleModal()},t.toggleModal=function(){t.setState((function(t){return{showModal:!t.showModal}}))},t.getInfoById=function(){var e=+t.state.id;return t.state.images.find((function(t){return t.id===e}))},t}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(t,e){var n=this;t.keyWord!==this.props.keyWord?(this.setState({images:[],loading:!0,page:1}),setTimeout((function(){b.a.get("https://pixabay.com/api/?q=".concat(n.props.keyWord,"&page=").concat(n.state.page,"&key=22564694-3177f5daba1f2572eee652a36&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return n.setState({images:Object(m.a)(t.data.hits)})})).finally((function(){return n.setState({loading:!1})}))}),1e3)):e.page!==this.state.page&&setTimeout((function(){b.a.get("https://pixabay.com/api/?q=".concat(n.props.keyWord,"&page=").concat(n.state.page,"&key=22564694-3177f5daba1f2572eee652a36&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return n.setState({images:[].concat(Object(m.a)(e.images),Object(m.a)(t.data.hits))})})).finally((function(){return n.setState({loading:!1})}))}),1e3),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var t=this,e=this.getInfoById();return Object(h.jsxs)("div",{children:[Object(h.jsx)("ul",{className:"ImageGallery",children:this.state.images.map((function(e){return Object(h.jsx)(g,{src:e.webformatURL,alt:e.user,id:e.id,onClick:t.formSubmitHandler},e.id)}))}),this.state.loading&&Object(h.jsx)(y.a,{type:"Oval",color:"#00BFFF",height:80,width:80}),this.state.images.length>0&&Object(h.jsx)(O,{onClick:this.hundleButtonClick}),this.state.showModal&&Object(h.jsx)(v,{onClose:this.toggleModal,src:e.largeImageURL,alt:e.id})]})}}]),n}(a.Component),S=(n(73),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={keyWord:""},t.formSubmitHandler=function(e){t.setState({keyWord:e})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{onSubmit:this.formSubmitHandler}),Object(h.jsx)(k,{keyWord:this.state.keyWord})]})}}]),n}(a.Component));c.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.d3d8dce7.chunk.js.map