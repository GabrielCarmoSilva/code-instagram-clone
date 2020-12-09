import React from 'react';

class AuthView extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleChange(key, event) {
        const newState = {};
        newState[key] = event.target.value;
        this.setState(newState);
    }

    render() {
        if(this.props.loading) {
            return <div>Loading...</div>
        }
        return (
            <div style={{display: 'flex', flexDirection: 'column', padding: 20}}>
                <h1>Entre para ver o conteúdo</h1>
                <p>Bem-vindo, {this.state.name}</p>
                <input 
                    placeholder="Nome" 
                    onChange={(event) => this.handleChange('name', event)} 
                    value={this.state.name} type="text" 
                />
                <input 
                    placeholder="E-mail" 
                    onChange={(event) => this.handleChange('email', event)} 
                    value={this.state.email} type="text" 
                /> 
                <input 
                    placeholder="Senha" 
                    onChange={(event) => this.handleChange('password', event)} 
                    value={this.state.password} type="password" 
                />
                <button onClick={() => this.props.handleLogin(this.state)}>Entrar</button>
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        )
    }
}

export default AuthView;