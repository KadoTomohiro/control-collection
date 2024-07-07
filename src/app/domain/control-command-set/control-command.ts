export type EmitOption = {
  emitEvent: boolean,
}

export type ControlOperationMethodOption = EmitOption & {
  onlySelf: boolean,
}

export type ControlValueOperationMethodOption =  ControlOperationMethodOption & {
  emitModelToViewChange: boolean,
  emitViewToModelChange: boolean
}
