<script type="text/javascript">
jQuery(document).ready(function(){

jQuery("#slideshow2 > div:gt(0)").hide();

setInterval(function() {
  jQuery('#slideshow2 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow2');
},  4000);

});
</script>
