import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filteredContacts } from "redux/contactsSlice";

export const Filter = () => {
    const dispatch = useDispatch();
   
     const Search = (evt) => {
        const nameContact = evt.target.value;
        dispatch(filteredContacts(nameContact))
    };
    
    return (
        <>
            <h2 className={css.title}>Contacts</h2>
            <div className={css.container}>
              <label>
                <input className={css.input} onChange={Search} type="text" />
            </label>
            </div>
           
        </>
    )
};

Filter.propTypes = {
    Search: PropTypes.func
};