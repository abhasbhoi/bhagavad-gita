(this["webpackJsonpbookmark-dashboard-ui"]=this["webpackJsonpbookmark-dashboard-ui"]||[]).push([[0],{183:function(e,a,t){},184:function(e,a,t){},189:function(e,a,t){"use strict";t.r(a);var c=t(0),l=t.n(c),n=t(20),r=t.n(n),o=t(10),s=t(7),i=t(15),m=t(16),d=t(18),u=t(17),p=t(8),E=t(56),v=t.n(E),h=function(e){var a=e.item;return console.log(a),l.a.createElement("div",{className:"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"},l.a.createElement("div",{className:"card card-figure has-hoverable"},l.a.createElement("figure",{className:"figure"},l.a.createElement("div",{className:"figure-img"},l.a.createElement("img",{className:"img-fluid",src:v.a,alt:"card-img"}),l.a.createElement("div",{className:"figure-description"},l.a.createElement("h6",{className:"figure-title"}," ",a.name," "),l.a.createElement("p",{className:"text-muted mb-0"},l.a.createElement("small",null,a.description))),l.a.createElement("div",{className:"figure-action"},l.a.createElement(o.c,{to:"/cardview/"+a.id,className:"btn btn-block btn-sm btn-primary"},"Meaning"))),l.a.createElement("figcaption",{className:"figure-caption"},l.a.createElement("ul",{className:"list-inline d-flex text-muted mb-0"},l.a.createElement("li",{className:"list-inline-item text-truncate mr-auto"},l.a.createElement("a",{href:v.a,download:!0}," ",l.a.createElement("span",{className:"badge badge-info"},a.code))),l.a.createElement("li",{className:"list-inline-item "},l.a.createElement("a",{href:"#"}," ",l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-star "})))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"mailto:?subject=Bookmark Dashboard: sharing '".concat(a.name,"'&body=Hello,%0D%0A%0D%0AI would like to share this url with you:\n                                        ").concat(window.location.protocol+"//"+window.location.host+"/cardview/"+a.id," \n                                        ").concat(a.expireDate?"which will be expire before"+a.expireDate:""," %0D%0A%0D%0A Regards,"),className:"fa fa-share-alt"},"\xa0")),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:v.a,download:!0}," ",l.a.createElement("span",null,l.a.createElement("i",{className:"fa  fa-download "})))))))))},g=function(){return l.a.createElement("span",{className:"dashboard-spinner spinner-secondary spinner-xxl",style:{margin:"auto",display:"block"}})},b=function(e){var a=e.items;return e.isLoading?l.a.createElement(g,null):l.a.createElement(l.a.Fragment,null,a.map((function(e){return l.a.createElement(h,{key:e.char_id,item:e})})))},f=(t(71),function(e){var a=e.name,t=e.label,c=e.onChange,n=e.defaultOption,r=(e.value,e.error),o=e.options;return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{for:"validationCustom01"},t),l.a.createElement("select",{name:a,onChange:c,className:"form-control"},l.a.createElement("option",{value:""},n),o.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.text)}))),r&&l.a.createElement("div",{className:"valid-feedback"},r))}),N=function(){var e=Object(c.useState)([]),a=Object(p.a)(e,2),t=a[0],n=a[1],r=Object(c.useState)([]),o=Object(p.a)(r,2),s=o[0],i=o[1],m=Object(c.useState)([]),d=Object(p.a)(m,2),u=d[0],E=d[1],v=Object(c.useState)(!0),h=Object(p.a)(v,2),g=h[0],N=h[1],O=Object(c.useState)(""),C=Object(p.a)(O,2),S=C[0],y=C[1];return Object(c.useEffect)((function(){N(!0),fetch("data/db.json").then((function(e){return e.json()})).then((function(e){console.log(e),n(e.cards),i(e.cards),E(e.groups)})),N(!1)}),[]),l.a.createElement("div",{className:"dashboard-wrapper"},l.a.createElement("div",{className:"container-fluid dashboard-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},l.a.createElement("div",{className:"page-header",id:"top"},l.a.createElement("h2",{className:"pageheader-title"},"Cards ")))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card-body"},l.a.createElement("form",{class:"needs-validation",novalidate:!0},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-2"},l.a.createElement(f,{name:"solutionId",label:"Solution",defaultOption:"Choose solution to your problem",value:u.id||"",options:u.map((function(e){return{value:e.id,text:e.name}})),onChange:function(e){var a=e.target,c=a.name,l=a.value;console.log(c),console.log(l);var r=u.filter((function(e){return e.id===+l})).map((function(e){return e.cards}));n(l?s.filter((function(e){return r[0].includes(e.id)})):s),console.log(t)}})),l.a.createElement("div",{class:"col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-2"},l.a.createElement("label",{for:"validationCustom02"},"Search"),l.a.createElement("input",{type:"text",className:"form-control ",placeholder:"Search verses | sloka | keyword",onChange:function(e){return y(e.target.value)},value:S})))))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10"},l.a.createElement("div",{className:"page-header",id:"top"},l.a.createElement("div",{class:"pills-regular"},l.a.createElement("ul",{class:"nav nav-pills mb-1",id:"pills-tab",role:"tablist"},l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link active",id:"pills-home-tab","data-toggle":"pill",href:"#all",role:"tab","aria-controls":"all","aria-selected":"true"},"All")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link",id:"pills-profile-tab","data-toggle":"pill",href:"#memorization",role:"tab","aria-controls":"memorization","aria-selected":"false"},"For memorization ",l.a.createElement("span",{class:"badge badge-primary badge-pill"},"101"))),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link",id:"pills-contact-tab","data-toggle":"pill",href:"#favorite",role:"tab","aria-controls":"favorite","aria-selected":"false"},"My favorite ",l.a.createElement("span",{class:"badge badge-primary badge-pill"},"0")))))))),l.a.createElement("div",{className:"row"},l.a.createElement(b,{isLoading:g,items:t}))))))},O=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"dashboard-wrapper"},l.a.createElement("div",{className:"container-fluid dashboard-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},l.a.createElement("div",{className:"page-header",id:"top"},l.a.createElement("h2",{className:"pageheader-title"},"\xa0 ")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},l.a.createElement("div",{className:"page-header",id:"top"},l.a.createElement("h2",{className:"pageheader-title text-center"},"About us ")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},l.a.createElement("h3",null,"Any suggestion or improvement please drop mail ",l.a.createElement("a",{href:"mailto:amit.naik8103@gmail.com"},"amit.naik8103@gmail.com"))))))))}}]),t}(c.Component),C=t(89),S=t.n(C),y=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e={color:"#F15B2A"};return l.a.createElement("nav",{className:"navbar navbar-expand-lg bg-white fixed-top"},l.a.createElement(o.c,{to:"/home",className:"navbar-brand"},"Bhagavad Gita"),l.a.createElement("img",{className:"img-fluid",src:S.a,alt:"card-img",height:20,width:40}),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse ",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ml-auto navbar-right-top"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.c,{to:"/",className:"nav-link",activestyle:e},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.c,{to:"/about",className:"nav-link",activestyle:e},"About")))))}}]),t}(c.Component),x=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"},"Copyright \xa9 ",(new Date).getFullYear()," ",l.a.createElement("a",{href:"http://codewithamit.com"},"Codewithamit.com")),l.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-right"},"Powered by Code with amit"))))}}]),t}(c.Component),j=function(){return l.a.createElement("h1",null,"Oops! Page not found")},w=t(31),_=t(9),A=t(53),k=t(26),D=t(30),P=t.n(D),T=t(35);function R(e){return L.apply(this,arguments)}function L(){return(L=Object(T.a)(P.a.mark((function e(a){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.ok){e.next=2;break}return e.abrupt("return",a.json());case 2:if(400!==a.status){e.next=7;break}return e.next=5,a.text();case 5:throw t=e.sent,new Error(t);case 7:throw new Error("Network response was not ok.");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){throw console.error("API call failed. "+e),e}var G=Object({NODE_ENV:"production",PUBLIC_URL:"/bhagavad-gita",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL+"/cards/";function U(){return function(e){return e({type:"BEGIN_API_CALL"}),fetch(G).then(R).catch(I).then((function(a){e(function(e){return{type:"LOAD_CARDS_SUCCESS",cards:e}}(a))})).catch((function(a){throw e({type:"API_CALL_ERROR"}),a}))}}function M(e){return function(a){return a(function(e){return{type:"DELETE_CARD_OPTIMISTIC",card:e}}(e)),t=e.id,fetch(G+t,{method:"DELETE"}).then(R).catch(I);var t}}var B=function(e){var a=e.name,t=e.label,c=e.onChange,n=e.placeholder,r=e.value,o=e.error,s="form-group";return o&&o.length>0&&(s+=" has-error"),l.a.createElement("div",{className:s},l.a.createElement("label",{htmlFor:a},t),l.a.createElement("div",{className:"field"},l.a.createElement("input",{type:"text",name:a,className:"form-control",placeholder:n,value:r,onChange:c}),o&&l.a.createElement("div",{className:"alert alert-danger"},o)))},F=t(91),q=t.n(F),W=(t(125),function(e){var a=e.card,t=e.onSave,n=e.onChange,r=e.saving,o=void 0!==r&&r,s=e.errors,i=void 0===s?{}:s,m=Object(c.useState)(),d=Object(p.a)(m,2),u=d[0],E=d[1];return Object(c.useEffect)((function(){a.expireDate=u}),[u]),l.a.createElement("form",{className:"dashboard-wrapper",onSubmit:t},l.a.createElement("div",{className:"container-fluid dashboard-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},l.a.createElement("div",{className:"page-header",id:"top"},l.a.createElement("h2",{className:"pageheader-title"},"\xa0 ")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},l.a.createElement("div",{className:"page-header",id:"top"},l.a.createElement("h2",{className:"pageheader-title"},a.id?"Edit":"Add"," Card")))),i.onSave&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},i.onSave),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-4"},l.a.createElement(B,{name:"name",label:"Title",value:a.name,onChange:n,error:i.name,placeholder:"Title"})),l.a.createElement("div",{className:"form-group col-md-4"},l.a.createElement(B,{name:"description",label:"Description",value:a.description,onChange:n,error:i.description,placeholder:"Description"})),l.a.createElement("div",{className:"form-group col-md-4"},l.a.createElement(B,{name:"url",label:"URL",value:a.url,onChange:n,error:i.url,placeholder:"URL"}))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-4"},l.a.createElement("label",{htmlFor:"iconSelect",className:"col-form-label text-nowrap"},"Display icon"),l.a.createElement("select",{id:"iconSelect",className:"form-control"},l.a.createElement("option",{value:"bookmark"},"bookmark"),l.a.createElement("option",{value:"bank"},"bank"),l.a.createElement("option",{value:"bullseye"},"bullseye"),l.a.createElement("option",{value:"cicle"},"cicle"),l.a.createElement("option",{value:"eur"},"eur"),l.a.createElement("option",{value:"money"},"money"),l.a.createElement("option",{value:"github"},"github"),l.a.createElement("option",{value:"windows"},"windows"))),l.a.createElement("div",{className:"form-group col-md-4"},l.a.createElement("label",{htmlFor:"groupBySelect",className:"col-form-label text-nowrap"},"Expire Date"),l.a.createElement("div",{style:{marginTop:0}},l.a.createElement(q.a,{selected:u,onChange:function(e){return E(e)},dateFormat:"dd-MMM-yyyy"})))),l.a.createElement("button",{type:"submit",disabled:o,className:"btn btn-primary"},o?"Saving...":"Save"))," ")," "),"  ")}),H=t(22),K={id:"",name:"",description:"",url:"",expireDate:""};var V={loadCards:U,saveCard:function(e){return function(a,t){return a({type:"BEGIN_API_CALL"}),function(e){return fetch(G+(e.id||""),{method:e.id?"PUT":"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(R).catch(I)}(e).then((function(t){e.id?a(function(e){return{type:"UPDATE_CARD_SUCCESS",card:e}}(t)):a(function(e){return{type:"CREATE_CARD_SUCCESS",card:e}}(t))})).catch((function(e){throw a({type:"API_CALL_ERROR"}),e}))}}},J=Object(k.b)((function(e,a){var t=a.match.params.id;return{card:t&&e.cards.length>0?function(e,a){return e.find((function(e){return e.id===a}))||null}(e.cards,t):K,cards:e.cards}}),V)((function(e){var a=e.cards,t=e.loadCards,n=e.saveCard,r=e.history,o=Object(A.a)(e,["cards","loadCards","saveCard","history"]),s=Object(c.useState)(Object(_.a)({},o.card)),i=Object(p.a)(s,2),m=i[0],d=i[1],u=Object(c.useState)({}),E=Object(p.a)(u,2),v=E[0],h=E[1],b=Object(c.useState)(!1),f=Object(p.a)(b,2),N=f[0],O=f[1];return Object(c.useEffect)((function(){0===a.length?t().catch((function(e){alert("Loading card failed"+e)})):d(Object(_.a)({},o.card))}),[o.card]),0===a.length?l.a.createElement(g,null):l.a.createElement(W,{card:m,errors:v,onChange:function(e){var a=e.target,t=a.name,c=a.value;d((function(e){return Object(_.a)(Object(_.a)({},e),{},Object(w.a)({},t,c))}))},onSave:function(e){e.preventDefault(),function(){var e=m.name,a=m.description,t=m.url,c={};return e||(c.name="Title is required."),a||(c.description="Description is required"),t||(c.url="URL is required"),h(c),0===Object.keys(c).length}()&&(O(!0),n(m).then((function(){H.b.success("Card saved."),r.push("/cards")})).catch((function(e){O(!1),h({onSave:e.message})})))},saving:N})})),z=t(13),X=t(11),Y=t.n(X),$=function(e){var a=e.cards;e.onDeleteClick;return l.a.createElement("div",{class:"card"},l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Expire date"),l.a.createElement("th",null))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.description),l.a.createElement("td",null,e.expireDate),l.a.createElement("td",null,l.a.createElement(o.c,{to:"/card/"+e.id,className:"btn btn-outline-primary"},"Edit")))})))))};$.prototype={cards:Y.a.array.isRequired,onDeleteClick:Y.a.func.isRequired};var Q=$,Z=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var c=arguments.length,l=new Array(c),n=0;n<c;n++)l[n]=arguments[n];return(e=a.call.apply(a,[this].concat(l))).state={redirectToAddCardPage:!1},e.handleDeleteCard=function(){var a=Object(T.a)(P.a.mark((function a(t){return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return H.b.success("Card deleted"),a.prev=1,a.next=4,e.props.actions.deleteCard(t);case 4:a.next=9;break;case 6:a.prev=6,a.t0=a.catch(1),H.b.error("Delete failed. "+a.t0.message,{autoClose:!1});case 9:case"end":return a.stop()}}),a,null,[[1,6]])})));return function(e){return a.apply(this,arguments)}}(),e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,a=e.cards,t=e.actions;0===a.length&&t.loadCards().catch((function(e){alert("Loading Cards failed"+e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"dashboard-wrapper"},l.a.createElement("div",{className:"container-fluid dashboard-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},l.a.createElement("div",{className:"page-header",id:"top"},l.a.createElement("h2",{className:"pageheader-title"},"\xa0 ")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},l.a.createElement("div",{className:"page-header",id:"top"},l.a.createElement("h2",{className:"pageheader-title"},"Cards ")))),this.state.redirectToAddCardPage&&l.a.createElement(s.a,{to:"/card"}),this.props.loading?l.a.createElement(g,null):l.a.createElement(l.a.Fragment,null," ",l.a.createElement("button",{style:{marginBottom:20},className:"btn btn-primary",onClick:function(){return e.setState({redirectToAddCardPage:!0})}},"Add Card"),l.a.createElement(Q,{onDeleteClick:this.handleDeleteCard,cards:this.props.cards}))))))}}]),t}(c.Component);var ee=Object(k.b)((function(e){return{cards:e.cards,loading:e.apiCallsInProgress>0}}),(function(e){return{actions:{loadCards:Object(z.b)(U,e),deleteCard:Object(z.b)(M,e)}}}))(Z),ae=(t(181),Object({NODE_ENV:"production",PUBLIC_URL:"/bhagavad-gita",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL+"/groups/");function te(){return function(e){return e({type:"BEGIN_API_CALL"}),fetch(ae).then(R).catch(I).then((function(a){e(function(e){return{type:"LOAD_GROUPS_SUCCESS",groups:e}}(a))})).catch((function(a){throw e({type:"API_CALL_ERROR"}),a}))}}function ce(e){return function(a){return a(function(e){return{type:"DELETE_GROUP_OPTIMISTIC",group:e}}(e)),t=e.id,fetch(ae+t,{method:"DELETE"}).then(R).catch(I);var t}}var le=function(e){var a=e.groups;e.onDeleteClick;return l.a.createElement("div",{class:"card"},l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Group name"),l.a.createElement("th",null,"Group description"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.description),l.a.createElement("td",null,e.isActive?"Active":"Not active"),l.a.createElement("td",null,l.a.createElement(o.c,{to:"/group/"+e.id,className:"btn btn-outline-primary"},"Edit")))})))))};le.prototype={groups:Y.a.array.isRequired,onDeleteClick:Y.a.func.isRequired};var ne=le,re=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var c=arguments.length,l=new Array(c),n=0;n<c;n++)l[n]=arguments[n];return(e=a.call.apply(a,[this].concat(l))).state={redirectToAddGroupPage:!1},e.handleDeleteGroup=function(){var a=Object(T.a)(P.a.mark((function a(t){return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return H.b.success("Group deleted"),a.prev=1,a.next=4,e.props.actions.deleteGroup(t);case 4:a.next=9;break;case 6:a.prev=6,a.t0=a.catch(1),H.b.error("Delete failed. "+a.t0.message,{autoClose:!1});case 9:case"end":return a.stop()}}),a,null,[[1,6]])})));return function(e){return a.apply(this,arguments)}}(),e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,a=e.groups,t=e.actions;0===a.length&&t.loadGroups().catch((function(e){alert("Loading groups failed"+e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"dashboard-wrapper"},l.a.createElement("div",{className:"container-fluid dashboard-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},l.a.createElement("div",{className:"page-header",id:"top"},l.a.createElement("h2",{className:"pageheader-title"},"\xa0 ")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},l.a.createElement("div",{className:"page-header",id:"top"},l.a.createElement("h2",{className:"pageheader-title"},"Groups ")))),this.state.redirectToAddGroupPage&&l.a.createElement(s.a,{to:"/group"}),this.props.loading?l.a.createElement(g,null):l.a.createElement(l.a.Fragment,null," ",l.a.createElement("button",{style:{marginBottom:20},className:"btn btn-primary add-group",onClick:function(){return e.setState({redirectToAddGroupPage:!0})}},"Add Group"),l.a.createElement(ne,{onDeleteClick:this.handleDeleteGroup,groups:this.props.groups}))))))}}]),t}(c.Component);var oe=Object(k.b)((function(e){return{groups:0===e.cards.length?[]:e.groups.map((function(a){return Object(_.a)(Object(_.a)({},a),{},{cardSelected:e.cards.find((function(e){return e.id===a.id}))})})),cards:e.cards,loading:e.apiCallsInProgress>0}}),(function(e){return{actions:{loadGroups:Object(z.b)(te,e),loadCards:Object(z.b)(U,e),deleteGroup:Object(z.b)(ce,e)}}}))(re),se=t(94),ie=function(e){var a=e.group,t=e.cards,n=e.onSave,r=e.onChange,o=e.saving,s=void 0!==o&&o,i=e.errors,m=void 0===i?{}:i,d=Object(c.useState)([{name:"Srigar",id:1},{name:"Sam",id:2}]),u=Object(p.a)(d,2);u[0],u[1];return l.a.createElement("form",{className:"dashboard-wrapper",onSubmit:n},l.a.createElement("div",{className:"container-fluid dashboard-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},l.a.createElement("div",{className:"page-header",id:"top"},l.a.createElement("h2",{className:"pageheader-title"},"\xa0 ")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},l.a.createElement("div",{className:"page-header",id:"top"},l.a.createElement("h2",{className:"pageheader-title"},a.id?"Edit":"Add"," Group")))),m.onSave&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},m.onSave),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-4"},l.a.createElement(B,{name:"name",label:"Name",value:a.name,onChange:r,error:m.name})),l.a.createElement("div",{className:"form-group col-md-4"},l.a.createElement(B,{name:"description",label:"Description",value:a.description,onChange:r,error:m.description})),l.a.createElement("div",{className:"form-group col-md-4"},l.a.createElement("label",{htmlFor:"iconSelect",className:"col-form-label text-nowrap",style:{paddingTop:0}},"Map card"),l.a.createElement(se.Multiselect,{id:"iconSelect",options:t,selectedValues:a.cardSelected,onSelect:function(e){var t=e.map((function(e){return e.id}));a.cards=t},displayValue:"name",showCheckbox:!0,closeIcon:"close",closeOnSelect:!1}))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-4"},l.a.createElement("input",{type:"checkbox",name:"isActive",value:a.isActive,id:"isActive",checked:!0,onChange:function(e){var a=e.target;"checkbox"===a.type?a.checked:a.value,a.name}}),l.a.createElement("label",{className:"form-check-label",htmlFor:"isActive"},"\xa0\xa0Active"))),l.a.createElement("button",{type:"submit",disabled:s,className:"btn btn-primary"},s?"Saving...":"Save"))," ")," "),"  ")},me={id:null,description:"",name:"",isActive:!0,cardSelected:[]};var de={loadGroups:te,loadCards:U,saveGroup:function(e){return function(a,t){return a({type:"BEGIN_API_CALL"}),function(e){return fetch(ae+(e.id||""),{method:e.id?"PUT":"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(R).catch(I)}(e).then((function(t){e.id?a(function(e){return{type:"UPDATE_GROUP_SUCCESS",group:e}}(t)):a(function(e){return{type:"CREATE_GROUP_SUCCESS",group:e}}(t))})).catch((function(e){throw a({type:"API_CALL_ERROR"}),e}))}}},ue=Object(k.b)((function(e,a){var t=a.match.params.id;return{group:t&&e.groups.length>0?function(e,a){return e.find((function(e){return e.id===a}))||null}(e.groups,t):me,groups:e.groups,cards:e.cards}}),de)((function(e){var a=e.groups,t=e.cards,n=e.loadCards,r=e.loadGroups,o=e.saveGroup,s=e.history,i=Object(A.a)(e,["groups","cards","loadCards","loadGroups","saveGroup","history"]),m=Object(c.useState)(Object(_.a)({},i.group)),d=Object(p.a)(m,2),u=d[0],E=d[1],v=Object(c.useState)({}),h=Object(p.a)(v,2),b=h[0],f=h[1],N=Object(c.useState)(!1),O=Object(p.a)(N,2),C=O[0],S=O[1];return Object(c.useEffect)((function(){0===a.length?r().catch((function(e){alert("Loading groups failed"+e)})):E(Object(_.a)({},i.group)),0===t.length&&n().catch((function(e){alert("Loading cards failed"+e)}))}),[i.group]),0===t.length||0===a.length?l.a.createElement(g,null):l.a.createElement(l.a.Fragment,null,l.a.createElement(ie,{group:u,errors:b,cards:t,onChange:function(e){var a=e.target,t=a.name,c=a.value;E((function(e){return Object(_.a)(Object(_.a)({},e),{},Object(w.a)({},t,c))}))},onSave:function(e){e.preventDefault(),function(){var e=u.name,a=u.description,t={};return e||(t.name="Group name is required."),a||(t.description="Group description is required"),f(t),0===Object.keys(t).length}()&&(S(!0),o(u).then((function(){H.b.success("Group saved."),s.push("/groups")})).catch((function(e){S(!1),f({onSave:e.message})})))},saving:C}))})),pe=function(){var e=Object(c.useState)([]),a=Object(p.a)(e,2),t=a[0],n=a[1],r=Object(c.useState)(!0),o=Object(p.a)(r,2);o[0],o[1],Object(s.g)().id;return Object(c.useEffect)((function(){fetch("data/db.json").then((function(e){return e.json()})).then((function(e){console.log(e),n(e.cards)}))}),[]),l.a.createElement("div",{className:"dashboard-wrapper"},l.a.createElement("div",{className:"container-fluid dashboard-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},l.a.createElement("div",{className:"page-header",id:"top"},l.a.createElement("h2",{className:"pageheader-title"},"\xa0 ")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},l.a.createElement("div",{className:"page-header",id:"top"},l.a.createElement("h2",{className:"pageheader-title text-center"},t.name)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3"},l.a.createElement("h3",{className:"text-center"}," \xa0 ")),l.a.createElement("div",{className:"col-xl-6  col-sm-6  col-lg-6 col-md-6 col-6 text-center"},l.a.createElement("h3",{className:"text-center"},t.description)),l.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3"},l.a.createElement("h3",{className:"text-center"}," \xa0 "))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},l.a.createElement("div",{className:"page-header",id:"top"},l.a.createElement("h3",{className:"pageheader-title text-center"}," ",l.a.createElement("u",null," Synonyms"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3"},l.a.createElement("h3",{className:"text-center"}," \xa0 ")),l.a.createElement("div",{className:"col-xl-6  col-sm-6  col-lg-6 col-md-6 col-6 text-center"},l.a.createElement("h3",{className:"text-center"},t.synonmys)),l.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3"},l.a.createElement("h3",{className:"text-center"}," \xa0 "))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},l.a.createElement("div",{className:"page-header",id:"top"},l.a.createElement("h3",{className:"pageheader-title text-center"}," ",l.a.createElement("u",null," Meaning"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3"},l.a.createElement("h3",{className:"text-center"}," \xa0 ")),l.a.createElement("div",{className:"col-xl-6  col-sm-6  col-lg-6 col-md-6 col-6 text-center"},l.a.createElement("h3",{className:"text-center"},t.meaning)),l.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3"},l.a.createElement("h3",{className:"text-center"}," \xa0 "))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-right"}),l.a.createElement("div",{className:"col-xl-6  col-sm-6  col-lg-6 col-md-6 col-6 text-center"},l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Previous")," ",l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Next")),l.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3"}))))))},Ee=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){/access_token|id_token|error/.test(this.props.location.hash)?this.props.auth.handleAuthentication():console.log("Invalid callback URL")}},{key:"render",value:function(){return l.a.createElement("h1",null,"Loading...")}}]),t}(c.Component),ve=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var c;return Object(i.a)(this,t),(c=a.call(this,e)).state={},c}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"dashboard-header "},l.a.createElement(y,null),l.a.createElement(o.b,{basename:"/bhagavad-gita"},l.a.createElement(s.d,null,l.a.createElement(s.b,{exact:!0,path:"/",component:N}),l.a.createElement(s.b,{path:"/callback",render:function(e){return l.a.createElement(Ee,e)}}),l.a.createElement(s.b,{exact:!0,path:"/about",component:O}),l.a.createElement(s.b,{exact:!0,path:"/groups",component:oe}),l.a.createElement(s.b,{exact:!0,path:"/group/:id",component:ue}),l.a.createElement(s.b,{exact:!0,path:"/group",component:ue}),l.a.createElement(s.b,{exact:!0,path:"/cards",component:ee}),l.a.createElement(s.b,{exact:!0,path:"/card/:id",component:J}),l.a.createElement(s.b,{exact:!0,path:"/card",component:J}),l.a.createElement(s.b,{exact:!0,path:"/cardview/:id",component:pe}),l.a.createElement(s.b,{exact:!0,component:j}))),l.a.createElement(x,null),l.a.createElement(H.a,{autoClose:3e3,hideProgressBar:!0}))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(182),t(183),t(184);var he=t(52),ge={groups:[],cards:[],apiCallsInProgress:0};function be(e){return"_SUCCESS"===e.substring(e.length-8)}var fe=Object(z.c)({groups:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge.groups,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CREATE_GROUP_SUCCESS":return[].concat(Object(he.a)(e),[Object(_.a)({},a.group)]);case"UPDATE_GROUP_SUCCESS":return e.map((function(e){return e.id===a.group.id?a.group:e}));case"LOAD_GROUPS_SUCCESS":return a.groups;case"DELETE_GROUP_OPTIMISTIC":return e.filter((function(e){return e.id!==a.group.id}));default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge.cards,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CREATE_CARD_SUCCESS":return[].concat(Object(he.a)(e),[Object(_.a)({},a.card)]);case"UPDATE_CARD_SUCCESS":return e.map((function(e){return e.id===a.card.id?a.card:e}));case"LOAD_CARDS_SUCCESS":return a.cards;case"DELETE_CARD_OPTIMISTIC":return e.filter((function(e){return e.id!==a.card.id}));default:return e}},apiCallsInProgress:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge.apiCallsInProgress,a=arguments.length>1?arguments[1]:void 0;return"BEGIN_API_CALL"===a.type?e+1:"API_CALL_ERROR"===a.type||be(a.type)?e-1:e}}),Ne=t(95),Oe=t.n(Ne),Ce=t(96);var Se=function(e){var a=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.d;return Object(z.e)(fe,e,a(Object(z.a)(Ce.a,Oe()())))}();r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k.a,{store:Se},l.a.createElement(o.a,null,l.a.createElement(s.b,{component:ve})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,a,t){e.exports=t.p+"static/media/card-img.8d4ab8ea.jpg"},89:function(e,a,t){e.exports=t.p+"static/media/logo3.42e252b2.png"},97:function(e,a,t){e.exports=t(189)}},[[97,1,2]]]);
//# sourceMappingURL=main.8decadd2.chunk.js.map