// 버튼을 누르면 모든 버튼의 카운트가 1씩 올라감
import { useState } from "react";

export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update together</h1>
            <MyButton count = {count} onClick={handleClick} />
            <MyButton count = {count} onClick={handleClick} />
        </div>
    );
}

function MyButton({ count, onClick}) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}
