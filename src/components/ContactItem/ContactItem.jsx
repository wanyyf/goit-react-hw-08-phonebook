import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactOperasions';
const ContactItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  console.log(id);
  return (
    <li>
      {name} {phone}
      <button
        type="button"
        className="button-2"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  phone: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};
export default ContactItem;
