(this.webpackJsonpnestorreproter=this.webpackJsonpnestorreproter||[]).push([[0],{165:function(e,t,a){},429:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(249),c=a(32),i=a(52),o=a(13),s=a(28),l=a.n(s),u=a(155),d=a.n(u),j=a(186),m=a.n(j),b=a(271),f=a(16),h=["API Call Finalization","Build process","Coding","POC","Scripting","API Call Integration","Code Reforming","Bug Fixing","Code Review","Framework setup","HTML Integration"],p=["Manual Testing","Automated Test Development","Automated Testing","Testing"],v=["Component Design","Design Analysis","Icon Design","Styleguide","UI Design","UI Review","UX Review","UX Review (Secondary)","Wireframing"],g=["Mentoring","Blog Writing","Blog","Bench Time","Document study","Knowledge Transfer","Self Learning","Training","Training and Development","Technical Guidance"],O=["Design Documentation","Documentation","Interaction Documentation","Persona Creation","Research and Analysis","Review Documentation","Styleguide Documentation","Test Case Documentation","User Support"],x=["Meeting","Company Meetings","Project Meetings","Presentation"],y=["Actual Event","Analysis","Audit","Bank & cash Transactions","Branding","Business Development","Comp Time","Company Event","Coordination","Content","Content Management","Content Management Review","Content Review","Employee Exit Formalities","Employee Joining Formalities","Event Coordination","Event Planning","GST","General Administration","Grievance Handling","Invoices","Miscellaneous (Clutch, events, collaboration with finance etc)","Monitoring","P.F, P.I, ESI","Payroll","Payslips","Performance Management","Project Management","Project estimations","Recruitment","Recruitment and Selection","Reviews (Mid Year)  & One-to-one Discussions","Sales","Sales Cycle Management","Schedule Management","Social Media Content","System Support","TDS & Income tax","User Analysis","User Support"],k=["development","qa","design","learning","documentation","meetings","others"],T=function(e){var t=e.map((function(e){return e.resourcename}));t=Object(f.a)(new Set(t));var a=e.map((function(e){return e.taskType}));a=Object(f.a)(new Set(a));var n=[];return t.forEach((function(t){a.forEach((function(a){var r=e.filter((function(e){return e.resourcename===t&&e.taskType===a}));if(r.length>0){var c=r.reduce((function(e,t){return e+Number(t.TotalHours)}),0);n=[].concat(Object(f.a)(n),[{resourcename:t,taskType:a,TotalHours:c}])}}))})),n},S=function(e){var t=[];return e.forEach((function(e){e.dates&&e.dates.length>0&&e.dates.forEach((function(a){a.TasksList&&a.TasksList.length>0&&a.TasksList.forEach((function(a){var n;t=[].concat(Object(f.a)(t),[Object(c.a)(Object(c.a)({},a),{},{taskType:(n=a.taskType,h.includes(n)?"development":p.includes(n)?"qa":v.includes(n)?"design":g.includes(n)?"learning":O.includes(n)?"documentation":x.includes(n)?"meetings":y.includes(n)?"others":"unknown-".concat(n)),employeeid:e.employeeid,resourcename:e.resourcename,email:e.email})])}))}))})),t},D=function(e){return"development"===e?0:"qa"===e?60:"design"===e?120:"learning"===e?180:"documentation"===e?90:"meetings"===e?240:"others"===e?340:void 0},w=function(e){return"development"===e?"Development":"qa"===e?"Quality Assuarance":"design"===e?"Design":"learning"===e?"Learning":"documentation"===e?"Documentation":"meetings"===e?"Meetings":"others"===e?"Others":void 0},N=(a(165),a(272)),P=a(3),C=function(e){var t=e.data;return Object(P.jsx)(N.a,{data:t,margin:{top:40,right:80,bottom:80,left:80},innerRadius:.5,padAngle:.7,cornerRadius:3,activeOuterRadiusOffset:8,borderWidth:1,borderColor:{from:"color"},arcLinkLabelsSkipAngle:10,arcLinkLabelsTextColor:"#333333",arcLinkLabelsThickness:2,arcLinkLabelsColor:{from:"color"},arcLabelsSkipAngle:10,arcLabelsTextColor:{from:"color",modifiers:[["darker",2]]},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"rgba(255, 255, 255, 0.3)",size:0,padding:1,stagger:!0}],fill:t.map((function(e){return{match:{id:e.id},id:"dots"}})),legends:[{anchor:"top-right",direction:"column",justify:!1,translateX:60,translateY:0,itemsSpacing:.75,itemWidth:100,itemHeight:18,itemTextColor:"#999",itemDirection:"left-to-right",itemOpacity:1,symbolSize:18,symbolShape:"circle",effects:[{on:"hover",style:{itemTextColor:"#000"}}]}]})},E=a(513),L=a(517),I=a(521),A=a(525),M=a(522),R=a(524),H=a(18),F=a(270),B=function(e){var t=e.data;return Object(P.jsx)(F.a,{data:t,keys:k,indexBy:"label",margin:{top:34,right:130,bottom:300,left:60},padding:.2,valueScale:{type:"linear"},indexScale:{type:"band",round:!0},colors:{scheme:"nivo"},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10}],fill:[{match:{id:"qa"},id:"dots"},{match:{id:"design"},id:"lines"}],borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:null,axisRight:null,enableLabel:!1,axisBottom:{tickSize:5,tickPadding:5,tickRotation:90,legend:"Project",legendPosition:"middle",legendOffset:200},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Hours",legendPosition:"middle",legendOffset:-40},labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",1.6]]},legends:[{dataFrom:"keys",anchor:"top-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,effects:[{on:"hover",style:{itemOpacity:1}}]}],role:"application",ariaLabel:"Nivo bar chart demo",barAriaLabel:function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}})},V=a.p+"static/media/down-chevron.4b6ccfa3.svg",q=function(e){e.projectList,e.sid,e.reqUrl,e.projectsList,e.setProjectsList,e.selectedProject,e.setSelectedProject,e.selectedProjectData,e.setSelectedProjectData,e.getTimeData,e.getOrgData;var t=e.OverallDataState,a=Object(n.useState)([]),r=Object(o.a)(a,2),i=r[0],s=r[1],l=Object(n.useState)([]),u=Object(o.a)(l,2),d=u[0],j=u[1],m=Object(n.useState)([]),b=Object(o.a)(m,2),h=b[0],p=b[1],v=Object(n.useState)(!1),g=Object(o.a)(v,2);g[0],g[1];return Object(n.useEffect)((function(){if(t.length>0){var e=k.map((function(e){return{type:e,hours:0}}));t.forEach((function(t){t.data&&t.data.length&&t.data.forEach((function(t){e=e.map((function(e){return e.type===t.taskType?Object(c.a)(Object(c.a)({},e),{},{hours:e.hours+Number(t.TotalHours)}):e}))}))}));var a=[],n=k,r=e.reduce((function(e,t){return e+Number(t.hours)}),0);n.forEach((function(t){var n,c=null===(n=e.find((function(e){return e.type===t})))||void 0===n?void 0:n.hours,i=c?Number(c/r*100).toFixed(2):"0.00";a=[].concat(Object(f.a)(a),[{id:"".concat(w(t)," (").concat(i,"%)"),label:w(t),value:Number(c).toFixed(2),color:"hsl(".concat(D(t),", 70%, 50%)")}])})),s((function(){return Object(f.a)(a)}))}}),[t]),Object(n.useEffect)((function(){if(t.length>0){var e=[];t.forEach((function(t){var a=k.map((function(e){return{type:e,hours:0}}));t.data&&t.data.length>0&&t.data.forEach((function(e){a=a.map((function(t){return t.type===e.taskType?Object(c.a)(Object(c.a)({},t),{},{hours:t.hours+Number(e.TotalHours)}):t}))})),e=[].concat(Object(f.a)(e),[{name:t.name,type:"",hours:Number(a.reduce((function(e,t){return e+Number(t.hours)}),0)).toFixed(2)}],Object(f.a)(a.map((function(e){return Object(c.a)({name:""},e)}))))})),console.log(e),j((function(){return Object(f.a)(e)}))}}),[t]),Object(n.useEffect)((function(){if(t.length>0){var e=[];t.forEach((function(t){var a=k.map((function(e){return{type:e,hours:0}}));t.data&&t.data.length>0&&t.data.forEach((function(e){a=a.map((function(t){return t.type===e.taskType?Object(c.a)(Object(c.a)({},t),{},{hours:t.hours+Number(e.TotalHours)}):t}))}));var n={label:t.name};a.forEach((function(e){n=Object(c.a)(Object(c.a)({},n),{},Object(H.a)({},e.type,Number(e.hours).toFixed(2)))})),e=[].concat(Object(f.a)(e),[n])})),console.log("setOverallTaskBarData => ",e),p((function(){return Object(f.a)(e)}))}}),[t]),Object(P.jsxs)("div",{style:{position:"relative"},children:[Object(P.jsxs)("div",{className:"overall-view-container",children:[Object(P.jsx)("div",{className:"overall-table-view",children:Object(P.jsxs)("div",{className:"table",children:[Object(P.jsxs)("div",{className:"grid table_header",children:[Object(P.jsx)("div",{className:"header",children:"Name"}),Object(P.jsx)("div",{className:"header",children:"Category"}),Object(P.jsx)("div",{className:"header",children:"Time"})]}),d.length>0&&d.map((function(e){return Object(P.jsxs)("div",{className:"grid ".concat(e.name?"grid-border-top":""),children:[Object(P.jsx)("div",{children:e.name}),Object(P.jsx)("div",{children:w(e.type)}),Object(P.jsx)("div",{children:Number(e.hours).toFixed(2)})]})}))]})}),Object(P.jsx)("div",{className:"overall-pie-view",children:i.length>0&&Object(P.jsx)(C,{data:i})})]}),Object(P.jsxs)("div",{className:"scroll-btn",onClick:function(){var e;null===(e=document.getElementById("overall-bar-graph"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end",inline:"end"})},children:[Object(P.jsx)("span",{children:"Click to see all projects"}),Object(P.jsx)("img",{src:V,alt:"Scroll",title:"Scroll to bottom"})]}),h.length>0&&Object(P.jsx)("div",{id:"overall-bar-graph",children:Object(P.jsx)("div",{style:{width:"100%",height:"768px"},children:Object(P.jsx)(B,{data:h})})})]})},U=function(e){var t=e.projectsList,a=(e.setProjectsList,e.selectedProject),r=e.setSelectedProject,s=e.selectedProjectData,u=e.setSelectedProjectData,d=e.getTimeData,j=(e.getOrgData,e.isLoading,e.setIsLoading),m=e.sid,b=e.reqUrl,h=Object(n.useState)("projectView"),p=Object(o.a)(h,2),v=p[0],g=p[1],O=Object(n.useState)("task"),x=Object(o.a)(O,2),y=x[0],k=x[1],T=Object(n.useState)([]),S=Object(o.a)(T,2),N=S[0],H=S[1],F=Object(n.useState)([]),B=Object(o.a)(F,2),V=B[0],U=B[1],Y=Object(n.useState)([]),z=Object(o.a)(Y,2),W=z[0],G=z[1];Object(n.useEffect)((function(){r([Object(c.a)({},t.filter((function(e){return"Active"===e.status}))[0])]),u([])}),[]),Object(n.useEffect)((function(){if(s.length>0){var e=[],t=s.map((function(e){return e.resourcename}));t=Object(f.a)(new Set(t));var a=s.map((function(e){return e.taskType}));a=Object(f.a)(new Set(a)),t.forEach((function(t){var n=s.filter((function(e){return e.resourcename===t})).reduce((function(e,t){return e+Number(t.TotalHours)}),0);e=[].concat(Object(f.a)(e),[{resourcename:t,taskType:"",TotalHours:n}]),a.forEach((function(a){var n=s.find((function(e){return e.resourcename===t&&e.taskType===a}));n&&(e=[].concat(Object(f.a)(e),[{resourcename:"",taskType:w(a),TotalHours:n.TotalHours}]))}))})),H((function(){return Object(f.a)(e)}))}}),[s]),Object(n.useEffect)((function(){if(s.length>0){var e=[],t=s.map((function(e){return e.taskType}));(t=Object(f.a)(new Set(t))).forEach((function(t){e=[].concat(Object(f.a)(e),[{id:w(t),label:w(t),value:Number(s.filter((function(e){return e.taskType===t})).reduce((function(e,t){return e+Number(t.TotalHours)}),0)).toFixed(2),color:"hsl(".concat(D(t),", 70%, 50%)")}])})),U((function(){return Object(f.a)(e)}))}}),[s]),Object(n.useEffect)((function(){if(s.length>0){var e=[],t=s.map((function(e){return e.resourcename}));(t=Object(f.a)(new Set(t))).forEach((function(t){e=[].concat(Object(f.a)(e),[{id:t,label:t,value:Number(s.filter((function(e){return e.resourcename===t})).reduce((function(e,t){return e+Number(t.TotalHours)}),0)).toFixed(2),color:"hsl(".concat(Math.floor(360*Math.random()),", 70%, 50%)")}])})),G((function(){return Object(f.a)(e)}))}}),[s]);var X=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,d(t[0]);case 4:j(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsxs)("div",{children:[Object(P.jsxs)("div",{className:"select-header",children:[Object(P.jsx)("div",{className:"header-btn",children:Object(P.jsx)(E.a,{color:"primary",variant:"outlined",onClick:function(){return g("overallView")},disabled:"overallView"===v,children:"Overall View"})}),Object(P.jsx)("div",{className:"header-btn",children:Object(P.jsx)(E.a,{color:"primary",variant:"outlined",onClick:function(){return g("projectView")},disabled:"projectView"===v,children:"Project View"})}),Object(P.jsx)(L.a,{className:"select-project",children:"projectView"===v&&Object(P.jsx)(I.a,{variant:"outlined",labelId:"select-project-label",id:"select-project",value:a.length>0?a[0].projectId:"",onChange:function(e){var a=e.target.value,n=t.filter((function(e){return e.projectId===a}));r((function(){return Object(f.a)(n)})),X(n).catch()},children:t.filter((function(e){return"Active"===e.status})).map((function(e){return Object(P.jsx)(A.a,{value:e.projectId,children:e.name})}))})})]}),"overallView"===v&&Object(P.jsx)(q,Object(c.a)({projectList:t,sid:m,reqUrl:b},e)),"projectView"===v&&Object(P.jsxs)("div",{className:"view__data",children:[Object(P.jsxs)("div",{className:"table overall-table-view",children:[Object(P.jsxs)("div",{className:"grid table_header",children:[Object(P.jsx)("div",{className:"header",children:"Name"}),Object(P.jsx)("div",{className:"header",children:"Category"}),Object(P.jsx)("div",{className:"header",children:"Time"})]}),N.length>0&&N.map((function(e){return Object(P.jsxs)("div",{className:"grid ".concat(e.resourcename?"grid-border-top":""),children:[Object(P.jsx)("div",{children:e.resourcename}),Object(P.jsx)("div",{children:e.taskType}),Object(P.jsx)("div",{children:Number(e.TotalHours).toFixed(2)})]})}))]}),Object(P.jsxs)("div",{className:"ChartContainer",children:[Object(P.jsxs)(R.a,{color:"primary",value:y,exclusive:!0,onChange:function(e){k((function(t){return e.target.value}))},children:[Object(P.jsx)(M.a,{value:"task",children:"Task"}),Object(P.jsx)(M.a,{value:"person",children:"Person"})]}),"task"===y&&Object(P.jsx)("div",{className:"Chart",children:V.length>0&&Object(P.jsx)(C,{data:V})}),"person"===y&&Object(P.jsx)("div",{className:"Chart",children:W.length>0&&Object(P.jsx)(C,{data:W})})]})]})]})},Y="h700c2qthusq2itics4covhgs1",z="https://nestor.divami.com/request.php";function W(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)([]),u=Object(o.a)(s,2),j=u[0],f=u[1],h=Object(n.useState)([]),p=Object(o.a)(h,2),v=p[0],g=p[1],O=Object(n.useState)([]),x=Object(o.a)(O,2),y=x[0],k=x[1],D=Object(n.useState)(!0),w=Object(o.a)(D,2),N=w[0],C=w[1],E=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.post(z,{command:"getProjectTimesheet",client:{sid:Y},data:{projectId:t.projectId,startDate:"2016-01-01",endDate:m()().format("YYYY-MM-DD"),individualProject:!0}});case 3:if(!(a=e.sent).data||!a.data.data){e.next=11;break}n=Array.from(a.data.data),r=S(n),r=T(r),g(r),e.next=12;break;case 11:throw a;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("getTImeData err=>",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n,c,i,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.post(z,{command:"getProjectList",client:{sid:Y},data:{count:999}});case 3:if(!((a=e.sent).data&&a.data.data&&null!==(t=a.data.data)&&void 0!==t&&t.projects)){e.next=13;break}return o=Array.from(null===a||void 0===a||null===(n=a.data)||void 0===n||null===(c=n.data)||void 0===c?void 0:c.projects),r(o),s=null===(i=o.filter((function(e){return"Active"===e.status})))||void 0===i?void 0:i[0],f((function(){return[s]})),e.next=11,E(s);case 11:e.next=14;break;case 13:throw a;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log("getOrgData err => ",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),e.next=4,Promise.all(a.filter((function(e){return"Active"===e.status&&"1"!==e.projectId})).map((function(e){return d.a.post(z,{command:"getProjectTimesheet",client:{sid:Y},data:{projectId:e.projectId,startDate:"2000-01-01",endDate:m()().format("YYYY-MM-DD"),individualProject:!0}})})));case 4:t=e.sent,n=a.filter((function(e){return"Active"===e.status&&"1"!==e.projectId})).map((function(e,a){var n=t[a]&&t[a].data&&t[a].data.data?t[a].data.data:[];return n=S(n),n=T(n),Object(c.a)(Object(c.a)({},e),{},{data:n})})),k(n),C(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),C(!1),console.log("getOverallData Error=>",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a.length>0&&I().catch();for(var e=document.getElementById("root").parentElement.children,t=0;t<e.length;t++)"iframe"===e[t].localName&&e[t].remove()}),[a]),Object(n.useEffect)((function(){L().catch()}),[]),Object(P.jsxs)("div",{className:"App",children:[N&&Object(P.jsx)("div",{className:"loader",children:Object(P.jsx)(b.a,{color:"#ff1400",width:"200px"})}),a.length>0&&Object(P.jsx)(U,{projectsList:a,setProjectsList:r,selectedProject:j,setSelectedProject:f,selectedProjectData:v,setSelectedProjectData:g,getTimeData:E,getOrgData:L,setIsLoading:C,sid:Y,reqUrl:z,OverallDataState:y})]})}var G=document.getElementById("root");Object(r.createRoot)(G).render(Object(P.jsx)(n.StrictMode,{children:Object(P.jsx)(W,{})}))}},[[429,1,2]]]);
//# sourceMappingURL=main.35c43157.chunk.js.map