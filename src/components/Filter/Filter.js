
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlise';

function Filter() {
   const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

const onChangeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };


  return (
     <label className={css.label} >
      Find contacts by name
      <input className={css.input}
       name="search"
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </label> 
   )

}


export default Filter;