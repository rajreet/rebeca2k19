document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('#home').onclick=()=>{

    window.scroll({
      top:0,
      left:0,
      behaviour:'smooth'
    });
  };

  document.querySelectorAll('#aboutus').forEach(button =>{
    button.onclick=()=>{


    window.scroll({
      top:document.querySelector('.homepage-info-section').offsetTop+50,
      left:0,
      behaviour:'smooth'
    });
  };
  });


  document.querySelector('#artists').onclick=()=>{

    window.scroll({
      top:document.querySelector('.homepage-featured-events').offsetTop-document.querySelector('.header-bar').offsetHeight,
      left:0,
      behaviour:'smooth'
    });
  };

  document.querySelector('#events').onclick=()=>{

    window.scroll({
      top:document.querySelector('.homepage-next-events').offsetTop -document.querySelector('.header-bar').offsetHeight,
      left:0,
      behaviour:'smooth'
    });
  };

  document.querySelector('#contact').onclick=()=>{

    window.scroll({
      top:document.querySelector('.site-footer').offsetTop-document.querySelector('.header-bar').offsetHeight,
      left:0,
      behaviour:'smooth'
    });
  };

  document.querySelector('#sponsors').onclick=()=>{

    window.scroll({
      top:document.querySelector('.homepage-regional-events').offsetTop,
      left:0,
      behaviour:'smooth'
    });
  };
});
