const tab1 = document.querySelectorAll(".tab-one"),
      tabContent1 = document.querySelectorAll(".tab-content-one"),
      tab2 = document.querySelectorAll(".tab-two"),
      tabContent2 = document.querySelectorAll(".tab-content-two");


const tabToggle = (tab,content)=> {
    
        

        
        const tabToggle = (indexContent) => {

            for (let i = 0; i < content.length; i++) {
               if (indexContent === i) {
                  tab[i].classList.add('tab-active');
                  content[i].classList.add('content-active');

               } else {
                  tab[i].classList.remove('tab-active');
                  content[i].classList.remove('content-active');
               }

            }
         };

         tab.forEach((item, i) => {

            item.addEventListener('click', () => {
               item = i
               console.log(item);
               if (item === i) {

                  tabToggle(i);

               }
            });
         });

};
tabToggle(tab1,tabContent1);
tabToggle(tab2,tabContent2);