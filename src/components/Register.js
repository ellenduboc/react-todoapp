import React from 'react';



class  Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

handleNameChange = text => {
  this.setState({ name: text.target.value });
}

handleSubmit = () => {
  alert("Cadastro realizado!")
}

  render(){

    return(
      <div>
        <h2>Cadastro</h2>
      
          <form onSubmit={ this.handleSubmit }>
            <input placeholder="Nome" type="text" onChange={this.handleNameChange}/>
            <button type="submit">Salvar</button>
          </form>

      </div>
    )
  }
}

export default Register;