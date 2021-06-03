// import logo from './logo.svg';
import './App.css';
import Hello from './hello';
import Wrapper from './Wrapper';
import Counter from './counter';
import InputSample from './InputSample';
import CreateUser from './CreateUser';
import UserList from './UserList';
import React, {useRef, useState} from 'react';

function App() {
  const [inputs,setInputs] = useState({
    username:'',
    email:''
  });

  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  };

  const [users,setUsers] = useState([
    {
        id: 1,
        username: 'kimtaehun',
        email: 'dev.hoon@gmail.com'
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
    }
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id : nextId.current,
      username,
      email
    };
    setUsers([...users,user]);
    setInputs({
      username : '',
      email : ''
    });
    nextId.current += 1;
  };

  return (
    <div>
      <CreateUser 
        username = {username}
        email = {email}
        onChange = {onChange}
        onCreate = {onCreate}
      />
      <UserList users = {users}/>
    </div>
  );
}


export default App;
