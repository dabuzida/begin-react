import { useCallback, useRef, useReducer } from 'react';
console.log('#################### useMyReducer.js start ####################');

function useMyReducer(initialState){
    const nextId = useRef(4);
    const focusUsername = useRef();

    const [state, dispatch] = useReducer(reducer, initialState);
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
        dispatch({ type: 'REMOVE_USER', id });
        },
        []
    );
    const onToggle = useCallback(id => {
        dispatch({ type: 'TOGGLE_USER', id });
        },
        []
    ); 

    return [state, onChange, onCreate, onToggle, onRemove, focusUsername];

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
}

export default useMyReducer;




