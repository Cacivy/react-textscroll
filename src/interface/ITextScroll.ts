export interface TextScrollProp {
    className?: string
    mode?: string // "vertical"
    text: Array<string>
    speed?: number

}
export interface TextScrollState {
    duration: number,
    content_width?: number,
    container_width?: number

}