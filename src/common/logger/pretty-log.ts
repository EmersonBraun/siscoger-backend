import { Injectable, Logger, Scope } from '@nestjs/common';
import chalk from 'chalk';
import figures from 'figures';
import { Options } from './types';


export function getIcon(options: Options): string {
  const selectedIcon = options.icon || 'tick'
  if (options.iconColor && options.iconUnderlined) {
    return `${chalk.underline[options.iconColor](figures[selectedIcon])}`
  }
  if (options.iconColor && !options.iconUnderlined) {
    return `${chalk[options.iconColor](figures[selectedIcon])}`
  }
  if (!options.iconColor && options.iconUnderlined) {
    return `${chalk.underline(figures[selectedIcon])}`
  }
  return figures[selectedIcon]
}

function getSpace(value = 2) {
  let space = ''
  for (let index = 0; index < value; index++) {
    space += ' '
  }
  return space
}

function getTitle(options: Options) {
  const space = getSpace(options.titleSpace)
  if (options.titleColor && options.titleUnderlined) {
    return `${space}${chalk.underline[options.titleColor](options.title)}`
  }
  if (options.titleColor && !options.titleUnderlined) {
    return `${space}${chalk[options.titleColor](options.title)}`
  }
  if (!options.titleColor && options.titleUnderlined) {
    return `${space}${chalk.underline(options.title)}`
  }
  return `${space}${options.title}`
}

function getMessage(message: string, options: Options) {
  const space = getSpace(options.messageSpace)
  if (options.messageColor && options.messageUnderlined) {
    return `${space}${chalk.underline[options.messageColor](message)}`
  }
  if (options.messageColor && !options.messageUnderlined) {
    return `${space}${chalk[options.messageColor](message)}`
  }
  if (!options.messageColor && options.messageUnderlined) {
    return `${space}${chalk.underline(message)}`
  }
  return `${space}${message}`
}

function printColoredLog(
  message: string,
  variable: unknown = null,
  options: Options
) {
  const icon = getIcon(options)
  const title = options.title ? getTitle(options) : ''
  const msg = getMessage(message, options)

  if (variable) console.log(`${icon}${title}${msg}:`, variable)
  else console.log(`${icon}${title}${msg}`)
}

@Injectable({ scope: Scope.TRANSIENT })
export class PrettyLogger extends Logger {
  log(message: string) {
    printColoredLog(message, null, {
      icon: 'tick',
      iconColor: 'green',
      title: 'success',
      titleColor: 'green',
    })
    return true
  }
  error(message: string, trace = '') {
    printColoredLog(message, trace, {
      icon: 'cross',
      iconColor: 'red',
      title: 'error',
      titleColor: 'red',
    })

    return true
  }
  warn(message: string) {
    printColoredLog(message, null, {
      icon: 'warning',
      iconColor: 'yellow',
      title: 'warn',
      titleColor: 'yellow',
    })

    return true
  }
  debug(message: string) {
    printColoredLog(message, null, {
      icon: 'info',
      iconColor: 'blue',
      title: 'info',
      titleColor: 'blue',
    })

    return true
  }
  verbose(message: string) {
    console.log(message)
  }
}