import '../Carrosel/Carrosel.css';
import Carousel from 'react-bootstrap/Carousel';
import ImovelOne from '../Carrosel/imoveis01.jpg';
import ImovelTwo from '../Carrosel/imoveis02.jpg';
import ImovelThree from '../Carrosel/imoveis03.jpg';

function Carrosel() {
    return (
        <Carousel fade className='mt-5 pt-2'>
            <Carousel.Item>
                <img
                    className="d-block w-100 imagem--carrosel"
                    src={ImovelOne}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Seu novo imóvel
                        a alguns passos</h1>
                    <p>Quando se trata de compra e venda de imóveis, proporcionamos consultoria sobre todos os mercados comerciais e de desenvolvimento.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imagem--carrosel"
                    src={ImovelTwo}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>Seu novo imóvel
                        a alguns passos</h1>
                    <p>Quando se trata de compra e venda de imóveis, proporcionamos consultoria sobre todos os mercados comerciais e de desenvolvimento.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imagem--carrosel"
                    src={ImovelThree}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>Seu novo imóvel
                        a alguns passos</h1>
                    <p>
                        Quando se trata de compra e venda de imóveis, proporcionamos consultoria sobre todos os mercados comerciais e de desenvolvimento.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrosel;