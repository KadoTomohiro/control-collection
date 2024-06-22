import{$ as g,$a as F,Bb as De,Ea as y,Ia as de,Ka as ce,La as he,Ma as fe,O as A,Pa as a,Q as P,Qa as o,Ra as pe,S as v,Sa as Q,Ta as me,Ua as k,Va as _,Wa as ge,Xa as ve,Ya as ye,Z as V,Za as l,_ as N,_a as h,a as p,ab as D,b as m,cb as J,db as X,ea as W,fa as q,fb as _e,j as se,ja as ue,ka as z,lb as Ce,m as oe,ma as w,nb as Ve,r as ae,rb as Y,ua as c,va as u,x as le,ya as Z}from"./chunk-7OPABYIL.js";var Ie=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(u(Z),u(z))},e.\u0275dir=g({type:e});let t=e;return t})(),xe=(()=>{let e=class e extends Ie{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=q(e)))(s||e)}})(),e.\u0275dir=g({type:e,features:[y]});let t=e;return t})(),R=new v("");var Ke={provide:R,useExisting:A(()=>Oe),multi:!0};function et(){let t=Y()?Y().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var tt=new v(""),Oe=(()=>{let e=class e extends Ie{constructor(n,r,s){super(n,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!et())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(u(Z),u(z),u(tt,8))},e.\u0275dir=g({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&Q("input",function(f){return s._handleInput(f.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(f){return s._compositionEnd(f.target.value)})},features:[F([Ke]),y]});let t=e;return t})();var Pe=new v(""),Ne=new v("");function ke(t){return t!=null}function je(t){return _e(t)?oe(t):t}function Te(t){let e={};return t.forEach(i=>{e=i!=null?p(p({},e),i):e}),Object.keys(e).length===0?null:e}function Ge(t,e){return e.map(i=>i(t))}function nt(t){return!t.validate}function Be(t){return t.map(e=>nt(e)?e:i=>e.validate(i))}function it(t){if(!t)return null;let e=t.filter(ke);return e.length==0?null:function(i){return Te(Ge(i,e))}}function Ue(t){return t!=null?it(Be(t)):null}function rt(t){if(!t)return null;let e=t.filter(ke);return e.length==0?null:function(i){let n=Ge(i,e).map(je);return le(n).pipe(ae(Te))}}function Re(t){return t!=null?rt(Be(t)):null}function be(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function He(t){return t._rawValidators}function Le(t){return t._rawAsyncValidators}function K(t){return t?Array.isArray(t)?t:[t]:[]}function T(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ee(t,e){let i=K(e);return K(t).forEach(r=>{T(i,r)||i.push(r)}),i}function Me(t,e){return K(e).filter(i=>!T(t,i))}var G=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ue(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Re(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},ee=class extends G{get formDirective(){return null}get path(){return null}},C=class extends G{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},te=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},st={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Jt=m(p({},st),{"[class.ng-submitted]":"isSubmitted"}),Xt=(()=>{let e=class e extends te{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(u(C,2))},e.\u0275dir=g({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&he("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[y]});let t=e;return t})();var S="VALID",j="INVALID",b="PENDING",I="DISABLED",M=class{},B=class extends M{constructor(e,i){super(),this.value=e,this.source=i}},x=class extends M{constructor(e,i){super(),this.pristine=e,this.source=i}},O=class extends M{constructor(e,i){super(),this.touched=e,this.source=i}},E=class extends M{constructor(e,i){super(),this.status=e,this.source=i}};function ot(t){return(H(t)?t.validators:t)||null}function at(t){return Array.isArray(t)?Ue(t):t||null}function lt(t,e){return(H(e)?e.asyncValidators:t)||null}function ut(t){return Array.isArray(t)?Re(t):t||null}function H(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var ne=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new se,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===S}get invalid(){return this.status===j}get pending(){return this.status==b}get disabled(){return this.status===I}get enabled(){return this.status!==I}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ee(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ee(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Me(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Me(e,this._rawAsyncValidators))}hasValidator(e){return T(this._rawValidators,e)}hasAsyncValidator(e){return T(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let i=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(m(p({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new O(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsTouched(e))}markAsUntouched(e={}){let i=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),i&&e.emitEvent!==!1&&this._events.next(new O(!1,n))}markAsDirty(e={}){let i=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(m(p({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new x(!1,n))}markAsPristine(e={}){let i=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),i&&e.emitEvent!==!1&&this._events.next(new x(!0,n))}markAsPending(e={}){this.status=b;let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new E(this.status,i)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(m(p({},e),{sourceControl:i}))}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=I,this.errors=null,this._forEachChild(r=>{r.disable(m(p({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new B(this.value,n)),this._events.next(new E(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(m(p({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=S,this._forEachChild(n=>{n.enable(m(p({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(m(p({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,i){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},i),this._parent._updateTouched({},i))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===S||this.status===b)&&this._runAsyncValidator(n,e.emitEvent)}let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new B(this.value,i)),this._events.next(new E(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(m(p({},e),{sourceControl:i}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:S}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,i){if(this.asyncValidator){this.status=b,this._hasOwnPendingAsyncValidator={emitEvent:i!==!1};let n=je(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:i,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1,this,i.shouldHaveEmitted)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,i,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new E(this.status,i)),this._parent&&this._parent._updateControlsErrors(e,i,n)}_initObservables(){this.valueChanges=new w,this.statusChanges=new w}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(b)?b:this._anyControlsHaveStatus(j)?j:S}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,i){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),r&&this._events.next(new x(this.pristine,i))}_updateTouched(e={},i){this.touched=this._anyControlsTouched(),this._events.next(new O(this.touched,i)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){H(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=at(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ut(this._rawAsyncValidators)}};var L=new v("CallSetDisabledState",{providedIn:"root",factory:()=>$}),$="always";function dt(t,e){return[...e.path,t]}function $e(t,e,i=$){ht(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),pt(t,e),gt(t,e),mt(t,e),ct(t,e)}function Ae(t,e,i=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),ft(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function U(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function ct(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function ht(t,e){let i=He(t);e.validator!==null?t.setValidators(be(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=Le(t);e.asyncValidator!==null?t.setAsyncValidators(be(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();U(e._rawValidators,r),U(e._rawAsyncValidators,r)}function ft(t,e){let i=!1;if(t!==null){if(e.validator!==null){let r=He(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(d=>d!==e.validator);s.length!==r.length&&(i=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=Le(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(d=>d!==e.asyncValidator);s.length!==r.length&&(i=!0,t.setAsyncValidators(s))}}}let n=()=>{};return U(e._rawValidators,n),U(e._rawAsyncValidators,n),i}function pt(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&We(t,e)})}function mt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&We(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function We(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function gt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function qe(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function vt(t){return Object.getPrototypeOf(t.constructor)===xe}function ze(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(s=>{s.constructor===Oe?i=s:vt(s)?n=s:r=s}),r||n||i||null}function we(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Fe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var yt=class extends ne{constructor(e=null,i,n){super(ot(i),lt(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),H(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Fe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){we(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){we(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Fe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var _t={provide:C,useExisting:A(()=>Ct)},Se=Promise.resolve(),Ct=(()=>{let e=class e extends C{constructor(n,r,s,d,f,Ye){super(),this._changeDetectorRef=f,this.callSetDisabledState=Ye,this.control=new yt,this._registered=!1,this.name="",this.update=new w,this._parent=n,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=ze(this,d)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),qe(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){$e(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){Se.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,s=r!==0&&Ve(r);Se.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?dt(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(u(ee,9),u(Pe,10),u(Ne,10),u(R,10),u(Ce,8),u(L,8))},e.\u0275dir=g({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[F([_t]),y,W]});let t=e;return t})();var Vt={provide:R,useExisting:A(()=>Dt),multi:!0},Dt=(()=>{let e=class e extends xe{writeValue(n){let r=n??"";this.setProperty("value",r)}registerOnChange(n){this.onChange=r=>{n(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=q(e)))(s||e)}})(),e.\u0275dir=g({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,s){r&1&&Q("input",function(f){return s.onChange(f.target.value)})("blur",function(){return s.onTouched()})},features:[F([Vt]),y]});let t=e;return t})();var Ze=new v(""),bt={provide:C,useExisting:A(()=>re)},re=(()=>{let e=class e extends C{set isDisabled(n){}constructor(n,r,s,d,f){super(),this._ngModelWarningConfig=d,this.callSetDisabledState=f,this.update=new w,this._ngModelWarningSent=!1,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=ze(this,s)}ngOnChanges(n){if(this._isControlChanged(n)){let r=n.form.previousValue;r&&Ae(r,this,!1),$e(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}qe(n,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Ae(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_isControlChanged(n){return n.hasOwnProperty("form")}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(u(Pe,10),u(Ne,10),u(R,10),u(Ze,8),u(L,8))},e.\u0275dir=g({type:e,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[F([bt]),y,W]});let t=e;return t})();var Qe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=N({type:e}),e.\u0275inj=P({});let t=e;return t})();var Kt=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:L,useValue:n.callSetDisabledState??$}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=N({type:e}),e.\u0275inj=P({imports:[Qe]});let t=e;return t})(),en=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:Ze,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:L,useValue:n.callSetDisabledState??$}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=N({type:e}),e.\u0275inj=P({imports:[Qe]});let t=e;return t})();var Et=["appLabel",""],Mt=["*"],Je=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=V({type:e,selectors:[["","appLabel",""]],standalone:!0,features:[D],attrs:Et,ngContentSelectors:Mt,decls:1,vars:0,template:function(r,s){r&1&&(k(),_(0))},styles:["[_nghost-%COMP%]{font-size:.7rem}"]});let t=e;return t})();var Xe=(()=>{let e=class e{constructor(){this.control=ue.required()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=V({type:e,selectors:[["app-control-status"]],inputs:{control:[1,"control"]},standalone:!0,features:[D],decls:71,vars:16,consts:[[1,"single"],["appLabel",""],[1,"pair"]],template:function(r,s){r&1&&(a(0,"dl")(1,"dt",0)(2,"span",1),l(3,"Value"),o()(),a(4,"dd",0),l(5),J(6,"json"),o(),a(7,"dt",0)(8,"span",1),l(9,"Errors"),o()(),a(10,"dd",0),l(11),J(12,"json"),o(),a(13,"div",2)(14,"dt")(15,"span",1),l(16,"Valid"),o()(),a(17,"dd"),l(18),o()(),a(19,"div",2)(20,"dt")(21,"span",1),l(22,"Invalid"),o()(),a(23,"dd"),l(24),o()(),a(25,"dt",0)(26,"span",1),l(27,"Pending"),o()(),a(28,"dd",0),l(29),o(),a(30,"div",2)(31,"dt")(32,"span",1),l(33,"Disabled"),o()(),a(34,"dd"),l(35),o()(),a(36,"div",2)(37,"dt")(38,"span",1),l(39,"Enabled"),o()(),a(40,"dd"),l(41),o()(),a(42,"div",2)(43,"dt")(44,"span",1),l(45,"Pristine"),o()(),a(46,"dd"),l(47),o()(),a(48,"div",2)(49,"dt")(50,"span",1),l(51,"Dirty"),o()(),a(52,"dd"),l(53),o()(),a(54,"div",2)(55,"dt")(56,"span",1),l(57,"Touched"),o()(),a(58,"dd"),l(59),o()(),a(60,"div",2)(61,"dt")(62,"span",1),l(63,"Untouched"),o()(),a(64,"dd"),l(65),o()(),a(66,"dt",0)(67,"span",1),l(68,"Status"),o()(),a(69,"dd",0),l(70),o()()),r&2&&(c(5),h(X(6,12,s.control().value)),c(6),h(X(12,14,s.control().errors)),c(7),h(s.control().valid),c(6),h(s.control().invalid),c(5),h(s.control().pending),c(6),h(s.control().disabled),c(6),h(s.control().enabled),c(6),h(s.control().pristine),c(6),h(s.control().dirty),c(6),h(s.control().touched),c(6),h(s.control().untouched),c(5),h(s.control().status))},dependencies:[De,Je],styles:["dl[_ngcontent-%COMP%]{max-width:15rem;display:grid;grid-template-columns:max-content max-content;grid-template-rows:none;padding:0 .5rem}dl[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + dd[_ngcontent-%COMP%], div[_ngcontent-%COMP%]{border-bottom:1px solid #555}dt[_ngcontent-%COMP%]{display:inline;height:max-content}dd[_ngcontent-%COMP%]{padding-bottom:.5rem;font-size:.8rem}.pair[_ngcontent-%COMP%]{display:inline}.single[_ngcontent-%COMP%]{grid-column:1/3}"]});let t=e;return t})();var At=[[["",8,"title"]],[["",8,"description"]],[["",8,"type"]],"*"],wt=[".title",".description",".type","*"];function Ft(t,e){if(t&1&&pe(0,"app-control-status",0),t&2){let i=me();ce("control",i.control)}}var hn=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=V({type:e,selectors:[["app-control-page-template"]],contentQueries:function(r,s,d){if(r&1&&ge(d,re,5),r&2){let f;ve(f=ye())&&(s.control=f.first)}},standalone:!0,features:[D],ngContentSelectors:wt,decls:20,vars:1,consts:[[3,"control"]],template:function(r,s){r&1&&(k(At),a(0,"article")(1,"header")(2,"h3"),_(3),o()(),a(4,"section")(5,"h4"),l(6,"\u6982\u8981"),o(),_(7,1),o(),a(8,"section")(9,"h4"),l(10,"\u9069\u5408\u3059\u308B\u578B"),o(),_(11,2),o(),a(12,"section")(13,"h4"),l(14,"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30B5\u30F3\u30D7\u30EB"),o(),_(15,3),o(),a(16,"section")(17,"h4"),l(18,"\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u30B9\u30C6\u30FC\u30BF\u30B9"),o(),de(19,Ft,1,1,"app-control-status",0),o()()),r&2&&(c(19),fe(s.control?19:-1))},dependencies:[Xe],styles:["article[_ngcontent-%COMP%]{margin:1rem 4rem}article[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-top:1rem}"]});let t=e;return t})();export{R as a,Oe as b,Pe as c,Xt as d,yt as e,Ct as f,Dt as g,re as h,Kt as i,en as j,hn as k};
