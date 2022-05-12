import React from "react";

class FormsPessoal extends React.Component {
  state = {
    name: "",
    email: "",
    cpf: 0,
    adress: "",
    city: "",
    estate: "",
    type: false,
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    console.log(value);
    this.setState({ [name]: value });
  };

  handleButton = () => {
      this.setState({ name:''})

  }

  render() {
    return (
      <form>
        <label htmlFor="textName">
          Nome:
          <input
            value={this.state.name}
            name="name"
            id="textName"
            onChange={this.handleChange}
            type="text"
            maxLength="50"
          ></input>
        </label>
        <button type="button" onClick={this.handleButton} >Apagar Campo</button>
      </form>
    );
  }
}

export default FormsPessoal;
