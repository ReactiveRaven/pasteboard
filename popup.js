$(function () {
  var copy = function (event, text) {
    var $input = $("#textToCopy").first();
    $input.val(text);
    $input.select();
    document.execCommand("Copy", false, null);
  }
  
  $("body").on("doCopy", copy);
});

$(function () {
  var faces = [
    ":)",
    ":(",
    ":|",
    "o.o?",
    ">.<'"
  ];
  
  for (var i = 0; i < faces.length; i++) {
    $("body").append("<div class=\"face\">" + faces[i] + "</div>");
  }
  
  $(".face").on("click", function () {
    $("body").trigger("doCopy", [$(this).text()]);
  })
});