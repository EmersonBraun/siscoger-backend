import {
  camelCase,
  pascalCase,
  snakeCase,
  ucFirst,
  toKebabCase,
} from 'change-case';
import pluralize from 'pluralize';

module.exports = {
  transformers: {
    toPlural: str => pluralize(str),
    ucFirst: str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`,
    ucFirstPlural: str => pluralize(ucFirst(str)),
    toUppercase: str => str.toUpperCase(),
    toUppercasePlural: str => pluralize(str.toUpperCase()),
    toLowercase: str => str.toLowerCase(),
    toLowercasePlural: str => pluralize(str.toLowerCase()),
    toKebabCase: str => {
      const matched = str.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
      );
      if (!matched) return str;

      const kebab = matched.map(x => x.toLowerCase()).join('-');
      return kebab;
    },
    toKebabCasePlural: str => pluralize(toKebabCase(str)),
    toCamelCase: str => camelCase(str),
    toCamelCasePlural: str => camelCase(pluralize(str)),
    toPascalCase: str => pascalCase(str),
    toPascalCasePlural: str => pascalCase(pluralize(str)),
    toSnakeCase: str => snakeCase(str),
    toSnakeCasePlural: str => snakeCase(pluralize(str)),
  },
  // functions: {
  //   date: (context) => Date.now(),
  // },
  // parametersOptions: {
  //   someParameter: {
  //     question:
  //       "this text will be shown to the user in the interactive mode when he will be asked to enter the value for 'someParameter'",
  //   },
  // },
  templatesOptions: {
    // someTemplate: {
    //   hooks: {
    //     preTemplateGeneration: (context) => {
    //     // do something before generating a template
    //     },
    //     postTemplateGeneration: (context) => {
    //     // do something after generating a template
    //     }
    //   },
    //   // transformers functions, parametersOptions can be scoped to specific templates
    //   transformers: {...},
    //   functions: {...},
    //   parametersOptions: {...}
    // }
  },
};
