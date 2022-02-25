import React, { useState, useReducer, useRef, useMemo, useCallback } from 'react';

console.log('#################### App3.js ####################');
const initialState = {
  id: 3,
  username: 'liz',
  email: 'liz@example.com',
  active: false,
  dfdd: {a:3},
};
// const initialState = 111;

function reducer(state, action){
  switch (action.type){
    case 'aa':
      return {...state, id: state.id + 1 };
      // return state + 1;
    default: 
      return state;
  }
}

function App() {
    console.log('++++++++++++++++++++ App function rendering ++++++++++++++++++++');
    console.log(initialState, '<<initialState');
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state, '<<state');
    const onChange = useCallback( () => {
      dispatch({ type: 'aa' });
      },
      []
    );
    return (
      <>
        <span>
            tttdd
        </span>
        <button onClick={onChange}>등록</button>
      </>
    );
}

export default App;
