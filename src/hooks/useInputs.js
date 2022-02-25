import { useState, useCallback } from 'react';
console.log('#################### useInputs.js start ####################');

function useInputs(initialForm){
    const [form ,setForm] = useState(initialForm);
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(form => ({ ...form,  [name]: value}));
    }, []);
    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    return [form, onChange, reset];
}

export default useInputs;

/*

const initialForm = {username:'', email:''};
const reset = useCallback(() => setForm(initialForm, [initialForm]));

*/