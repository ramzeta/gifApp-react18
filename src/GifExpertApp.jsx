import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import {GifGridCategory} from './components/GifGridCategory'
import { Container } from 'react-bootstrap';
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }


    return (
        <>
            <Container>
                <h1>GifExpertApp</h1>


                <AddCategory
                    onNewCategory={(value) => onAddCategory(value)}
                />

                {
                    categories.map((category) => (
                        <GifGridCategory
                            key={category}
                            category={category} />
                    ))
                }



            </Container>
        </>
    )
}
