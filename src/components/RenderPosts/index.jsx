import mocks from "../../mocks/mocks";
import { Card, Container, Image, Main } from "./styled";

function Render() {
  return (
    <Main>
      <h1>Principais Camisas da História do Tricolor</h1>
      <Container>
        {mocks.map((jersey) => (
          <Card key={jersey.id}>
            <p>Ano: {jersey.year}</p>
            <p>Importância: {jersey.titles}</p>
            <Image>
              <img src={jersey.image} alt={jersey.year} />{" "}
            </Image>
          </Card>
        ))}
      </Container>
    </Main>
  );
}

export default Render;
