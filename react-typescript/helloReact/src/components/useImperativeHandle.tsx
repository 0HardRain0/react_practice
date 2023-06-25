// useImperativeHandle 훅
// 샘플코드
// useRef와 관련된 훅 => 컴포넌트에 ref가 전달 될 때, 부모의 ref에 대입될 값을 설정할 때 사용

import React, { useState, useRef, useImperativeHandle } from 'react'

const Child = React.forwardRef((props, ref) => {
    const [message, setMessage] = useState<string | null>(null)

    useImperativeHandle(ref, () => ({
        showMessage: () => {
            const date = new Date()
            const message = `Hello, it's ${date.toLocaleDateString()} now`
            setMessage(message)
        },
    }))

    return <div>{message !== null ? <p>{message}</p> : null}</div>
})

const Parent = () => {
    const childRef = useRef<{ showMessage: () => void }>(null)
    const onClick = () => {
        if (childRef.current !== null){
            childRef.current.showMessage()
        }
    }

    return (
        <div>
            <button onClick={onClick}>Show Message</button>
            <Child ref={childRef} />
        </div>
    )
}