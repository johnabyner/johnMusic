import {useState} from "react";

function useMusic(){
    const [musics, setMusics] = useState([]); 

    const addMusic = (input) => {
        if(input.trim() !== ''){ //if is diferent of void
            setMusics(prevMusics => [...prevMusics, input]); //will set de input for prev
        }
    };

    return { musics, addMusic } //list with musics and a function for add
}

export {useMusic};