import '../CardImovel/CardImovel.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImovel01 from '../CardImovel/Card01.jpg';



function CardImovel() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={CardImovel01} />
      <Card.Body>
        <Card.Title>Apartamento</Card.Title>
        <Card.Text>
        Apto. TÉRREO c/ 68m² de área privativa, sala p/ 2 ambientes c/ armário PROJETADO e varanda, 3 quartos c/ armários PROJETADOS s/ 1 suíte
        </Card.Text>
        <Button variant="secondary">Quero este imóvel</Button>
      </Card.Body>
    </Card>
  );
}

export default CardImovel;