// Tabbed Menu
function openMenu(event, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {  // This should be tablinks.length
       tablinks[i].classList.remove("active-tab");  // Using classList for better readability
    }
    
    document.getElementById(menuName).style.display = "block";
    event.currentTarget.classList.add("active-tab");  // Using classList for better readability
  }
  
  document.getElementById("mainLink").click(); // Auto-clicks the Sushi tab when the page loads

  const currentDate = new Date().toISOString().slice(0, 16); // Format: "YYYY-MM-DDTHH:mm"
    document.getElementById("myDateTimeInput").value = currentDate;