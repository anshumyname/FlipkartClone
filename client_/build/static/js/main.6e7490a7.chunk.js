(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{143:function(e,t,n){},144:function(e,t,n){},196:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(13),i=n.n(r),s=(n(143),n(26)),o=n(8),l=(n(144),n(14)),d=n(11),u=n(106),j=n(236),p=n(253),b=n(228),m=n(237),f=n(239),x=n(231),h=n(201),g=n(254),O=n(203),w=n(117),y=n.n(w),v=n(128),k=n(20),N=n(15),F=n.n(N),C=n(23),S=n(40),T=n.n(S),I="getProductsSuccess",E="getProductFail",L="getProductdetailSuccess",P="getProductdetailFail",R=function(){return function(){var e=Object(C.a)(F.a.mark((function e(t){var n,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("products");case 3:n=e.sent,a=n.data,t({type:I,payload:a}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:E,payload:e.t0.response}),console.log("Error while calling products api");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},z=n(1),A=Object(v.a)((function(e){return{search:{borderRadius:2,marginLeft:10,width:"38%",backgroundColor:"#fff",display:"flex"},searchIcon:{marginLeft:"auto",padding:5,display:"flex",color:"blue"},inputRoot:{fontSize:"unset",width:"100%"},inputInput:{paddingLeft:20,width:"100%"},list:{position:"absolute",color:"#000",background:"#FFFFFF",margin:"20px 0 0 0",marginTop:"36px"}}})),D=function(){var e=A(),t=Object(k.b)(),n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],i=c[1],o=Object(k.c)((function(e){return e.getProducts})).products;Object(a.useEffect)((function(){t(R())}),[t]);var d=Object(a.useState)(!1),u=Object(l.a)(d,2),j=u[0],p=u[1];return Object(z.jsxs)("div",{className:e.search,children:[Object(z.jsx)(g.a,{placeholder:"Search for product, brands and more",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){return function(e){i(e),p(!0)}(e.target.value)}}),Object(z.jsx)("div",{className:e.searchIcon,children:Object(z.jsx)(y.a,{})}),r.length&&Object(z.jsx)(b.a,{className:e.list,hidden:!j,children:o.filter((function(e){return e.title.longTitle.toLowerCase().includes(r.toLowerCase())})).map((function(e){return Object(z.jsx)(O.a,{children:Object(z.jsx)(s.b,{to:"/product/".concat(e.id),style:{textDecoration:"none",color:"inherit"},onClick:function(){return p(!1)},children:e.title.longTitle})})}))})]})},B=n(204),W=n(234),q=n(235),M=n(36),H=n(229),_=n(230),U=n(252),V=function(){var e=Object(C.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.post("".concat("","/signup"),t);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("Error while calling signup api",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(C.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.post("".concat("","/login"),t);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("Error while calling login auth api ",e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(C.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.post("".concat("","/payment"),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("error while calling paytm api",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),Y=Object(u.a)({component:{height:"70vh",width:"90vh",maxWidth:"unset !important"},image:{backgroundImage:"url(".concat("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png",")"),height:"70vh",backgroundRepeat:"no-repeat",background:"#2874f0",width:"40%",backgroundPosition:"center 85%",padding:"45px 35px","& > *":{color:"#FFFFFF"}},login:{padding:"25px 35px",display:"flex",flex:1,flexDirection:"column","& > *":{marginTop:20}},text:{color:"#878787",fontSize:12},loginBtn:{textTransform:"none",background:"#fb641b",color:"#FFFFFF",height:"48px",borderRadius:2},createtext:{textAlign:"center",marginTop:"auto",fontSize:14,color:"#2874f0",fontWeight:600,cursor:"pointer"},requestBtn:{textTransform:"none",background:"#FFFFFF",color:"#2874f0",height:"48px",borderRadius:2,boxShadow:"0 2px 4px 0 rgb(0 0 0 / 20%)"},error:{fontSize:10,color:"#ff6161",marginTop:10,fontWeight:600,lineHeight:0}}),X={view:"login",heading:"Login",subHeading:"Get access to your Orders, Wishlist, and Recommendations"},K={view:"signup",heading:"Looks like youre new here",subHeading:"Sign up with a mobile number"},Q={firstname:"",lastname:"",username:"",email:"",password:"",phone:""},Z={username:"",password:""},$=function(e){var t=e.open,n=e.setopen,c=e.setAccount,r=Y(),i=Object(a.useState)(X),s=Object(l.a)(i,2),o=s[0],u=s[1],j=Object(a.useState)(Q),b=Object(l.a)(j,2),m=b[0],f=b[1],h=Object(a.useState)(Z),g=Object(l.a)(h,2),O=g[0],w=g[1],y=Object(a.useState)(!1),v=Object(l.a)(y,2),k=v[0],N=v[1],S=function(){var e=Object(C.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(m);case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:T(),c(m.username);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){n(!1),u(X)},I=function(e){f(Object(M.a)(Object(M.a)({},m),{},Object(d.a)({},e.target.name,e.target.value)))},E=function(e){w(Object(M.a)(Object(M.a)({},O),{},Object(d.a)({},e.target.name,e.target.value)))},L=function(){var e=Object(C.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(O);case 2:if(t=e.sent,console.log(O),t){e.next=7;break}return N(!0),e.abrupt("return");case 7:T(),N(!1),c(O.username);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(z.jsx)(H.a,{open:t,onClose:function(){return T()},children:Object(z.jsx)(_.a,{className:r.component,children:Object(z.jsxs)(p.a,{style:{display:"flex"},children:[Object(z.jsxs)(p.a,{className:r.image,children:[Object(z.jsx)(x.a,{variant:"h5",style:{fontWeight:600},children:o.heading}),Object(z.jsx)(x.a,{style:{marginTop:"20px"},children:o.subHeading})]}),"login"===o.view?Object(z.jsxs)(p.a,{className:r.login,children:[Object(z.jsx)(U.a,{onChange:function(e){return E(e)},name:"username",label:"Enter Email/Mobile number"}),Object(z.jsx)(U.a,{onChange:function(e){return E(e)},name:"password",label:"Enter password"}),k&&Object(z.jsx)(x.a,{className:r.error,children:"Invalid username or password"}),Object(z.jsx)(x.a,{className:r.text,children:"By continuing you agree to Flipkart's Terms of Use and Privacy Policy"}),Object(z.jsx)(B.a,{variant:"contained",onClick:function(){return L()},className:r.loginBtn,children:"Login"}),Object(z.jsx)(x.a,{className:r.text,style:{textAlign:"center"},children:"OR"}),Object(z.jsx)(B.a,{variant:"contained",className:r.requestBtn,children:"Request OTP"}),Object(z.jsx)(x.a,{className:r.createtext,onClick:function(){u(K)},children:"New to Flipkart? Create an account"})]}):Object(z.jsxs)(p.a,{className:r.login,children:[Object(z.jsx)(U.a,{onChange:function(e){return I(e)},name:"firstname",label:"Enter FirstName"}),Object(z.jsx)(U.a,{onChange:function(e){return I(e)},name:"lastname",label:"Enter LastName"}),Object(z.jsx)(U.a,{onChange:function(e){return I(e)},name:"username",label:"Enter Username"}),Object(z.jsx)(U.a,{onChange:function(e){return I(e)},name:"email",label:"Enter Email"}),Object(z.jsx)(U.a,{onChange:function(e){return I(e)},name:"password",label:"Enter password"}),Object(z.jsx)(U.a,{onChange:function(e){return I(e)},name:"phone",label:"Enter Phone number"}),Object(z.jsx)(B.a,{variant:"contained",className:r.loginBtn,onClick:function(){return S()},children:"Signup"})]})]})})})},ee=n(124),te=n(232),ne=n(233),ae=Object(u.a)({component:{marginTop:"40px"},logout:{marginLeft:"20px",fontSize:14}}),ce=function(e){var t=e.account,n=e.setAccount,c=ae(),r=Object(a.useState)(!1),i=Object(l.a)(r,2),s=i[0],o=i[1],d=function(){o(!1)};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(x.a,{style:{marginTop:"6px",cursor:"pointer"},onClick:function(e){o(e.currentTarget)},children:["Hi ",t,"!"]}),Object(z.jsx)(ee.a,{anchorEl:s,open:Boolean(s),onClose:d,className:c.component,children:Object(z.jsxs)(te.a,{onClick:function(){d(),n("")},children:[Object(z.jsx)(ne.a,{fontSize:"small",color:"primary"}),Object(z.jsx)(x.a,{className:c.logout,children:"Logout"})]})})]})},re=Object(a.createContext)(null),ie=function(e){var t=e.children,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],i=c[1];return Object(z.jsx)(re.Provider,{value:{account:r,setAccount:i},children:t})},se=Object(u.a)((function(e){return{container:Object(d.a)({display:"flex"},e.breakpoints.down("sm"),{display:"block"}),wrapper:Object(d.a)({margin:"0 5% 0 auto",display:"flex","& > *":Object(d.a)({marginRight:50,textDecoration:"none",color:"#FFFFFF",fontSize:12,alignItems:"center"},e.breakpoints.down("sm"),{color:"#2874f0",alignItems:"center",display:"flex",flexDirection:"column",marginTop:10})},e.breakpoints.down("sm"),{display:"block"}),login:Object(d.a)({color:"#2874f0",background:"#FFFFFF",textTransform:"none",fontWeight:600,borderRadius:2,padding:"5px 40px",height:32,boxShadow:"none"},e.breakpoints.down("sm"),{background:"#2874f0",color:"#FFFFFF"})}})),oe=function(){var e=se(),t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(a.useContext)(re),o=i.account,d=i.setAccount,u=Object(k.c)((function(e){return e.cart})).cartItems;return Object(z.jsxs)(p.a,{className:e.wrapper,children:[o?Object(z.jsx)(ce,{account:o,setAccount:d}):Object(z.jsx)(s.b,{to:"/",children:Object(z.jsx)(B.a,{variant:"contained",className:e.login,onClick:function(){r(!0)},children:"Login"})}),Object(z.jsx)(s.b,{to:"/",children:Object(z.jsx)(x.a,{style:{marginTop:5},children:"More"})}),Object(z.jsxs)(s.b,{to:"/cart",className:e.container,children:[Object(z.jsx)(W.a,{badgeContent:u.length,color:"secondary",children:Object(z.jsx)(q.a,{})}),Object(z.jsx)(x.a,{style:{marginLeft:10},children:"Cart"})]}),Object(z.jsx)($,{open:c,setopen:r,setAccount:d})]})},le=n(107),de=n(238),ue=Object(u.a)((function(e){return{header:{background:"#2874f0",height:55},logo:{width:75},suburl:{width:10,marginLeft:4},container:{display:"flex",height:10},component:{marginLeft:"12%",lineHeight:0,textDecoration:"none",color:"#fff"},subHeading:{fontStyle:"italic",fontSize:10},list:{widht:250},menubutton:Object(d.a)({display:"none"},e.breakpoints.down("sm"),{display:"block"}),headerbutton:Object(d.a)({margin:"0 5% 0 auto"},e.breakpoints.down("sm"),{display:"none"})}})),je=Object(h.a)({root:{minHeight:55}})(j.a),pe=function(){var e=ue(),t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],r=n[1],i=function(){r(!1)};return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(m.a,{position:"static",className:e.header,children:Object(z.jsxs)(je,{children:[Object(z.jsx)(le.a,{color:"inherit",className:e.menubutton,onClick:function(){r(!0)},children:Object(z.jsx)(de.a,{})}),Object(z.jsx)(f.a,{open:c,onClose:i,children:Object(z.jsx)(p.a,{className:e.list,onClick:i,children:Object(z.jsx)(b.a,{children:Object(z.jsx)("listItem",{button:!0,children:Object(z.jsx)(oe,{})})})})}),Object(z.jsxs)(s.b,{to:"/",className:e.component,children:[Object(z.jsx)("img",{src:"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png",className:e.logo}),Object(z.jsxs)(p.a,{className:e.container,children:[Object(z.jsxs)(x.a,{className:e.subHeading,children:["Explore ",Object(z.jsx)(p.a,{component:"span",style:{color:"#EEE500"},children:"Plus"})]}),Object(z.jsx)("img",{src:"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png",className:e.suburl})]})]}),Object(z.jsx)(D,{}),Object(z.jsx)("span",{className:e.headerbutton,children:Object(z.jsx)(oe,{})})]})})})},be=[{url:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",text:"Top Offers"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",text:"Grocery"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",text:"Mobile"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",text:"Fashion"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",text:"Electronics"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100",text:"Home"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",text:"Appliances"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",text:"Travel"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",text:"Beauty, Toys & More"}],me=["https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50","https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50","https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50","https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50"],fe=["https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50","https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg","https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50"],xe=Object(v.a)((function(e){return{component:Object(d.a)({display:"flex",margin:"25px 130px",justifyContent:"space-between",overflowX:"overlay"},e.breakpoints.down("md"),{margin:0}),container:{textAlign:"center",padding:"12px 8px"},image:{width:64},text:{fontSize:14,fontWeight:600}}})),he=function(){var e=xe();return Object(z.jsx)(p.a,{className:e.component,children:be.map((function(t){return Object(z.jsxs)(p.a,{className:e.container,children:[Object(z.jsx)("img",{className:e.image,src:t.url}),Object(z.jsx)(x.a,{className:e.text,children:t.text})]})}))})},ge=n(118),Oe=n.n(ge),we=Object(u.a)((function(e){return{image:Object(d.a)({width:"100%",height:280},e.breakpoints.down("sm"),{objectFit:"cover",height:180}),carousel:{margin:10}}})),ye=function(){var e=we();return Object(z.jsx)(Oe.a,{autoPlay:!0,animation:"slide",indicators:!1,navButtonsAlwaysVisible:!0,cycleNavigation:!0,navButtonsProps:{style:{background:"#FFFFFF",color:"#494949",borderRadius:0,margin:0}},className:e.carousel,children:me.map((function(t){return Object(z.jsx)("img",{className:e.image,src:t})}))})},ve=n(248),ke=n(119),Ne=n.n(ke),Fe=(n(195),n(243)),Ce=n(242),Se=n(244),Te=n(245),Ie=n(246),Ee=n(247),Le=n(241),Pe=n(4),Re="addtocart",ze="removefromcart";function Ae(e){return function(e){return"object"===typeof e}(e)&&!function(e){return"[object Date]"===Object.prototype.toString.call(e)}(e)?JSON.stringify(e):e}function De(e){var t=function(e){var t=e.action,n=e.params,a=document.createElement("form");return a.setAttribute("method","post"),a.setAttribute("action",t),Object.keys(n).forEach((function(e){var t=document.createElement("input");t.setAttribute("type","hidden"),t.setAttribute("name",e),t.setAttribute("value",Ae(n[e])),a.appendChild(t)})),a}(e);document.body.appendChild(t),t.submit(),t.remove()}var Be=Object(u.a)((function(e){return{leftContainer:Object(d.a)({padding:"40px 0 0 80px"},e.breakpoints.down("md"),{padding:"20px 40px"}),image:{padding:"15px 20px",border:"1px solid #f0f0f0",width:"95%"},button:{height:50,width:"46%",borderRadius:2},addtocart:{background:"#ff9f00",color:"#fff",marginRight:10},buynow:{background:"#fb641b",color:"#fff"}}})),We=function(e){var t=e.product,n=Be(),a=Object(k.b)(),c=Object(o.f)(),r=function(){var e;a((e=t.id,function(){var t=Object(C.a)(F.a.mark((function t(n){var a,c;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get("product/".concat(e));case 3:a=t.sent,c=a.data,n({type:Re,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error while calling api addtocart");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}())),c("/cart")},i=function(){var e=Object(C.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J({amount:500,email:"srivastavaanshuman33@gmail.com"});case 2:t=e.sent,console.log(t),De({action:"https://securegw-stage.paytm.in/order/process",params:t});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(z.jsxs)(p.a,{className:n.leftContainer,children:[Object(z.jsx)("img",{src:t.detailUrl,className:n.image}),Object(z.jsx)("br",{}),Object(z.jsxs)(B.a,{variant:"contained",className:Object(Pe.a)(n.button,n.addtocart),onClick:function(){return r()},children:[Object(z.jsx)(q.a,{}),"Add to Cart"]}),Object(z.jsxs)(B.a,{variant:"contained",className:Object(Pe.a)(n.button,n.buynow),onClick:function(){return i()},children:[Object(z.jsx)(Le.a,{}),"Buy Now"]})]})},qe=Object(u.a)((function(e){return{component:{background:"#F2F2F2"},container:Object(d.a)({background:"#fff",display:"flex"},e.breakpoints.down("md"),{margin:1,padding:"15px"}),rightcontainer:{marginTop:"50px","& > *":{marginTop:"10px"}},smallText:{fontSize:14,verticalAlign:"baseline","& > *":{fontSize:14,marginTop:10}},grey:{color:"#878787"},price:{fontSize:28,fontWeight:600},badge:{fontSize:14,marginRight:10,color:"#00CC00"}}})),Me=function(){var e=Object(o.g)().id,t=Object(k.c)((function(e){return e.getProductDetails})).product,n=new Date((new Date).getTime()+432e6),c=qe(),r=Object(k.b)();return Object(a.useEffect)((function(){r(function(e){return function(){var t=Object(C.a)(F.a.mark((function t(n){var a,c;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get("product/".concat(e));case 3:a=t.sent,c=a.data,console.log(c),n({type:L,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:P,payload:t.t0.response});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[r]),Object(z.jsx)(p.a,{className:c.component,children:t&&Object(z.jsxs)(Ce.a,{container:!0,className:c.container,children:[Object(z.jsx)(Ce.a,{item:!0,lg:4,md:4,sm:8,xs:12,children:Object(z.jsx)(We,{product:t})}),Object(z.jsxs)(Ce.a,{item:!0,lg:8,md:8,sm:8,xs:12,className:c.rightcontainer,children:[Object(z.jsx)(x.a,{children:t.title.longTitle}),Object(z.jsxs)(x.a,{className:Object(Pe.a)(c.smallText,c.grey),children:["8 Ratings & 1 Reviews",Object(z.jsx)("span",{children:Object(z.jsx)("img",{src:"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png",style:{width:77,marginLeft:20}})})]}),Object(z.jsxs)(x.a,{children:[Object(z.jsxs)("span",{className:c.price,children:["\u20b9",t.price.cost]})," \xa0\xa0\xa0",Object(z.jsx)("span",{className:c.grey,children:Object(z.jsxs)("strike",{children:["\u20b9",t.price.mrp]})})," \xa0\xa0\xa0",Object(z.jsxs)("span",{style:{color:"#388e3c"},children:[t.price.discount," off"]})," \xa0\xa0\xa0"]}),Object(z.jsx)(x.a,{style:{margintTop:20,fontWeight:600},children:"Available Offers"}),Object(z.jsxs)(p.a,{className:c.smallText,children:[Object(z.jsxs)(x.a,{children:[Object(z.jsx)(Fe.a,{className:c.badge}),"Bank Offer10% Instant Discount on RBL Bank Credit and Debit Cards T&C"]}),Object(z.jsxs)(x.a,{children:[Object(z.jsx)(Fe.a,{className:c.badge}),"Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C"]}),Object(z.jsxs)(x.a,{children:[Object(z.jsx)(Fe.a,{className:c.badge}),"Bank Offer20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and Mobikwik T&C"]}),Object(z.jsxs)(x.a,{children:[Object(z.jsx)(Fe.a,{className:c.badge}),"Bank Offer15% Instant discount on first Pay Later order of \u20b9500 and above T&C"]})]}),Object(z.jsx)(Se.a,{children:Object(z.jsxs)(Te.a,{children:[Object(z.jsxs)(Ie.a,{className:c.smallText,children:[Object(z.jsx)(Ee.a,{className:c.grey,children:"Delievery"}),Object(z.jsxs)(Ee.a,{style:{fontWeight:600},children:[n.toDateString()," | \u20b940"]})]}),Object(z.jsxs)(Ie.a,{className:c.smallText,children:[Object(z.jsx)(Ee.a,{className:c.grey,children:"Warranty"}),Object(z.jsx)(Ee.a,{children:"No Warranty"})]}),Object(z.jsxs)(Ie.a,{children:[Object(z.jsx)(Ee.a,{className:c.grey,children:"Seller"}),Object(z.jsxs)(Ee.a,{className:c.smallText,children:[Object(z.jsx)("span",{style:{color:"#2874f0"},children:"Super Comet"}),Object(z.jsx)(x.a,{children:"GST Invoice Available"}),Object(z.jsx)(x.a,{children:"14 Days Return Policy"}),Object(z.jsx)(x.a,{children:"View more sellers starting from \u20b9300"})]})]}),Object(z.jsx)(Ie.a,{children:Object(z.jsx)(Ee.a,{colSpan:2,children:Object(z.jsx)("img",{src:"https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50",style:{width:390}})})}),Object(z.jsxs)(Ie.a,{className:c.smallText,children:[Object(z.jsx)(Ee.a,{className:c.grey,children:"Description"}),Object(z.jsx)(Ee.a,{children:t.description})]})]})})]})]})})},He=n(120),_e={desktop:{breakpoint:{max:3e3,min:1024},items:5},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},Ue=Object(v.a)({component:{marginTop:12,background:"#FFFFFF"},deal:{padding:"15px 20px",display:"flex"},dealtext:{fontSize:22,fontWeight:600,lineHeight:"32px",marginRight:25},timer:{display:"flex",color:"#f7f7f7f",marginLeft:10,alignItems:"center"},image:{height:150},button:{marginLeft:"auto",background:"#2874f0",borderRadius:2,fontSize:"13px"},text:{fontSize:14,marginTop:5},wrapper:{padding:"35px 15px"}}),Ve=function(e){var t=e.timer,n=e.title,a=e.products,c=Ue();return Object(z.jsxs)(p.a,{children:[Object(z.jsxs)(p.a,{className:c.deal,children:[Object(z.jsx)(x.a,{className:c.dealtext,children:n}),t&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("img",{src:"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg",style:{width:24}}),Object(z.jsx)(He.a,{renderer:function(e){var t=e.hours,n=e.minutes,a=e.seconds;return Object(z.jsxs)("span",{children:[t,":",n,":",a," left"]})},date:Date.now()+504e5,className:c.timer}),Object(z.jsx)(B.a,{variant:"contained",color:"primary",className:c.button,children:"View ALL"})]})]}),Object(z.jsx)(ve.a,{}),Object(z.jsx)(Ne.a,{responsive:_e,infinite:!0,draggable:!1,swipeable:!1,centerMode:!0,autoPlay:!0,autoPlaySpeed:1e4,keyBoardControl:!0,showDots:!1,dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px",children:a.map((function(e){return Object(z.jsx)(s.b,{to:"product/".concat(e.id),children:Object(z.jsxs)(p.a,{textAlign:"center",className:c.wrapper,children:[Object(z.jsx)("img",{className:c.image,src:e.url}),Object(z.jsx)(x.a,{className:c.text,style:{fontWeight:600,color:"#212121"},children:e.title.shortTitle}),Object(z.jsx)(x.a,{className:c.text,style:{color:"green"},children:e.discount}),Object(z.jsx)(x.a,{className:c.text,style:{color:"#212121",opacity:"0.6"},children:e.tagline})]})})}))})]})},Ge=Object(v.a)((function(e){return{wrapper:{display:"flex",marginTop:20,justifyContent:"space-between","& > *":Object(d.a)({},e.breakpoints.down("sm"),{width:"100%"})},corona:Object(d.a)({width:"100%",marginTop:20},e.breakpoints.down("md"),{objectFit:"cover",height:120})}})),Je=function(){var e=Ge();return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Ce.a,{lg:12,sm:12,md:12,xs:12,container:!0,className:e.wrapper,children:fe.map((function(e){return Object(z.jsx)(Ce.a,{item:!0,lg:4,md:4,sm:12,xs:12,children:Object(z.jsx)("img",{src:e,style:{width:"100%"}})})}))}),Object(z.jsx)("img",{src:"https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50",className:e.corona})]})},Ye=Object(v.a)((function(e){return{component:{padding:"10px",background:"#f2f2f2"},rightWrapper:Object(d.a)({background:"#FFFFFF",padding:5,margin:"120x 0 0 10px",width:"17%"},e.breakpoints.down("md"),{display:"none"}),mainslide:Object(d.a)({width:"83%"},e.breakpoints.down("md"),{width:"100%"})}})),Xe=function(){var e=Ye(),t=Object(k.b)(),n=Object(k.c)((function(e){return e.getProducts})).products;return Object(a.useEffect)((function(){t(R())}),[t]),Object(z.jsxs)("div",{children:[Object(z.jsx)(he,{}),Object(z.jsxs)(p.a,{className:e.component,children:[Object(z.jsx)(ye,{}),Object(z.jsxs)(p.a,{style:{display:"flex"},children:[Object(z.jsx)(p.a,{className:e.mainslide,children:Object(z.jsx)(Ve,{timer:!0,title:"Deal of the Day",products:n})}),Object(z.jsx)(p.a,{className:e.rightWrapper,children:Object(z.jsx)("img",{src:"https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70",style:{width:230}})})]}),Object(z.jsx)(Je,{}),Object(z.jsx)(Ve,{timer:!1,title:"Discounts For You",products:n}),Object(z.jsx)(Ve,{timer:!1,title:"Suggested Items",products:n})]})]})},Ke=n(250),Qe=n(249),Ze=Object(v.a)({component:{marginTop:30},button:{borderRadius:"50%"}}),$e=function(){var e=Ze(),t=Object(a.useState)(1),n=Object(l.a)(t,2),c=n[0],r=n[1];return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)(Qe.a,{className:e.component,children:[Object(z.jsx)(B.a,{className:e.button,onClick:function(){r((function(e){return e-1}))},disabled:1===c,children:"-"}),Object(z.jsx)(B.a,{children:c}),Object(z.jsx)(B.a,{className:e.button,onClick:function(){r((function(e){return e+1}))},children:"+"})]})})},et=Object(u.a)({component:{display:"flex",borderRadius:0,borderTop:"1px solid #f0f0f0"},left:{margin:20,display:"flex",flexDirection:"column"},right:{margin:20},smallText:{fontSize:14},gray:{color:"#878787"},price:{fontSize:18,fontWeight:600},image:{height:110,width:110},button:{marginTop:20,fontSize:15}}),tt=function(e){var t=e.item,n=e.removeItem,a=et();return Object(z.jsxs)(Ke.a,{className:a.component,children:[Object(z.jsxs)(p.a,{className:a.left,children:[Object(z.jsx)("img",{src:t.url,className:a.image}),Object(z.jsx)($e,{})]}),Object(z.jsxs)(p.a,{className:a.right,children:[Object(z.jsx)(x.a,{children:t.title.longTitle}),Object(z.jsxs)(x.a,{className:Object(Pe.a)(a.smallText,a.gray),style:{marginTop:10},children:["Seller : SuperComNet",Object(z.jsx)("span",{children:Object(z.jsx)("img",{src:"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png",style:{width:50,marginLeft:10}})})]}),Object(z.jsxs)(x.a,{style:{margin:"20px 0px"},children:[Object(z.jsxs)("span",{className:a.price,children:["\u20b9",t.price.cost]})," \xa0\xa0\xa0",Object(z.jsx)("span",{className:a.gray,children:Object(z.jsxs)("strike",{children:["\u20b9",t.price.mrp]})}),"\xa0\xa0\xa0",Object(z.jsxs)("span",{style:{color:"#388E3C"},children:[t.price.discount," off"]}),"\xa0\xa0\xa0"]}),Object(z.jsx)(B.a,{className:a.button,onClick:function(){return n(t.id)},children:"REMOVE"})]})]})},nt=Object(u.a)({component:{margin:"80px 140px",width:"80%",background:"#fff",height:"65vh"},iimage:{width:"15%"},container:{textAlign:"center",paddingTop:70,"& > *":{marginTop:10,fontSize:14}},button:{marginTop:20,padding:"12px 70px",borderRadius:2,fontSize:14,background:"#2874f0",color:"#fff"}}),at=function(){var e=nt(),t=Object(o.f)();return Object(z.jsx)(p.a,{className:e.component,children:Object(z.jsxs)(p.a,{className:e.container,children:[Object(z.jsx)("img",{src:"https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90",className:e.iimage}),Object(z.jsx)(x.a,{children:"Your Cart is Empty!"}),Object(z.jsx)(x.a,{children:"Add items to cart"}),Object(z.jsx)(B.a,{variant:"contained",className:e.button,onClick:function(){t("/")},children:"SHOP NOW"})]})})},ct=Object(v.a)({component:{padding:"10px",background:"#fff",marginLeft:15},header:{padding:"16px 24px",borderBottom:"1px solid #f0f0f0"},container:{padding:"15px 24px","& > *":{marginTop:20,fontSize:14}},gray:{color:"#878787"},price:{float:"right"},totalamount:{fontSize:18,fontWeight:600,borderTop:"1px dashed #e0e0e0",padding:"20px 0",borderBottom:"1px dashed #e0e0e0"}}),rt=function(e){var t=e.cartItems,n=ct(),c=Object(a.useState)(0),r=Object(l.a)(c,2),i=r[0],s=r[1],o=Object(a.useState)(0),d=Object(l.a)(o,2),u=d[0],j=d[1];return Object(a.useEffect)((function(){!function(){var e=0,n=0;t.map((function(t){e+=t.price.mrp,n+=t.price.mrp-t.price.cost})),s(e),j(n)}()}),[t]),Object(z.jsxs)(p.a,{className:n.component,children:[Object(z.jsx)(p.a,{className:n.header,children:Object(z.jsx)(x.a,{className:n.gray,children:"PRICE DETAILS"})}),Object(z.jsxs)(p.a,{className:n.container,children:[Object(z.jsxs)(x.a,{children:["PRICE ( ",t.length," item ) ",Object(z.jsxs)("span",{className:n.price,children:["\u20b9",i]})]}),Object(z.jsxs)(x.a,{children:["Discount ",Object(z.jsxs)("span",{className:n.price,children:["-\u20b9",u]})]}),Object(z.jsxs)(x.a,{children:["Delievery Charge ",Object(z.jsx)("span",{className:n.price,children:"\u20b940"})]}),Object(z.jsxs)(x.a,{className:n.totalamount,children:["Total Amount ",Object(z.jsxs)("span",{className:n.price,children:["\u20b9",i-u+40]})]}),Object(z.jsxs)(x.a,{style:{color:"green"},children:["You will Save \u20b9",u-40," on this order"]})]})]})},it=Object(u.a)((function(e){return{component:Object(d.a)({padding:"30px 135px",display:"flex"},e.breakpoints.down("md"),{padding:"15px 0px"}),left:Object(d.a)({marginLeft:"65px"},e.breakpoints.down("sm"),{padding:"10px",marginLeft:"0px"}),right:{},header:{padding:"15px 24px",background:"#fff"},bottom:{padding:"16px 22px",background:"#fff",borderTop:"1px solid #f0f0f0",boxShadow:"0 -2px 10px 0 rgb(0 0 0 /10%)"},placeorder:{background:"#fb641b",color:"#fff",borderRadius:2,width:250,height:50,display:"flex",marginLeft:"auto"}}})),st=function(){var e=Object(k.c)((function(e){return e.cart})).cartItems,t=it(),n=Object(k.b)(),a=function(e){n(function(e){return function(t){t({type:ze,payload:e})}}(e))},c=function(){var e=Object(C.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J({amount:500,email:"codeforinterview01@gmail.com"});case 2:t=e.sent,De({action:"https://securegw-stage.paytm.in/order/process",params:t});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(z.jsx)(z.Fragment,{children:e.length?Object(z.jsx)(p.a,{children:Object(z.jsxs)(Ce.a,{container:!0,className:t.component,children:[Object(z.jsxs)(Ce.a,{item:!0,lg:7,md:7,sm:12,xs:12,className:t.left,children:[Object(z.jsx)(p.a,{className:t.header,children:Object(z.jsxs)(x.a,{style:{fontWeight:600,fontSize:18},children:["My Cart (",e.length,")"]})}),e.map((function(e){return Object(z.jsx)(tt,{item:e,removeItem:a})})),Object(z.jsx)(p.a,{className:t.bottom,children:Object(z.jsx)(B.a,{onClick:function(){return c()},variant:"contained",className:t.placeorder,children:"PLACE ORDER"})})]}),Object(z.jsx)(Ce.a,{item:!0,lg:3,md:3,sm:12,xs:12,className:t.right,children:Object(z.jsx)(rt,{cartItems:e})})]})}):Object(z.jsx)(at,{})})},ot=n(46),lt=n(240),dt=n(251),ut=Object(a.createContext)(null),jt=function(e){var t=e.children,n=Object(ot.a)({overrides:{MuiDialog:{paperWidthSm:{maxWidth:"unset"}},MuiDialogContent:{root:{padding:0,"&:first-child":{paddingTop:0}}},MuiTableCell:{root:{borderBottom:"none"}}}});return Object(z.jsx)(ut.Provider,{children:Object(z.jsxs)(lt.a,{theme:n,children:[Object(z.jsx)(dt.a,{}),t]})})};var pt=function(){return Object(z.jsx)(jt,{children:Object(z.jsx)(ie,{children:Object(z.jsxs)(s.a,{className:"App",children:[Object(z.jsx)(pe,{}),Object(z.jsxs)(o.c,{children:[Object(z.jsx)(o.a,{exact:!0,path:"/",element:Object(z.jsx)(Xe,{})}),Object(z.jsx)(o.a,{exact:!0,path:"/cart",element:Object(z.jsx)(st,{})}),Object(z.jsx)(o.a,{exact:!0,path:"/product/:id",element:Object(z.jsx)(Me,{})})]})]})})})},bt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,256)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},mt=n(64),ft=n(122),xt=n(121),ht=n(123),gt=Object(mt.combineReducers)({getProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return{products:t.payload};case E:return{error:t.payload};default:return e}},getProductDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return{product:t.payload};case P:return{error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Re:var n=t.payload,a=e.cartItems.find((function(e){return e.id===n.id}));if(a)return;return Object(M.a)(Object(M.a)({},e),{},{cartItems:[].concat(Object(ht.a)(e.cartItems),[n])});case ze:return Object(M.a)(Object(M.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload}))});default:return e}}}),Ot=[ft.a],wt=Object(mt.createStore)(gt,Object(xt.composeWithDevTools)(mt.applyMiddleware.apply(void 0,Ot)));i.a.render(Object(z.jsx)(k.a,{store:wt,children:Object(z.jsx)(c.a.StrictMode,{children:Object(z.jsx)(pt,{})})}),document.getElementById("root")),bt()}},[[196,1,2]]]);
//# sourceMappingURL=main.6e7490a7.chunk.js.map