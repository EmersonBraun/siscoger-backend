import { transations } from 'src/config'
export type TypeFunction = 'login'|'load'|'found'|'create'|'update'|'delete' |'restore'|'forceDelete'

export function mountResponse (data, error = null, typeFunction: TypeFunction) {
  const statusCode = getSatusCode(error, typeFunction)
  const type = getHappen(statusCode)
  const message = getMessage(typeFunction, statusCode)
  
  return { data, statusCode, type, message, error }
}

export function getSatusCode (contentError: any, typeFunction: TypeFunction): number {
  if (typeFunction === 'create') {
    return !contentError ? 201 : 400
  }
  return !contentError ? 200 : 400
}

export function getHappen (status: number): string {
  return (status < 200 || status > 300) ? 'error' : 'success'
}

export function getMessage (typeFunction: TypeFunction, statusCode: number): string {
  const happen = getHappen(statusCode)
  const msg = transations[typeFunction][happen]
  return msg || ''
}
