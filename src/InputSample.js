import React, { useRef } from 'react';
import {useState} from 'react';

function InputSample() {
    // const [text, setText] = useState("");
    // const onChange = (e) => {
    //   setText(e.target.value);
    // };
    // const onReset = () => {
    //     setText('');
    // }
    
    const [input,setInput] = useState({
        name : '',
        nickname : ''
    });
    const nameInput = useRef();

    const {name, nickname} = input;
    const onChange = (e) => {
        const {value, name} = e.target;
        setInput({
            ...input,
            [name]:value
        });
        };
    const onReset = () => {
            setInput({
                name: '',
                nickname: ''
            })
            nameInput.current.focus();
        };
    return(
        <div>
            {/* <div>
                <input onChange = {onChange} value={text}/>
                <button onClick = {onReset}> 초기화 </button>
             </div>
             <div>
                <b>값: {text}</b>
             </div> */}

             <input name = 'name' placeholder = '이름' onChange = {onChange} value = {name} ref = {nameInput}/>
             <input name = 'nickname' placeholder = '닉네임' onChange = {onChange} value = {nickname}/>
             <button onClick = {onReset}> 초기화 </button>

             <div>
                {/* <b>값 : {text}</b> */}
                <b>값 : </b><br />
                {name}({nickname})
             </div>
        </div>
        
    );
}

export default InputSample;