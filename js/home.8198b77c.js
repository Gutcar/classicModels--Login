(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"2e6d":function(t,e,s){"use strict";s("b2d0")},"6e51":function(t,e,s){"use strict";s("71c2")},"71c2":function(t,e,s){},b022:function(t,e,s){t.exports=s.p+"img/Vitrina.46a26179.png"},b2d0:function(t,e,s){},bb51:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",{attrs:{"no-gutters":""}},[a("b-col",[a("NavBar")],1)],1),a("b-row",{staticClass:"home--bordes",attrs:{"no-gutters":""}},[a("b-col",{staticClass:"bg-light px-0",attrs:{cols:"12"}},[a("nav",{staticStyle:{"--bs-breadcrumb-divider":"'>>'"},attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Home")])])]),a("div",{staticClass:"text-center my-3"},[a("img",{staticClass:"img-fluid",attrs:{alt:"Vitrina",src:s("b022")}})])])],1),a("section",[a("b-row",{staticClass:"home--bordes",attrs:{"no-gutters":""}},[a("b-col",{staticClass:"bg-light px-0",attrs:{cols:"12"}},[a("h2",{staticClass:"display-5"},[t._v("Bienvenido")]),a("p",[t._v("Bienvenido al sistema de Ordenes e Inventario de ClassicModes")]),a("b-row",[a("b-col",{staticClass:"my-4 my-md-0",attrs:{md:"6"}},[a("b-row",{attrs:{"align-v":"center"}},[a("b-col",{attrs:{md:"6"}},[a("div",{staticClass:"home--porcentaje home--texto__aling-center"},[t._v(" "+t._s(100*parseInt(t.Dashboard.kpis[0].entregadas)/(parseInt(t.Dashboard.kpis[0].entregadas)+parseInt(t.Dashboard.kpis[0].pendientes)))+"% "),a("p",{staticClass:"home--pequeno .home--texto__aling-center"},[a("router-link",{attrs:{to:{name:"ordenes-detalle"}}},[t._v("Ver Detalles")])],1)])]),a("b-col",[a("h5",{staticClass:"home--texto__aling-center"},[t._v(" "+t._s(t.Dashboard.kpis[0].nombre)+" ")]),a("b-row",[a("b-col",[a("p",{staticClass:"home--grande home--texto__aling-center"},[t._v(" "+t._s(t.Dashboard.kpis[0].entregadas)+" ")]),a("p",{staticClass:"home--texto__aling-center"},[t._v(" Ordenes Entregadas ")])]),a("b-col",[a("p",{staticClass:"home--grande home--texto__aling-center"},[t._v(" "+t._s(t.Dashboard.kpis[0].pendientes)+" ")]),a("p",{staticClass:"home--texto__aling-center"},[t._v(" Ordenes Pendientes ")])])],1)],1)],1)],1),a("b-col",{staticClass:"my-4 my-md-0",attrs:{md:"6"}},[a("b-row",{attrs:{"align-v":"center"}},[a("b-col",{attrs:{md:"6"}},[a("div",{staticClass:"home--porcentaje home--texto__aling-center"},[t._v(" "+t._s(100*parseInt(t.Dashboard.kpis[1].atrasadas)/parseInt(t.Dashboard.kpis[1].totales))+"% "),a("p",{staticClass:"home--pequeno"},[a("router-link",{attrs:{to:{name:"ordenes-detalle"}}},[t._v("Ver Detalles")])],1)])]),a("b-col",[a("h5",{staticClass:"home--texto__aling-center"},[t._v(" "+t._s(t.Dashboard.kpis[1].nombre)+" ")]),a("b-row",[a("b-col",[a("p",{staticClass:"home--grande home--texto__aling-center"},[t._v(" "+t._s(t.Dashboard.kpis[1].totales)+" ")]),a("p",{staticClass:"home--texto__aling-center"},[t._v("Ordenes Totales")])]),a("b-col",[a("p",{staticClass:"home--grande home--texto__aling-center"},[t._v(" "+t._s(t.Dashboard.kpis[1].atrasadas)+" ")]),a("p",{staticClass:"home--texto__aling-center"},[t._v("Ordenes Atrasadas")])])],1)],1)],1)],1)],1)],1)],1)],1),a("section",[a("b-row",{staticClass:"home--bordes",attrs:{"no-gutters":""}},[a("b-col",{staticClass:"bg-light",attrs:{cols:"12"}},[a("b-row",[a("b-col",{staticClass:"mb-md-0 mb-5"},[a("h2",[t._v("Últimas Ordenes")]),a("Tabla",{staticClass:"p-md-4",attrs:{tipoFecha:"Entrega",estadoEx:"Estado",ordenes:t.Dashboard.ultimasOrdenes}})],1),a("b-col",[a("h2",[t._v("Últimas Devoluciones")]),a("Tabla",{staticClass:"p-md-4",attrs:{tipoFecha:"Devolución",estadoEx:"",ordenes:t.Dashboard.ultimasDevoluciones}})],1)],1)],1)],1)],1)],1)},o=[],r=s("5530"),n=s("d000"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table"},[s("thead",{staticClass:"thead-dark"},[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("N°Orden")]),s("th",{attrs:{scope:"col"}},[t._v("Cliente")]),s("th",{attrs:{scope:"col"}},[t._v("Fecha "+t._s(t.tipoFecha))]),""!==t.estadoEx?s("th",{attrs:{scope:"col"}},[t._v(t._s(t.estadoEx))]):t._e(),s("th",{attrs:{scope:"col"}})])]),s("tbody",t._l(t.ordenes,(function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(e.num_orden))]),s("td",[t._v(t._s(e.cliente))]),s("td",[t._v(t._s(e.fecha_entrega))]),s("td",[t._v(t._s(e.estado))]),s("td",[s("span",{staticClass:"btn-outline-primary"},[s("router-link",{attrs:{to:{name:"ordenes-detalle"}}},[t._v("Ver Detalles")])],1)])])})),0)])])},l=[],c={name:"Tabla",props:{tipoFecha:String,estadoEx:String,ordenes:Array}},d=c,b=(s("2e6d"),s("2877")),_=Object(b["a"])(d,i,l,!1,null,"4fc570e0",null),h=_.exports,m=s("2f62"),p={components:{NavBar:n["a"],Tabla:h},created:function(){this.$store.dispatch("Dashboard/getDashboard")},computed:Object(r["a"])({},Object(m["b"])(["Dashboard"]))},v=p,u=(s("6e51"),Object(b["a"])(v,a,o,!1,null,"7e2cb0ef",null));e["default"]=u.exports}}]);
//# sourceMappingURL=home.8198b77c.js.map