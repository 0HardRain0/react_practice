// 컨테이너 컴포넌트
// 자식인 프레젠테이션 컴포넌트(Button.tsx)는 부모로부터 전달된 pops를 기반으로 표시만 담당.

import { useState, useCallback } from 'react'
import { Button } from './button'

const usePopup = () => {

    const cb = useCallback((text: string) => {
        prompt(text)
    },[])

    return cb
}

type CountButtonProps = {
    label: string
    maximum: number
}

export const CountButton = (props: CountButtonProps) => {
    const { label, maximum } = props

    const displayPopup = usePopup()

    const [count, setCount] = useState(0)

    const onClick = useCallback(() => {
        
        const newCount = count + 1
        setCount(newCount)

        if (newCount >= maximum) {
            displayPopup(`You've clicked ${newCount} times`)
        }
    }, [count, maximum])

    const disabled = count >= maximum
    const text = disabled
      ? 'Can\'t click any more'
      : `You've clicked ${count} times`

      return (
        <Button disabled = {disabled} onClick={onClick} label={label} text={text} />
      )
}