function myPortfolio() {
    if(i < txt.length){
      document.getElementById("demo1").innerHTML += txt.charAt(i);
      i++;
      setTimeout(myPortfolio, speed);
    }
    else {
     
      i = 0;
      // clear the text
      document.getElementById("demo1").innerHTML = "";
      // make the recursive call
    
      setTimeout(myPortfolio, speed);
    }
  }

  let i=0;
let txt="A  Full Stack Web Developer.";
let speed=100;
myPortfolio()

  
  var myNav = document.getElementById('nav-menu');
  var myNav2 = document.getElementById('main');
  window.onscroll = function () { 
      if ( document.documentElement.scrollTop >= 15 ) {
          myNav.classList.add("nav-colored");
          myNav2.classList.add("nav-colored");
      } 
      else {
          myNav.classList.remove("nav-colored");
          myNav2.classList.remove("nav-colored");
      }
  };

  GitHubCalendar(".calendar", "mdharoonhussain", {
    responsive: true,
    global_stats: false,
    tooltips: true,
  });

  document.getElementById("resume-button-1").onclick=()=>{
window.open("https://drive.google.com/file/d/1TUPjTAWPN36kQJYu1DJJ7Jvjla_3teWk/view?usp=sharing");
  }

  document.getElementById("resume-button-2").onclick=()=>{
    window.open("https://drive.google.com/file/d/1TUPjTAWPN36kQJYu1DJJ7Jvjla_3teWk/view?usp=sharing");
  }

  document.getElementById("resume-button-3").onclick=()=>{
    window.open("https://drive.google.com/file/d/1TUPjTAWPN36kQJYu1DJJ7Jvjla_3teWk/view?usp=sharing");
  }
     
  
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.display= "block";
  }