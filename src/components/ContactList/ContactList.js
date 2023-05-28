
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deletePhone } from 'redux/phoneSlise';

function ContactList() {
  const dispatch = useDispatch();
  
  const contacts = useSelector(state => {
    return state.contacts.items.filter(item =>
      item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
    );
  });

     return (
    <ul className={css.list} >
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p >
            {name}: {number}
          </p>
          <button className={css.button_delete} type="button" onClick={() => dispatch(deletePhone(id))}>
                Delete
              </button>
        </li>
      ))}
    </ul>
  );
}


export default ContactList;