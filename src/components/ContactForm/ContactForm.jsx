import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactOperasions';
import { useSelector } from 'react-redux';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setnumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const state = { name, number };
  const dispatch = useDispatch();
  const handlerInput = evt => {
    const targetName = evt.target.name;
    const targetValue = evt.target.value;
    switch (targetName) {
      case 'name':
        setName(targetValue);
        break;
      case 'number':
        setnumber(targetValue);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    contacts
      .map(el => {
        return el.name.toLowerCase();
      })
      .includes(name.toLowerCase())
      ? alert(`${name} is already there`)
      : dispatch(addContact(state));
    reset();
  };
  const reset = () => {
    setName('');
    setnumber('');
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Name</h3>
        <input
          type="text"
          value={name}
          onChange={handlerInput}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h3>Number</h3>
        <input
          type="tel"
          name="number"
          onChange={handlerInput}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className="button-1" type="submit">
          Add contact
        </button>
      </form>
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

// handlerInput = evt => {
//     setState({ [evt.target.name]: evt.target.value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };
//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };
//   render() {
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h3>Name</h3>
//         <input
//           type="text"
//           value={name}
//           onChange={this.handlerInput}
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//         <h3>Number</h3>
//         <input
//           type="tel"
//           name="number"
//           onChange={this.handlerInput}
//           value={number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//         <button className="button-1" type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
