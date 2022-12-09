import { useEffect } from "react";
import { useState } from "react";

const CountDown = () => {

    let [count, setCount] = useState(60);

    useEffect(() => {

        if (count === 0) {
            // alert('time up !');
            return;
        }

        let timer = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };

    }, [count]);

    return (
        <p>Loading... {count}s</p>
    );
}
export default CountDown;