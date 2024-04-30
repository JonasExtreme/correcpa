import Evento from './components/Evento'
import Galery from './components/Galery'
import Cabecalho from './components/Cabecalho'
import './App.css'

function App() {

  return (
    <>
      <Cabecalho />
      <Evento 
        titulo={"Evento do senai"}
        descricao={"Descrição do evento"}
        horario={"29/04/2022 às 11:00"}
        local={"São José"}
      />
      <Galery />
    </>
  )
}

export default App
