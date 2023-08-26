import { Form } from './form/Form';
import { ContactList } from './list/ContactList';
import { Search } from './search/Search';

export const App = () => {
  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <Form />
      <h2 className="subtitle">Contacts</h2>
      <Search />
      <ContactList />
    </div>
  );
};
