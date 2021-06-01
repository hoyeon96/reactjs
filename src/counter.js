import React, {useState} from 'react';

function Counter(){
    // const numberState = useState(0);
    // const number = numberState[0];
    // const setNumber = numberState[1];
    const [number,setNumber] = useState(0);
    
    // function onIncrease(){
    //     console.log('+1');
    // }
    const onIncrease = () => {
        setNumber(number+1);
        console.log('+1');
    }
    const onDecrease = () => {
        setNumber(number-1);
        console.log('-1');
    }

    return(
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick = {onIncrease}>+1</button>
                {/* 함수타입에 이벤트를 설정할때는 함수타입의 값을 넣어줘야하지 함수로 호출하면 안됨... */}
                <button onClick = {onDecrease}>-1</button>
            </div>
        </div>
        

    );
}


export default Counter;