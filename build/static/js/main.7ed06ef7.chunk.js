(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{2:function(e,t,n){e.exports={pagination:"Pagination_pagination__18KcG",page:"Pagination_page__3PW4_",selected:"Pagination_selected__1yYUR",delete:"Pagination_delete__3BOvb",paginationContainer:"Pagination_paginationContainer__1NYv3",disabled:"Pagination_disabled__agVc2"}},21:function(e,t,n){},4:function(e,t,n){e.exports={icons:"UsersList_icons__1EVgd",readOnly:"UsersList_readOnly__2Fy4T",selected:"UsersList_selected__HYgUF",table:"UsersList_table__3mgtC"}},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(15),i=n.n(s),r=(n(21),n(5)),l=n(16),u=n.n(l),d=(n(40),n(2)),o=n.n(d),f=n(0),j=function(e){var t,n=e.usersLength,c=e.page,a=e.setPage,s=e.deleteSelected,i=(t=n,Math.ceil(t/10)),r=function(e){a(e)},l=function(e){e<1?e=1:e>i&&(e=i),a(e)},u=[];u.push(Object(f.jsx)("div",{className:"".concat(o.a.page," ").concat(1===c?o.a.disabled:""),onClick:function(){return r(1)},children:Object(f.jsx)("i",{className:"fas fa-angle-double-left"})},-3)),u.push(Object(f.jsx)("div",{className:"".concat(o.a.page," ").concat(1===c?o.a.disabled:""),onClick:function(){return l(c-1)},children:Object(f.jsx)("i",{className:"fas fa-angle-left"})},-2));for(var d=function(e){u.push(Object(f.jsx)("div",{onClick:function(){return r(e)},className:"".concat(o.a.page," ").concat(c===e?o.a.selected:""),children:e},e))},j=1;j<=i;j++)d(j);return u.push(Object(f.jsx)("div",{className:"".concat(o.a.page," ").concat(c===i?o.a.disabled:""),onClick:function(){return l(c+1)},children:Object(f.jsx)("i",{className:"fas fa-angle-right"})},-1)),u.push(Object(f.jsx)("div",{className:"".concat(o.a.page," ").concat(c===i?o.a.disabled:""),onClick:function(){return r(i)},children:Object(f.jsx)("i",{className:"fas fa-angle-double-right"})},0)),Object(f.jsxs)("div",{className:o.a.paginationContainer,children:[Object(f.jsx)("button",{className:o.a.delete,onClick:function(){return s()},children:"Delete Selected"}),Object(f.jsx)("div",{className:o.a.pagination,children:u})]})},b=n(4),h=n.n(b),O={PAGE_SIZE:10},g=function(e){var t=e.user,n=e.deleteUser,a=e.editUser,s=e.saveUser,i=e.selectOne,r=Object(c.useRef)(null),l=Object(c.useRef)(null),u=Object(c.useRef)(null);return Object(f.jsxs)("tr",{className:t.selected?h.a.selected:"",children:[Object(f.jsx)("td",{children:Object(f.jsx)("label",{for:"check-".concat(t.id),children:Object(f.jsx)("input",{id:"check-".concat(t.id),type:"checkbox",data:"".concat(t.selected),onChange:function(){return i(t.id)},checked:t.selected})})}),Object(f.jsx)("td",{children:Object(f.jsx)("input",{className:t.edit?h.a.editable:h.a.readOnly,readOnly:!t.edit,type:"text",ref:r,name:"name",defaultValue:t.name})}),Object(f.jsx)("td",{children:Object(f.jsx)("input",{className:t.edit?h.a.editable:h.a.readOnly,readOnly:!t.edit,type:"email",ref:l,name:"email",defaultValue:t.email})}),Object(f.jsx)("td",{children:Object(f.jsx)("input",{className:t.edit?h.a.editable:h.a.readOnly,readOnly:!t.edit,type:"text",ref:u,name:"role",defaultValue:t.role})}),Object(f.jsxs)("td",{className:h.a.icons,children:[t.edit?Object(f.jsx)("i",{onClick:function(){return s(t.id,r,l,u)},className:"fas fa-save"}):Object(f.jsx)("i",{onClick:function(){return a(t.id)},className:"fas fa-edit"}),Object(f.jsx)("i",{onClick:function(){return n(t.id)},className:"fas fa-trash-alt"})]})]},t.id)},m=function(e){var t=e.users,n=e.deleteUser,a=e.editUser,s=e.saveUser,i=e.selectAll,r=e.selectOne,l=e.selectAllRef,u=e.setPage,d=e.page;Object(c.useEffect)((function(){0===t.length&&d>1&&u(d-1)}),[d,u,t.length]);for(var o=[],j=t.filter((function(e){return e.show})).length;j<O.PAGE_SIZE;j++)o.push(Object(f.jsx)("tr",{},j));return 0===t.length&&1===d?Object(f.jsx)("div",{children:"NO USERS IN THE SYSTEM"}):Object(f.jsxs)("table",{className:h.a.table,children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:Object(f.jsx)("input",{type:"checkbox",ref:l,onChange:function(e){i(e)},name:"selectAll"})}),Object(f.jsx)("th",{children:"Name"}),Object(f.jsx)("th",{children:"Email"}),Object(f.jsx)("th",{children:"Role"}),Object(f.jsx)("th",{children:"Action"})]})}),Object(f.jsxs)("tbody",{children:[t.map((function(e){return e.show?Object(f.jsx)(g,{user:e,deleteUser:n,selectOne:r,saveUser:s,editUser:a},e.id):""})),o]})]})};function x(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(r.a)(s,2),l=i[0],d=i[1],o=Object(c.useState)(1),b=Object(r.a)(o,2),h=b[0],O=b[1],g=Object(c.useRef)(null),x={PAGE_SIZE:10};Object(c.useEffect)((function(){!function(e){u.a.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json").then((function(t){e(function(e){return e.map((function(e){return e.selected=!1,e.edit=!1,e.show=!0,e}))}(t.data))})).catch((function(e){return console.log(e)}))}(a)}),[]);var p=function(e){return(e-1)*x.PAGE_SIZE}(h);return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("input",{className:"search",type:"text",placeholder:"Search by Name, Email or Role",onChange:function(e){O(1),a(function(e,t){var n=e.toLowerCase();return t.map((function(e){return e.name.toLowerCase().includes(n)||e.email.toLowerCase().includes(n)||e.role.toLowerCase().includes(n)?(e.show=!0,e):(e.show=!1,e)}))}(e.target.value,n))}}),Object(f.jsx)(m,{page:h,setPage:O,selectAll:function(e){var t=n.filter((function(e){return e.show})).slice(p,p+x.PAGE_SIZE).map((function(e){return e.id})),c=n.map((function(n){return t.includes(n.id)?(n.selected=e.target.checked,n):n}));a(c),d(!l)},selectAllRef:g,selectOne:function(e){var t=n,c=t.findIndex((function(t){return t.id===e}));t[c].selected=!t[c].selected,a(t),d((function(e){return!e}))},saveUser:function(e,t,c,s){var i=n,r=i.findIndex((function(t){return t.id===e}));i[r].name=t.current.value,i[r].email=c.current.value,i[r].role=s.current.value,i[r].edit=!1,a(i),d((function(e){return!e}))},editUser:function(e){var t=n,c=t.findIndex((function(t){return t.id===e}));t[c].edit=!0,a(t),d((function(e){return!e}))},deleteUser:function(e){var t=n.filter((function(t){return t.id!==e}));a(t),d((function(e){return!e}))},users:n.filter((function(e){return e.show})).slice(p,p+x.PAGE_SIZE)}),Object(f.jsx)(j,{usersLength:n.filter((function(e){return e.show})).length,page:h,setPage:O,deleteSelected:function(){window.confirm("The Selected users will be deleted")&&(a((function(e){return e.filter((function(e){return!e.selected}))})),g.current.checked=!1)}})]})}var p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root")),p()}},[[42,1,2]]]);
//# sourceMappingURL=main.7ed06ef7.chunk.js.map