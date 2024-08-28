function scrollToContact(){
    document.getElementById('contact').scrollIntoView({behavior: "smooth"});
}

function openLinkInNewTab(url){
    window.open(url, "_blank").focus();
}

function removeNavbarOnClick(){
    document.querySelector('.navbar-collapse.show').classList.remove('show');
}    