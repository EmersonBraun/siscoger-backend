declare type ForegroundColor =
  | 'black'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'magenta'
  | 'cyan'
  | 'white'
  | 'gray'
  | 'grey'
  | 'blackBright'
  | 'redBright'
  | 'greenBright'
  | 'yellowBright'
  | 'blueBright'
  | 'magentaBright'
  | 'cyanBright'
  | 'whiteBright';

declare type FigureSet =
  | 'tick'
  | 'cross'
  | 'star'
  | 'square'
  | 'squareSmall'
  | 'squareSmallFilled'
  | 'play'
  | 'circle'
  | 'circleFilled'
  | 'circleDotted'
  | 'circleDouble'
  | 'circleCircle'
  | 'circleCross'
  | 'circlePipe'
  | 'circleQuestionMark'
  | 'bullet'
  | 'dot'
  | 'line'
  | 'ellipsis'
  | 'pointer'
  | 'pointerSmall'
  | 'info'
  | 'warning'
  | 'hamburger'
  | 'smiley'
  | 'mustache'
  | 'heart'
  | 'nodejs'
  | 'arrowUp'
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowRight'
  | 'radioOn'
  | 'radioOff'
  | 'checkboxOn'
  | 'checkboxOff'
  | 'checkboxCircleOn'
  | 'checkboxCircleOff'
  | 'questionMarkPrefix'
  | 'oneHalf'
  | 'oneThird'
  | 'oneQuarter'
  | 'oneFifth'
  | 'oneSixth'
  | 'oneSeventh'
  | 'oneEighth'
  | 'oneNinth'
  | 'oneTenth'
  | 'twoThirds'
  | 'twoFifths'
  | 'threeQuarters'
  | 'threeFifths'
  | 'threeEighths'
  | 'fourFifths'
  | 'fiveSixths'
  | 'fiveEighths'
  | 'sevenEighth';

export interface Options {
  icon?: FigureSet;
  iconColor?: ForegroundColor;
  iconUnderlined?: boolean;
  title?: string;
  titleSpace?: number;
  titleColor?: ForegroundColor;
  titleUnderlined?: boolean;
  messageSpace?: number;
  messageColor?: ForegroundColor;
  messageUnderlined?: boolean;
}
