document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('#home').forEach(button =>{
    button.onclick=()=>{


    window.scroll({
      top:0,
      left:0,
      behaviour:'smooth'
    });
  };
});

  document.querySelectorAll('#aboutus').forEach(button =>{
    button.onclick=()=>{


    window.scroll({
      top:document.querySelector('.homepage-info-section').offsetTop+50,
      left:0,
      behaviour:'smooth'
    });
  };
  });


  document.querySelectorAll('#artists').forEach(button =>{
    button.onclick=()=>{


    window.scroll({
      top:document.querySelector('.homepage-featured-events').offsetTop-document.querySelector('.header-bar').offsetHeight,
      left:0,
      behaviour:'smooth'
    });
  };
});

document.querySelectorAll('#events').forEach(button =>{
  button.onclick=()=>{


    window.scroll({
      top:document.querySelector('.homepage-next-events').offsetTop -document.querySelector('.header-bar').offsetHeight,
      left:0,
      behaviour:'smooth'
    });
  };
});

document.querySelectorAll('#contact').forEach(button =>{
  button.onclick=()=>{


    window.scroll({
      top:document.querySelector('.site-footer').offsetTop-document.querySelector('.header-bar').offsetHeight,
      left:0,
      behaviour:'smooth'
    });
  };
});

document.querySelectorAll('#sponsors').forEach(button =>{
  button.onclick=()=>{

    window.scroll({
      top:document.querySelector('.homepage-regional-events').offsetTop,
      left:0,
      behaviour:'smooth'
    });
  };
});
});

var isActive = false;

$('.js-menu').on('click', function() {
	if (isActive) {
		$(this).removeClass('active');
		$('body').removeClass('menu-open');
	} else {
		$(this).addClass('active');
		$('body').addClass('menu-open');
	}

	isActive = !isActive;
});
