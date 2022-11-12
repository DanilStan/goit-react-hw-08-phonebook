import { Box } from 'components/Box';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <Box>
      <span className={css.circle}></span>
      <div className={css.box}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.title__secondary}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Box>
  );
}
