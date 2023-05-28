
import css from './ContactForm.module.css';

import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addPhone } from '../../redux/phoneSlise';


const ContactForm = () => {
 
  const dispatch = useDispatch();

 const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    dispatch(addPhone(newContact));

    e.target.reset();
  };
  
  
  return (
    <form className={css.form} onSubmit={handleSubmit}>
     <label className={css.label}>
          Name
          <input className={css.input}
            type="text"
            name="name"
            
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
          />
    </label>
       <label className={css.label}>
            Number
            <input className={css.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required

            />
        </label>
          <button className={css.button} type="submit">Add contact</button>         
    </form>
            )
}


export default ContactForm;