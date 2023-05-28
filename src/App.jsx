
import { useSelector } from 'react-redux';


import Container from 'components/Container/Container';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const App = () => {

   const contacts = useSelector(state => state.contacts.items);
  


       return (
      <Container>
        <h1>Phonebook</h1> 
        <ContactForm  />
        <h2>Contacts</h2>
        {contacts.length > 1 && (<Filter/>)}
        {contacts.length > 0 ? ( <ContactList/>): (<p>Your phonebook is empty.</p>)}
    </Container>
  )
}

export default App;
