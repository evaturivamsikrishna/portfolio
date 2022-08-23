// Active button page
const sectButton = document.querySelectorAll('.pages');

function activePageSection(){
    for(let i=0;i<sectButton.length;i++){
        sectButton[i].addEventListener('click',function(){
            let currentButton = document.querySelectorAll(".active-btn");
            currentButton[0].className = currentButton[0].className.replace("active-btn","");
            this.className += " active-btn";
        })
    }
}
activePageSection();
