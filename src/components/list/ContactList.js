import './list.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selector';
import Notiflix from 'notiflix';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleDelete = id => dispatch(deleteContact(id));
  const filterText = useSelector(state => state.filters.filterText);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterText.toLowerCase())
  );

  if (filteredContacts.length === 0) {
    return Notiflix.Notify.failiure('No contact was found please try again!');
  }
  return (
    <ul className="contact-list">
      {filteredContacts.map(contact => (
        <li key={contact.id} className="contact-item">
          {contact.name
            .split(' ')
            .map(n => n.charAt(0).toUpperCase() + n.slice(1))
            .join(' ')}{' '}
          : {contact.number}
          <button
            className="button"
            type="button"
            onClick={() => {
              handleDelete(contact.id);
            }}
          >
            {' '}
            Delete{' '}
          </button>
        </li>
      ))}
    </ul>
  );
};
