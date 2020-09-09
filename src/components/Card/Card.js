import React, { Component } from "react";
// import { Input } from "semantic-ui-react";
import { Button, Checkbox, Form } from "semantic-ui-react";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      senha: ""
    };
  }
  validarForm = () => {
    alert(this.state.login);
  };
  render() {
    return (
      <Form onSubmit={this.validarForm} inverted>
        <Form.Field>
          <label>Login</label>
          <input
            value={this.state.login}
            onChange={e => this.setState({ login: e.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label>Senha</label>
          <input
            value={this.state.senha}
            onChange={e => this.setState({ senha: e.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="Confirmar alguma coisa" />
        </Form.Field>
        <Button type="submit">Enviar</Button>
      </Form>
    );
  }
}

export default Card;
