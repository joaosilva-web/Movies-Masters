import * as S from "./styles";
import  Header  from "./Components/Header/Header";
import  BodyPage  from "./Components/BodyPage/BodyPage";


function App() {
  return (
    <div className="App">
      <S.Container>
        <Header/>
        <BodyPage/>
      </S.Container>
    </div>
  );
}

export default App;
