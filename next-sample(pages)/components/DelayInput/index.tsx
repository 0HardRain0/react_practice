// 테스트 해야할 것
// 초기 표시 비어 있음
// 입력 직후는 '입력 중'이라고 표시
// 입력하고 1초가 지난 뒤에 입력한 내용 표시
// 입력하고 2초가 지난 후에 onChange 콜백이 호출

import React, { useState, useCallback, useRef } from 'react'

type DelayButtonProps = {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const DelayInput = (props: DelayButtonProps) => {
  const { onChange } = props
  const [isTyping, setIsTyping] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [viewValue, setViewValue] = useState('')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTyping(true)
    setInputValue(e.target.value)

    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      timerRef.current = null
      setIsTyping(false)
      setViewValue(e.target.value)
      onChange(e)
    }, 1000)
  }, [onChange]) 

  const text = isTyping ? '입력중...' : `입력한 텍스트: ${viewValue}`

  return (
    <div>
        <input data-testid = "input-text" value = {inputValue} onChange={handleChange} />
        <span data-testid = "display-text">{text}</span>
    </div>
  )
}