import React, { useState, useRef } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Hello from './Hello';
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [users, setUsers] = useState([
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
  ]);

  const [inputs, setInputs] = useState({
      username: '',
      email: '',
  });
  const { username, email } = inputs;
  const focusUsername = useRef();
  const nextId = useRef(4);
  
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({...inputs, [name]: value});
  };
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };
  const onToggle = id =>{
    setUsers(
      users.map(
        user => user.id === id ? { ...user, active: !user.active }: user
        ));
  }
  const onCreate = () => {
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
  }
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
      </>
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
    );
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
}

export default App;
