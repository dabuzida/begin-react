import React from 'react';

function CreateUser({ username, email, onChange, onCreate, useRef }){
    console.log('CreateUser component rendering');
    return (
        <div>
            <b>==============================</b>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
                ref={useRef}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

// export default CreateUser;
export default React.memo(CreateUser);
