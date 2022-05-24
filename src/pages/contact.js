const contact = () => {
    const myContact = document.createElement('div');
    myContact.classList = 'contact';
    myContact.textContent = 'Some contacts...';
    return {
        myContact
    }
}
export default contact;