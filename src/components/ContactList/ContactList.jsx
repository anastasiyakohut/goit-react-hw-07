import { useSelector } from "react-redux";
import Contact from '../Contact/Contact'
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from './ContactList.module.css'

export default function ContactList() {

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    
    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter)
    );
    
    return (
        <ul className={css.container}>
            {filteredContacts.map((contact) => {
                return (
                    <li key={contact.id}>
                        <Contact
                            id={contact.id}
                            name={contact.name}
                            number={contact.number}
                        />
                    </li>
                );
            })}
        </ul>
    )
}