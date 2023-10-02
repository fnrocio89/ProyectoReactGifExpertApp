
import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['naruto']);

    const onAddCategories = (newcategory) => {

        if (categories.includes(newcategory)) return;


        setCategories([newcategory, ...categories]);

    }

    return (
        <>

            {/* ***************Titulo **********************/}

            <h1>GifExpertApp</h1>

            {/* ****************Input ***********************/}

            <AddCategory
                onNewCategory={event => onAddCategories(event)}

            />


            {
                categories.map(category => (

                    <GifGrid
                        key={category}
                        category={category}

                    />
                )

                )
            }



        </>
    )
}
