(this.webpackJsonpcrowdfunding_tezos_dapp=this.webpackJsonpcrowdfunding_tezos_dapp||[]).push([[0],{194:function(e,t){},265:function(e,t,n){},266:function(e,t,n){},296:function(e,t){},298:function(e,t){},364:function(e,t){},366:function(e,t){},407:function(e,t){},409:function(e,t){},410:function(e,t){},415:function(e,t){},417:function(e,t){},423:function(e,t){},425:function(e,t){},444:function(e,t){},456:function(e,t){},459:function(e,t){},463:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(67),r=n.n(o),s=(n(265),n(12)),i=(n(266),n(237)),l=n.n(i),d=n(40),u=n.n(d),j={contractAddress:"KT1QQNSLaYpJ8mRMRXCMjiYqYrCJPn8oXyRm",get API_URL(){return"https://api.hangzhou2net.tzkt.io/v1/contracts/".concat(this.contractAddress)},API_URL_Project:"https://api.hangzhou2net.tzkt.io/v1/contracts/"},p=n(505),b=n(508),x=n(2);var h=function(e){var t=e.projectDetails,n=e.Tezos,c=e.userAddress,o=Object(a.useState)(null),r=Object(s.a)(o,2),i=r[0],d=r[1],h=Object(a.useState)(0),f=Object(s.a)(h,2),g=f[0],O=f[1],m=Object(a.useState)(0),w=Object(s.a)(m,2),v=w[0],y=w[1],C=Object(a.useState)(!1),A=Object(s.a)(C,2),P=A[0],z=A[1],D=Object(a.useState)(!1),k=Object(s.a)(D,2),S=k[0],T=k[1],_=Object(a.useState)(!1),U=Object(s.a)(_,2),I=U[0],R=U[1];return Object(a.useEffect)((function(){console.log(j.API_URL_Project+t.address+"/storage"),u.a.get(j.API_URL_Project+t.address+"/storage").then((function(e){d(e.data.funding)})),u.a.get(j.API_URL_Project+t.address).then((function(e){O(e.data.balance)}))}),[t.address]),Object(x.jsxs)("div",{style:{height:"250px",width:"100%",padding:"15px",backgroundColor:"white",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",display:"flex",flexDirection:"column",alignItems:"start",marginBottom:"20px"},children:[Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[new Date(t.data.endTime)>Date.now()?Object(x.jsx)(b.a,{style:{backgroundColor:"#1976D2",marginRight:"15px",color:"white"},label:"Ongoing"}):g>=t.data.goalAmount?Object(x.jsx)(b.a,{style:{backgroundColor:"#19D266",marginRight:"15px",color:"white"},label:"Ended Successfully"}):Object(x.jsx)(b.a,{style:{backgroundColor:"#D21932",marginRight:"15px",color:"white"},label:"Failed"}),Object(x.jsx)("h2",{style:{margin:0},children:t.data.name})]}),Object(x.jsx)("div",{style:{margin:"10px 0px 10px 0px"},children:t.data.description}),Object(x.jsxs)("div",{style:{margin:"10px 0px 10px 0px"},children:["Time: ",new Date(t.data.endTime).toUTCString()]}),Object(x.jsxs)("div",{style:{margin:"10px 0px 15px 0px"},children:["Funded ",Object(x.jsxs)("b",{children:[g/Math.pow(10,6)," Tez"]})," out of goal of"," ",Object(x.jsxs)("b",{children:[t.data.goalAmount/Math.pow(10,6)," Tez"]})]}),Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[new Date(t.data.endTime)>Date.now()&&Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{type:"text",onChange:function(e){y(e.target.value)},placeholder:"Amount in Tez",style:{padding:"6px"}}),Object(x.jsx)(p.a,{loading:P,onClick:function(){z(!0),n.wallet.at(t.address).then((function(e){console.log(e.entrypoints);try{e.methods.send_fund().send({amount:parseFloat(v)*Math.pow(10,6),mutez:!0}).then((function(e){return e.confirmation()})).then((function(e){e.completed&&(z(!1),u.a.get(j.API_URL_Project+t.address).then((function(e){O(e.data.balance)})),u.a.get(j.API_URL_Project+t.address+"/storage").then((function(e){d(e.data.funding)})))}))}catch(n){console.log(n),z(!1)}}))},variant:"contained",style:{margin:"0px 10px 0px 10px"},children:"Fund Project"})]}),i&&i.hasOwnProperty(c)&&Object(x.jsxs)(p.a,{loading:S,onClick:function(){T(!0),n.wallet.at(t.address).then((function(e){console.log(e.entrypoints);try{e.methods.refund().send().then((function(e){return e.confirmation()})).then((function(e){e.completed&&(T(!1),u.a.get(j.API_URL_Project+t.address).then((function(e){O(e.data.balance)})),u.a.get(j.API_URL_Project+t.address+"/storage").then((function(e){d(e.data.funding)})))}))}catch(n){console.log(n),T(!1)}}))},variant:"contained",style:{margin:"0px 10px 0px 10px"},children:["Withdraw ",i[c]/Math.pow(10,6)," Tez"]}),t.data.owner===c&&g>=t.data.goalAmount&&new Date(t.data.endTime)<Date.now()&&Object(x.jsx)(p.a,{loading:I,onClick:function(){R(!0),n.wallet.at(t.address).then((function(e){console.log(e.entrypoints);try{e.methods.pay_off().send().then((function(e){return e.confirmation()})).then((function(e){e.completed&&(R(!1),u.a.get(j.API_URL_Project+t.address).then((function(e){O(e.data.balance)})),u.a.get(j.API_URL_Project+t.address+"/storage").then((function(e){d(e.data.funding)})))}))}catch(n){console.log(n),R(!1)}}))},variant:"contained",style:{margin:"0px 10px 0px 10px"},children:"Claim Funds"})]}),Object(x.jsxs)("div",{style:{marginTop:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[Object(x.jsx)("b",{children:"0 Tez"}),Object(x.jsx)(l.a,{completed:g/t.data.goalAmount*100,customLabel:" ".concat(g/Math.pow(10,6)," Tez"),margin:"10px",width:"55rem",bgColor:"#1976D2"}),Object(x.jsxs)("b",{children:[t.data.goalAmount/Math.pow(10,6)," Tez"]})]})]})},f=n(61),g=n(0),O=n.n(g),m=n(87);var w=function(e){var t=e.wallet,n=e.setUserAddress,a=e.setUserBalance,c=e.setWallet,o=e.setTezos,r=e.setBeaconConnection,s=e.userBalance,i=e.userAddress,l=function(){var e=Object(m.a)(O.a.mark((function e(){var s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n(""),a(0),c(null),s=new f.a("https://hangzhounet.smartpy.io"),o(s),r(!1),console.log("disconnecting wallet"),!t){e.next=14;break}return e.next=10,t.client.removeAllAccounts();case 10:return e.next=12,t.client.removeAllPeers();case 12:return e.next=14,t.client.destroy();case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{children:Object(x.jsx)("button",{style:{margin:"20px 10px 10px 10px",backgroundColor:"#1976D2",color:"white",border:"none",cursor:"pointer",padding:"10px"},onClick:l,children:Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Disconnect Wallet"}),Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(x.jsxs)("div",{style:{margin:"0px 5px 0px 5px"},children:[(s/1e6).toFixed(3)," Tez"]}),"|","  ",Object(x.jsxs)("div",{style:{margin:"0px 5px 0px 5px"},children:[i.slice(0,5),"...",i.slice(-5)]})]})]})})})},v=n(241);var y=function(e){var t=e.Tezos,n=e.setWallet,c=e.setUserAddress,o=e.setUserBalance,r=e.setBeaconConnection,s=e.wallet,i=function(){var e=Object(m.a)(O.a.mark((function e(n){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(n),e.next=3,t.tz.getBalance(n);case 3:a=e.sent,o(a.toNumber());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(m.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("connecting wallet",s),e.next=4,s.requestPermissions({network:{type:"hangzhounet"}});case 4:return e.next=6,s.getPKH();case 6:return t=e.sent,e.next=9,i(t);case 9:r(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){Object(m.a)(O.a.mark((function e(){var a,c,o,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Called"),a={name:"Crowdfunding Dapp",iconUrl:"https://tezostaquito.io/img/favicon.png",preferredNetwork:"hangzhounet"},c=new v.a(a,{name:"Crowdfunding Dapp",preferredNetwork:"hangzhounet",disableDefaultEvents:!0}),t.setWalletProvider(c),n(c),e.next=7,c.client.getActiveAccount();case 7:if(!(o=e.sent)){e.next=16;break}return console.log(o),e.next=12,c.getPKH();case 12:return s=e.sent,e.next=15,i(s);case 15:r(!0);case 16:case"end":return e.stop()}}),e)})))()}),[]),Object(x.jsx)("div",{children:Object(x.jsx)("button",{style:{margin:"20px 10px 10px 10px",backgroundColor:"#1976D2",color:"white",border:"none",cursor:"pointer",padding:"10px 20px"},onClick:l,children:Object(x.jsx)("b",{children:"Connect Wallet"})})})},C=n(509),A=n(500),P=n(513),z=n(502),D=n(514),k=n(511);var S=function(e){var t=e.Tezos,n=e.handleClose,c=e.open,o=Object(a.useState)(!1),r=Object(s.a)(o,2),i=r[0],l=r[1],d=Object(a.useState)(""),u=Object(s.a)(d,2),b=u[0],h=u[1],f=Object(a.useState)(""),g=Object(s.a)(f,2),O=g[0],m=g[1],w=Object(a.useState)(""),v=Object(s.a)(w,2),y=v[0],S=v[1],T=Object(a.useState)(0),_=Object(s.a)(T,2),U=_[0],I=_[1];return Object(x.jsxs)(C.a,{open:c,onClose:n,fullWidth:!0,children:[Object(x.jsx)(A.a,{children:Object(x.jsx)("b",{children:"Add Project"})}),Object(x.jsxs)("form",{children:[Object(x.jsxs)(P.a,{children:[Object(x.jsx)(z.a,{label:"Project Name",variant:"standard",fullWidth:!0,margin:"normal",onChange:function(e){h(e.target.value)}}),Object(x.jsx)(z.a,{label:"Description",variant:"standard",multiline:!0,minRows:3,fullWidth:!0,margin:"normal",onChange:function(e){m(e.target.value)}}),Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(x.jsx)(z.a,{label:"Amount (in tez)",variant:"standard",margin:"normal",type:"number",onChange:function(e){S(e.target.value)}}),Object(x.jsx)(z.a,{label:"End date",variant:"standard",margin:"normal",type:"date",defaultValue:(new Date).toISOString().split("T")[0],onChange:function(e){I(new Date(e.target.value))}})]})]}),Object(x.jsxs)(D.a,{children:[Object(x.jsx)(k.a,{onClick:n,children:"Cancel"}),Object(x.jsx)(p.a,{onClick:function(){l(!0),t.wallet.at(j.contractAddress).then((function(e){console.log(e.entrypoints),console.log(e.parameterSchema);try{e.methods.default(O,U,1e6*parseInt(y),b).send().then((function(e){return e.confirmation()})).then((function(e){e.completed&&(l(!1),n())}))}catch(t){console.log(t)}}))},variant:"contained",loading:i,children:"Create"})]})]})]})},T=n(515),_=n(506);var U=function(){var e=Object(a.useState)(new f.a("https://hangzhounet.smartpy.io/")),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),r=Object(s.a)(o,2),i=r[0],l=r[1],d=Object(a.useState)(""),p=Object(s.a)(d,2),b=p[0],g=p[1],O=Object(a.useState)(0),m=Object(s.a)(O,2),v=m[0],C=m[1],A=Object(a.useState)(!1),P=Object(s.a)(A,2),z=P[0],D=P[1],k=Object(a.useState)(!1),U=Object(s.a)(k,2),I=U[0],R=U[1],L=Object(a.useState)(!0),B=Object(s.a)(L,2),W=(B[0],B[1]),F=Object(a.useState)([]),M=Object(s.a)(F,2),E=M[0],N=M[1],J=Object(a.useState)(!1),q=Object(s.a)(J,2),K=q[0],Y=q[1],H=function(){u.a.get("".concat(j.API_URL,"/storage")).then((function(e){N(Object.keys(e.data).map((function(t){return{address:t,data:e.data[t]}}))),W(!1)}))};return Object(a.useEffect)((function(){H()}),[]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("h1",{style:{fontSize:"38px"},children:"Crowdfunding"}),Object(x.jsx)("p",{children:"Crowdfuning DApp on Tezos Blockchain"}),Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(x.jsx)("button",{onClick:function(){R(!0)},style:{margin:"20px 10px 10px 10px",backgroundColor:"#1976D2",color:"white",border:"none",cursor:"pointer"},children:Object(x.jsx)("div",{style:{margin:"4px"},children:Object(x.jsx)("b",{children:"Start A Project"})})}),""!==b||z?Object(x.jsx)(w,{wallet:i,setUserAddress:g,setUserBalance:C,setWallet:l,setTezos:c,setBeaconConnection:D,userBalance:v,userAddress:b}):Object(x.jsx)(y,{Tezos:n,setWallet:l,setUserAddress:g,setUserBalance:C,setBeaconConnection:D,wallet:i})]}),Object(x.jsxs)("h1",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:["Projects"," ",Object(x.jsx)(T.a,{control:Object(x.jsx)(_.a,{checked:K,onChange:function(e){Y(e.target.checked)}}),label:"Show My Projects"})]}),K?E.map((function(e){return e.data.owner===b&&Object(x.jsx)(h,{projectDetails:e,Tezos:n,userAddress:b},e.address)})):E.map((function(e){return Object(x.jsx)(h,{projectDetails:e,Tezos:n,userAddress:b},e.address)})),",",Object(x.jsx)(S,{Tezos:n,open:I,handleClose:function(e){R(!1),H()}})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,516)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(U,{})}),document.getElementById("root")),I()}},[[463,1,2]]]);
//# sourceMappingURL=main.43855c65.chunk.js.map