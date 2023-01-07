import { Component } from 'react';
import css from '../ContactForm/ContactForm.module.css';

export class ContactForm extends Component {
  initialState = {
    name: '',
    number: '',
  };

  state = {
    ...this.initialState,
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({ ...this.initialState });
  };

  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form onSubmit={this.onHandleSubmit} className={css.form}>
        <label>
          Name:
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.onHandleChange}
          />
        </label>

        <button className={css.buttonAdd} type="submit">
          add contact
        </button>
      </form>
    );
  }
}
