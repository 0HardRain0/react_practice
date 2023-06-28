// 프레젠테이션 컴포넌트

import './style.css'

type ButtonProps = {
    label: string
    text: string
    disabled: boolean
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = (props: ButtonProps) => {
    const { label, text, disabled, onClick} = props

    return (
        <div className="button-container">
            <span>{label}</span>
            <button disabled={disabled} onClick={onClick}>
                {text}
            </button>
        </div>
    )

}