import { filter } from 'rxjs';

export function EStringRequired(filed: string , section:string): string {
  return `${filed}_FIELD_${section}_IS_STRING_REQUIRED`
}
export function EStringEmpty(filed: string , section:string): string {
  return `${filed}_FIELD_${section}_IS_EMPTY`
}
export function ENumberRequired(filed: string , section:string): string {
  return `${filed}_FIELD_${section}_IS_NUMBER_REQUIRED`
}

export function EBooleanRequired(filed: string , section:string): string {
  return `${filed}_FIELD_${section}_IS_BOOLEAN_REQUIRED`
}

export function EArrayRequired(filed: string , section:string): string {
  return `${filed}_FIELD_${section}_IS_ARRAY_REQUIRED`
}

export function EMinimumArrayRequired(filed: string , section:string, min? : number): string {
  if (min)  return `${filed}_FIELD_${section}_IS_MIN_${min}_ARRAY_REQUIRED` ; else
    return `${filed}_FIELD_${section}_IS_ARRAY_REQUIRED`
}

export function EMaximumArrayRequired(filed: string , section:string, max? : number): string {
  if (max)  return `${filed}_FIELD_${section}_IS_MIN_${max}_ARRAY_REQUIRED` ; else
    return `${filed}_FIELD_${section}_IS_ARRAY_REQUIRED`
}
export function EDuplicated(filed: string , section:string): string {
  return `${filed}_FIELD_${section}_IS_DUPLICATED`
}

export function ERecordNotFound(section:string): string {
  return `${section}_RECORD_NOT_FOUND`
}

export function EFieldValidate(field : string , section : string) {
  return `${field}_VALUE_${section}_NOT_VALIDATE`
}

export function EFieldBetweenValidate(field : string , section : string , from:number , to : number) {
  return `${field}_VALUE_${section}_MUST_BETWEEN_${from}B_AND_${to}KB`
}

export function EFieldMinimumNumberValidate(field : string , section : string , min:number ) {
  return `${field}_VALUE_${section}MIN_${min}`
}

export function EPatternUUIDWrong(field : string ,section:string): string {
  return `PATTERN_${field}_IS_UUID_WRONG`
}

export function ENestedSubClass(field : string ,section:string): string {
  return `${field}_FIELD_${section}_IS_NEED_NESTED_OBJECT`
}

