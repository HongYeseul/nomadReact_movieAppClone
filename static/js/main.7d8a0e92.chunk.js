(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{58:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(0),c=s.n(n),i=s(25),r=s.n(i),o=s(13),l=s.n(o),j=s(26),m=s(31),d=s(27),u=s.n(d),b=(s(58),s(8));var h=function(e){var t=e.title,s=e.year,n=e.summary,c=e.poster,i=e.genres;return Object(a.jsx)("div",{className:"movie",children:Object(a.jsxs)(b.b,{to:{pathname:"/movie-detail",state:{year:s,title:t,summary:n,poster:c,genres:i}},children:[Object(a.jsx)("img",{src:c,alt:t,title:t}),Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsx)("h3",{className:"movie__title",children:t}),Object(a.jsx)("h5",{className:"movie__year",children:s}),Object(a.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(a.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(a.jsxs)("p",{className:"movie__summary",children:[n.slice(0,180),"..."]})]})]})})};s(64);var p=function(){var e=Object(n.useState)({isLoading:!0,movies:[]}),t=Object(m.a)(e,2),s=t[0],c=t[1],i=function(){var e=Object(j.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,s=t.data.data.movies,c({movies:s,isLoading:!1});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()})),Object(a.jsx)("section",{className:"container",children:s.isLoading?Object(a.jsxs)("div",{className:"loader",children:[" ",Object(a.jsx)("span",{className:"loader__text",children:'"Loading..." '})," "]}):Object(a.jsx)("div",{className:"movies",children:s.movies.map((function(e){return Object(a.jsx)(h,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})},v=(s(65),s(2));s(66);var O=function(){return Object(a.jsxs)("div",{className:"about__container",children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("p",{children:"2020 \ub178\ub9c8\ub4dc \ucf54\ub354 \ud074\ub860 \ucf54\ub529(\uc601\ud654 \ud3c9\uc810 \uc6f9\uc11c\ube44\uc2a4) \uc218\uc5c5 \ub0b4\uc6a9\uc785\ub2c8\ub2e4. "}),"\uc870\uae08\uc529 \uc218\uc815\ud55c \ubd80\ubd84\uc774 \uc788\uc5b4 ",Object(a.jsx)("a",{href:"https://github.com/easysIT/do_it_clonecoding_movieapp",children:"\uc6d0\ubcf8"}),"\uacfc \ub2e4\ub978 \ubd80\ubd84\uc774 \uc788\uc2b5\ub2c8\ub2e4."]}),Object(a.jsx)("span",{children:"- 2021\ub144 02\uc6d4 03\uc77c \ud64d\uc608\uc2ac \uc791\uc5c5\ud568."})]})};s(67);var x=function(){return Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)(b.b,{to:"/",children:"Home"}),Object(a.jsx)(b.b,{to:"/about",children:"About"})]})},_=s(29),f=s(30),y=s(33),g=s(32),N=(s(68),function(e){Object(y.a)(s,e);var t=Object(g.a)(s);function s(){return Object(_.a)(this,s),t.apply(this,arguments)}return Object(f.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(a.jsxs)("div",{className:"detail__data",children:[Object(a.jsx)("img",{src:e.state.poster,alt:e.state.title,title:e.state.title}),Object(a.jsx)("h3",{className:"detail__title",children:e.state.title}),Object(a.jsx)("h5",{className:"detail__year",children:e.state.year}),Object(a.jsx)("ul",{className:"detail__genres",children:e.state.genres.map((function(e,t){return Object(a.jsx)("li",{className:"detail__genre",children:e},t)}))}),Object(a.jsx)("p",{className:"detail__summary",children:e.state.summary})]}):null}}]),s}(c.a.Component));var k=function(){return Object(a.jsxs)(b.a,{children:[Object(a.jsx)(x,{}),Object(a.jsx)(v.a,{path:"/",exact:!0,component:p}),Object(a.jsx)(v.a,{path:"/about",component:O}),Object(a.jsx)(v.a,{path:"/movie-detail",component:N})]})};r.a.render(Object(a.jsx)(k,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.7d8a0e92.chunk.js.map