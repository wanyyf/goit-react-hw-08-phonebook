import ContactItem from 'components/ContactItem/ContactItem';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { getContact } from 'redux/contacts/contactOperasions';
import { useDispatch, useSelector } from 'react-redux';
const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  const getFiltredArray = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredArray = getFiltredArray();
  return (
    <ul>
      {filteredArray.map(el => (
        <ContactItem
          name={el.name}
          phone={el.number}
          id={el.id}
          key={nanoid()}
        />
      ))}
    </ul>
  );
};

export default ContactList;
