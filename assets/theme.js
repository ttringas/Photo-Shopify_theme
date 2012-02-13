$(document).ready(function(){
   
   $('a.sign_up').click(function(){
     $('input#sign_up').submit();
     alert("form submitted");
     return false;
   });
   
   // Fire up the bxSlider http://www.bxslider.com/
   var slider = $('#collection_preview').bxSlider({
        mode: 'vertical',
        displaySlideQty: 7,
        moveSlideQty: 1,
        controls: false,
        margin: 10
   });
   
   // set arrows to control slider
   $('#up_arrow').click(function(e){
     slider.goToPreviousSlide();
     return false;
   });
   
   $('#down_arrow').click(function(e){
     slider.goToNextSlide();
     return false;
   });
   
   //correct weird positioning of slider
   $('.bx-wrapper').css(
     {'position' : 'absolute', 'right' : '0', 'top' : '150px'}
     );
   
    $('#collection_preview a').click(function() {
        $('#collection_main_image a').attr('href', $(this).attr('href')).data('rel', $(this).data('rel'));
        $('#collection_main_image img').attr('src', $(this).children('img').attr('src'));
        $('#product_details_hover h3').text($(this).find('#title').val());
        $('.hover_price').text($(this).find('#price').val());
        
        return false;
    });
   
    $('#product_details_hover').hide();
    $('#collection_main_image').hover(
      function(){
        $('#product_details_hover').fadeIn('fast');
      },
      function(){
        $('#product_details_hover').fadeOut('fast');
      }
    );
    
    $('#view_button').hover(function(){
      $(this).toggleClass("hover");
    });
   
   $('.thumbnail_wrapper a').click(function() {
     $('#product_main_image a').attr('href', $(this).attr('href')).data('rel', $(this).data('rel'));
     $('#product_main_image img').attr('src', $(this).attr('href'));
      return false;
    });
      
    
   
 });