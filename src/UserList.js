import React, { useEffect, useContext } from 'react';
import { UserDispatch } from './App';
console.log('#################### UserList.js ####################');
// const User = React.memo(function User({ user, onRemove, onToggle }){
function User({ user }){
    console.log('++++++++++++++++++++ User function rendering ++++++++++++++++++++');
    // const dispatch = useContext(UserDispatch);
    const dispatch = useContext(UserDispatch);
    /* useEffect(() => {
        console.log('user 값이 설정됨');
        console.log(user);
        return () => {
            console.log('user 가 바뀌기 전..');
            console.log(user);
        };
    }, [user]); */
    return (
        <div>
            &nbsp;
            &nbsp;
            <b 
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}           
                onClick={() => {
                    dispatch({ type: 'TOGGLE_USER', id: user.id });
                    }
                    // () => onToggle(user.id)
                }
            >
                {user.username}
            </b> 
            &nbsp;
            <span>({user.email})</span>
            <button onClick={
                () => {
                    dispatch({ type: 'REMOVE_USER', id: user.id });
                }
                // () => onRemove(user.id)
                }>삭제</button>
        </div>
    );
}
// );

function UserList({ users }){
    console.log('++++++++++++++++++++ UserList function rendering ++++++++++++++++++++');
    return (
        <div>
            {users.map((user) => (
                    <User 
                        user={user} 
                        key={user.id} 
                    />
            ))}
        </div>
    );
}
// export default UserList;
export default React.memo(UserList);
