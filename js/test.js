

// sidenav for dashboard.

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");


sidebarBtn.onclick = function() {
  sidebar.classList.toggle("active");
  if(sidebar.classList.contains("active")){
  sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
}else
  sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}




// Demo 1 of AEC methodology
let count = 4000;
const elementRead = document.querySelector('.read');
const elementCarbon = document.querySelector('.carbon');
const elementCredit = document.querySelector('.credit');

function updateCounter1() {
    if (count > 7000) {
        count = 4000;
    }

    elementRead.textContent = count;
    const calculatedValue = (count / 10) * 0.0023;
    elementCarbon.textContent = calculatedValue.toFixed(3);
    
    const creditValue = calculatedValue * 5;
    elementCredit.textContent = creditValue.toFixed(4);
    
    count++;
}

// Call the updateCounter1 function every 500 milliseconds
setInterval(updateCounter1, 300);


