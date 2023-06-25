// 커스텀 훅 및 useDebugValue 훅

import React, { useState, useCallback, useDebugValue } from 'react'

// 커스텀 훅
const useInput = () => {
    const [state, setState] = useState('')
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }, [])

    useDebugValue(`Input: ${state}`)

    return [state, onChange] as const
}

const Input = () => {
    const [text, onChangeText] = useInput()
    return (
        <div>
            <input type="text" value={text} onChange={onChangeText} />
            <p>Input: {text}</p>
        </div>
    )
}