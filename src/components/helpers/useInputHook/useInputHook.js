import { useState } from 'react';

function useInputHook(initialValue = '') {
    const [input, setInput] = useState(initialValue);

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setInput(value);
    };

    const clearFields = () => {
        setInput('');
    };

    return [input, handleChange, clearFields];
}

export default useInputHook;