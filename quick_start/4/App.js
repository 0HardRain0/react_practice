// 버튼을 누르면 카운트 1씩 올라감
import { useState } from "react";

export default function MyApp() {
    return (
        <div>
            <h1>Counters that update separately</h1>
            <MyButton />
            <MyButton />
        </div>
    );
}


function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    return (
        <button onClick = {handleClick}>
            Clicked {count} times
        </button>
    );
}