//darkmode
let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

//sidebar

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}


//backend đăng kí



// search bar
   $(document).ready(function() {
      console.log($('#search-course'));
      $('#search-course').on('keyup' ,function() {
      const searchbox = document.getElementById('search-course').value.toUpperCase();
      const course_item = document.getElementById("course")
      const product = document.querySelectorAll(".box")
      const cname = course_item.getElementsByTagName('h3')
      for(var i = 0 ; i<cname.length ; i++){
         let match = product[i].getElementsByTagName('h3')[0];
         if (match){
         let textvalue =  match.textContent || match.innerHTML
         if(textvalue.toUpperCase().indexOf(searchbox) > -1){
            product[i].style.display = "";
            } else {
               product[i].style.display = "none";
         }
         }
      }
   });
});



