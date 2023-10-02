import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {

        setInputValue(event.target.value);

        
    }
   

    const onSubmit = (event) => {

        event.preventDefault();

        const value = inputValue.trim();

        if (value.length < 1) return;

        // setCategories(categories => [inputValue,...categories]);

        onNewCategory(value);

        setInputValue('');


    }


    return (

        <form onSubmit={(event) => onSubmit(event)}>

            <input
                type=" text"
                placeholder=" Buscar gif"
                value={inputValue}
                // onChange = { (event) => onInputChange(event) } 

                onChange={onInputChange}

            />

        </form>

    )
}
