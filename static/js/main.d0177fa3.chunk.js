(this.webpackJsonpbeer=this.webpackJsonpbeer||[]).push([[0],{23:function(n,e,t){},27:function(n,e,t){"use strict";t.r(e);var i,c,a,r,o,s,b,j,d,l,x,u,p,h,O,f=t(0),v=t.n(f),g=t(15),m=t.n(g),w=t(7),k=(t(23),t(2)),_=t(3),y=t(4),z=y.a.header(i||(i=Object(_.a)(["\n  position: fixed;\n  width: 100vw;\n  height: 90px;\n  background-color: black;\n  color: white;\n  font-size: 24px;\n  z-index: 1;\n"]))),A=y.a.div(c||(c=Object(_.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 55px;\n"]))),Z=y.a.section(a||(a=Object(_.a)(["\n  position: relative;\n  height: 35px;\n  background-color: gray;\n  box-shadow: 0px 17px 15px -5px rgba(0, 0, 0, 0.26);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  & > a {\n    font-size: 16px;\n    margin-left: 35px;\n    color: white;\n    text-decoration: none;\n    transition: color linear 0.2s;\n    &:hover {\n      color: black;\n    }\n  }\n"]))),C=t(1),E=function(){return Object(C.jsxs)(z,{children:[Object(C.jsx)(A,{children:"PUNK BEER"}),Object(C.jsxs)(Z,{children:[Object(C.jsx)(w.b,{to:"/",children:"All bear"}),Object(C.jsx)(w.b,{to:"/pizza_combo",children:"Combo with pizza"}),Object(C.jsx)(w.b,{to:"/steak_combo",children:" Combo with steak"})]})]})},S=t(9),F=t(5),B=y.a.div(r||(r=Object(_.a)(["\n  box-sizing: border-box;\n  width: 300px;\n  height: 430px;\n  text-align: center;\n  margin: 25px;\n  border-radius: 25px;\n  background-color: #f1f3f4;\n  transition: box-shadow 0.2s linear;\n  & > img {\n    position: relative;\n    width: 90px;\n    height: 300px;\n  }\n  &:hover {\n    box-shadow: 0px 5px 33px -3px rgba(34, 60, 80, 0.54);\n  }\n"]))),P=y.a.div(o||(o=Object(_.a)(["\n  width: 300px;\n  margin: 25px;\n"]))),T=y.a.div(s||(s=Object(_.a)(["\n  text-align: center;\n  height: fit-content;\n  background-color: gray;\n  color: white;\n  font-size: 14px;\n  padding: 3px 10px;\n"]))),I=y.a.p(b||(b=Object(_.a)(["\n  position: relative;\n  width: fit-content;\n  left: 210px;\n  margin: 0;\n"]))),J=y.a.div(j||(j=Object(_.a)(["\n  display: flex;\n  justify-content: center;\n  & > a {\n    display: block;\n    width: fit-content;\n    margin-top: 10px;\n    color: black;\n    text-decoration: none;\n    font-weight: bold;\n    transition: color linear 0.1s;\n    &:hover {\n      color: #e15656;\n    }\n  }\n"]))),L=function(n){var e=n.name,t=n.image_url,i=n.abv,c=n.id;return Object(C.jsx)("div",{children:Object(C.jsxs)(B,{children:[Object(C.jsx)(T,{children:Object(C.jsx)("p",{children:e})}),Object(C.jsxs)(I,{children:[i,"% abv"]}),Object(C.jsx)("img",{src:t,alt:e}),Object(C.jsx)(J,{children:Object(C.jsx)(w.b,{to:"/beer_details/".concat(c),children:"About..."})})]})})},D=y.a.section(d||(d=Object(_.a)(["\n  display: flex;\n  position: relative;\n  top: 115px;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 0 35px;\n"]))),G=y.a.select(l||(l=Object(_.a)(["\n  display: block;\n  position: relative;\n  top: 115px;\n  left: 60px;\n  width: 300px;\n  height: fit-content;\n  padding: 10px;\n  border-radius: 10px;\n  border: 1px solid black;\n  text-align: center;\n  background-color: #80808052;\n  font-size: 14px;\n"]))),K=function(){var n=Object(f.useState)([]),e=Object(F.a)(n,2),t=e[0],i=e[1];Object(f.useEffect)((function(){fetch("https://api.punkapi.com/v2/beers?per_page=80").then((function(n){return n.json()})).then((function(n){return i(n)}))}),[]);return Object(C.jsxs)("div",{children:[Object(C.jsxs)(G,{onChange:function(n){var e=n.target.value,c=Object(S.a)(t);"A-Z"===e?c.sort((function(n,e){return n.name<e.name?-1:n.name>e.name?1:0})):"Z-A"===e?c.sort((function(n,e){return n.name>e.name?-1:n.name<e.name?1:0})):"abv ascending"===e?c.sort((function(n,e){return n.abv<e.abv?-1:n.abv>e.abv?1:0})):"abv descending"===e?c.sort((function(n,e){return n.abv>e.abv?-1:n.abve<e.abv?1:0})):"default sort"===e&&c.sort((function(n,e){return n.id<e.id?-1:n.id>e.id?1:0})),i(c)},children:[Object(C.jsx)("option",{children:"default sort"}),Object(C.jsx)("option",{children:"A-Z"}),Object(C.jsx)("option",{children:"Z-A"}),Object(C.jsx)("option",{children:"abv ascending"}),Object(C.jsx)("option",{children:"abv descending"})]}),Object(C.jsxs)(D,{children:[t.map((function(n){var e=n.name,t=n.image_url,i=n.id,c=n.abv;return Object(C.jsx)(L,{name:e,image_url:t,abv:c,id:i},i)})),Object(C.jsx)(P,{}),Object(C.jsx)(P,{}),Object(C.jsx)(P,{})]})]})},M=function(){var n=Object(f.useState)([]),e=Object(F.a)(n,2),t=e[0],i=e[1];Object(f.useEffect)((function(){fetch("https://api.punkapi.com/v2/beers?food=pizza").then((function(n){return n.json()})).then((function(n){return i(n)}))}),[]);return Object(C.jsxs)("div",{children:[Object(C.jsxs)(G,{onChange:function(n){var e=n.target.value,c=Object(S.a)(t);"A-Z"===e?c.sort((function(n,e){return n.name<e.name?-1:n.name>e.name?1:0})):"Z-A"===e?c.sort((function(n,e){return n.name>e.name?-1:n.name<e.name?1:0})):"abv ascending"===e?c.sort((function(n,e){return n.abv<e.abv?-1:n.abv>e.abv?1:0})):"abv descending"===e?c.sort((function(n,e){return n.abv>e.abv?-1:n.abve<e.abv?1:0})):"default sort"===e&&c.sort((function(n,e){return n.id<e.id?-1:n.id>e.id?1:0})),i(c)},children:[Object(C.jsx)("option",{children:"default sort"}),Object(C.jsx)("option",{children:"A-Z"}),Object(C.jsx)("option",{children:"Z-A"}),Object(C.jsx)("option",{children:"abv ascending"}),Object(C.jsx)("option",{children:"abv descending"})]}),Object(C.jsxs)(D,{children:[t.map((function(n){var e=n.name,t=n.image_url,i=n.id,c=n.abv;return Object(C.jsx)(L,{name:e,image_url:t,abv:c,id:i},i)})),Object(C.jsx)(P,{}),Object(C.jsx)(P,{}),Object(C.jsx)(P,{})]})]})},N=function(){var n=Object(f.useState)([]),e=Object(F.a)(n,2),t=e[0],i=e[1];Object(f.useEffect)((function(){fetch("https://api.punkapi.com/v2/beers?food=steak").then((function(n){return n.json()})).then((function(n){return i(n)}))}),[]);return Object(C.jsxs)("div",{children:[Object(C.jsxs)(G,{onChange:function(n){var e=n.target.value,c=Object(S.a)(t);"A-Z"===e?c.sort((function(n,e){return n.name<e.name?-1:n.name>e.name?1:0})):"Z-A"===e?c.sort((function(n,e){return n.name>e.name?-1:n.name<e.name?1:0})):"abv ascending"===e?c.sort((function(n,e){return n.abv<e.abv?-1:n.abv>e.abv?1:0})):"abv descending"===e?c.sort((function(n,e){return n.abv>e.abv?-1:n.abve<e.abv?1:0})):"default sort"===e&&c.sort((function(n,e){return n.id<e.id?-1:n.id>e.id?1:0})),i(c)},children:[Object(C.jsx)("option",{children:"default sort"}),Object(C.jsx)("option",{children:"A-Z"}),Object(C.jsx)("option",{children:"Z-A"}),Object(C.jsx)("option",{children:"abv ascending"}),Object(C.jsx)("option",{children:"abv descending"})]}),Object(C.jsxs)(D,{children:[t.map((function(n){var e=n.name,t=n.image_url,i=n.id,c=n.abv;return Object(C.jsx)(L,{name:e,image_url:t,abv:c,id:i},i)})),Object(C.jsx)(P,{}),Object(C.jsx)(P,{}),Object(C.jsx)(P,{})]})]})},R=y.a.section(x||(x=Object(_.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  top: 110px;\n"]))),U=y.a.div(u||(u=Object(_.a)(["\n  box-sizing: border-box;\n  width: calc(100vw - 250px);\n  height: calc(100vh - 200px);\n  text-align: center;\n  margin: 25px;\n  border-radius: 25px;\n  background-color: #f1f3f4;\n"]))),q=y.a.div(p||(p=Object(_.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: gray;\n  color: white;\n"]))),H=y.a.div(h||(h=Object(_.a)(["\n  display: flex;\n  & > img {\n    position: relative;\n    width: 100px;\n    margin: 60px 0 0 10vw;\n  }\n"]))),Q=y.a.div(O||(O=Object(_.a)(["\n  width: 540px;\n  margin: 50px 0 0 10vw;\n"]))),V=function(n){var e=n.name,t=n.image_url,i=n.abv,c=n.description,a=n.tagline,r=n.food_pairing;return Object(C.jsx)("div",{children:Object(C.jsxs)(U,{children:[Object(C.jsx)(q,{children:Object(C.jsx)("h3",{children:e})}),Object(C.jsxs)(H,{children:[Object(C.jsx)("img",{src:t,alt:e}),Object(C.jsxs)("p",{children:[i," abv"]}),Object(C.jsxs)(Q,{children:[c,Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:"Tagline:"}),Object(C.jsx)("i",{children:a})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("h4",{children:"Good paired with:"}),Object(C.jsx)("p",{children:r.join(", ")})]})]})]})]})})},W=function(){var n=Object(k.g)().id,e=Object(f.useState)([]),t=Object(F.a)(e,2),i=t[0],c=t[1];return Object(f.useEffect)((function(){fetch("https://api.punkapi.com/v2/beers/".concat(n)).then((function(n){return n.json()})).then((function(n){return c(n)}))}),[n]),console.log(i),Object(C.jsx)("div",{children:Object(C.jsx)(R,{children:i.map((function(n){var e=n.name,t=n.image_url,i=n.id,c=n.abv,a=n.description,r=n.tagline,o=n.food_pairing;return Object(C.jsx)(V,{name:e,image_url:t,abv:c,id:i,description:a,tagline:r,food_pairing:o},i)}))})})};var X=function(){return Object(C.jsxs)(f.Fragment,{children:[Object(C.jsx)(E,{}),Object(C.jsxs)(k.c,{children:[Object(C.jsx)(k.a,{path:"/",element:Object(C.jsx)(K,{})}),Object(C.jsx)(k.a,{path:"/pizza_combo",element:Object(C.jsx)(M,{})}),Object(C.jsx)(k.a,{path:"/steak_combo",element:Object(C.jsx)(N,{})}),Object(C.jsx)(k.a,{path:"/beer_details/:id",element:Object(C.jsx)(W,{})})]})]})},Y=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),i(n),c(n),a(n),r(n)}))};m.a.render(Object(C.jsx)(v.a.StrictMode,{children:Object(C.jsx)(w.a,{children:Object(C.jsx)(X,{})})}),document.getElementById("root")),Y()}},[[27,1,2]]]);
//# sourceMappingURL=main.d0177fa3.chunk.js.map