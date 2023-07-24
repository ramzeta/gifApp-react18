import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <>
            <Container>
                <Form onSubmit={onSubmit}>
                    <Form.Group controlId="stringInput">
                        <Form.Label>
                            Buscador
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Escribe algo..."
                            value={inputValue}
                            onChange={onInputChange}

                        />
                    </Form.Group>
                    <br></br>
                    <Button variant="primary" onClick={onSubmit}>
                        Añadir Categoria
                    </Button>
                </Form>
            </Container>
        </>
    )
}
