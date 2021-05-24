import { useState } from 'react'

export const useInput = (props) => {
    const [inputs, setInputs] = useState(props);

    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value })
    }

    return [inputs, handleChange]
}
