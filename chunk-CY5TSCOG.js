import{$ as g,$a as E,Ab as we,Ea as _,Ia as K,Ka as Ve,La as De,Ma as ee,O as V,Pa as a,Q as N,Qa as o,Ra as be,S as C,Sa as te,Ta as Ee,Ua as T,Va as v,Wa as G,Xa as B,Ya as U,Z as D,Za as l,_ as k,_a as f,a as p,ab as M,b as m,cb as ne,db as ie,ea as j,fa as J,fb as Me,j as ge,ja as Ce,ka as X,lb as Ae,m as ve,ma as b,nb as Fe,qb as re,r as ye,ua as h,va as u,x as _e,ya as Y}from"./chunk-ADGJEKLH.js";var je=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(u(Y),u(X))},e.\u0275dir=g({type:e});let t=e;return t})(),Te=(()=>{let e=class e extends je{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=J(e)))(s||e)}})(),e.\u0275dir=g({type:e,features:[_]});let t=e;return t})(),P=new C("");var tt={provide:P,useExisting:V(()=>Ge),multi:!0};function nt(){let t=re()?re().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var it=new C(""),Ge=(()=>{let e=class e extends je{constructor(n,r,s){super(n,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!nt())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(u(Y),u(X),u(it,8))},e.\u0275dir=g({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&te("input",function(c){return s._handleInput(c.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(c){return s._compositionEnd(c.target.value)})},features:[E([tt]),_]});let t=e;return t})();var ue=new C(""),de=new C("");function Be(t){return t!=null}function Ue(t){return Me(t)?ve(t):t}function Re(t){let e={};return t.forEach(i=>{e=i!=null?p(p({},e),i):e}),Object.keys(e).length===0?null:e}function He(t,e){return e.map(i=>i(t))}function rt(t){return!t.validate}function Le(t){return t.map(e=>rt(e)?e:i=>e.validate(i))}function st(t){if(!t)return null;let e=t.filter(Be);return e.length==0?null:function(i){return Re(He(i,e))}}function $e(t){return t!=null?st(Le(t)):null}function ot(t){if(!t)return null;let e=t.filter(Be);return e.length==0?null:function(i){let n=He(i,e).map(Ue);return _e(n).pipe(ye(Re))}}function We(t){return t!=null?ot(Le(t)):null}function Se(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function qe(t){return t._rawValidators}function ze(t){return t._rawAsyncValidators}function se(t){return t?Array.isArray(t)?t:[t]:[]}function H(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ie(t,e){let i=se(e);return se(t).forEach(r=>{H(i,r)||i.push(r)}),i}function xe(t,e){return se(e).filter(i=>!H(t,i))}var L=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=$e(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=We(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},$=class extends L{get formDirective(){return null}get path(){return null}},y=class extends L{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},oe=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},at={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},en=m(p({},at),{"[class.ng-submitted]":"isSubmitted"}),tn=(()=>{let e=class e extends oe{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(u(y,2))},e.\u0275dir=g({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&De("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[_]});let t=e;return t})();var S="VALID",R="INVALID",A="PENDING",I="DISABLED",w=class{},W=class extends w{constructor(e,i){super(),this.value=e,this.source=i}},x=class extends w{constructor(e,i){super(),this.pristine=e,this.source=i}},O=class extends w{constructor(e,i){super(),this.touched=e,this.source=i}},F=class extends w{constructor(e,i){super(),this.status=e,this.source=i}};function lt(t){return(z(t)?t.validators:t)||null}function ut(t){return Array.isArray(t)?$e(t):t||null}function dt(t,e){return(z(e)?e.asyncValidators:t)||null}function ct(t){return Array.isArray(t)?We(t):t||null}function z(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var ae=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new ge,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===S}get invalid(){return this.status===R}get pending(){return this.status==A}get disabled(){return this.status===I}get enabled(){return this.status!==I}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ie(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ie(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(xe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(xe(e,this._rawAsyncValidators))}hasValidator(e){return H(this._rawValidators,e)}hasAsyncValidator(e){return H(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let i=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(m(p({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new O(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsTouched(e))}markAsUntouched(e={}){let i=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),i&&e.emitEvent!==!1&&this._events.next(new O(!1,n))}markAsDirty(e={}){let i=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(m(p({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new x(!1,n))}markAsPristine(e={}){let i=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),i&&e.emitEvent!==!1&&this._events.next(new x(!0,n))}markAsPending(e={}){this.status=A;let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new F(this.status,i)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(m(p({},e),{sourceControl:i}))}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=I,this.errors=null,this._forEachChild(r=>{r.disable(m(p({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new W(this.value,n)),this._events.next(new F(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(m(p({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=S,this._forEachChild(n=>{n.enable(m(p({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(m(p({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,i){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},i),this._parent._updateTouched({},i))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===S||this.status===A)&&this._runAsyncValidator(n,e.emitEvent)}let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new W(this.value,i)),this._events.next(new F(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(m(p({},e),{sourceControl:i}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:S}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,i){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator={emitEvent:i!==!1};let n=Ue(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:i,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1,this,i.shouldHaveEmitted)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,i,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new F(this.status,i)),this._parent&&this._parent._updateControlsErrors(e,i,n)}_initObservables(){this.valueChanges=new b,this.statusChanges=new b}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?R:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(R)?R:S}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,i){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),r&&this._events.next(new x(this.pristine,i))}_updateTouched(e={},i){this.touched=this._anyControlsTouched(),this._events.next(new O(this.touched,i)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ut(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ct(this._rawAsyncValidators)}};var Q=new C("CallSetDisabledState",{providedIn:"root",factory:()=>Z}),Z="always";function Qe(t,e){return[...e.path,t]}function Ze(t,e,i=Z){ft(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),mt(t,e),vt(t,e),gt(t,e),ht(t,e)}function Oe(t,e,i=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),pt(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function q(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function ht(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function ft(t,e){let i=qe(t);e.validator!==null?t.setValidators(Se(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=ze(t);e.asyncValidator!==null?t.setAsyncValidators(Se(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();q(e._rawValidators,r),q(e._rawAsyncValidators,r)}function pt(t,e){let i=!1;if(t!==null){if(e.validator!==null){let r=qe(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(d=>d!==e.validator);s.length!==r.length&&(i=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=ze(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(d=>d!==e.asyncValidator);s.length!==r.length&&(i=!0,t.setAsyncValidators(s))}}}let n=()=>{};return q(e._rawValidators,n),q(e._rawAsyncValidators,n),i}function mt(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Je(t,e)})}function gt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Je(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Je(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function vt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function ce(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function yt(t){return Object.getPrototypeOf(t.constructor)===Te}function he(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(s=>{s.constructor===Ge?i=s:yt(s)?n=s:r=s}),r||n||i||null}function Pe(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Ne(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var _t=class extends ae{constructor(e=null,i,n){super(lt(i),dt(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),z(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Ne(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Pe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Pe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ne(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ct={provide:y,useExisting:V(()=>Vt)},ke=Promise.resolve(),Vt=(()=>{let e=class e extends y{constructor(n,r,s,d,c,et){super(),this._changeDetectorRef=c,this.callSetDisabledState=et,this.control=new _t,this._registered=!1,this.name="",this.update=new b,this._parent=n,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=he(this,d)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),ce(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Ze(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){ke.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,s=r!==0&&Fe(r);ke.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?Qe(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(u($,9),u(ue,10),u(de,10),u(P,10),u(Ae,8),u(Q,8))},e.\u0275dir=g({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[E([Ct]),_,j]});let t=e;return t})();var Dt={provide:P,useExisting:V(()=>bt),multi:!0},bt=(()=>{let e=class e extends Te{writeValue(n){let r=n??"";this.setProperty("value",r)}registerOnChange(n){this.onChange=r=>{n(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=J(e)))(s||e)}})(),e.\u0275dir=g({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,s){r&1&&te("input",function(c){return s.onChange(c.target.value)})("blur",function(){return s.onTouched()})},features:[E([Dt]),_]});let t=e;return t})();var fe=new C(""),Et={provide:y,useExisting:V(()=>pe)},pe=(()=>{let e=class e extends y{set isDisabled(n){}constructor(n,r,s,d,c){super(),this._ngModelWarningConfig=d,this.callSetDisabledState=c,this.update=new b,this._ngModelWarningSent=!1,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=he(this,s)}ngOnChanges(n){if(this._isControlChanged(n)){let r=n.form.previousValue;r&&Oe(r,this,!1),Ze(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}ce(n,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Oe(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_isControlChanged(n){return n.hasOwnProperty("form")}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(u(ue,10),u(de,10),u(P,10),u(fe,8),u(Q,8))},e.\u0275dir=g({type:e,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[E([Et]),_,j]});let t=e;return t})();var Mt={provide:y,useExisting:V(()=>me)},me=(()=>{let e=class e extends y{set isDisabled(n){}constructor(n,r,s,d,c){super(),this._ngModelWarningConfig=c,this._added=!1,this.name=null,this.update=new b,this._ngModelWarningSent=!1,this._parent=n,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=he(this,d)}ngOnChanges(n){this._added||this._setUpControl(),ce(n,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}get path(){return Qe(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(u($,13),u(ue,10),u(de,10),u(P,10),u(fe,8))},e.\u0275dir=g({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[E([Mt]),_,j]});let t=e;return t})();var Xe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=k({type:e}),e.\u0275inj=N({});let t=e;return t})();var rn=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:Q,useValue:n.callSetDisabledState??Z}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=k({type:e}),e.\u0275inj=N({imports:[Xe]});let t=e;return t})(),sn=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:fe,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:Q,useValue:n.callSetDisabledState??Z}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=k({type:e}),e.\u0275inj=N({imports:[Xe]});let t=e;return t})();var At=["appLabel",""],Ft=["*"],Ye=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=D({type:e,selectors:[["","appLabel",""]],standalone:!0,features:[M],attrs:At,ngContentSelectors:Ft,decls:1,vars:0,template:function(r,s){r&1&&(T(),v(0))},styles:["[_nghost-%COMP%]{font-size:.7rem}"]});let t=e;return t})();var Ke=(()=>{let e=class e{constructor(){this.control=Ce.required()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=D({type:e,selectors:[["app-control-status"]],inputs:{control:[1,"control"]},standalone:!0,features:[M],decls:71,vars:16,consts:[[1,"single"],["appLabel",""],[1,"pair"]],template:function(r,s){r&1&&(a(0,"dl")(1,"dt",0)(2,"span",1),l(3,"Value"),o()(),a(4,"dd",0),l(5),ne(6,"json"),o(),a(7,"dt",0)(8,"span",1),l(9,"Errors"),o()(),a(10,"dd",0),l(11),ne(12,"json"),o(),a(13,"div",2)(14,"dt")(15,"span",1),l(16,"Valid"),o()(),a(17,"dd"),l(18),o()(),a(19,"div",2)(20,"dt")(21,"span",1),l(22,"Invalid"),o()(),a(23,"dd"),l(24),o()(),a(25,"dt",0)(26,"span",1),l(27,"Pending"),o()(),a(28,"dd",0),l(29),o(),a(30,"div",2)(31,"dt")(32,"span",1),l(33,"Disabled"),o()(),a(34,"dd"),l(35),o()(),a(36,"div",2)(37,"dt")(38,"span",1),l(39,"Enabled"),o()(),a(40,"dd"),l(41),o()(),a(42,"div",2)(43,"dt")(44,"span",1),l(45,"Pristine"),o()(),a(46,"dd"),l(47),o()(),a(48,"div",2)(49,"dt")(50,"span",1),l(51,"Dirty"),o()(),a(52,"dd"),l(53),o()(),a(54,"div",2)(55,"dt")(56,"span",1),l(57,"Touched"),o()(),a(58,"dd"),l(59),o()(),a(60,"div",2)(61,"dt")(62,"span",1),l(63,"Untouched"),o()(),a(64,"dd"),l(65),o()(),a(66,"dt",0)(67,"span",1),l(68,"Status"),o()(),a(69,"dd",0),l(70),o()()),r&2&&(h(5),f(ie(6,12,s.control().value)),h(6),f(ie(12,14,s.control().errors)),h(7),f(s.control().valid),h(6),f(s.control().invalid),h(5),f(s.control().pending),h(6),f(s.control().disabled),h(6),f(s.control().enabled),h(6),f(s.control().pristine),h(6),f(s.control().dirty),h(6),f(s.control().touched),h(6),f(s.control().untouched),h(5),f(s.control().status))},dependencies:[we,Ye],styles:["dl[_ngcontent-%COMP%]{max-width:15rem;display:grid;grid-template-columns:max-content max-content;grid-template-rows:none;padding:0 .5rem}dl[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + dd[_ngcontent-%COMP%], div[_ngcontent-%COMP%]{border-bottom:1px solid #555}dt[_ngcontent-%COMP%]{display:inline;height:max-content}dd[_ngcontent-%COMP%]{padding-bottom:.5rem;font-size:.8rem}.pair[_ngcontent-%COMP%]{display:inline}.single[_ngcontent-%COMP%]{grid-column:1/3}"]});let t=e;return t})();var wt=["alert"],St=[[["",8,"title"]],[["",8,"description"]],[["",8,"type"]],[["",8,"validation"]],"*",[["",8,"alert"]]],It=[".title",".description",".type",".validation","*",".alert"];function xt(t,e){t&1&&(a(0,"section",0)(1,"h4"),l(2,"\u30A2\u30E9\u30FC\u30C8"),o(),a(3,"p"),v(4,5),o()())}function Ot(t,e){if(t&1&&be(0,"app-control-status",1),t&2){let i=Ee();Ve("control",i.control)}}var gn=(()=>{let e=class e{get control(){return this.formControl||this.formControlName}get hasAlert(){return!!this.alertContent}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=D({type:e,selectors:[["app-control-page-template"]],contentQueries:function(r,s,d){if(r&1&&(G(d,pe,5),G(d,me,5),G(d,wt,5)),r&2){let c;B(c=U())&&(s.formControl=c.first),B(c=U())&&(s.formControlName=c.first),B(c=U())&&(s.alertContent=c.first)}},standalone:!0,features:[M],ngContentSelectors:It,decls:25,vars:2,consts:[[1,"alert"],[3,"control"]],template:function(r,s){r&1&&(T(St),a(0,"article")(1,"header")(2,"h3"),v(3),o()(),a(4,"section")(5,"h4"),l(6,"\u6982\u8981"),o(),v(7,1),o(),K(8,xt,5,0,"section",0),a(9,"section")(10,"h4"),l(11,"\u9069\u5408\u3059\u308B\u578B"),o(),v(12,2),o(),a(13,"section")(14,"h4"),l(15,"\u72EC\u81EA\u30D0\u30EA\u30C7\u30FC\u30B7\u30E7\u30F3"),o(),v(16,3),o(),a(17,"section")(18,"h4"),l(19,"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30B5\u30F3\u30D7\u30EB"),o(),v(20,4),o(),a(21,"section")(22,"h4"),l(23,"\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u30B9\u30C6\u30FC\u30BF\u30B9"),o(),K(24,Ot,1,1,"app-control-status",1),o()()),r&2&&(h(8),ee(s.hasAlert?8:-1),h(16),ee(s.control?24:-1))},dependencies:[Ke],styles:["article[_ngcontent-%COMP%]{margin:1rem 4rem}article[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-top:1rem}section.alert[_ngcontent-%COMP%]{background-color:#fff0f0}"]});let t=e;return t})();export{P as a,Ge as b,ue as c,tn as d,_t as e,Vt as f,bt as g,pe as h,rn as i,sn as j,gn as k};
