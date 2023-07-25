import styled from 'styled-components';
import Header from '../componentes/Header';
import Pesquisa from '../componentes/Pesquisa';
import UltimosLancamentos from '../componentes/UltimosLancamentos';

const AppContainer = styled.div`
width:100vw;
height:100vh;
background-image:linear-gradient(90deg,#002F52 35%,#326589 165%)
li{
  list-style:none;

}
`

function Home() {
  return (
    <AppContainer>
    <Header />
    <Pesquisa/>
    <UltimosLancamentos/>
  </AppContainer>
  );
}

export default Home;
