(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports={container:"Page_container__1D7sd",title:"Page_title__1nPMM",link:"Page_link__1XPas",button:"Page_button__ZuEiA",hour:"Page_hour__i_Tga",amount:"Page_amount__1hFIk"}},16:function(e,t,a){e.exports={container:"Default_container__bnkX6",text:"Default_text__xSAez",button:"Default_button__25b99",disable:"Default_disable__1kL8S"}},2:function(e,t,a){e.exports={main:"Results_main__1JASj",articles:"Results_articles__p4JyB",title:"Results_title__2Ttx4",link:"Results_link__UH-gB",private:"Results_private__2COTd",input:"Results_input__3hTBa",main2:"Results_main2__2JSmz",left:"Results_left__2rPsA",ldsdefault:"Results_ldsdefault__38MwW",loading:"Results_loading__cEwap",loadcontainer:"Results_loadcontainer__eJ6_M"}},30:function(e,t,a){e.exports=a(50)},35:function(e,t,a){},36:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(26),c=a.n(r),i=(a(35),a(13)),o=(a(36),a(8)),l=a(9),u=a(11),m=a(10),h=a(12),p=a(7),d=a(6),f=a.n(d),v=a(19),_=a.n(v),E=(a(42),a(24),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChangeMonths=function(e){a.setState({months:e}),1==e?a.setState({m:""}):a.setState({m:"s"}),console.log(a.state.months)},a.handleChange=function(e){a.setState({value:e}),1==e?a.setState({s:""}):a.setState({s:"s"})},a.state={inputValue:"",value:10,months:6,disabled:!0,s:"s",m:"s"},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){fetch("https://ancient-dusk-43980.herokuapp.com/440/news").then(function(e){return e.json()}).then(function(e){console.log(e)})}},{key:"updateInputValue",value:function(e){17===e.target.value.length?this.setState({disabled:!1}):this.setState({disabled:!0}),this.setState({inputValue:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state,a=t.value,n=t.months;return s.a.createElement("div",{className:f.a.container},s.a.createElement("div",{className:f.a.title},s.a.createElement("div",{className:f.a.header},"Steam News Generator"),s.a.createElement("div",{className:f.a.subheader},"Recent news within ",s.a.createElement("span",{className:f.a.amount},n)," month",this.state.m," for your most recent and favorite games!")),s.a.createElement("div",{className:f.a.main},s.a.createElement("input",{className:f.a.input,type:"search",value:this.state.inputValue,onChange:function(t){return e.updateInputValue(t)},placeholder:"Enter 17 digit steam ID"}),s.a.createElement("div",{className:"slider"},s.a.createElement(_.a,{min:1,max:100,value:a,onChange:this.handleChange}),s.a.createElement("div",{className:"slider"},s.a.createElement(_.a,{min:1,max:12,step:1,value:n,onChange:this.handleChangeMonths}),s.a.createElement("div",{className:"value"},a),s.a.createElement(p.b,{style:{textDecoration:"none"},className:f.a.link,to:"/".concat(this.state.inputValue,"/").concat(this.state.value,"/").concat(this.state.months)},s.a.createElement("button",{disabled:this.state.disabled,className:f.a.button},"Search games above ",s.a.createElement("span",{className:f.a.hour},a)," hour",this.state.s)," ")))))}}]),t}(n.Component)),g=a(21),b=a.n(g),k=a(29),y=a(2),N=a.n(y),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={articles:[],isDone:!1,search:"",name:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=function(){var t=Object(k.a)(b.a.mark(function t(){var a,n,s,r;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(){return fetch("https://ancient-dusk-43980.herokuapp.com/".concat(e.props.steamID)).then(function(e){return e.json()}).then(function(t){var a=[];(t=t.response).hasOwnProperty("games")&&t.games.forEach(function(t){t.playtime_forever>60*e.props.value&&a.push(t.appid)});return a})},n=function(){return fetch("https://ancient-dusk-43980.herokuapp.com/".concat(e.props.steamID,"/recent")).then(function(e){return e.json()}).then(function(e){var t=[];(e=e.response).hasOwnProperty("games")&&e.games.forEach(function(e){t.push(e.appid)});return t})},s=[],t.next=5,Promise.all([a(),n()]).then(function(e){for(var t=0;t<2;t++)e[t].forEach(function(e){s.push(e)});return s=s.filter(function(e,t,a){return a.indexOf(e)===t})});case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),a=[],n=[];t().then(function(t){var s=fetch("https://ancient-dusk-43980.herokuapp.com/".concat(e.props.steamID,"/gamelist")).then(function(e){return e.json()}).then(function(e){return e.applist.apps.forEach(function(e){var t={appid:e.appid,name:e.name};n.push(t)}),n}),r=t.map(function(e){return fetch("https://ancient-dusk-43980.herokuapp.com/".concat(e,"/news")).then(function(e){return e.json()}).then(function(e){return e.appnews.newsitems.forEach(function(e){a.push(e)}),e})});s.then(function(t){Promise.all(r).then(function(t){a.sort(function(e,t){return t.date-e.date}),n.map(function(e){a.map(function(t){t.appid==e.appid&&(t.feedname=e.name)})}),a.forEach(function(e){""==e.author&&(e.author="In article")});var s=a;a.forEach(function(e,t){s.forEach(function(n,s){e.title==n.title&&a.splice(t,1)})});var r=[];a.forEach(function(t){var a=Math.round((new Date).getTime()/1e3);a-=2582e3*e.props.months,t.date>a&&r.push(t)}),r.forEach(function(e){e.date=new Date(1e3*e.date).toString().substring(0,15)}),e.setState({articles:r,isDone:!0})})})})}},{key:"updateSearch",value:function(e){this.setState({search:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.articles.filter(function(t){return-1!==t.feedname.toLowerCase().indexOf(e.state.search.toLowerCase())});return s.a.createElement("div",null,s.a.createElement("input",{type:"text",className:N.a.input,placeholder:"Filter games",value:this.state.search,onChange:function(t){return e.updateSearch(t)}}),s.a.createElement("div",{className:N.a.main},0===this.state.articles.length&&!1===this.state.isDone?s.a.createElement("div",{className:N.a.loadcontainer},s.a.createElement("div",{className:N.a.ldsdefault},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null)),s.a.createElement("div",{className:N.a.loading},"Loading your articles...")):0===this.state.articles.length&&!0===this.state.isDone?s.a.createElement("div",{className:N.a.private},"Unable to retrieve data from server. Check"," ",s.a.createElement("span",null,s.a.createElement("a",{className:N.a.settings,style:{textDecoration:"none",color:"grey"},href:"https://steamcommunity.com/my/edit/settings"},"here"))," ","to make sure your profile settings are public or try a different steam ID."):t.map(function(e,t){return s.a.createElement("div",{key:t,onClick:function(){return window.open("".concat(e.url),"_blank")},className:N.a.articles},s.a.createElement("div",{className:N.a.title},e.title),s.a.createElement("div",{classes:N.a.main2},s.a.createElement("div",{className:N.a.left},s.a.createElement("div",{className:N.a.appid},"Game: ",e.feedname),s.a.createElement("div",{className:N.a.autor},"Author: ",e.author),s.a.createElement("div",{className:N.a.feed},"Feed: ",e.feedlabel),s.a.createElement("div",{className:N.a.date},"Date: ",e.date),s.a.createElement("div",{className:N.a.link},"Click for full article")),s.a.createElement("img",{src:"https://steamcdn-a.akamaihd.net/steam/apps/".concat(e.appid,"/header.jpg"),alt:"Image of ".concat(e.feedname," couldn't load")})))})))}}]),t}(n.Component),j=a(14),O=a.n(j),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={s:"s",m:"s"},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://ancient-dusk-43980.herokuapp.com/".concat(e.props.match.params.id,"/name")).then(function(e){return e.json()}).then(function(e){return e}).then(function(t){e.setState({name:t.response.players[0].personaname})}),this.props.location.pathname.endsWith("/1")&&this.setState({m:""}),this.props.location.pathname.includes("/1/")&&this.setState({s:""})}},{key:"render",value:function(){var e=this.props.location.pathname.split("/");return s.a.createElement("div",{className:O.a.container},s.a.createElement("div",{className:O.a.title},"Hey ",s.a.createElement("span",{style:{color:"#3a9dd7"}},this.state.name),", here's news within the past"," ",s.a.createElement("span",{className:O.a.amount},e[3])," month",this.state.m," for games you've played recently, as well as games you've played for more than"," ",s.a.createElement("span",{className:O.a.hour},e[2])," hour",this.state.s,". If the list is smaller than you think, check your steam privacy settings!"),s.a.createElement(p.b,{style:{textDecoration:"none"},className:O.a.link,to:"/"},s.a.createElement("div",{className:O.a.button},"New Search")," "),s.a.createElement(w,{steamID:e[1],value:e[2],months:e[3]}))}}]),t}(n.Component),x=a(16),D=a.n(x),C=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:D.a.container},s.a.createElement("h1",null,"error"),s.a.createElement("h2",null,"page not found"),s.a.createElement("h3",null,"the requested URL ",s.a.createElement("span",{className:D.a.text},this.props.location.pathname)," was not found"),s.a.createElement(p.b,{style:{textDecoration:"none"},className:D.a.link,to:"/"},s.a.createElement("div",{className:D.a.button},"Click here to go back")," "))}}]),t}(n.Component);var R=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(i.c,null,s.a.createElement(i.a,{path:"/",exact:!0,component:E}),s.a.createElement(i.a,{path:"/:id/:value/:months",exact:!0,component:S}),s.a.createElement(i.a,{component:C})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(p.a,{basename:"/SteamApp"},s.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,a){e.exports={container:"Landing_container__3cFkZ",main:"Landing_main__TO3Of",input:"Landing_input__FKYRR",button:"Landing_button__3Jkyp",title:"Landing_title__3Fy2R",header:"Landing_header__3OomK",subheader:"Landing_subheader__2vVjk",hour:"Landing_hour__1xuB_",amount:"Landing_amount__1JcXb",conatiner:"Landing_conatiner__2kdFI"}}},[[30,1,2]]]);
//# sourceMappingURL=main.db4562db.chunk.js.map