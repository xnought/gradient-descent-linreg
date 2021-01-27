(this.webpackJsonplinear_regression_playground=this.webpackJsonplinear_regression_playground||[]).push([[0],{473:function(t,e,a){},483:function(t,e){},484:function(t,e){},492:function(t,e){},495:function(t,e){},496:function(t,e){},498:function(t,e,a){"use strict";a.r(e);var n=a(35),r=a(8),i=a.n(r),s=a(51),c=a.n(s),o=(a(473),a(4)),l=a.n(o),u=a(12),h=a(61),d=a(5),p=a(11),j=a(50),b=a(14),f=a(15),y=a(521),g=a(524),m=a(525),O=a(526),x=a(527);function v(){return Object(n.jsx)("div",{children:Object(n.jsx)(y.a,{color:"secondary",position:"static",children:Object(n.jsxs)(g.a,{children:[Object(n.jsx)(m.a,{variant:"h6",children:"Linear Regression Playground"}),Object(n.jsx)(O.a,{href:"https://github.com/xnought/linear-regression-playground",edge:"end",color:"white","aria-label":"menu",children:Object(n.jsx)(x.a,{})})]})})})}var k=a(67),w=function(t){Object(b.a)(a,t);var e=Object(f.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={width:900,height:900},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=Object(u.a)(l.a.mark((function t(){var e,a,n,r,i,s,c,o,u,h,d,p,j;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=function(t,e,a){return t*e+a},e=this.state,a=e.width,n=e.height,r=k.g("#working"),t.next=5,this.props;case 5:return s=t.sent,c=s.m,o=s.b,t.next=10,this.props.data;case 10:u=t.sent,h=i(c,0,o),d=i(c,a,o),p=[],j=0;case 15:if(!(j<u.X.length)){t.next=21;break}return t.next=18,p.push({x:u.X[j]/u.X.length*a,y:u.y[j]/u.y.length*n});case 18:j++,t.next=15;break;case 21:return t.next=23,r.selectAll("circle").data(p).enter().append("circle").attr("cx",(function(t){return 5+t.x})).attr("cy",(function(t){return n-5-t.y})).attr("r",3.5);case 23:return t.next=25,r.append("line").attr("x1",0).attr("y1",n-h).attr("x2",a).attr("y2",n-d).attr("stroke","black");case 25:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var t=Object(u.a)(l.a.mark((function t(){var e,a,n,r,i,s,c,o,u,h,d,p,j,b;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=function(t,e,a){return t*e+a},e=this.state,a=e.width,n=e.height,r=k.g("#working"),s=this.props,c=s.m,o=s.b,u=s.ms,h=s.data,isFinite(c)&&isFinite(o)&&(d=h.y.length,p=h.X.length,j=i(c,h.X[0],o)/d*n,b=i(c,h.X[p-1],o)/d*n,r.select("line").transition().duration(200-u).attr("x1",h.X[0]/p*a).attr("y1",n-j).attr("x2",h.X[p-1]/p*a).attr("y2",n-b));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.width,a=t.height;return Object(n.jsx)("svg",{style:{width:e,height:a},id:"working"})}}]),a}(r.Component),S=function(t){Object(b.a)(a,t);var e=Object(f.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={width:200,height:200},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){var t=this.state,e=t.width,a=t.height,n=this.props,r=n.m,i=n.b,s=(n.rsquared,n.data),c=k.g("#diff");if(isFinite(r)&&isFinite(i)){var o=function(t,e,a){return t*e+a},l=k.e(1,20).map((function(t){return Math.pow(2,t)})),u=k.f(k.b(l),k.d),h=s.y.length,d=s.X.length,p=o(r,s.X[0],i)/h*a,j=o(r,s.X[d-1],i)/h*a;c.append("line").attr("x1",s.X[0]/d*e).attr("y1",a-p).attr("x2",s.X[d-1]/(d-1)*e).attr("y2",a-j).attr("stroke",u(this.props.rsquared)),0===r&&0===i&&c.selectAll("line").remove()}else c.selectAll("line").remove()}},{key:"render",value:function(){var t=this.state,e=t.width,a=t.height;return Object(n.jsx)("svg",{style:{width:e,height:a},id:"diff"})}}]),a}(r.Component),X=a(60),C=function(t){Object(b.a)(a,t);var e=Object(f.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={width:600,height:500},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=Object(u.a)(l.a.mark((function t(){var e,a,n,r,i,s,c,o,u,h,d,p,j,b,f,y;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j=function(t,e){for(var a=s.X,n=s.y,r=0,i=0;i<s.X.length;i++)r+=Math.pow(t*a[i]+e-n[i],2);return r/(2*a.length)},t.next=3,this.state;case 3:return e=t.sent,a=e.width,n=e.height,r=k.g("#divContour").select("#contour"),t.next=9,this.props;case 9:for(i=t.sent,s=i.data,c=a,o=n,u=new Array(c*o),h=.5,d=0;h<o;++h)for(p=.5;p<c;++p,++d)u[d]=j(p/c*10-5,h/o*20);return t.next=15,k.e(1,20).map((function(t){return Math.pow(2,t)}));case 15:b=t.sent,f=k.f(k.b(b),k.d),y=k.a().size([c,o]).thresholds(b)(u),r.append("g").attr("fill","none").attr("stroke","#fff").attr("stroke-opacity",.5).selectAll("path").data(y).join("path").attr("fill",(function(t){return f(t.value)})).attr("d",k.c()),r.append("circle").attr("cx",a/2).attr("cy",0).attr("r",7).style("fill","#5df542").style("stroke","black");case 20:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var t=this.state,e=t.width,a=t.height;k.g("#divContour").select("#contour").select("circle").transition().duration(200-this.props.ms).attr("cx",e/2+this.props.m/10*e).attr("cy",this.props.b/20*a)}},{key:"render",value:function(){var t=this.state,e=t.width,a=t.height;return Object(n.jsx)("div",{id:"divContour",children:Object(n.jsx)("svg",{style:{width:e,height:a},id:"contour"})})}}]),a}(r.Component),_=a(60),D=function(){function t(e,a,n){Object(d.a)(this,t),this.start=e,this.end=a,this.step=n}return Object(p.a)(t,[{key:"tensor_to_array",value:function(t){return Array.from(t.dataSync())}},{key:"output",value:function(t,e){this.size=t.length,this.output={X:t,y:e}}},{key:"exact_linear_data",value:function(){var t=this.tensor_to_array(_.range(this.start,this.end,this.step));this.output(t,t)}},{key:"random_linear_data",value:function(t){var e,a=this.tensor_to_array(_.range(this.start,this.end,this.step)),n=_.add(a,_.randomUniform([this.end-this.start],0,this.end/t));this.output(a,this.tensor_to_array((e=2,Math.floor(Math.random()*Math.floor(e))?_.reverse(_.round(n)):_.round(n))))}}]),t}(),F=a(540),M=a(528),q=a(529),B=a(530),R=a(532),P=a(535),T=a(541),A=a(536),E=a(542),L=a(538),U=a(543),z=a(537),N=a(36),W=a(531),I=a(533),J=a(534),G=function(t){Object(b.a)(a,t);var e=Object(f.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={playButton:!0,linreg:{meanSquaredError:0,rsquared:null,tensorData:{X:X.tensor([]),y:X.tensor([])},data:{X:[],y:[]},hyperparams:{learningRate:.01,epochs:0,loss:null,speed:100},tunableparams:{m:0,b:0}}},n.generateData=n.generateData.bind(Object(j.a)(n)),n.linearRegression=n.linearRegression.bind(Object(j.a)(n)),n.a=n.a.bind(Object(j.a)(n)),n.handleSlider=n.handleSlider.bind(Object(j.a)(n)),n.reset=n.reset.bind(Object(j.a)(n)),n}return Object(p.a)(a,[{key:"reset",value:function(){this.setState(Object(h.a)(Object(h.a)({},this.state),{},{playButton:!0,linreg:Object(h.a)(Object(h.a)({},this.state.linreg),{},{rsquared:null,hyperparams:Object(h.a)(Object(h.a)({},this.state.linreg.hyperparams),{},{epochs:0,loss:null}),tunableparams:{m:0,b:0}})}))}},{key:"generateData",value:function(){var t=new D(0,15,1);t.random_linear_data(3);var e=t.output,a=e.X,n=e.y,r=X.tensor(a),i=X.tensor(n),s=X.mean(i).dataSync()[0],c=X.sum(X.pow(X.sub(s,i),2)).dataSync()[0];this.setState({linreg:Object(h.a)(Object(h.a)({},this.state.linreg),{},{meanSquaredError:c,tensorData:{X:r,y:i},data:{X:a,y:n}})})}},{key:"linearRegression",value:function(){var t=this.state.linreg.tunableparams,e=t.m,a=t.b,n=this.state.linreg.hyperparams.learningRate,r=this.state.linreg.tensorData,i=r.X,s=r.y,c=function(t,e,a){return X.add(X.mul(t,e),a)}(i,e,a),o=i.shape[0];var l=1/o*X.sum(X.mul(X.sub(c,s),i)).dataSync()[0],u=1/o*X.sum(X.sub(c,s)).dataSync()[0],d=function(t,e){return 1/(2*o)*X.sum(X.pow(X.sub(e,t),2)).dataSync()[0]}(s,c);e+=-n*l,a+=-n*u;var p=1-d/this.state.linreg.meanSquaredError,j=this.state.linreg.hyperparams.epochs+1;this.setState({linreg:Object(h.a)(Object(h.a)({},this.state.linreg),{},{rsquared:p,tunableparams:{m:e,b:a},hyperparams:Object(h.a)(Object(h.a)({},this.state.linreg.hyperparams),{},{epochs:j,loss:d})})})}},{key:"a",value:function(){var t=Object(u.a)(l.a.mark((function t(){var e,a,n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=function(t){return new Promise((function(e){return setTimeout(e,t)}))},a=200;case 2:return n=this.state.linreg.hyperparams.speed,r=a-n,t.next=7,this.linearRegression();case 7:return t.next=9,e(r);case 9:if(!0!==this.state.playButton){t.next=11;break}return t.abrupt("break",13);case 11:t.next=2;break;case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleSlider",value:function(t,e){this.setState({linreg:Object(h.a)(Object(h.a)({},this.state.linreg),{},{hyperparams:Object(h.a)(Object(h.a)({},this.state.linreg.hyperparams),{},{speed:e})})})}},{key:"handleClick",value:function(t){this.setState({anchorEl:t.currentTarget})}},{key:"componentDidMount",value:function(){var t=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.generateData();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state.linreg.tunableparams,a=e.m,r=e.b,i=this.state.linreg.hyperparams,s=i.loss,c=i.speed,o=i.epochs,l=i.learningRate,u=this.state.linreg,d=u.rsquared,p=u.data,j=this.props.classes,b=function(t){return null===t?"#dce0dd":"black"},f=function(t,e){return null===t?t:t.toPrecision(e)};return Object(n.jsxs)("div",{children:[Object(n.jsx)(v,{}),Object(n.jsxs)(F.a,{display:"flex",justifyContent:"center",marginTop:2,children:[Object(n.jsx)(F.a,{children:Object(n.jsx)(w,{data:p,m:a,b:r,ms:c})}),Object(n.jsxs)(F.a,{children:[Object(n.jsx)(F.a,{display:"flex",children:Object(n.jsxs)(M.a,{className:j.root,children:[Object(n.jsxs)(F.a,{display:"flex",children:[Object(n.jsx)(F.a,{marginLeft:5,marginRight:5,children:Object(n.jsx)(S,{data:p,m:a,b:r,ms:c,rsquared:null===s?0:s})}),Object(n.jsx)(F.a,{children:Object(n.jsxs)(q.a,{children:[Object(n.jsxs)(m.a,{variant:"h3",component:"h2",children:["epoch: ",o]}),Object(n.jsx)(m.a,{variant:"h6",component:"h2",style:{color:b(s)},children:"loss = ".concat(f(s,10))}),Object(n.jsx)(m.a,{variant:"h6",component:"h2",style:{color:b(d)},children:" r^2 = ".concat(f(d,10))}),Object(n.jsx)(m.a,{variant:"h6",component:"h2",style:{color:0===(a&&r)?"#dce0dd":"black"},children:0===(a&&r)?"f(x) = mx + b":"f(x) = ".concat(a.toPrecision(3),"x + ").concat(r.toPrecision(3))})]})})]}),Object(n.jsx)(B.a,{children:Object(n.jsxs)(F.a,{display:"flex",children:[Object(n.jsx)(F.a,{display:"flex",margin:3,children:Object(n.jsx)(O.a,{onClick:this.reset,children:Object(n.jsx)(W.a,{})})}),Object(n.jsx)(F.a,{display:"flex",margin:3,children:Object(n.jsx)(R.a,{onClick:function(){t.setState({playButton:!t.state.playButton}),t.a()},style:{background:this.state.playButton?"#4caf50":"#f44336",color:"#FFFFFF"},children:this.state.playButton?Object(n.jsx)(I.a,{}):Object(n.jsx)(J.a,{})})}),Object(n.jsxs)(F.a,{display:"flex",margin:3,minWidth:200,children:[Object(n.jsx)(P.a,{style:{color:"#fdd835"},value:c/2,variant:"determinate"}),Object(n.jsx)(m.a,{variant:"caption",style:{color:"#fdd835"},children:"speed"}),Object(n.jsx)(T.a,{style:{marginTop:15,color:"#fdd835"},value:c,min:0,max:200,onChange:this.handleSlider})]}),Object(n.jsx)(F.a,{children:Object(n.jsxs)(A.a,{className:j.formControl,children:[Object(n.jsx)(E.a,{style:{color:"#606060"},children:"learning rate"}),Object(n.jsxs)(L.a,{style:{color:"#606060"},color:"secondary",value:l,onChange:function(e){t.setState({linreg:Object(h.a)(Object(h.a)({},t.state.linreg),{},{hyperparams:Object(h.a)(Object(h.a)({},t.state.linreg.hyperparams),{},{learningRate:e.target.value})})})},children:[Object(n.jsx)(U.a,{value:1,children:"1.0"}),Object(n.jsx)(U.a,{value:.1,children:"0.1"}),Object(n.jsx)(U.a,{value:.03,children:"0.03"}),Object(n.jsx)(U.a,{value:.01,children:"0.01"}),Object(n.jsx)(U.a,{value:.001,children:"0.001"}),Object(n.jsx)(U.a,{value:1e-4,children:"0.0001"}),Object(n.jsx)(U.a,{value:1e-5,children:"0.00001"})]})]})})]})})]})}),Object(n.jsx)(C,{ms:c,data:p,m:isFinite(a)?a:0,b:isFinite(r)?r:0}),Object(n.jsx)(z.a,{onClick:function(){window.location.reload()},variant:"outlined",color:"primary",children:"New Data"})]})]})]})}}]),a}(r.Component),H=Object(N.a)((function(t){return{root:{minWidth:500},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},formControl:{margin:t.spacing(1),minWidth:120},selectEmpty:{marginTop:t.spacing(2)},details:{display:"flex",flexDirection:"column"}}}))(G),K=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,545)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;a(t),n(t),r(t),i(t),s(t)}))};c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(H,{})}),document.getElementById("root")),K()}},[[498,1,2]]]);
//# sourceMappingURL=main.61993d8b.chunk.js.map