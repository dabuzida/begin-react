import React, { useState, useReducer, useRef, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  // 1
//   create input을 건드리는데 userlist  불필요한 렌더링
// 왜냐하면 useReducer 쓰느라 inputs, users를 하나의 state로 묶어서 
// inputs가 바뀌니깐 React.memo를 써도 바낀걸로 인식하는듯
//  하나로 묶였는데도 다르게 적용되는지 위에 세개의 줄 적용 안하네?
  inputs: {
    username: '',
    email: ''
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
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
  ]
};

function reducer(state, action){
  switch (action.type){
    case 'CHANGE_INPUT':
      return { 
        ...state, 
        inputs: {...state.inputs, [action.name]: action.value } 
      };
    case 'CREATE_USER':
      return { 
        inputs: initialState.inputs, 
        users: state.users.concat(action.user) 
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id),
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => 
          user.id === action.id ? { ...user, active: !user.active } : user),
      };
    default: 
      return state;
  }
}

function App() {
    console.log('App component rendering');
    const focusUsername = useRef();
    const nextId = useRef(4);
    const [state, dispatch] = useReducer(reducer, initialState);
    // 2
    // initialState 값이  state로 들어갈때 복사해서 넣는건지 => 이게되야 말이돼
    // 아니면 같은 객체가되는건지
    //  creat_user에서
    const { users } = state;
    const { username, email } = state.inputs;
    const onChange = useCallback(e => {
      const { name, value } = e.target;
      dispatch({ type: 'CHANGE_INPUT', name, value });
      },
      []
    );
    const onCreate = useCallback(() => {
        const user = {
          id: nextId.current,
          username,
          email,
          active: false,
        };
        dispatch({ type: 'CREATE_USER', user });
        focusUsername.current.focus();
        nextId.current += 1;
      },
      [username, email]
    );
    const onRemove = useCallback(id => {
        dispatch({ type: 'REMOVE_USER', id })
      },
      []
    );
    const onToggle = useCallback(id => {
        dispatch({ type: 'TOGGLE_USER', id })
      },
      []
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
        <UserList 
          users={users} 
          onToggle={onToggle}
          onRemove={onRemove}
        />
        <div>활성사용자 수 : {count}</div>
      </>
    );
}


// function App() {
//   console.log('App rendering')
//   const [parts, setParts] = useState('');

//   return (
//     <>
//       <Counter />
//       {/* <div>{parts}</div>
//       <button onClick={() => setParts(e => e+'d')}>버튼</button> */}
//     </>
//   )
// }

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
