
  var $root = $('html, body');
  $('.navbar-nav a, .title a, .down-button a, #follow').click(function() {
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
  var navigation = document.getElementById("navbar");
  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
      navigation.style.display = "none";
  }

  // modal exit strategy
  modalImg.onclick = function() {
    modal.style.display = "none";
    navigation.style.display = "block";
  }

  //issue where only the first image opens with the JS from above
  //below two snippets are taken from stackoverflow, to open multiple images
  window.openModal = function(img) {
    modal.style.display = "block";
    modalImg.src = img.getAttribute("src");
    navigation.style.display = "none";
  }

  var images = document.getElementById("img01");
  for(var i=0, len = images.length; i < len; i++){
      images[i].addEventListener('click', openModal);
  }
