import { useState } from 'react'

type InputProps = JSX.IntrinsicElements['input'] & {
  label: string
}

export const Input = (props: InputProps) => {
  const { label, ...rest } = props

  const [text, setText] = useState('')

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value) 
  }

  const resetInputField = () => {
    setText('')
  }

  return (
    <div>
        <label htmlFor={props.id}>{label}</label>
        <input {...rest} type="text" value={text} onChange={onInputChange} />
        <button onClick={resetInputField}>Reset</button>
    </div>
  )

//  label요소를 사용하지 않는 경우에는 input요소에 aria-label을 지정해 요소를 얻을 수 있음.
//   return (
//     <div>
//         <input {...rest} type='text' value={text} onChange={onInputChange} aria-label={label} />
//           <button onClick={resetInputField}>Reset</button>
//     </div>
//   )

}