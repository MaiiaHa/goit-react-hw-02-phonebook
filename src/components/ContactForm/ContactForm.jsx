import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameRandomId = nanoid(10);
  numberRandomId = nanoid(10);

  hendleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });

    // console.log(event.currentTarget.value);
  };

  formSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    // в консоль при кліку на сабміт при тому, коли в App.User CL(data):
    // console.log(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      // input.name must be exactly as in state

      <form action="" onSubmit={this.formSubmit}>
        <label htmlFor={this.nameRandomId}>
          Name
          <input
            type="text"
            name="name"
            id={this.nameRandomId}
            value={this.state.name}
            onChange={this.hendleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label htmlFor={this.numberRandomId}>
          Number
          <input
            type="tel"
            name="number"
            id={this.numberRandomId}
            value={this.state.number}
            onChange={this.hendleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };
