import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    // Não é necessario  um elemento pai, pois o react te força a ter um
    <>
      <Container> 
          <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action="">
          <div className='formRow'>
            <label htmlFor="meuInput">Task</label>
            <input id="meuInput" type="text"/>
          </div>

          <div className='formRow'>
            <label htmlFor="meuInput">Task</label>
            <input id="meuInput" type="text"/>
          </div>
        </form>
      </Container>
    </>
  );
}
