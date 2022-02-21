import React, { useState, useRef, useMemo, useCallback } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Hello from './Hello';
// import Wrapper from './Wrapper';
import Counter from './Counter';
// import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  console.log('App component rendering')
  const [users, setUsers] = useState(
    [
      {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active: true,
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false,
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false,
      }
    ]
  );

  const [inputs, setInputs] = useState(
    {
      username: '',
      email: '',
    }
  );
  const { username, email } = inputs;
  const focusUsername = useRef();
  const nextId = useRef(4);
  
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs({...inputs, [name]: value});
    },
    [inputs]
  );

  const onRemove = useCallback(
    id => {
      setUsers(users.filter(user => user.id !== id));
    },
    [users]
  );
  const onToggle = useCallback(
    id => {
      setUsers(
        users.map(
          user => user.id === id ? { ...user, active: !user.active } : user
      ));
    },
    [users]
  );
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
      active: false,
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    focusUsername.current.focus();
    nextId.current += 1;
    }, 
    [users, username, email]
  );
  const count = useMemo(() => countActiveUsers(users), [users]) ;
    return (
      <>
        <CreateUser 
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
          useRef={focusUsername}
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
        <div>활성사용자 수 : {count}</div>
      </>
    );
}


/* function App() {
  console.log('App')
  const [parts, setParts] = useState('');

  return (
    <>
      <Counter />
      <div>{parts}</div>
      <button onClick={() => setParts(e => e+'d')}>버튼</button>
    </>
  )
} */

      // <UserList />
      // <InputSample />
      // <Counter />
      // <Wrapper >
      //     <Hello name="react" color="red" isSpecial={true} />
      //     <Hello color="pink" isSpecial/>
      //   </Wrapper>
    //     
    //     
    //     <div style={style}>{name}</div>
    //     <div className="gray-box"></div>
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

export default App;
