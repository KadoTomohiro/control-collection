import{a as Ce,k as Be}from"./chunk-XV77PNA2.js";import{$ as z,$a as Y,Ca as me,Ga as Q,Ha as Oe,Ia as M,Ma as ge,Oa as j,P as N,Pa as Pe,Qa as Z,R as q,T as E,Ta as l,Ua as s,Va as Ne,W as de,Wa as F,Xa as ke,Ya as J,Za as f,_,_a as X,a as m,aa as C,ab as K,b as g,bb as a,c as P,cb as p,d as W,db as A,e as b,eb as V,ga as xe,ha as ce,hb as ve,ia as he,ib as ye,j as Me,ka as fe,kb as je,l as Ae,ma as Ie,n as we,na as w,oa as pe,qa as k,qb as Te,s as Fe,sb as Ge,ub as _e,vb as Re,y as Se,ya as c,za as h}from"./chunk-TEWWH2ZW.js";var Qe=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(h(me),h(pe))},e.\u0275dir=C({type:e});let t=e;return t})(),Ze=(()=>{let e=class e extends Qe{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=he(e)))(o||e)}})(),e.\u0275dir=C({type:e,features:[M]});let t=e;return t})(),O=new E("");var Dt={provide:O,useExisting:N(()=>Je),multi:!0};function bt(){let t=Ce()?Ce().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Et=new E(""),Je=(()=>{let e=class e extends Qe{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!bt())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(h(me),h(pe),h(Et,8))},e.\u0275dir=C({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&F("input",function(d){return o._handleInput(d.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(d){return o._compositionEnd(d.target.value)})},features:[A([Dt]),M]});let t=e;return t})();function D(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function Xe(t){return t!=null&&typeof t.length=="number"}var se=new E(""),Ye=new E(""),Mt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,U=class{static min(e){return At(e)}static max(e){return wt(e)}static required(e){return Ft(e)}static requiredTrue(e){return St(e)}static email(e){return xt(e)}static minLength(e){return It(e)}static maxLength(e){return Ot(e)}static pattern(e){return Pt(e)}static nullValidator(e){return Ke(e)}static compose(e){return ot(e)}static composeAsync(e){return at(e)}};function At(t){return e=>{if(D(e.value)||D(t))return null;let i=parseFloat(e.value);return!isNaN(i)&&i<t?{min:{min:t,actual:e.value}}:null}}function wt(t){return e=>{if(D(e.value)||D(t))return null;let i=parseFloat(e.value);return!isNaN(i)&&i>t?{max:{max:t,actual:e.value}}:null}}function Ft(t){return D(t.value)?{required:!0}:null}function St(t){return t.value===!0?null:{required:!0}}function xt(t){return D(t.value)||Mt.test(t.value)?null:{email:!0}}function It(t){return e=>D(e.value)||!Xe(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function Ot(t){return e=>Xe(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function Pt(t){if(!t)return Ke;let e,i;return typeof t=="string"?(i="",t.charAt(0)!=="^"&&(i+="^"),i+=t,t.charAt(t.length-1)!=="$"&&(i+="$"),e=new RegExp(i)):(i=t.toString(),e=t),n=>{if(D(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:i,actualValue:r}}}}function Ke(t){return null}function et(t){return t!=null}function tt(t){return je(t)?we(t):t}function nt(t){let e={};return t.forEach(i=>{e=i!=null?m(m({},e),i):e}),Object.keys(e).length===0?null:e}function it(t,e){return e.map(i=>i(t))}function Nt(t){return!t.validate}function rt(t){return t.map(e=>Nt(e)?e:i=>e.validate(i))}function ot(t){if(!t)return null;let e=t.filter(et);return e.length==0?null:function(i){return nt(it(i,e))}}function st(t){return t!=null?ot(rt(t)):null}function at(t){if(!t)return null;let e=t.filter(et);return e.length==0?null:function(i){let n=it(i,e).map(tt);return Se(n).pipe(Fe(nt))}}function lt(t){return t!=null?at(rt(t)):null}function Ue(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function ut(t){return t._rawValidators}function dt(t){return t._rawAsyncValidators}function Ve(t){return t?Array.isArray(t)?t:[t]:[]}function te(t,e){return Array.isArray(t)?t.includes(e):t===e}function He(t,e){let i=Ve(e);return Ve(t).forEach(r=>{te(i,r)||i.push(r)}),i}function Le(t,e){return Ve(e).filter(i=>!te(t,i))}var ne=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=st(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=lt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},De=class extends ne{get formDirective(){return null}get path(){return null}},y=class extends ne{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},be=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},kt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},kn=g(m({},kt),{"[class.ng-submitted]":"isSubmitted"}),jn=(()=>{let e=class e extends be{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(h(y,2))},e.\u0275dir=C({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&Pe("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[M]});let t=e;return t})();var T="VALID",ee="INVALID",S="PENDING",G="DISABLED",I=class{},ie=class extends I{constructor(e,i){super(),this.value=e,this.source=i}},R=class extends I{constructor(e,i){super(),this.pristine=e,this.source=i}},B=class extends I{constructor(e,i){super(),this.touched=e,this.source=i}},x=class extends I{constructor(e,i){super(),this.status=e,this.source=i}};function jt(t){return(ae(t)?t.validators:t)||null}function Tt(t){return Array.isArray(t)?st(t):t||null}function Gt(t,e){return(ae(e)?e.asyncValidators:t)||null}function Rt(t){return Array.isArray(t)?lt(t):t||null}function ae(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var Ee=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new Me,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===T}get invalid(){return this.status===ee}get pending(){return this.status==S}get disabled(){return this.status===G}get enabled(){return this.status!==G}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(He(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(He(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Le(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Le(e,this._rawAsyncValidators))}hasValidator(e){return te(this._rawValidators,e)}hasAsyncValidator(e){return te(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let i=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(g(m({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new B(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsTouched(e))}markAsUntouched(e={}){let i=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),i&&e.emitEvent!==!1&&this._events.next(new B(!1,n))}markAsDirty(e={}){let i=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(g(m({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new R(!1,n))}markAsPristine(e={}){let i=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),i&&e.emitEvent!==!1&&this._events.next(new R(!0,n))}markAsPending(e={}){this.status=S;let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new x(this.status,i)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(g(m({},e),{sourceControl:i}))}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=G,this.errors=null,this._forEachChild(r=>{r.disable(g(m({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ie(this.value,n)),this._events.next(new x(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(g(m({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=T,this._forEachChild(n=>{n.enable(g(m({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(g(m({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,i){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},i),this._parent._updateTouched({},i))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===T||this.status===S)&&this._runAsyncValidator(n,e.emitEvent)}let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ie(this.value,i)),this._events.next(new x(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(g(m({},e),{sourceControl:i}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?G:T}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,i){if(this.asyncValidator){this.status=S,this._hasOwnPendingAsyncValidator={emitEvent:i!==!1};let n=tt(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:i,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1,this,i.shouldHaveEmitted)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,i,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new x(this.status,i)),this._parent&&this._parent._updateControlsErrors(e,i,n)}_initObservables(){this.valueChanges=new k,this.statusChanges=new k}_calculateStatus(){return this._allControlsDisabled()?G:this.errors?ee:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(S)?S:this._anyControlsHaveStatus(ee)?ee:T}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,i){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),r&&this._events.next(new R(this.pristine,i))}_updateTouched(e={},i){this.touched=this._anyControlsTouched(),this._events.next(new B(this.touched,i)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ae(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Tt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Rt(this._rawAsyncValidators)}};var le=new E("CallSetDisabledState",{providedIn:"root",factory:()=>ue}),ue="always";function Bt(t,e){return[...e.path,t]}function ct(t,e,i=ue){Ht(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),$t(t,e),qt(t,e),Wt(t,e),Ut(t,e)}function $e(t,e,i=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),Lt(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function re(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function Ut(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function Ht(t,e){let i=ut(t);e.validator!==null?t.setValidators(Ue(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=dt(t);e.asyncValidator!==null?t.setAsyncValidators(Ue(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();re(e._rawValidators,r),re(e._rawAsyncValidators,r)}function Lt(t,e){let i=!1;if(t!==null){if(e.validator!==null){let r=ut(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(u=>u!==e.validator);o.length!==r.length&&(i=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=dt(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(u=>u!==e.asyncValidator);o.length!==r.length&&(i=!0,t.setAsyncValidators(o))}}}let n=()=>{};return re(e._rawValidators,n),re(e._rawAsyncValidators,n),i}function $t(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ht(t,e)})}function Wt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ht(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ht(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function qt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function ft(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function zt(t){return Object.getPrototypeOf(t.constructor)===Ze}function pt(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(o=>{o.constructor===Je?i=o:zt(o)?n=o:r=o}),r||n||i||null}function We(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function qe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Qt=class extends Ee{constructor(e=null,i,n){super(jt(i),Gt(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ae(i)&&(i.nonNullable||i.initialValueIsDefault)&&(qe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){We(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){We(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){qe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Zt={provide:y,useExisting:N(()=>Jt)},ze=Promise.resolve(),Jt=(()=>{let e=class e extends y{constructor(n,r,o,u,d,v){super(),this._changeDetectorRef=d,this.callSetDisabledState=v,this.control=new Qt,this._registered=!1,this.name="",this.update=new k,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=pt(this,u)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),ft(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ct(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){ze.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,o=r!==0&&Ge(r);ze.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?Bt(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(h(De,9),h(se,10),h(Ye,10),h(O,10),h(Te,8),h(le,8))},e.\u0275dir=C({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[A([Zt]),M,ce]});let t=e;return t})();var Xt={provide:O,useExisting:N(()=>Yt),multi:!0},Yt=(()=>{let e=class e extends Ze{writeValue(n){let r=n??"";this.setProperty("value",r)}registerOnChange(n){this.onChange=r=>{n(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=he(e)))(o||e)}})(),e.\u0275dir=C({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,o){r&1&&F("input",function(d){return o.onChange(d.target.value)})("blur",function(){return o.onTouched()})},features:[A([Xt]),M]});let t=e;return t})();var mt=new E(""),Kt={provide:y,useExisting:N(()=>en)},en=(()=>{let e=class e extends y{set isDisabled(n){}constructor(n,r,o,u,d){super(),this._ngModelWarningConfig=u,this.callSetDisabledState=d,this.update=new k,this._ngModelWarningSent=!1,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=pt(this,o)}ngOnChanges(n){if(this._isControlChanged(n)){let r=n.form.previousValue;r&&$e(r,this,!1),ct(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}ft(n,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&$e(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_isControlChanged(n){return n.hasOwnProperty("form")}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(h(se,10),h(Ye,10),h(O,10),h(mt,8),h(le,8))},e.\u0275dir=C({type:e,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[A([Kt]),M,ce]});let t=e;return t})();var gt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=z({type:e}),e.\u0275inj=q({});let t=e;return t})();var vt=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:le,useValue:n.callSetDisabledState??ue}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=z({type:e}),e.\u0275inj=q({imports:[gt]});let t=e;return t})(),Gn=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:mt,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:le,useValue:n.callSetDisabledState??ue}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=z({type:e}),e.\u0275inj=q({imports:[gt]});let t=e;return t})();function H(t){return t!=null}function L(t,e){!e?.injector&&xe(L);let i=e?.injector??de(fe),n=new Ae(1),r=Re(()=>{let o;try{o=t()}catch(u){_e(()=>n.error(u));return}_e(()=>n.next(o))},{injector:i,manualCleanup:!0});return i.get(Ie).onDestroy(()=>{r.destroy(),n.complete()}),n.asObservable()}var ei=(()=>{var e,i,n;let r=class r{constructor(){W(this,e);W(this,i);W(this,n);this.value=Oe(0),this.disabled=Q(!1),this.touched=Q(!1),this.increment=w(1),this.min=w(),this.max=w(),b(this,e,u=>{}),b(this,i,()=>{}),b(this,n,()=>{}),L(this.min).subscribe(P(this,n)),L(this.max).subscribe(P(this,n)),L(this.value).subscribe(()=>P(this,e).call(this,this.value()))}registerOnChange(u){b(this,e,u)}registerOnTouched(u){b(this,i,u)}registerOnValidatorChange(u){b(this,n,u)}setDisabledState(u){this.disabled.set(u)}writeValue(u){this.value.set(u)}onIncrease(){this.markAsDirty();let u=this.max();H(u)&&this.value()>=u||this.disabled()||this.value.update(d=>d+this.increment())}onReduce(){if(this.markAsDirty(),this.disabled())return;let u=this.min();H(u)&&this.value()<=u||this.value.update(d=>d-this.increment())}markAsDirty(){this.touched()||P(this,i).call(this)}validate(u){let d=this.min(),v=H(d)?U.min(d)(u):null,$=this.max(),Ct=H($)?U.max($)(u):null;return v||Ct}};e=new WeakMap,i=new WeakMap,n=new WeakMap,r.\u0275fac=function(d){return new(d||r)},r.\u0275cmp=_({type:r,selectors:[["app-counter"]],inputs:{value:[1,"value"],increment:[1,"increment"],min:[1,"min"],max:[1,"max"]},outputs:{value:"valueChange"},standalone:!0,features:[A([{provide:O,useExisting:r,multi:!0},{provide:se,useExisting:r,multi:!0}]),V],decls:6,vars:3,consts:[[3,"click","disabled"]],template:function(d,v){d&1&&(l(0,"button",0),F("click",function(){return v.onReduce()}),a(1,"-"),s(),l(2,"output"),a(3),s(),l(4,"button",0),F("click",function(){return v.onIncrease()}),a(5,"+"),s()),d&2&&(j("disabled",v.disabled()),c(3),p(v.value()),c(),j("disabled",v.disabled()))},styles:["output[_ngcontent-%COMP%]{display:inline-block;min-width:3rem;text-align:center}"]});let t=r;return t})();var tn=["appLabel",""],nn=["*"],yt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=_({type:e,selectors:[["","appLabel",""]],standalone:!0,features:[V],attrs:tn,ngContentSelectors:nn,decls:1,vars:0,template:function(r,o){r&1&&(J(),f(0))},styles:["[_nghost-%COMP%]{font-size:.7rem}"]});let t=e;return t})();var _t=(()=>{let e=class e{constructor(){this.control=w.required()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=_({type:e,selectors:[["app-control-status"]],inputs:{control:[1,"control"]},standalone:!0,features:[V],decls:76,vars:17,consts:[[1,"single"],["appLabel",""],[1,"pair"]],template:function(r,o){r&1&&(l(0,"dl")(1,"dt",0)(2,"span",1),a(3,"Value"),s()(),l(4,"dd",0),a(5),ve(6,"json"),s(),l(7,"dt",0)(8,"span",1),a(9,"Errors"),s()(),l(10,"dd",0),a(11),ve(12,"json"),s(),l(13,"div",2)(14,"dt")(15,"span",1),a(16,"Valid"),s()(),l(17,"dd"),a(18),s()(),l(19,"div",2)(20,"dt")(21,"span",1),a(22,"Invalid"),s()(),l(23,"dd"),a(24),s()(),l(25,"dt",0)(26,"span",1),a(27,"Pending"),s()(),l(28,"dd",0),a(29),s(),l(30,"div",2)(31,"dt")(32,"span",1),a(33,"Disabled"),s()(),l(34,"dd"),a(35),s()(),l(36,"div",2)(37,"dt")(38,"span",1),a(39,"Enabled"),s()(),l(40,"dd"),a(41),s()(),l(42,"div",2)(43,"dt")(44,"span",1),a(45,"Pristine"),s()(),l(46,"dd"),a(47),s()(),l(48,"div",2)(49,"dt")(50,"span",1),a(51,"Dirty"),s()(),l(52,"dd"),a(53),s()(),l(54,"div",2)(55,"dt")(56,"span",1),a(57,"Touched"),s()(),l(58,"dd"),a(59),s()(),l(60,"div",2)(61,"dt")(62,"span",1),a(63,"Untouched"),s()(),l(64,"dd"),a(65),s()(),l(66,"dt",0)(67,"span",1),a(68,"Status"),s()(),l(69,"dd",0),a(70),s(),l(71,"dt",0)(72,"span",1),a(73,"UpdateOn"),s()(),l(74,"dd",0),a(75),s()()),r&2&&(c(5),p(ye(6,13,o.control().value)),c(6),p(ye(12,15,o.control().errors)),c(7),p(o.control().valid),c(6),p(o.control().invalid),c(5),p(o.control().pending),c(6),p(o.control().disabled),c(6),p(o.control().enabled),c(6),p(o.control().pristine),c(6),p(o.control().dirty),c(6),p(o.control().touched),c(6),p(o.control().untouched),c(5),p(o.control().status),c(5),p(o.control().updateOn))},dependencies:[Be,yt],styles:["dl[_ngcontent-%COMP%]{max-width:15rem;display:grid;grid-template-columns:max-content max-content;grid-template-rows:none;padding:0 .5rem}dl[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + dd[_ngcontent-%COMP%], div[_ngcontent-%COMP%]{border-bottom:1px solid #555}dt[_ngcontent-%COMP%]{display:inline;height:max-content}dd[_ngcontent-%COMP%]{padding-bottom:.5rem;font-size:.8rem}.pair[_ngcontent-%COMP%]{display:inline}.single[_ngcontent-%COMP%]{grid-column:1/3}"]});let t=e;return t})();var rn=["alert"],on=["issue"],sn=[[["",8,"title"]],[["",8,"description"]],[["",8,"type"]],[["",8,"inputs"]],[["",8,"outputs"]],[["",8,"validation"]],"*",[["",8,"commands"]],[["",8,"set-inputs"]],[["",8,"handle-outputs"]],[["",8,"attach-validators"]],[["",8,"alert"]],[["",8,"issue"]]],an=[".title",".description",".type",".inputs",".outputs",".validation","*",".commands",".set-inputs",".handle-outputs",".attach-validators",".alert",".issue"];function ln(t,e){t&1&&a(0,"\u30BF\u30A4\u30C8\u30EB\u672A\u5165\u529B")}function un(t,e){t&1&&a(0,"\u672A\u5165\u529B")}function dn(t,e){t&1&&(l(0,"section",1)(1,"h4"),a(2,"Alert"),s(),f(3,11),s())}function cn(t,e){t&1&&(l(0,"section",2)(1,"h4"),a(2,"Issue"),s(),f(3,12),s())}function hn(t,e){t&1&&a(0,"\u672A\u5165\u529B")}function fn(t,e){t&1&&a(0,"\u306A\u3057")}function pn(t,e){t&1&&a(0,"\u306A\u3057")}function mn(t,e){t&1&&a(0,"\u306A\u3057")}function gn(t,e){if(t&1&&Ne(0,"app-control-status",6),t&2){let i=ke();j("control",i.currentControl)}}var fi=(()=>{let e=class e{constructor(){this.counter=0}get currentControl(){return this.getControls()[this.counter]}get controlLength(){return this.getControls().length}get isMultiControl(){return this.controlLength>1}getControls(){let n=r=>"form"in r;return(this.controlList?.toArray()??[]).map(r=>n(r)?r.form:r.control)}show(){console.log("controlList",this.controlList)}get hasAlert(){return!!this.alertContent}get hasIssue(){return!!this.issueContent}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=_({type:e,selectors:[["app-control-page-template"]],contentQueries:function(r,o,u){if(r&1&&(X(u,rn,5),X(u,on,5),X(u,y,5)),r&2){let d;Y(d=K())&&(o.alertContent=d.first),Y(d=K())&&(o.issueContent=d.first),Y(d=K())&&(o.controlList=d)}},standalone:!0,features:[V],ngContentSelectors:an,decls:62,vars:3,consts:[[1,"information"],[1,"alert"],[1,"issue"],[1,"playground"],[1,"control"],[1,"control-status"],[3,"control"]],template:function(r,o){r&1&&(J(sn),l(0,"article")(1,"header")(2,"h3"),f(3,0,null,ln,1,0),s()(),l(5,"div",0)(6,"section")(7,"h4"),a(8,"Description"),s(),f(9,1,null,un,1,0),s(),ge(11,dn,4,0,"section",1)(12,cn,4,0,"section",2),l(13,"section")(14,"h4"),a(15,"Type"),s(),f(16,2,null,hn,1,0),s(),l(18,"section")(19,"h4"),a(20,"Inputs"),s(),f(21,3,null,fn,1,0),s(),l(23,"section")(24,"h4"),a(25,"Outputs"),s(),f(26,4,null,pn,1,0),s(),l(28,"section")(29,"h4"),a(30,"Original Validation"),s(),f(31,5,null,mn,1,0),s()(),l(33,"div",3)(34,"section",4)(35,"h4"),a(36,"Control Example"),s(),f(37,6),s(),l(38,"section",5)(39,"h4"),a(40,"Control Status"),s(),ge(41,gn,1,1,"app-control-status",6),s(),l(42,"section")(43,"h4"),a(44,"Commands"),s(),l(45,"div"),f(46,7),s()(),l(47,"section")(48,"h4"),a(49,"Set Inputs"),s(),l(50,"div"),f(51,8),s()(),l(52,"section")(53,"h4"),a(54,"Handle Outputs"),s(),l(55,"div"),f(56,9),s()(),l(57,"section")(58,"h4"),a(59,"Attach Validators"),s(),l(60,"div"),f(61,10),s()()()()),r&2&&(c(11),Z(o.hasAlert?11:-1),c(),Z(o.hasIssue?12:-1),c(29),Z(o.currentControl?41:-1))},dependencies:[_t,vt],styles:["article[_ngcontent-%COMP%]{margin:1rem 4rem;display:grid;grid-template-columns:2fr 3fr;gap:1.5rem}header[_ngcontent-%COMP%]{margin-bottom:1.5rem}article[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-top:1.5rem}header[_ngcontent-%COMP%]{grid-column:1/3}section.alert[_ngcontent-%COMP%]{background-color:#fff0f0}section.issue[_ngcontent-%COMP%]{background-color:#f0f2ff}.playground[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 3fr;grid-template-rows:repeat(5,max-content)}section.control[_ngcontent-%COMP%]{grid-column:1/3}section.control-status[_ngcontent-%COMP%]{grid-row:2/6}"]});let t=e;return t})();export{O as a,Je as b,se as c,jn as d,Qt as e,Jt as f,Yt as g,en as h,vt as i,Gn as j,ei as k,fi as l};
