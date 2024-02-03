export interface IHatchTextField {
    labelName?: string,
    bg_color?: string,
    value?: string,
    fieldName?: string
    onHandleChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => any
}