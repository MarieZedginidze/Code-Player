var iframe = document.getElementById("output");
var iframeDocument = document.getElementById("output").contentWindow.document;
var iframeBody = $("#output").contents().find("body");
var styleTag = $("<style></style>");
var iframeHead = $("#output").contents().find("head").append(styleTag);

// change iframe contents on keyup function
$("#html").on("change keyup paste", function () {
  iframeBody.html($("#html").val());
});

$("#css").on("change keyup paste", function () {
  styleTag.text($("#css").val());
});

$("#js").on("change keyup paste", function () {
  var document = iframe.contentDocument;
  var jsVal = $("#js").val();
  eval(jsVal);
});

//  hide and show textareas and iframe

$("#htmlButton").click(function () {
  if ($("#html").css("display") === "none") {
    $("#html").show();
  } else {
    $("#html").hide();
  }
});
$("#cssButton").click(function () {
  if ($("#css").css("display") === "none") {
    $("#css").show();
  } else {
    $("#css").hide();
  }
});
$("#jsButton").click(function () {
  if ($("#js").css("display") === "none") {
    $("#js").show();
  } else {
    $("#js").hide();
  }
});
$("#outputButton").click(function () {
  if ($("#output").css("display") === "none") {
    $("#output").show();
  } else {
    $("#output").hide();
  }
});

/* change height and width of textareas and iframe */

//  change height

$(".textandifrs").height($(window).height() - $("#buttonDiv").height() - 2);

// change width

$(".buttons").click(function () {
  var iframeAndTextareas = document.getElementById("textareasAndIframe");
  var IframTextChildNodes = iframeAndTextareas.childNodes;
  var checkForDisplay = 4;

  for (var i = 0; i < IframTextChildNodes.length; i++) {
    if (IframTextChildNodes[i].style.display === "none") {
      checkForDisplay--;
    }
  }

  if (checkForDisplay === 4) {
    for (var i = 0; i < 4; i++) {
      IframTextChildNodes[i].style.width = "24.686%";
    }
  }

  if (checkForDisplay === 3) {
    for (var i = 0; i < 4; i++) {
      IframTextChildNodes[i].style.width = "32.9%";
    }
  }
  if (checkForDisplay === 2) {
    for (var i = 0; i < 4; i++) {
      IframTextChildNodes[i].style.width = "49.5%";
    }
  }
  if (checkForDisplay === 1) {
    for (var i = 0; i < 4; i++) {
      IframTextChildNodes[i].style.width = "99.5%";
    }
  }
});
