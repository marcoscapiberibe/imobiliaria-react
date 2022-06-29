import '../CardImovel/CardImovel.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CardImovel01 from '../CardImovel/Card01.jpg';
import CardImovel02 from '../CardImovel/Card02.jpg';
import CardImovel03 from '../CardImovel/Card03.jpg';



function CardImovel() {
    return (
        <Container className='card--row'>
        <Row xs={1} md={3} className="g-4 justify-content-center align-items-center card--row">

            <Col>
                <Card style={{ width: '18rem'}} className="card--estilo">
                    <Card.Img variant="top" src={CardImovel01} />
                    <Card.Body>
                        <Card.Title>Apartamento</Card.Title>
                        <Card.Text>
                            Apto. TÉRREO c/ 68m² de área privativa, sala p/ 2 ambientes c/ armário PROJETADO e varanda, 3 quartos c/ armários PROJETADOS s/ 1 suíte
                        </Card.Text>
                        <Button variant="secondary">Quero este imóvel</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }} className="card--estilo">
                    <Card.Img variant="top" src={CardImovel02} />
                    <Card.Body>
                        <Card.Title>Apartamento</Card.Title>
                        <Card.Text>
                            Apartamento com 344 metros quadrados com 4 quartos sendo 4 suites e 2 banheiros. Possui academia, espaço gourmet, área verde de jardim, área de recreação infantil, espaço para festas.
                        </Card.Text>
                        <Button variant="secondary">Quero este imóvel</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }}  className="card--estilo">
                    <Card.Img variant="top" src={CardImovel03} />
                    <Card.Body>
                        <Card.Title>Apartamento</Card.Title>
                        <Card.Text>
                            Apartamento com 164 metros quadrados, 3 quartos sendo 3 suites e 5 banheiros. Possui academia, área verde de jardim, parquinho com diferentes brinquedos, salão de festas.
                        </Card.Text>
                        <Button variant="secondary">Quero este imóvel</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }} className="card--estilo">
                    <Card.Img variant="top" src={CardImovel01} />
                    <Card.Body>
                        <Card.Title>Apartamento</Card.Title>
                        <Card.Text>
                            Apto. TÉRREO c/ 68m² de área privativa, sala p/ 2 ambientes c/ armário PROJETADO e varanda, 3 quartos c/ armários PROJETADOS s/ 1 suíte
                        </Card.Text>
                        <Button variant="secondary">Quero este imóvel</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }} className="card--estilo">
                    <Card.Img variant="top" src={CardImovel02} />
                    <Card.Body>
                        <Card.Title>Apartamento</Card.Title>
                        <Card.Text>
                            Apartamento com 344 metros quadrados com 4 quartos sendo 4 suites e 2 banheiros. Possui academia, espaço gourmet, área verde de jardim, área de recreação infantil, espaço para festas.
                        </Card.Text>
                        <Button variant="secondary">Quero este imóvel</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }} className="card--estilo">
                    <Card.Img variant="top" src={CardImovel03} />
                    <Card.Body>
                        <Card.Title>Apartamento</Card.Title>
                        <Card.Text>
                            Apartamento com 164 metros quadrados, 3 quartos sendo 3 suites e 5 banheiros. Possui academia, área verde de jardim, parquinho com diferentes brinquedos, salão de festas.
                        </Card.Text>
                        <Button variant="secondary">Quero este imóvel</Button>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
        </Container>
    );
}

export default CardImovel;