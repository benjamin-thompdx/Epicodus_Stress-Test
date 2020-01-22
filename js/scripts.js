$(document).ready(function() {
  $("#stress-test").submit(function(event) {
    event.preventDefault();

    var stressors = [];
    var coping = [];

    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var mentalSigns = $(this).val();
      stressors.push(mentalSigns);
    });
    

    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      var bodySigns = $(this).val();
      stressors.push(bodySigns);
    });

    $("input:checkbox[name=coping-methods]:checked").each(function(){
      var copingMethods = $(this).val();
      coping.push(copingMethods);
    });

    var stress = stressors.length;
    var cope = coping.length;


    if (stress >= 8) {
      $("#highstress").show();
    } else if (stress >= 4 && cope >= 4) {
      $("#lowstress").show();
    } else if (stress < 3 && cope > 4) {
      $("#goodjob").show();
    } 
    
    })
})



