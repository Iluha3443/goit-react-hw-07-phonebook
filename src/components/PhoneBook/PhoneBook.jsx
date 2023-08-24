import { nanoid } from 'nanoid';
import { ContactForm } from "../ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { useDispatch } from 'react-redux';
import { handleSubmit } from "redux/contactsSlice";
import { addNewContact} from 'redux/contacts-api';


const PhoneBook = () => {
    const dispatch = useDispatch();
    
    const addContact = (evt) => {
        evt.preventDefault();
        const nameContact = evt.target.name.value;
        const numberTel = evt.target.number.value;
        const contact = {
            id: nanoid(),
            name: nameContact,
            phone: numberTel,
        }

        dispatch(addNewContact(contact))
        evt.target.name.value = '';
        evt.target.number.value = '';
    }

         return (
             <>
                 <ContactForm Submit={addContact} />
                 <Filter /> 
                 <ContactList/>
             </>
         )
    };


export default PhoneBook;