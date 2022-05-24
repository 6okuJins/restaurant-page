const menu = () => {
    const food = document.createElement('div');
    food.classList = 'food menu';
    food.textContent = 'Some food...';
    
    return {
        food
    }

}
export default menu;