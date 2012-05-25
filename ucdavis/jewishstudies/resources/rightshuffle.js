<script type="text/javascript" charset="utf-8">

var jq = jQuery;
jq(document).ready(function(){
      jq('#slideshowr').cycle({
          fx: 'fade',
          pause: 0,
          timeout: 7000,
          speed: 1000,
          pager:  '#navNumbers',
          next: '#next',
          prev: '#prev'
          
      });
      
      slidewidth = 500;
      slideheight = 222;
      
      jq("#slideshowr .imageCaption").css({"width":slidewidth, "margin-top":slideheight-75});
  });
</script>
