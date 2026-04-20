import {useState} from 'react';

function MusicInput({ onSend }){
    const [value, setValue ] = useState('');

    const handleSubmit = (e) => { //will handle the input
        e.preventDefault(); 
        onSend(value); //will send the value for app.jsx
        setValue(''); //will reset de camp
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                placeholder='Write and press enter'
            />
            <button type="submit" >Add</button>
        </form>
    )
}

export default MusicInput;