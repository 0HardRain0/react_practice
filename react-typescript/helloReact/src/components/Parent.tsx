// 메모이제이션
import React, { memo, useState } from 'react'

type FizzProps = {
    isFizz: boolean
}

// isFizz가 true이면 Fizz라고 표시

const Fizz = (props: FizzProps) => {
    const { isFizz } = props
    console.log(`Fizz가 다시 그려졌습니다. isFizz=${isFizz}`)
    return <span>{isFizz? 'Fizz': ''}</span>
}

type BuzzProps = {
    isBuzz: boolean
}

// Buzz는 메모이제이션한 함수 컴포넌트

const Buzz = memo<BuzzProps>((props) => {
    const { isBuzz } = props
    console.log(`Buzz가 다시 그려졌습니다. isBuzz= ${isBuzz}`)
    return (
        <span>
            {isBuzz? 'Buzz': ''}
        </span>
    )
})

export const Parent = () => {
    const [count, setCount] = useState(1)
    const isFizz = count % 3=== 0
    const isBuzz = count % 5=== 0

    console.log(`Parent가 다시 그려졌습니다. count=${count}`)
    return (
        <div>
            <button onClick={() => setCount((c) => c+1)}>+1</button>
            <p>{`현재 카운트: ${count}`}</p>
            <p>
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} />
            </p>
        </div>
    )
}

export default Parent