import React from 'react'; // 리액트라는걸 쓸거다 선언
import avatar from './mypic.jpg';
// function Hello(props){
//     return <div>Hello world!{props.named}이고, 오팬무는 {props.color}입니다.</div>
// }

function Hello({name, color, isSpecial}){
    return <div style = { {color: color}}>
        {/* {isSpecial ? <b>***</b> : <b>$$$</b>} */}
        {isSpecial && <b>***</b>}
        안녕하세요! {name}이고, 오팬무는 {color}입니다.</div>
}

function Avatar(){
    return <img src={avatar}/>
}

Hello.defaultProps = {
    name : '이름없음',
    color : 'orange'
}

export default Avatar;