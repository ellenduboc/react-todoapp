import React from 'react';
import '../App.css';



class  Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

handleNameChange = text => {
  this.setState({ name: text.target.value });
}

handleEmailChange = text => {
  this.setState({ email: text.target.value });
}

handleSenhaChange = text => {
  this.setState({ senha: text.target.value });
}

handleSubmit = () => {
  alert("Cadastro realizado!")
}

  render(){

    return(
      <div>
        <h2>CADASTRE-SE</h2>
      
          <form onSubmit={ this.handleSubmit }>
            <div>
              <span 
              className="user">Nome de usuário:</span>
            </div>

            <div>
              <input 
              className='input' 
              type="text" 
              onChange={this.handleNameChange}/>
            </div>

            <div>
              <span className="email">E-mail de cadastro:</span>
            </div>

            <div>
              <input 
              className='input'
              type="text" 
              onChange={this.handleEmailChange}/>
            </div>

            <div>
              <span className="senha">Senha:</span>
            </div>

            <div>
              <input 
              type="text" 
              onChange={this.handleSenhaChange}/>
            </div>

            <div >
              <button className="salve" type="submit">Salvar</button>
            </div>

              
          </form>

      </div>
    )
  }
}

export default Register;