function buttonUpFunc(){
    const pNav = document.querySelector(".p");
    const pStart = 450;
    const hItems = document.querySelectorAll('.hide-items');
    console.log(hItems);
	window.addEventListener ('scroll' , navOnScroll);
	function navOnScroll (params) {
        if (scrollY > pStart) {
            console.log(scrollY);
            pNav.classList.add('active');
            hItems.forEach((element) => element.classList.add('none'));
            
            
        } else {
            pNav.classList.remove('active');
            hItems.forEach((element) => element.classList.remove('none'));
        }
    }

    document.querySelector('.btn-up').onclick = () => {
		// переместим в начало страницы
		window.scrollTo({
		  top: 0,
		  left: 0,
		  behavior: 'smooth'
	})};
}

export default buttonUpFunc;