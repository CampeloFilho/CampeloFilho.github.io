$("#changer").click(function () {
    $("changer").html("não");
    $("#move").show();
  });
  
  $("#move").hover(function () {
    changer();
  });
  
  function changer() {
    var i = Math.floor(Math.random() * 500) + 1;
    var j = Math.floor(Math.random() * 100) + 1;
    $("#move").css({ top: j + 'px', left: i + 'px' });
  }
  