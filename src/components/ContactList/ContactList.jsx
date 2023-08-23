import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/contacts-api';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.isLoading)
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = () => contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        filterContacts().length === 0 ? (
          <p>No contacts to display.</p>
        ) : (
          filterContacts().map(contact => (
            <li className={css.contact} key={contact.id}>
              {contact.name}: {contact.number}
              <button
                className={css.btn}
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                DELETE
              </button>
            </li>
          ))
        )
      )}
    </ul>
  );
};