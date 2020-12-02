/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { camelCase, pascalCase, snakeCase } from 'change-case'
import pluralize from 'pluralize'

export const toPlural = (str: string) => pluralize(str)
export const ucFirst = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`
export const ucFirstPlural = (str: string) => pluralize(ucFirst(str))
export const toUppercase = (str: string) => str.toUpperCase()
export const toUppercasePlural = (str: string) => pluralize(str.toUpperCase())
export const toLowercase = (str: string) =>  str.toLowerCase()
export const toLowercasePlural = (str: string) =>  pluralize(str.toLowerCase())
export const toKebabCase = (str: string) => {
  const matched = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
  if (!matched) return str

  const kebab = matched
    .map(x => x.toLowerCase())
    .join('-')
  return kebab
}
export const toKebabCasePlural = (str: string) =>  pluralize(toKebabCase(str))
export const toCamelCase = (str: string) =>  camelCase(str)
export const toCamelCasePlural = (str: string) => camelCase(pluralize(str))
export const toPascalCase = (str: string) => pascalCase(str)
export const toPascalCasePlural = (str: string) => pascalCase(pluralize(str))
export const toSnakeCase = (str: string) => snakeCase(str)
export const toSnakeCasePlural = (str: string) => snakeCase(pluralize(str))
