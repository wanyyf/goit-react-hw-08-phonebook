import { useSelector, useDispatch } from 'react-redux';
import { onFilterchange } from '../../redux/contacts/contactsSlice';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(onFilterchange(e.target.value))}
      />
    </>
  );
};

export default Filter;
