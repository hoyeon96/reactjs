// import logo from './logo.svg';
import './App.css';
import Avatar from './hello';
import Wrapper from './Wrapper';
import Counter from './counter';
import InputSample from './InputSample';
import CreateUser from './CreateUser';
import UserList from './UserList';
import React, {useRef, useState, useMemo, useCallback} from 'react';

function countActiveUsers(users) {
  console.log("활성 사용자수 세는 방법");
  return users.filter(user => user.active).length;
}

function App() {
    // <Hello />
  const [inputs,setInputs] = useState({
    username:'',
    email:''
  });

  const {username, email} = inputs;
  const onChange = useCallback( e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  },[inputs]);

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
  const onCreate = useCallback( () => {
    const user = {
      id : nextId.current,
      username,
      email
    }

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
  },[users,username,email]);
    
  const onRemove = useCallback( id => {
    console.log("리무브 실행");
    setUsers(users.filter(user => user.id !== id));
  },[users]);

  const onToggle = useCallback( id => {
    setUsers(
      users.map(
        user => user.id === id?
        {...user, active :!user.active} : user)); //해석해보기 
  },[users]);

  const count = useMemo(() => countActiveUsers(users), [users]);

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
      <div>활성사용자 수 : {count}</div>
    </div>
  );
}


export default App;
