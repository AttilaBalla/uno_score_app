(this.webpackJsonpuno_score_app=this.webpackJsonpuno_score_app||[]).push([[0],{154:function(e,t,a){e.exports=a(287)},159:function(e,t,a){},160:function(e,t,a){},287:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),c=a.n(l),o=(a(159),a(160),a(296)),i=a(299),s=a(15),u=a(90),m=a(303),d=a(36),p=a(293),E=a(288),h=a(71),b=a(146),f=a(302),y=function(e){return!isNaN(e)&&parseInt(e)>=0},v=a(87),g=a(12),O="ADD_PLAYER",w="REMOVE_PLAYER",j="ADD_POINTS",C="UPDATE_SETTINGS",P="CLEAR_POINTS",x="CLEAR_DATA",k={maxPoints:500,cardsPerRow:2,players:[{id:0,name:"Atti",points:[12,34,0,143]},{id:1,name:"Ol\xedvia",points:[]}]},R=Object(n.createContext)(k),S=R.Provider,A=function(e){var t=e.children,a=Object(n.useReducer)((function(e,t){switch(t.type){case O:return Object(g.a)(Object(g.a)({},e),{},{players:[].concat(Object(h.a)(e.players),[t.data])});case w:return D(e,t.data.id);case j:return I(e,t.data);case C:return Object(g.a)(Object(g.a)({},e),{},{cardsPerRow:t.data.cardsPerRow,maxPoints:t.data.maxPoints});case P:return N(e);case x:return T(e);default:throw new Error("The GameManager doesn't know what to do with this action: ".concat(t.type))}}),k),l=Object(s.a)(a,2),c=l[0],o=l[1];return r.a.createElement(S,{value:{state:c,dispatch:o}},t)},D=function(e,t){var a=e.players.filter((function(e,a,n){return e.id!==t}));return Object(g.a)(Object(g.a)({},e),{},{players:a})},I=function(e,t){var a,n=t.id,r=t.points,l=e.players,c=Object(v.a)(l);try{for(c.s();!(a=c.n()).done;){var o=a.value;o.id===n&&(o.points=r)}}catch(i){c.e(i)}finally{c.f()}return Object(g.a)(Object(g.a)({},e),{},{players:l})},N=function(e){var t,a=e.players,n=Object(v.a)(a);try{for(n.s();!(t=n.n()).done;){t.value.points=[]}}catch(r){n.e(r)}finally{n.f()}return Object(g.a)(Object(g.a)({},e),{},{players:a})},T=function(e){return Object(g.a)(Object(g.a)({},e),{},{players:[]})},_=a(298),L=function(e){var t=e.index,a=e.value;return r.a.createElement("div",{className:0===a?"points-item zero":"points-item"},r.a.createElement("div",null,t,"."),r.a.createElement("b",null,0===a?r.a.createElement(d.a,{name:"gem"}):a))},M=function(e){var t=e.index,a=e.value;return r.a.createElement(_.a,{trigger:r.a.createElement(L,{index:t,value:a}),header:"Reminder!",content:"Call Benjamin regarding the reports.",actions:["Snooze",{key:"done",content:"Done",positive:!0}]})},z=function(e){var t=e.playerData,a=Object(n.useContext)(R).dispatch,l=Object(n.useState)(""),c=Object(s.a)(l,2),o=c[0],i=c[1],m=function(){a({type:w,data:{id:t.id}})};return r.a.createElement(b.a,{celled:!0,stackable:!0},r.a.createElement(b.a.Row,null,r.a.createElement(b.a.Column,{width:3},r.a.createElement("h2",null,t.name),r.a.createElement(f.a,null,r.a.createElement(f.a.Value,null,t.points.reduce((function(e,t){return e+t}),0)),r.a.createElement(f.a.Label,null,"Points"))),r.a.createElement(b.a.Column,{width:13},r.a.createElement(b.a,{stackable:!0},r.a.createElement(b.a.Row,null,r.a.createElement(b.a.Column,null,r.a.createElement(u.a,{basic:!0},0===t.points.length?r.a.createElement("span",null,"points will be shown here..."):null,t.points.map((function(e,t){return r.a.createElement(M,{key:t,index:t+1,value:e})}))))),r.a.createElement(b.a.Row,null,r.a.createElement(b.a.Column,{width:14},r.a.createElement(p.a,{onChange:function(e){i(e.target.value)},value:o,size:"mini",placeholder:"add points...",labelPosition:"right",label:r.a.createElement(E.a,{icon:!0,primary:!0,onClick:function(){y(o)&&(a({type:j,data:{id:t.id,points:[].concat(Object(h.a)(t.points),[parseInt(o)])}}),i(""))}},r.a.createElement(d.a,{name:"add"}))})),r.a.createElement(b.a.Column,{width:1},r.a.createElement(E.a,{icon:!0,onClick:m},r.a.createElement(d.a,{name:"edit"}))),r.a.createElement(b.a.Column,{width:1},r.a.createElement(E.a,{icon:!0,onClick:m},r.a.createElement(d.a,{name:"trash"}))))))))},B=function(){var e=Object(n.useContext)(R),t=e.dispatch,a=Object(n.useState)(""),l=Object(s.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)(e.state.players.length),h=Object(s.a)(i,2),b=h[0],f=h[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{onChange:function(e){o(e.target.value)},value:c,label:r.a.createElement(E.a,{icon:!0,color:"green",onClick:function(){c.trim().length>2&&(t({type:O,data:{id:b,name:c,points:[]}}),f(b+1),o(""))}},r.a.createElement(d.a,{name:"add"})),labelPosition:"right",placeholder:"add player..."}),e.state.players.length>0?e.state.players.map((function(e,t){return r.a.createElement(z,{key:t,playerData:e})})):r.a.createElement(u.a,{placeholder:!0},r.a.createElement(m.a,{icon:!0},r.a.createElement(d.a,{name:"user"}),"No players have been added yet.")))},Y=a(294),F={type:"success",text:"Your changes have been applied successfully."},G={type:"error",text:"The values can be positive numbers only!"},J=a(300),U=a(301),V=function(e){var t,a,n=e.type,l=e.text;if(""===l)return null;switch(n){case"error":t="red",a="exclamation triangle";break;case"success":t="green",a="check";break;default:t="blue",a="info"}return r.a.createElement(J.a,{animation:"fade",duration:750},r.a.createElement(U.a,{attached:!0,color:t},r.a.createElement(d.a,{name:a}),l))},W=function(){var e=Object(n.useContext)(R),t=e.dispatch,a=e.state,l=a.maxPoints,c=a.cardsPerRow,o=Object(n.useState)(l),i=Object(s.a)(o,2),h=i[0],b=i[1],f=Object(n.useState)(c),v=Object(s.a)(f,2),g=v[0],O=v[1],w=Object(n.useState)({type:"",text:""}),j=Object(s.a)(w,2),k=j[0],S=j[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{as:"h4",attached:"top",block:!0},"Settings"),r.a.createElement(V,{type:k.type,text:k.text}),r.a.createElement(u.a,{attached:!0},r.a.createElement("p",null,"Affects how long the games last."),r.a.createElement("div",{className:"limited-width"},r.a.createElement(p.a,{fluid:!0,type:"text",label:"Max Points",value:h,onChange:function(e){b(e.target.value)}})),r.a.createElement(Y.a,null),r.a.createElement("p",null,"Controls how many cards should be shown in a single row on the summary page."),r.a.createElement("div",{className:"limited-width"},r.a.createElement(p.a,{fluid:!0,type:"text",label:"Cards Per Row",value:g,onChange:function(e){O(e.target.value)}})),r.a.createElement(Y.a,null),r.a.createElement(E.a,{icon:!0,color:"blue",labelPosition:"left",onClick:function(){y(h)&&y(g)?(t({type:C,data:{cardsPerRow:parseInt(g),maxPoints:parseInt(h)}}),S(F)):S(G),setTimeout((function(){S({type:"",text:""})}),3e3)}},r.a.createElement(d.a,{name:"check"}),"Apply Changes")),r.a.createElement(u.a,{raised:!0,color:"orange"},r.a.createElement("p",null,"Clears points for all players. This cannot be undone!"),r.a.createElement(E.a,{icon:!0,color:"orange",labelPosition:"left",onClick:function(){t({type:P})}},r.a.createElement(d.a,{name:"trash"}),"Clear points")),r.a.createElement(u.a,{raised:!0,color:"red"},r.a.createElement("p",null,"Clears all data from the current session. This cannot be undone!"),r.a.createElement(E.a,{icon:!0,color:"red",labelPosition:"left",onClick:function(){t({type:x})}},r.a.createElement(d.a,{name:"trash"}),"Clear all data")))},H=a(144),$=a(295),q={0:"green",25:"olive",50:"yellow",75:"orange",100:"red"},K=function(e,t){var a=Math.pow(10,t||0);return Math.round(e*a)/a},Q=function(e){var t=e.playerData,a=e.pointLimit,n=t.points.reduce((function(e,t){return e+t}),0),l=n/a*100,c=function(e){for(var t="green",a=0,n=Object.keys(q);a<n.length;a++){var r=n[a];e>r&&(t=q[r])}return t}(l);return r.a.createElement(H.a,null,r.a.createElement(H.a.Content,null,r.a.createElement(H.a.Header,null,t.name),r.a.createElement(f.a,{label:"points",value:t.points.reduce((function(e,t){return e+t}),0)}),r.a.createElement(H.a.Description,null,r.a.createElement($.a,{color:c,label:K(l,1)+"%",value:n,total:a}))))},X=a(140),Z=function(){var e=Object(n.useContext)(R);return r.a.createElement(X.a,{itemsPerRow:e.state.cardsPerRow},e.state.players.map((function(t,a){return r.a.createElement(Q,{key:a,playerData:t,pointLimit:e.state.maxPoints})})))},ee=[{menuItem:"Summary",pane:{content:r.a.createElement(Z,null)}},{menuItem:"Player Data",pane:{content:r.a.createElement(B,null)}},{menuItem:"Settings",pane:{content:r.a.createElement(W,null)}}],te=function(){return r.a.createElement(i.a,{panes:ee,renderActiveOnly:!1})};var ae=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement("h2",{id:"app-title"},"UNO Score App"),r.a.createElement(te,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null,r.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[154,1,2]]]);
//# sourceMappingURL=main.3f731ae9.chunk.js.map