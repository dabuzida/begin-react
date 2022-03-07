import React, { useRef, useContext } from 'react';
import { UserDispatch } from './App';
import useInputs from './hooks/useInputs';

console.log('#################### CreateUser.js ####################');
function CreateUser() {
  console.log('++++++++++++++++++++ CreateUser function rendering ++++++++++++++++++++');
  const dispatch = useContext(UserDispatch);
  const [{ username, email }, onChange, reset] = useInputs({
    username: '',
    email: ''
  });
  const focusUsername = useRef();
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
      active: false,
    };
    dispatch({ type: 'CREATE_USER', user });
    reset();
    focusUsername.current.focus();
    nextId.current += 1;
  };


  return (
    <div>
      <b>==============================</b>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
        ref={focusUsername}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={
        onCreate
        // () => {
        //     dispatch({ type: 'CREATE_USER', user });
        //         }
      }>등록</button>
    </div>
  );
}

// export default CreateUser;
export default React.memo(CreateUser);
