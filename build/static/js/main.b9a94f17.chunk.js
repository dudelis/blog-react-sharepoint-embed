(window["webpackJsonpblog-react-sharepoint-embed"]=window["webpackJsonpblog-react-sharepoint-embed"]||[]).push([[0],{80:function(e,t,n){e.exports=n(88)},85:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(43),i=n.n(l),u=(n(85),n(86),n(120)),c=n(55),r=n.n(c),s=n(62),h=n(63),p=n(25),m=n(26),C=n(32),d=n(27),b=n(36),g=n(31),f=n(18),v=n(122),k=n(119),O=n(127),w=n(124),y=n(118),j={options:[]},E=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(C.a)(this,Object(d.a)(t).call(this,e)))._onChange=function(e,t){t?n.props.onChange("ChoiceColumn",t.text):n.props.onChange("ChoiceColumn","")},n.state=j,n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.b.web.lists.getByTitle(this.props.listName).fields.getByInternalNameOrTitle("ChoiceColumn").select("Choices").get().then((function(t){var n=t.Choices.map((function(e){return{key:e,text:e}}));e.setState({options:n})}))}},{key:"render",value:function(){return o.createElement(y.a,{label:"ChoiceColumn",placeholder:"Select or type an option",options:this.state.options,onChange:this._onChange})}}]),t}(o.Component),L={options:[]},S=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(C.a)(this,Object(d.a)(t).call(this,e)))._onChange=function(e,t){t?n.props.onChange("LookupColumn",t.key):n.props.onChange("LookupColumn","")},n.state=L,n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[{key:"",text:"None"}];f.b.web.lists.getByTitle(this.props.lookupListName).items.getAll().then((function(n){var o=n.map((function(e){return{key:e.ID,text:e.Title}})),a=t.concat(o);e.setState({options:a})}))}},{key:"render",value:function(){return o.createElement(y.a,{label:this.props.label,placeholder:this.props.placeholder,options:this.state.options,onChange:this._onChange})}}]),t}(o.Component),I="MainList",T=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(C.a)(this,Object(d.a)(t).call(this,e))).handleInputChange=function(e,t){var o=Object(h.a)({},e,t);n.setState(o)},n.handleSubmit=function(e){e.preventDefault(),console.log(n.state);var t={Title:n.state.Title,MultipleLine:n.state.MultipleLineColumn,ChoiceColumn:n.state.ChoiceColumn,LookupColumnId:n.state.LookupColumn,DateColumn:n.state.DateColumn.toISOString(),YesNoColumn:n.state.YesNoColumn};f.b.web.lists.getByTitle(I).items.add(t).then((function(e){console.log(e)}))},n.handleInputChange=n.handleInputChange.bind(Object(b.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.b.web.lists.getByTitle(I).items.getAll();case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return o.createElement("form",null,o.createElement(v.a,{id:"titleColumn",label:"Title",required:!0,onChange:function(t,n){e.handleInputChange("Title",n)}}),o.createElement(v.a,{id:"multipleLineColumn",multiline:!0,rows:3,label:"MultipleLineColumn",onChange:function(t,n){e.handleInputChange("MultipleLineColumn",n)}}),o.createElement(E,{listName:I,label:"ChoiceColumn",placeholder:"Select or type an option",onChange:this.handleInputChange}),o.createElement(k.a,{label:"DateColumn",placeholder:"Select a date...",ariaLabel:"Select a date",allowTextInput:!0,onSelectDate:function(t){e.handleInputChange("DateColumn",t)}}),o.createElement(S,{lookupListName:"LookupList",label:"LookupColumn",placeholder:"Select an option",onChange:this.handleInputChange}),o.createElement(O.a,{label:"YesNoColumn",defaultChecked:!0,onText:"Yes",offText:"No",onChange:function(t,n){e.handleInputChange("YesNoColumn",n)}}),o.createElement(w.a,{text:"Save",onClick:this.handleSubmit}))}}]),t}(o.Component),N={childrenGap:10,padding:10},x=function(){return o.createElement(u.a,{tokens:N},o.createElement(T,null))},D=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[80,1,2]]]);
//# sourceMappingURL=main.b9a94f17.chunk.js.map