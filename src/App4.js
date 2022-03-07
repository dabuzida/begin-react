import React, { useRef, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useMyReducer from './hooks/useMyReducer';
console.log('#################### App.js ####################');

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
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
      email: "tester@example.com",
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

function App() {
  console.log('++++++++++++++++++++ App function rendering ++++++++++++++++++++');
  const [state, onChange, onCreate, onToggle,
    onRemove, focusUsername] = useMyReducer(initialState);
  const { users } = state;
  const { username, email } = state.inputs;
  const count = useMemo(() =>
    countActiveUsers(users), [users]);

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

export default App;
