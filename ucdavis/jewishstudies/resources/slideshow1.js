<script type="text/javascript">
jQuery("#slideshow1 > div:gt(0)").hide();

setInterval(function() {
  jQuery('#slideshow1 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow1');
},  3000);
</script>