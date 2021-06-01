import React from 'react'; // 리액트라는걸 쓸거다 선언

// function Hello(props){
//     return <div>Hello world!{props.named}이고, 오팬무는 {props.color}입니다.</div>
// }

function Hello({name,color}){
    return <div style = { {color: color}}>Hello world!{name}이고, 오팬무는 {color}입니다.</div>
}

Hello.defaultProps = {
    name : '이름없음',
    color : 'orange'
}

export default Hello;