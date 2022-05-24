import header from "../pages/header"
import home from "../pages/home";

const firstLoad = () => {
    const content = document.getElementById('content');
    const myHeader = header();
    content.append(myHeader);
    const {testimonial, hours, location} = home();
    content.append(testimonial, hours, location);
};
export default firstLoad;