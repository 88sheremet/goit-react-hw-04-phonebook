import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {`${contact.name} : ${contact.number}`}
            <button
              className={css.buttonDel}
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
