import { PlayCircleIcon } from 'lucide-react';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Cycles } from './components/Cycles';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/global.css';
import './styles/theme.css';
import { Footer } from './components/Footer';

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
            <Input 
              id='task' 
              type='text' 
              labelText='Vou trabalhar em' 
              placeholder='Digite sua tarefa'
              />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <Button icon={<PlayCircleIcon />} /> 
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
