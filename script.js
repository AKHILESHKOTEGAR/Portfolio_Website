function myMenuFunction(){
    var menuBth= document.getElementById("myNavMenu");

    if(menuBth.className==="nav-menu"){
        menuBth.className+= "responsive";
    }
    else{
        menuBth.className="nav-menu";
    }
}
// dark mode
const body=document.querySelector("body");
toggleSwitch=document.getElementById("toogle-switch");

toggleSwitch.addEventListener("click",()=>{
    body.classList.toggle("dark");
});
/*------------Typing effect-------*/
var typingEffect=new Typed(".typedText",{

    strings: ["Akhilesh!","Developer","Coder","Developer"],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:2000,
})
// Scroll animations
const sr=ScrollReveal({
    origin:"top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name",{
    delay:100
});
sr.reveal(".text-info",{
    delay:200
});
sr.reveal(".text-btn",{
    delay:200
});
sr.reveal(".social_icons",{
    delay:200
});
sr.reveal(".featured-image",{
    delay:320
});
sr.reveal(".project-box",{
    interval:200
});
sr.reveal(".top-header",{});
const srleft= ScrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset:true,
})

srleft.reveal(".about-info",{
    delay:100
});
srleft.reveal(".contact-info",{
    delay:100
});
const srRight= ScrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset:true,
})
srRight.reveal(".about-info",{
    delay:100
});
srRight.reveal(".contact-info",{
    delay:100
});
// -----------------active link----------------
const sections=document.querySelectorAll(".section[id]");

function scrollActive(){
    const scrollY=window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.
                querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        }
        else {
            document.
                querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        }

    });

}
window.addEventListener("scroll",scrollActive);
function downloadCV() {
    // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
    var cvPath = 'documents/Akhilesh_kotegar.pdf';
    
    // Create an anchor element
    var link = document.createElement('a');
    
    // Set the href attribute to the CV path
    link.href = cvPath;
    
    // Set the download attribute to download the file instead of navigating
    link.download = 'Akhilesh_kotegar_resume.pdf'; // Replace with your CV file name
    
    // Programmatically click the link to trigger the download
    link.click();
}
function scrollToContact() {
    var contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}
