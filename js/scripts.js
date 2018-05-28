
  var $root = $('html, body');
  $('.navbar-nav a, .title a, .down-button a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });

 //collapse nav bar after clicking a link
      $(".navbar-nav li a").click(function(event) {
  if (!$(this).parent().hasClass('dropdown'))
      $(".navbar-collapse").collapse('hide');
  });

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById('myImg');
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  //issue where only the first image opens with the JS from above
  //below two snippets are taken from stackoverflow, to open multiple images
  window.openModal = function(img) {
    modal.style.display = "block";
    modalImg.src = img.getAttribute("src");
  }

  var images = document.querySelectorAll('img');
  for(var i=0, len = images.length; i < len; i++){
      images[i].addEventListener('click', openModal);
  }
