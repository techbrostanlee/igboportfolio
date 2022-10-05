/*skills tabs*/
const tabs = document.querySelectorAll('[data-target]');
       tabContent = document.querySelectorAll('[data-content]');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);
			console.log(target);
			
            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills-active');
            });

            target.classList.add('skills-active');
    
            
            tabs.forEach(tab => {
                tab.classList.remove('skills-active');
            });

            tab.classList.add('skills-active');
			
        });
		
    });
	


    /*portfolio tab */
    let mixerPortfolio = mixitup('.work_container', {
        selectors: {
            target: '.work_card'
        },
        animation: {
            duration: 300
             }
    });

    /*link work */

    const linkWork = document.querySelectorAll('.work-item');
    function activeWork(){
        linkWork.forEach(i => I.classList.remove('.active-work'));
        this.classList.add('active-work');
    }
    linkWork.forEach(i => I.addEventListener('click', activeWork));



    