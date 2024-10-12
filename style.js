const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      // else {
      //   entry.target.classList.remove("show");
      // }
    });
  });
  
  const hiddenElements = document.querySelectorAll(".hiddenn");
  hiddenElements.forEach((element) => observer.observe(element));

  function ChangeBackground()
{
    var scrollvalue=window.scrollY;
    // var navbar=document.getElementById('navbar');
    if(scrollvalue < 400)
    {
        navbar.classList.remove('chngecolor')
    }
    else
    {
        navbar.classList.add('chngecolor')

    }
    // console.log(scrollvalue);
}

window.addEventListener('scroll', ChangeBackground);