import React from 'react';
import './CardList.scss';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const CardList = ({ posts }) => (
    <Container>
        <Row>
            {posts.map (({ id, image, title, excerpt, action }) => (
                <Col xs={12} md={4} key={id}>
                    <Card className="mx-auto my-3">
                        <Card.Img variant='top' src={image} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{excerpt}</Card.Text>
                            <Button variant='secondary'>{action}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
);

export default CardList;