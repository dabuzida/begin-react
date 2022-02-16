import React from 'react';
function Hello({ name, color }){
    return (
            <>
            <div>안녕하세요</div>
            <div style={{ color }}>굿바이 {name}</div>
            </>
    )
}

Hello.defaultProps = {
    name: '이름없음'
}
export default Hello;