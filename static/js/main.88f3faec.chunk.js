(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),l=(n(14),n(1)),o=n(2),u=n(4),s=n(3),m=n(5),d=(n(16),n(18),n(20),function(e){return r.a.createElement("div",{className:"TicketWrapper",key:!0},r.a.createElement("div",{className:"ActionRow"},r.a.createElement("img",{src:"",alt:""}),r.a.createElement("button",{onClick:e.click},"\u041a\u0443\u043f\u0438\u0442\u044c \u0437\u0430 ",e.price),r.a.createElement("div",null,"click ",e.clickCounter)),r.a.createElement("div",{className:"TicketInfoRow"},r.a.createElement("div",{className:"From"},r.a.createElement("h2",null,e.departure_time),r.a.createElement("h3",null,e.origin,", ",e.origin_name),r.a.createElement("p",null,"\u041f\u043e\u0441\u0430\u0434\u043a\u0430: ",e.departure_date)),r.a.createElement("div",{className:"PLANE"},r.a.createElement("div",null,"\u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438 ",e.stops)),r.a.createElement("div",{className:"Where"},r.a.createElement("h2",null,e.arrival_time),r.a.createElement("h3",null,e.destination_name,", ",e.destination),r.a.createElement("p",null,"\u0412\u044b\u0441\u0430\u0434\u043a\u0430: ",e.arrival_date))))}),p=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={tickets:[]},n.clickHandler=function(e){var t=n.state.tickets;t.forEach(function(t,n){n===e&&(t.clickCounter=t.clickCounter+1)}),n.setState({tickets:t})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("/data/tickets.json").then(function(e){return e.json()}).then(function(t){console.log("data",t),e.setState({tickets:t.tickets})}).catch(function(e){return console.log("error",e)})}},{key:"render",value:function(){var e=this,t=this.state,n=t.tickets,a=(t.click,n.map(function(t,n){return r.a.createElement(d,{click:function(){return e.clickHandler(n)},clickCounter:t.clickCounter,key:n,price:t.price,departure_time:t.departure_time,origin:t.origin,origin_name:t.origin_name,departure_date:t.departure_date,stops:t.stops,arrival_time:t.arrival_time,destination_name:t.destination_name,destination:t.destination,arrival_date:t.arrival_date})}));return r.a.createElement("div",null,a)}}]),t}(r.a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,"ico"),r.a.createElement("div",null,"Sort controlls"),r.a.createElement("div",null,r.a.createElement(p,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(22)}},[[8,2,1]]]);
//# sourceMappingURL=main.88f3faec.chunk.js.map