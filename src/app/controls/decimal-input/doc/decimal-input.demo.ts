import {CONTROL_DOCUMENT_PROPERTIES} from "@domain/control-document/control-demo.service";
import {ControlDemoProperty} from "@domain/control-document/component-info";

const decimalInputDemoProp: ControlDemoProperty = {
    decimalInput: []
}

export const decimalInputDocProvide = {provide: CONTROL_DOCUMENT_PROPERTIES, useValue: decimalInputDemoProp, multi: true}
