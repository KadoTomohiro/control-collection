import{$,$a as de,Bb as $e,Hb as We,Ka as h,Kb as qe,La as o,Lb as V,Mb as D,O as U,Oa as q,P as y,Pb as ce,Q as ke,R as H,Sa as P,T as E,Ua as g,W as Te,Ya as Re,_ as L,aa as p,ab as Be,ac as ze,eb as a,f as xe,fb as l,ga as O,j as Oe,ja as ue,jb as N,kb as Ue,la as je,lb as He,mb as Le,o as Pe,pa as Ge,qa as W,qb as u,rb as f,sa as A,tb as C,u as Ne,ub as z,yb as Z,zb as X}from"./chunk-R7EF2H7L.js";import{a as m,b as v}from"./chunk-2RYEIVLG.js";var nt=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(o(q),o(W))},e.\u0275dir=p({type:e});let t=e;return t})(),me=(()=>{let e=class e extends nt{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=ue(e)))(s||e)}})(),e.\u0275dir=p({type:e,features:[g]});let t=e;return t})(),S=new E("");var Et={provide:S,useExisting:y(()=>rt),multi:!0};function At(){let t=ce()?ce().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var wt=new E(""),rt=(()=>{let e=class e extends nt{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!At())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(o(q),o(W),o(wt,8))},e.\u0275dir=p({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&N("input",function(c){return s._handleInput(c.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(c){return s._compositionEnd(c.target.value)})},features:[C([Et]),g]});let t=e;return t})();function b(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function st(t){return t!=null&&typeof t.length=="number"}var oe=new E(""),ae=new E(""),Ft=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ze=class{static min(e){return It(e)}static max(e){return St(e)}static required(e){return xt(e)}static requiredTrue(e){return Ot(e)}static email(e){return Pt(e)}static minLength(e){return Nt(e)}static maxLength(e){return kt(e)}static pattern(e){return Tt(e)}static nullValidator(e){return ot(e)}static compose(e){return ht(e)}static composeAsync(e){return pt(e)}};function It(t){return e=>{if(b(e.value)||b(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function St(t){return e=>{if(b(e.value)||b(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function xt(t){return b(t.value)?{required:!0}:null}function Ot(t){return t.value===!0?null:{required:!0}}function Pt(t){return b(t.value)||Ft.test(t.value)?null:{email:!0}}function Nt(t){return e=>b(e.value)||!st(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function kt(t){return e=>st(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function Tt(t){if(!t)return ot;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(b(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function ot(t){return null}function at(t){return t!=null}function lt(t){return $e(t)?Oe(t):t}function ut(t){let e={};return t.forEach(n=>{e=n!=null?m(m({},e),n):e}),Object.keys(e).length===0?null:e}function dt(t,e){return e.map(n=>n(t))}function jt(t){return!t.validate}function ct(t){return t.map(e=>jt(e)?e:n=>e.validate(n))}function ht(t){if(!t)return null;let e=t.filter(at);return e.length==0?null:function(n){return ut(dt(n,e))}}function ft(t){return t!=null?ht(ct(t)):null}function pt(t){if(!t)return null;let e=t.filter(at);return e.length==0?null:function(n){let i=dt(n,e).map(lt);return Ne(i).pipe(Pe(ut))}}function mt(t){return t!=null?pt(ct(t)):null}function Xe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function gt(t){return t._rawValidators}function vt(t){return t._rawAsyncValidators}function he(t){return t?Array.isArray(t)?t:[t]:[]}function J(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ye(t,e){let n=he(e);return he(t).forEach(r=>{J(n,r)||n.push(r)}),n}function Je(t,e){return he(e).filter(n=>!J(t,n))}var K=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ft(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=mt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},w=class extends K{get formDirective(){return null}get path(){return null}},_=class extends K{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Q=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Gt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},xi=v(m({},Gt),{"[class.ng-submitted]":"isSubmitted"}),Oi=(()=>{let e=class e extends Q{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(o(_,2))},e.\u0275dir=p({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&de("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[g]});let t=e;return t})(),Pi=(()=>{let e=class e extends Q{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(o(w,10))},e.\u0275dir=p({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&de("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[g]});let t=e;return t})();var k="VALID",Y="INVALID",F="PENDING",T="DISABLED",M=class{},ee=class extends M{constructor(e,n){super(),this.value=e,this.source=n}},j=class extends M{constructor(e,n){super(),this.pristine=e,this.source=n}},G=class extends M{constructor(e,n){super(),this.touched=e,this.source=n}},I=class extends M{constructor(e,n){super(),this.status=e,this.source=n}},fe=class extends M{constructor(e){super(),this.source=e}},pe=class extends M{constructor(e){super(),this.source=e}};function _t(t){return(le(t)?t.validators:t)||null}function Rt(t){return Array.isArray(t)?ft(t):t||null}function yt(t,e){return(le(e)?e.asyncValidators:t)||null}function Bt(t){return Array.isArray(t)?mt(t):t||null}function le(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Ut(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new U(1e3,"");if(!i[n])throw new U(1001,"")}function Ht(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new U(1002,"")})}var te=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=V(()=>this.statusReactive()),this.statusReactive=P(void 0),this._pristine=V(()=>this.pristineReactive()),this.pristineReactive=P(!0),this._touched=V(()=>this.touchedReactive()),this.touchedReactive=P(!1),this._events=new xe,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return D(this.statusReactive)}set status(e){D(()=>this.statusReactive.set(e))}get valid(){return this.status===k}get invalid(){return this.status===Y}get pending(){return this.status==F}get disabled(){return this.status===T}get enabled(){return this.status!==T}get pristine(){return D(this.pristineReactive)}set pristine(e){D(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return D(this.touchedReactive)}set touched(e){D(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ye(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ye(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Je(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Je(e,this._rawAsyncValidators))}hasValidator(e){return J(this._rawValidators,e)}hasAsyncValidator(e){return J(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(v(m({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new G(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),n&&e.emitEvent!==!1&&this._events.next(new G(!1,i))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(v(m({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new j(!1,i))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),n&&e.emitEvent!==!1&&this._events.next(new j(!0,i))}markAsPending(e={}){this.status=F;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new I(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(v(m({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=T,this.errors=null,this._forEachChild(r=>{r.disable(v(m({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ee(this.value,i)),this._events.next(new I(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(v(m({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=k,this._forEachChild(i=>{i.enable(v(m({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(v(m({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,n){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===k||this.status===F)&&this._runAsyncValidator(i,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ee(this.value,n)),this._events.next(new I(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(v(m({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?T:k}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=F,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let i=lt(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new I(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,i)}_initObservables(){this.valueChanges=new A,this.statusChanges=new A}_calculateStatus(){return this._allControlsDisabled()?T:this.errors?Y:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(F)?F:this._anyControlsHaveStatus(Y)?Y:k}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),r&&this._events.next(new j(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new G(this.touched,n)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){le(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Rt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Bt(this._rawAsyncValidators)}},Ke=class extends te{constructor(e,n,i){super(_t(n),yt(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Ht(this,!0,e),Object.keys(e).forEach(i=>{Ut(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,s)=>{i=n(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var x=new E("CallSetDisabledState",{providedIn:"root",factory:()=>R}),R="always";function Ct(t,e){return[...e.path,t]}function ie(t,e,n=R){ge(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),$t(t,e),qt(t,e),Wt(t,e),Lt(t,e)}function ne(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),se(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function re(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Lt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function ge(t,e){let n=gt(t);e.validator!==null?t.setValidators(Xe(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=vt(t);e.asyncValidator!==null?t.setAsyncValidators(Xe(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();re(e._rawValidators,r),re(e._rawAsyncValidators,r)}function se(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=gt(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(d=>d!==e.validator);s.length!==r.length&&(n=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=vt(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(d=>d!==e.asyncValidator);s.length!==r.length&&(n=!0,t.setAsyncValidators(s))}}}let i=()=>{};return re(e._rawValidators,i),re(e._rawAsyncValidators,i),n}function $t(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Vt(t,e)})}function Wt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Vt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Vt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function qt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function zt(t,e){t==null,ge(t,e)}function Zt(t,e){return se(t,e)}function ve(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Xt(t){return Object.getPrototypeOf(t.constructor)===me}function Yt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function _e(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(s=>{s.constructor===rt?n=s:Xt(s)?i=s:r=s}),r||i||n||null}function Jt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Qe(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function et(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Dt=class extends te{constructor(e=null,n,i){super(_t(n),yt(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),le(n)&&(n.nonNullable||n.initialValueIsDefault)&&(et(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Qe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Qe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){et(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ye=t=>t instanceof Dt;var Kt={provide:_,useExisting:y(()=>Qt)},tt=Promise.resolve(),Qt=(()=>{let e=class e extends _{constructor(i,r,s,d,c,B){super(),this._changeDetectorRef=c,this.callSetDisabledState=B,this.control=new Dt,this._registered=!1,this.name="",this.update=new A,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=_e(this,d)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),ve(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ie(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){tt.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,s=r!==0&&qe(r);tt.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Ct(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(o(w,9),o(oe,10),o(ae,10),o(S,10),o(We,8),o(x,8))},e.\u0275dir=p({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[C([Kt]),g,O]});let t=e;return t})(),ki=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=p({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})(),ei={provide:S,useExisting:y(()=>ti),multi:!0},ti=(()=>{let e=class e extends me{writeValue(i){let r=i??"";this.setProperty("value",r)}registerOnChange(i){this.onChange=r=>{i(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=ue(e)))(s||e)}})(),e.\u0275dir=p({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,s){r&1&&N("input",function(c){return s.onChange(c.target.value)})("blur",function(){return s.onTouched()})},features:[C([ei]),g]});let t=e;return t})(),ii={provide:S,useExisting:y(()=>ri),multi:!0};var ni=(()=>{let e=class e{constructor(){this._accessors=[]}add(i,r){this._accessors.push([i,r])}remove(i){for(let r=this._accessors.length-1;r>=0;--r)if(this._accessors[r][1]===i){this._accessors.splice(r,1);return}}select(i){this._accessors.forEach(r=>{this._isSameGroup(r,i)&&r[1]!==i&&r[1].fireUncheck(i.value)})}_isSameGroup(i,r){return i[0].control?i[0]._parent===r._control._parent&&i[1].name===r.name:!1}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ke({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),ri=(()=>{let e=class e extends me{constructor(i,r,s,d){super(i,r),this._registry=s,this._injector=d,this.setDisabledStateFired=!1,this.onChange=()=>{},this.callSetDisabledState=Te(x,{optional:!0})??R}ngOnInit(){this._control=this._injector.get(_),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(i){this._state=i===this.value,this.setProperty("checked",this._state)}registerOnChange(i){this._fn=i,this.onChange=()=>{i(this.value),this._registry.select(this)}}setDisabledState(i){(this.setDisabledStateFired||i||this.callSetDisabledState==="whenDisabledForLegacyCode")&&this.setProperty("disabled",i),this.setDisabledStateFired=!0}fireUncheck(i){this.writeValue(i)}_checkName(){this.name&&this.formControlName&&(this.name,this.formControlName),!this.name&&this.formControlName&&(this.name=this.formControlName)}};e.\u0275fac=function(r){return new(r||e)(o(q),o(W),o(ni),o(je))},e.\u0275dir=p({type:e,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(r,s){r&1&&N("change",function(){return s.onChange()})("blur",function(){return s.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[C([ii]),g]});let t=e;return t})();var Ce=new E(""),si={provide:_,useExisting:y(()=>oi)},oi=(()=>{let e=class e extends _{set isDisabled(i){}constructor(i,r,s,d,c){super(),this._ngModelWarningConfig=d,this.callSetDisabledState=c,this.update=new A,this._ngModelWarningSent=!1,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=_e(this,s)}ngOnChanges(i){if(this._isControlChanged(i)){let r=i.form.previousValue;r&&ne(r,this,!1),ie(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}ve(i,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&ne(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_isControlChanged(i){return i.hasOwnProperty("form")}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(o(oe,10),o(ae,10),o(S,10),o(Ce,8),o(x,8))},e.\u0275dir=p({type:e,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[C([si]),g,O]});let t=e;return t})(),ai={provide:w,useExisting:y(()=>li)},li=(()=>{let e=class e extends w{get submitted(){return D(this._submittedReactive)}set submitted(i){this._submittedReactive.set(i)}constructor(i,r,s){super(),this.callSetDisabledState=s,this._submitted=V(()=>this._submittedReactive()),this._submittedReactive=P(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new A,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(se(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return ie(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){ne(i.control||null,i,!1),Jt(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this._submittedReactive.set(!0),Yt(this.form,this.directives),this.ngSubmit.emit(i),this.form._events.next(new fe(this.control)),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this._submittedReactive.set(!1),this.form._events.next(new pe(this.form))}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,s=this.form.get(i.path);r!==s&&(ne(r||null,i),ye(s)&&(ie(s,i,this.callSetDisabledState),i.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);zt(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&Zt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ge(this.form,this),this._oldForm&&se(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(o(oe,10),o(ae,10),o(x,8))},e.\u0275dir=p({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&N("submit",function(c){return s.onSubmit(c)})("reset",function(){return s.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[C([ai]),g,O]});let t=e;return t})();var ui={provide:_,useExisting:y(()=>di)},di=(()=>{let e=class e extends _{set isDisabled(i){}constructor(i,r,s,d,c){super(),this._ngModelWarningConfig=c,this._added=!1,this.name=null,this.update=new A,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=_e(this,d)}ngOnChanges(i){this._added||this._setUpControl(),ve(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return Ct(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(o(w,13),o(oe,10),o(ae,10),o(S,10),o(Ce,8))},e.\u0275dir=p({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[C([ui]),g,O]});let t=e;return t})();var bt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=$({type:e}),e.\u0275inj=H({});let t=e;return t})();var Ti=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:x,useValue:i.callSetDisabledState??R}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=$({type:e}),e.\u0275inj=H({imports:[bt]});let t=e;return t})(),ji=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Ce,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:x,useValue:i.callSetDisabledState??R}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=$({type:e}),e.\u0275inj=H({imports:[bt]});let t=e;return t})();var ci=["appLabel",""],hi=["*"],Mt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=L({type:e,selectors:[["","appLabel",""]],standalone:!0,features:[z],attrs:ci,ngContentSelectors:hi,decls:1,vars:0,template:function(r,s){r&1&&(He(),Le(0))},styles:["[_nghost-%COMP%]{font-size:.7rem}.control-outline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{border-left:1px solid #555555}"]});let t=e;return t})();function fi(t,e){if(t&1&&(a(0,"dt",0)(1,"span",1),u(2,"DefaultValue"),l()(),a(3,"dd",0),u(4),Z(5,"json"),l()),t&2){let n=Ue();h(4),f(X(5,1,n.asFormControl().defaultValue))}}var qi=(()=>{let e=class e{constructor(){this.control=Ge(),this.isFormControl=V(()=>ye(this.control())),this.asFormControl=V(()=>this.control())}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=L({type:e,selectors:[["app-control-status"]],inputs:{control:[1,"control"]},standalone:!0,features:[z],decls:77,vars:18,consts:[[1,"single"],["appLabel",""],[1,"pair"]],template:function(r,s){if(r&1&&(a(0,"dl")(1,"dt",0)(2,"span",1),u(3,"Value"),l()(),a(4,"dd",0),u(5),Z(6,"json"),l(),Re(7,fi,6,3),a(8,"dt",0)(9,"span",1),u(10,"Errors"),l()(),a(11,"dd",0),u(12),Z(13,"json"),l(),a(14,"div",2)(15,"dt")(16,"span",1),u(17,"Valid"),l()(),a(18,"dd"),u(19),l()(),a(20,"div",2)(21,"dt")(22,"span",1),u(23,"Invalid"),l()(),a(24,"dd"),u(25),l()(),a(26,"dt",0)(27,"span",1),u(28,"Pending"),l()(),a(29,"dd",0),u(30),l(),a(31,"div",2)(32,"dt")(33,"span",1),u(34,"Disabled"),l()(),a(35,"dd"),u(36),l()(),a(37,"div",2)(38,"dt")(39,"span",1),u(40,"Enabled"),l()(),a(41,"dd"),u(42),l()(),a(43,"div",2)(44,"dt")(45,"span",1),u(46,"Pristine"),l()(),a(47,"dd"),u(48),l()(),a(49,"div",2)(50,"dt")(51,"span",1),u(52,"Dirty"),l()(),a(53,"dd"),u(54),l()(),a(55,"div",2)(56,"dt")(57,"span",1),u(58,"Touched"),l()(),a(59,"dd"),u(60),l()(),a(61,"div",2)(62,"dt")(63,"span",1),u(64,"Untouched"),l()(),a(65,"dd"),u(66),l()(),a(67,"dt",0)(68,"span",1),u(69,"Status"),l()(),a(70,"dd",0),u(71),l(),a(72,"dt",0)(73,"span",1),u(74,"UpdateOn"),l()(),a(75,"dd",0),u(76),l()()),r&2){let d,c,B,Ve,De,be,Me,Ee,Ae,we,Fe,Ie,Se;h(5),f(X(6,14,(d=s.control())==null?null:d.value)),h(2),Be(s.isFormControl()?7:-1),h(5),f(X(13,16,(c=s.control())==null?null:c.errors)),h(7),f((B=s.control())==null?null:B.valid),h(6),f((Ve=s.control())==null?null:Ve.invalid),h(5),f((De=s.control())==null?null:De.pending),h(6),f((be=s.control())==null?null:be.disabled),h(6),f((Me=s.control())==null?null:Me.enabled),h(6),f((Ee=s.control())==null?null:Ee.pristine),h(6),f((Ae=s.control())==null?null:Ae.dirty),h(6),f((we=s.control())==null?null:we.touched),h(6),f((Fe=s.control())==null?null:Fe.untouched),h(5),f((Ie=s.control())==null?null:Ie.status),h(5),f((Se=s.control())==null?null:Se.updateOn)}},dependencies:[ze,Mt],styles:["dl[_ngcontent-%COMP%]{max-width:15rem;display:grid;grid-template-columns:max-content max-content;grid-template-rows:none;padding:0 .5rem}dl[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + dd[_ngcontent-%COMP%], div[_ngcontent-%COMP%]{border-bottom:1px solid #555}dt[_ngcontent-%COMP%]{display:inline;height:max-content}dd[_ngcontent-%COMP%]{padding-bottom:.5rem;font-size:.8rem}.pair[_ngcontent-%COMP%]{display:inline}.single[_ngcontent-%COMP%]{grid-column:1/3}"]});let t=e;return t})();export{S as a,rt as b,oe as c,Ze as d,_ as e,Oi as f,Pi as g,Ke as h,Dt as i,Qt as j,ki as k,ti as l,ri as m,oi as n,li as o,di as p,Ti as q,ji as r,Mt as s,qi as t};
