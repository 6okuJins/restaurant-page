const header = () => {
    const header = document.createElement('div');
    header.classList.add('header');

    const homeTab = document.createElement('button');
    const menuTab = document.createElement('button');
    const contactTab = document.createElement('button');
    header.append(homeTab, menuTab, contactTab);
    
    homeTab.classList.add('tab');
    homeTab.id = 'home-tab';
    homeTab.textContent = 'Home';

    menuTab.classList.add('tab');
    menuTab.id = 'menu-tab';
    menuTab.textContent = 'Menu';

    contactTab.classList.add('tab');
    contactTab.id = 'contact-tab';
    contactTab.textContent = 'Contact';
    
    return header;
}
export default header;