import { GifItemCategory } from './GifItemCategory';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const GifGridCategory = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
         <Container>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            

            <Row className="card-grid">
                {
                    images.map( ( image ) => (
                        <Col sm={4}>
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                        </Col>
                    ))
                }
                
            </Row>
            </Container>
        </>
    )
}
