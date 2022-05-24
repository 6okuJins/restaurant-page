const home = () => {
    // create sections
    const testimonial = document.createElement('div');
    const hours = document.createElement('div');
    const location = document.createElement('div');

    // testimonials section
    const testimonialTitle = document.createElement('div');
    const testimonialContainer = document.createElement('div');
    testimonial.append(testimonialTitle, testimonialContainer);
    testimonialTitle.textContent = "Testimonials";
    testimonialContainer.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget lacinia mauris. Proin consectetur, lorem eget ullamcorper ornare, nisi eros porta est, ut interdum turpis dolor quis nunc. Suspendisse vitae tempor est. Sed rutrum vitae tellus mollis commodo. Proin aliquam bibendum libero et dignissim. Ut efficitur congue nisi. Sed purus augue, interdum vitae rutrum sit amet, mollis quis magna. Praesent non sodales lacus. Aenean fringilla metus risus, interdum fringilla nisi cursus at. Praesent lacinia iaculis tellus, vitae lobortis lorem placerat vel. Ut sit amet malesuada risus.";
    
    // hours section
    hours.classList.add('hours');
    const hoursTitle = document.createElement('div');
    hoursTitle.textContent = 'Hours';
    const hoursContainer = document.createElement('ul');
    hoursTitle.classList.add('section-title');
    hoursContainer.classList.add('container');
    hours.append(hoursTitle, hoursContainer);
    const sunday = document.createElement('li');
    const monday = document.createElement('li');
    const tuesday = document.createElement('li');
    const wednesday = document.createElement('li');
    const thursday = document.createElement('li');
    const friday = document.createElement('li');
    const saturday = document.createElement('li');
    hoursContainer.append(sunday,monday,tuesday,wednesday,thursday,friday,saturday);
    sunday.append(document.createTextNode('Sunday : 10a.m. - 8p.m.'));
    monday.append(document.createTextNode('Monday : 10a.m. - 8p.m.'));
    tuesday.append(document.createTextNode('Tuesday : 10a.m. - 8p.m.'));
    wednesday.append(document.createTextNode('Wednesday : 10a.m. - 8p.m.'));
    thursday.append(document.createTextNode('Thursday : 10a.m. - 8p.m.'));
    friday.append(document.createTextNode('Friday : 10a.m. - 8p.m.'));
    saturday.append(document.createTextNode('Saturday : 10a.m. - 8p.m.'));
    

    // location section
    location.classList.add('location');
    const locationTitle = document.createElement('div');
    const locationContainer = document.createElement('div');
    locationTitle.classList.add('section-title');
    locationContainer.classList.add('container');
    location.append(locationTitle, locationContainer);
    locationTitle.textContent = 'Location';
    locationContainer.textContent = "123 Beep Boop Street"

    return {
        testimonial,
        hours,
        location
    }
}
export default home;