window.onload=function(){//waits for html and css code to display
    if (!localStorage.getItem("cookiesAccepted")){
        document.getElementById("CookieBanner").style.display="block";
    }
    const acceptBtn=document.querySelector(".accept-btn");
    if (acceptBtn){
      acceptBtn.addEventListener("click",function(){ //this line means run the below function when the user clicks on the button with the class accept-btn
        localStorage.setItem("cookiesAccepted","true");
        document.getElementById("CookieBanner").style.display="none";
        });
    }
    const closeBtn=document.querySelector(".closetab");
    if (closeBtn){
        closeBtn.addEventListener("click",function(){
            document.getElementById("CookieBanner").style.display="none";
    });
}
}