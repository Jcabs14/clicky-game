(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Beast","image":"/images/beast.jpg","isClicked":false},{"id":2,"name":"Captain America","image":"/images/captain-america.jpg","isClicked":false},{"id":3,"name":"Ghost Rider","image":"/images/ghostrider.jpg","isClicked":false},{"id":4,"name":"Hulk","image":"/images/hulk.jpg","isClicked":false},{"id":5,"name":"Iron Man","image":"/images/ironman.jpg","isClicked":false},{"id":6,"name":"Loki","image":"/images/loki.jpg","isClicked":false},{"id":7,"name":"Magneto","image":"/images/magneto.jpg","isClicked":false},{"id":8,"name":"Moon Knight","image":"/images/moonknight.jpg","isClicked":false},{"id":9,"name":"Red Skull","image":"/images/red-skull.jpg","isClicked":false},{"id":10,"name":"Spiderman","image":"/images/spiderman.jpg","isClicked":false},{"id":11,"name":"Thor","image":"/images/thor.jpg","isClicked":false},{"id":12,"name":"Wolverine","image":"/images/wolverine.jpg","isClicked":false}]')},,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),i=t.n(r),n=t(2),c=t.n(n),s=(t(15),t(3)),o=t(4),l=t(5),m=t(8),d=t(6),u=t(9);t(16),t(17);var g=function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.click(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))},h=t(7);t(18);var f=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};t(19);var p=function(e){return i.a.createElement("header",null,i.a.createElement("img",{className:"imgHeader",alt:"header",src:"/images/header.jpg"}),i.a.createElement("div",{className:"score"},"Score: ",e.score),i.a.createElement("div",{className:"hiScore"},"Hi Score: ",e.hiScore))};function k(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?k(t,!0).forEach((function(a){Object(s.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var v=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={characters:h,score:0,hiScore:0},t.randomize=function(e){for(var a=e.length-1;a>0;){var t=Math.floor(Math.random()*(a+1)),r=e[a];e[a]=e[t],e[t]=r,a--}return e},t.reset=function(e){var a=e.map((function(e){return j({},e,{isClicked:!1})}));return t.randomize(a)},t.handleCorrectGuess=function(e){var a=t.state,r=a.hiScore,i=a.score+1,n=Math.max(i,r);t.setState({characters:t.randomize(e),score:i,hiScore:n})},t.handleIncorrectGuess=function(e){t.setState({characters:t.reset(e),score:0}),alert("You clicked the same image! Game over try again!")},t.click=function(e){var a=!1,r=t.state.characters.map((function(t){var r=j({},t);return r.id===e&&(r.clicked||(r.clicked=!0,a=!0)),r}));a?t.handleCorrectGuess(r):t.handleIncorrectGuess(r)},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({characters:this.randomize(this.state.characters)})}},{key:"render",value:function(){var e=this;return i.a.createElement(f,null,i.a.createElement(p,{score:this.state.score,hiScore:this.state.hiScore}),this.state.characters.map((function(a){return i.a.createElement(g,{key:a.id,id:a.id,name:a.name,image:a.image,click:e.click})})))}}]),a}(r.Component);c.a.render(i.a.createElement(v,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.ffb97a1f.chunk.js.map