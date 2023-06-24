// useState 관련 카운터 컴포넌트 예시

import { useState } from 'react'

type CounterProps = {
    initialValue: number;
}

const Counter = (props: CounterProps): JSX.Element => {
    const { initialValue } = props
    const [ count, setCount ] = useState(initialValue)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
        </div>
    )
}

export default Counter