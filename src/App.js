import { useEffect, useState } from 'react'
import './App.css';

function App() {

  const [cep, setCep] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [entrega, setEntrega] = useState('')
  const [numerorua, setNumerorua] = useState('')
  const [complemento, setComplemento] = useState('')
  const [dados, setDados] = useState([{}])

  useEffect(() => {
    if (cep.length > 7) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((resultado) => resultado.json())
        .then((resultado) => setDados(resultado))
    }
  }, [cep])

  function limparDados() {
    setCep('')
    setNome('')
    setEmail('')
    setEntrega('')
    setNumerorua('')
    setComplemento('')
    setDados({
      logradouro: '',
      bairro: '',
      localidade: '',
      uf: ''
    })
  }
  
  
  return (
    <>
      <div className='topbar'>
        <p>Formulário CEP</p>
        
      </div>
      <div className='container'>
      <form>
        <div class="input">
          <label for="Nome">Nome Completo:</label>
          <input
            id="Nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <br></br>
        <div class="input">
        <label for="Email">E-mail:</label>
          <input
            id="Email"
            type="nome"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <br></br>
        <div class="input">
        <label for="Entrega">Data de Entrega:</label>
          <input
            id="Entrega"
            type="date"
            value={entrega}
            onChange={(e) => setEntrega(e.target.value)}
            />
        </div>
        <br></br>
        <div class="input">
        <label for="Cep">CEP:</label>
          <input
            id="Cep"
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            />
        </div>
        <br></br>
        <div class="input">
          <label>Logradouro:</label>
          <input
            type="text"
            value={dados.logradouro}
            readOnly
            />
        </div>
        <br></br>
        <div class="input">
          <label for="Numero">Número:</label>
          <input
            id="Numero" 
            type="text" 
            value={numerorua}
            onChange={(e) => setNumerorua(e.target.value)}
          />
        </div>
        <br></br>
        <div class="input">
          <label for="Complemento">Complemento:</label>
          <input
            id="Complemento"
            type="text"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
        </div>
        <br></br>
        <div class="input">
          <label>Bairro:</label>
          <input
            type="text"
            value={dados.bairro}
            readOnly
          />
        </div>
        <br></br>
        <div class="input">
          <label>Cidade:</label>
          <input
            type="text"
            value={dados.localidade}
            readOnly
          />
        </div>
        <br></br>
        <div class="input">
          <label>Estado:</label>
          <input
            type="text"
            value={dados.uf}
            readOnly
          />
        </div>
        <br></br>
      </form>
      </div>
      <div className='botao'>
        <button onClick={limparDados}>Limpar</button>
      </div>
    </>
  );
}

export default App;
