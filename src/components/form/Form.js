import Notiflix from 'notiflix';
import './Form.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selector';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const contactName = form.elements.name.value;
    const contactNumber = form.elements.number.value;
    const duplicate = contacts.find(
      ({ name }) => name.toLowerCase() === contactName.toLowerCase()
    );
    if (duplicate) {
      Notiflix.Notify.warning('Contact already exists!');
    } else {
      dispatch(addContact(contactName, contactNumber));
    }
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          {' '}
          Name
          <input
            autoComplete="off"
            className="input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="number" className="label">
          {' '}
          Number
          <input
            autoComplete="off"
            className="input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className="button">
          {' '}
          Add contact{' '}
        </button>
      </form>
    </>
  );
};
