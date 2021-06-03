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
        email: 'dev.hoon@gmail.com',
        active: true
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false
    }
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id : nextId.current,
      username,
      email
    };

    setUsers(
      //스프레드를 이용해 만듬
      // [...users,user]

      users.concat(user)
      );
    setInputs({
      username : '',
      email : ''
    });
    nextId.current += 1;
  };
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(
      users.map(
        user => user.id === id?
        {...user, active :!user.active} : user)); //해석해보기 
  }


  return (
    <div>
      <CreateUser 
        username = {username}
        email = {email}
        onChange = {onChange}
        onCreate = {onCreate}
      />
      <UserList 
        users = {users}
        onRemove = {onRemove}
        onToggle = {onToggle}
      />
    </div>
  );
}


export default App;
