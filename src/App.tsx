import { Container } from './components/Container';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    // Não é necessario  um elemento pai, pois o react te força a ter um
    <>
      <Container> 
        <Heading>
          Logo
        </Heading>
      </Container>
    </>
  );
}
