document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('#home').onclick=()=>{

    window.scroll({
      top:0,
      left:0,
      behaviour:'smooth'
    });
  };

  document.querySelector('#aboutus').onclick=()=>{

    window.scroll({
      top:document.querySelector('.homepage-info-section').offsetTop,
      left:0,
      behaviour:'smooth'
    });
  };

  document.querySelector('#artists').onclick=()=>{

    window.scroll({
      top:document.querySelector('.homepage-featured-events').offsetTop,
      left:0,
      behaviour:'smooth'
    });
  };

  document.querySelector('#events').onclick=()=>{

    window.scroll({
      top:document.querySelector('.homepage-next-events').offsetTop,
      left:0,
      behaviour:'smooth'
    });
  };

  document.querySelector('#contact').onclick=()=>{

    window.scroll({
      top:document.querySelector('.site-footer').offsetTop,
      left:0,
      behaviour:'smooth'
    });
  };
});
