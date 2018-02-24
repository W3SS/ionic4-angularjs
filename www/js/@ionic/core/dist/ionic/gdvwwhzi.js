/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadComponents("gdvwwhzi",function(e,i,t,o,d){function a(e,i,t){var o={};return t.split(" ").reduce(function(t,o){return t[o]=!0,e&&(t[o+"-"+e]=!0,i&&(t[o+"-"+i]=!0,t[o+"-"+e+"-"+i]=!0)),t},o)}function n(e,i){return void 0===e||null===e||""===e?void 0===i||null===i||""===i:!0===e||"true"===e?!0===i||"true"===i:!1===e||"false"===e?!1===i||"false"===i:0===e||"0"===e?0===i||"0"===i:e==i}var r=Object.assign||function(e){for(var i,t=1,o=arguments.length;t<o;t++){i=arguments[t];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e[d]=i[d])}return e},c=function(){function e(){this.checked=!1,this.disabled=!1}return e.prototype.componentWillLoad=function(){this.emitStyle()},e.prototype.componentDidLoad=function(){this.ionRadioDidLoad.emit({radio:this})},e.prototype.colorChanged=function(){this.emitStyle()},e.prototype.checkedChanged=function(e){this.ionRadioCheckedDidChange.emit({radio:this}),this.ionSelect.emit({checked:e}),this.emitStyle()},e.prototype.disabledChanged=function(){this.emitStyle()},e.prototype.emitStyle=function(){var e=this;clearTimeout(this.styleTmr),this.styleTmr=setTimeout(function(){e.ionStyle.emit(r({},a(e.mode,e.color,"radio"),{"radio-checked":e.checked,"radio-disabled":e.disabled}))})},e.prototype.onSpace=function(e){this.toggle(),e.stopPropagation(),e.preventDefault()},e.prototype.toggle=function(){this.checked=!this.checked,this.ionRadioDidToggle.emit({radio:this})},e.prototype.hostData=function(){return{class:{"radio-checked":this.checked,"radio-disabled":this.disabled}}},e.prototype.render=function(){var e=this,t={"radio-icon":!0,"radio-checked":this.checked};return[i("div",{c:t},i("div",{c:{"radio-inner":!0}})),i("button",{c:{"radio-cover":!0},o:{click:function(){return e.toggle()}},a:{"aria-checked":!!this.checked&&"true","aria-disabled":!!this.disabled&&"true","aria-labelledby":this.labelId,role:"radio"},p:{id:this.id,tabIndex:0}})]},e}(),h=function(){function e(){this.radios=[],this.ids=0,this.allowEmptySelection=!1,this.disabled=!1}return e.prototype.valueChanged=function(){this.update(),this.ionChange.emit(this)},e.prototype.radioDidLoad=function(e){var i=e.detail.radio;this.radios.push(i),i.id="rb-"+this.id+"-"+ ++this.ids,i.value=i.value?i.value:i.id,i.checked&&!this.value&&(this.value=i.value)},e.prototype.radioCheckedDidChange=function(e){var i=e.detail.radio;i.checked&&this.value!==i.value&&(this.value=i.checked?i.value:"")},e.prototype.radioDidToggle=function(e){var i=e.detail.radio;i.checked=!this.allowEmptySelection||i.checked,this.value=i.checked?i.value:""},e.prototype.componentWillLoad=function(){this.id=++l;var e=this.el.querySelector("ion-list-header");e&&(e.id||(e.id="rg-hdr-"+this.id),this.headerId=e.id)},e.prototype.update=function(){var e=this,i=!1;this.radios.forEach(function(t){t.checked=n(e.value,t.value)&&!i,t.checked&&(e.activeId=t.id,i=!0)})},e.prototype.hostData=function(){return{attrs:{role:"radiogroup","aria-activedescendant":this.activeId,"aria-describedby":this.headerId}}},e.prototype.render=function(){return i(0,0)},e}(),l=-1;e["ION-RADIO"]=c,e["ION-RADIO-GROUP"]=h},["ION-RADIO",[["activated",5],["checked",2,1],["disabled",2,1],["el",7],["id",5],["value",2]],{theme:"radio"},[["ionRadioDidLoad"],["ionRadioDidUnload"],["ionRadioDidToggle"],["ionRadioCheckedDidChange"],["ionStyle"],["ionSelect"]],0,[["checked","checkedChanged"],["color","colorChanged"],["disabled","disabledChanged"]]],["ION-RADIO-GROUP",[["activeId",5],["allowEmptySelection",1,1],["disabled",2,1],["el",7],["headerId",5],["value",2]],{},[["ionChange"]],0,[["value","valueChanged"]]]);