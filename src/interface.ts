export enum Mode {
  vertical = 'vertical',
  horizontal = 'horizontal'
}

export interface TextScrollProp {
  className?: string
  mode: string
  text: Array<string>
  speed?: number
}
