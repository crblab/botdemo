(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3725:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return Z}});var t=a(9008),r=a(2982),n=a(885),i=a(7294),c=a(5861),l=a(7757),o=a.n(l),m=a(6049),d=a(3802),x=a(4586),u=a(5893);var h=function(e){var s=e.addPost,a=(0,i.useRef)(null),t=(0,i.useRef)(null),r=(0,i.useState)(null),n=r[0],l=r[1],h=function(){var e=(0,c.Z)(o().mark((function e(s){var a,t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("post_detail",s),e.next=4,fetch("https://socialbotapi.cerebro.host/postgen/",{method:"POST",body:a});case 4:return t=e.sent,e.next=7,t.text();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),f=function(){var e=(0,c.Z)(o().mark((function e(t){var r,n,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=a.current.value,a.current.value){e.next=4;break}return e.abrupt("return");case 4:return a.current.value="Posting... Please wait!",a.current.disabled=!0,e.next=8,h(r);case 8:n=e.sent,i={id:(0,x.Z)(),name:"Mr.Kouhadi",message:n,timestamp:1580901774643,image:"/images/avatars/bakr_kouhadi.jpg"},s(i),a.current.value="",a.current.disabled=!1;case 13:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return(0,u.jsxs)("div",{className:"bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6",children:[(0,u.jsxs)("div",{className:"flex space-x-4 p-4 items-center",children:[(0,u.jsx)("img",{className:"rounded-full",src:"/images/avatars/bakr_kouhadi.jpg",width:"40",height:"40",layout:"fixed"}),(0,u.jsxs)("form",{className:"flex flex-1",children:[(0,u.jsx)("input",{className:"rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none",type:"text",ref:a,placeholder:"What's on your mind?"}),(0,u.jsx)("button",{hidden:!0,type:"submit",onClick:f,children:"Submit"})]}),n&&(0,u.jsxs)("div",{onClick:function(){l(null)},className:"flex flex-col filter hover:brightness-110 transition  duration-150 transform hover:scale-105 cursor-pointer",children:[(0,u.jsx)("img",{className:"h-10 object-contain",src:n,alt:""}),(0,u.jsx)("p",{className:"text-xs text-red-500 text-center",children:"Remove"})]})]}),(0,u.jsxs)("div",{className:"flex justify-evenly p-3 border-t",children:[(0,u.jsxs)("div",{className:"inputIcon",children:[(0,u.jsx)(d.y3v,{className:"h-7 text-red-500"}),(0,u.jsx)("p",{className:"text-xs sm:text-sm xl:text-base",children:"Live Video"})]}),(0,u.jsxs)("div",{onClick:function(){return t.current.click()},className:"inputIcon",children:[(0,u.jsx)(d.xmR,{className:"h-7 text-green-400"}),(0,u.jsx)("p",{className:"text-xs sm:text-sm xl:text-base",children:"Photo/Video"}),(0,u.jsx)("input",{ref:t,onChange:function(e){var s=new FileReader;e.target.files[0]&&s.readAsDataURL(e.target.files[0]),s.onload=function(e){l(e.target.result)}},type:"file",hidden:!0})]}),(0,u.jsxs)("div",{className:"inputIcon",children:[(0,u.jsx)(m.OdW,{className:"h-7 text-yellow-300"}),(0,u.jsx)("p",{className:"text-xs sm:text-sm xl:text-base",children:"Feeling/Activity"})]})]})]})};var f=function(e){var s=e.name,a=e.message,t=e.postImage,r=e.image;return e.timestamp,(0,u.jsxs)("div",{className:"flex flex-col",children:[(0,u.jsxs)("div",{className:"p-5 bg-white mt-5 rounded-t-2xl shadow-sm",children:[(0,u.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,u.jsx)("img",{className:"rounded-full",src:r,width:40,height:40,alt:""}),(0,u.jsx)("div",{children:(0,u.jsx)("p",{className:"font-medium font-semibold capitalize",children:s})})]}),(0,u.jsx)("p",{className:"pt-2",children:a})]}),t&&(0,u.jsx)("div",{className:"relative h-56 md:h-96 bg-white",children:(0,u.jsx)("img",{src:t,objectFit:"cover",layout:"fill"})}),(0,u.jsxs)("div",{className:"flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t",children:[(0,u.jsxs)("div",{className:"inputIcon rounded-none rounded-bl-2xl",children:[(0,u.jsx)(m.Z7j,{className:"h-4"}),(0,u.jsx)("p",{className:"text-xs sm:text-base",children:"Like"})]}),(0,u.jsxs)("div",{className:"inputIcon rounded-none",children:[(0,u.jsx)(m.iUF,{className:"h-4"}),(0,u.jsx)("p",{className:"text-xs sm:text-base",children:"Comment"})]}),(0,u.jsxs)("div",{className:"inputIcon rounded-none rounded-br-2xl",children:[(0,u.jsx)(m.aAc,{className:"h-4"}),(0,u.jsx)("p",{className:"text-xs sm:text-base",children:"Share"})]})]})]})};var p=function(e){var s=e.posts;return(0,u.jsx)("div",{children:s.map((function(e){return(0,u.jsx)(f,{name:e.name,message:e.message,email:e.email,timestamp:e.timestamp,image:e.image,postImage:e.postImage},e.id)}))})};var j=function(e){var s=e.name,a=e.src,t=e.profile;return(0,u.jsxs)("div",{className:"relative h-14 w-14 md:h-20 md:w-20  lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse",children:[(0,u.jsx)("img",{className:"absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10",src:t,width:40,height:40,layout:"fixed",objectFit:"cover"}),(0,u.jsx)("img",{className:"object-cover filter brightness-75 rounded-full lg:rounded-3xl",src:a,layout:"fill"}),(0,u.jsx)("p",{className:"absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-sm font-bold truncate text-white",children:s})]})},g=[{name:"Mr.Kouhadi",src:"/images/users/bakr_kouhadi.jpg",profile:"/images/avatars/bakr_kouhadi.jpg"},{name:"Hamza Mouiret",src:"/images/users/hamza_muiret.jpg",profile:"/images/avatars/hamza_muiret.jpg"},{name:"Ayoub BebiiiLa",src:"/images/users/ayoub_hakkam.jpg",profile:"/images/avatars/ayoub_hakkam.jpg"},{name:"Samir Lakhssam",src:"/images/users/samir_lakhsam.jpg",profile:"/images/avatars/samir_lakhssam.jpg"},{name:"Denzel Washington",src:"/images/users/denzel_washington.jpg",profile:"/images/avatars/denzel_washington.jpg"}];var v=function(){return(0,u.jsx)("div",{className:"flex justify-center space-x-3 mx-auto",children:g.map((function(e){return(0,u.jsx)(j,{name:e.name,src:e.src,profile:e.profile},e.src)}))})},b=function(){var e=i.useState([]),s=(0,n.Z)(e,2),a=s[0],t=s[1];return(0,u.jsx)("div",{className:" flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide",children:(0,u.jsxs)("div",{className:"mx-auto max-w-md md:max-w-lg lg:max-w-2xl",children:[(0,u.jsx)(v,{}),(0,u.jsx)(h,{addPost:function(e){return t((function(s){return[].concat((0,r.Z)(s),[e])}))}}),(0,u.jsx)(p,{posts:a})]})})},N=function(e){var s=e.Icon;return(0,u.jsx)("div",{className:"flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group",children:(0,u.jsx)(s,{className:"h-5 sm:h-7 mx-auto text-gray-500 text-center group-hover:text-blue-500"})})},w=function(){return(0,u.jsxs)("div",{className:"sticky top-0 z-50 bg-white p-2 lg:px-2 shadow-md flex items-center",children:[(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsx)("img",{src:"https://links.papareact.com/5me",width:40,height:40,layout:"fixed"}),(0,u.jsxs)("div",{className:"flex items-center ml-2 rounded-full p-2 bg-gray-100",children:[(0,u.jsx)(m.W1M,{className:"h-6 text-gray-600"}),(0,u.jsx)("input",{className:" hidden md:inline-flex flex-shrink ml-2 items-center bg-transparent outline-none placeholder-gray-500:",type:"text",placeholder:"Search Facebook"})]})]}),(0,u.jsx)("div",{className:"flex justify-center flex-grow",children:(0,u.jsxs)("div",{className:"flex space-x-6 md:space-x-2",children:[(0,u.jsx)(N,{Icon:d.tvw}),(0,u.jsx)(N,{Icon:m.U65}),(0,u.jsx)(N,{Icon:m.o1U}),(0,u.jsx)(N,{Icon:m.Q1y}),(0,u.jsx)(N,{Icon:d.vxs})]})}),(0,u.jsxs)("div",{className:"flex items-center justify-end sm:space-x-2",children:[(0,u.jsx)("div",{className:"flex items-center justify-between hover:bg-gray-200 p-[6px] rounded-full"}),(0,u.jsx)(d.XOb,{className:"icon"}),(0,u.jsx)(d.kBi,{className:"icon"}),(0,u.jsx)(d.Dkj,{className:"icon"}),(0,u.jsx)(d.v4q,{className:"icon"})]})]})};var y=function(e){var s=e.src,a=e.Icon,t=e.title;return(0,u.jsxs)("div",{className:"flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer",children:[s&&(0,u.jsx)("img",{className:"rounded-full",src:s,width:30,height:30,layout:"fixed"}),a&&(0,u.jsx)(a,{className:"h-8 w-8 text-blue-500"}),(0,u.jsx)("p",{className:"hidden sm:inline-flex font-medium",children:t})]})},k=function(){return(0,u.jsxs)("div",{className:"p-2 mt-5 max-w-[600px] xl:min-w-[300px]",children:[(0,u.jsx)(y,{Icon:d.oyc,title:"Friends"}),(0,u.jsx)(y,{Icon:m.vxs,title:"Groups"}),(0,u.jsx)(y,{Icon:m.b_c,title:"Marketplace"}),(0,u.jsx)(y,{Icon:d.DAM,title:"Watch"}),(0,u.jsx)(y,{Icon:d.Que,title:"Events"}),(0,u.jsx)(y,{Icon:d.T39,title:"Memories"}),(0,u.jsx)(y,{Icon:m.v4q,title:"See More"})]})};var _=function(e){var s=e.src,a=e.name;return(0,u.jsxs)("div",{className:"flex items-center space-x-3 mb-2  relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl",children:[(0,u.jsx)("img",{className:"rounded-full",objectFit:"cover",src:s,width:50,height:50,layout:"fixed"}),(0,u.jsx)("p",{children:a}),(0,u.jsx)("div",{className:"absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce"})]})},I=[{name:"Hamza Mouiret",profile:"/images/avatars/hamza_muiret.jpg"},{name:"Ayoub BebiiiLa",profile:"/images/avatars/ayoub_hakkam.jpg"},{name:"Samir Lakhssam",profile:"/images/avatars/samir_lakhssam.jpg"},{name:"Denzel Washington",profile:"/images/avatars/denzel_washington.jpg"}];var z=function(){return(0,u.jsxs)("div",{className:"hidden lg:flex flex-col w-60 p-2 mt-5",children:[(0,u.jsxs)("div",{className:"flex justify-between items-center text-gray-500 mb-5",children:[(0,u.jsx)("h2",{className:"text-xl",children:"Contacts"}),(0,u.jsxs)("div",{className:"flex space-x-2",children:[(0,u.jsx)(d.y3v,{className:"h-6"}),(0,u.jsx)(m.W1M,{className:"h-6"}),(0,u.jsx)(d.nWS,{className:"h-6"})]})]}),I.map((function(e){return(0,u.jsx)(_,{src:e.profile,name:e.name},e.profile)}))]})},F=function(){var e=(0,c.Z)(o().mark((function e(s){var a,t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("message",s),e.next=4,fetch("https://socialbotapi.cerebro.host/chat/",{method:"POST",body:a});case 4:return t=e.sent,e.next=7,t.text();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();var S=function(){var e="/images/avatars/hamza_muiret.jpg",s=i.useState([]),a=(0,n.Z)(s,2),t=a[0],l=a[1],m=i.useState(""),x=(0,n.Z)(m,2),h=x[0],f=x[1],p=i.createRef();i.useEffect((function(){p.current&&(p.current.scrollTop=9999)}),[t]);var j=function(){h&&(l((function(e){return[].concat((0,r.Z)(e),[{user:"me",message:h}])})),f(""),(0,c.Z)(o().mark((function e(){var s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(h);case 2:s=e.sent,l((function(e){return[].concat((0,r.Z)(e),[{user:"bot",message:s}])}));case 4:case"end":return e.stop()}}),e)})))())};return(0,u.jsxs)("div",{className:"fixed bottom-0 right-32 border w-80 bg-white flex flex-col rounded-lg",children:[(0,u.jsxs)("div",{className:"flex border justify-between items-center p-2 gap-2 rounded-t-lg",children:[(0,u.jsxs)("div",{className:"flex items-center gap-2",children:[(0,u.jsx)("img",{className:"rounded-full",objectFit:"cover",src:e,width:40,height:40,layout:"fixed"}),(0,u.jsx)("div",{children:"Hamza Mouiret"})]}),(0,u.jsxs)("div",{className:"flex items-center gap-2",children:[(0,u.jsx)(d.V_R,{className:"h-5 sm:h-7 text-gray-500 hover:text-blue-500 cursor-pointer"}),(0,u.jsx)(d.b0D,{className:"h-5 sm:h-7 text-gray-500 hover:text-blue-500 cursor-pointer"})]})]}),(0,u.jsx)("div",{className:"border h-72 p-2 flex flex-col gap-2 overflow-x-hidden overflow-y-scroll",ref:p,children:t.map((function(s){var a=s.user,t=s.message;return(0,u.jsxs)("div",{className:"flex gap-2 items-end ".concat("me"===a?"flex-row-reverse":""),children:["bot"===a?(0,u.jsx)("img",{className:"rounded-full",objectFit:"cover",src:e,width:30,height:30}):"",(0,u.jsx)("div",{className:"".concat("me"===a?"bg-blue-500 text-white":"bg-gray-200","  p-2 rounded w-full"),children:t}),(0,u.jsx)("div",{className:"w-16"})]})}))}),(0,u.jsxs)("div",{className:"border flex items-center p-2 gap-2",children:[(0,u.jsx)("input",{className:"flex-1 border bg-gray-200 px-3 py-1 outline-none rounded-full",value:h,onKeyUp:function(e){"Enter"===e.code&&j()},onChange:function(e){return f(e.target.value)}}),(0,u.jsx)("img",{className:"cursor-pointer",objectFit:"cover",src:"/images/send-fill.svg",width:25,height:25,layout:"fixed",onClick:j})]})]})};function Z(){return(0,u.jsxs)("div",{className:"h-screen bg-gray-100 overflow-hidden",children:[(0,u.jsxs)(t.default,{children:[(0,u.jsx)("title",{children:"botdemo || by klx"}),(0,u.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,u.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,u.jsx)(w,{}),(0,u.jsxs)("main",{className:"flex",children:[(0,u.jsx)(k,{}),(0,u.jsx)(b,{}),(0,u.jsx)(z,{}),(0,u.jsx)(S,{})]})]})}},8581:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(3725)}])}},function(e){e.O(0,[719,774,888,179],(function(){return s=8581,e(e.s=s);var s}));var s=e.O();_N_E=s}]);