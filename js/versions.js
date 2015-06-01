$(document).ready(function() {
  var versions = [
    "4.0.1", "4.0.0",
    "3.6.4", "3.6.3","3.6.2","3.6.1","3.6.0",
    "3.5.1","3.5.0",
    "3.4.3","3.4.2","3.4.1","3.4.0",
    "3.3.4","3.3.3","3.3.2","3.3.1","3.3.0",
    "3.2.4","3.2.3","3.2.2","3.2.1","3.2.0",
    "3.1.1","2.1.0","3.0.0",
    "2.9.0","2.8.0","2.7.0","2.6.0","2.5.0","2.4.0","2.3.0","2.2.0","2.1.0","2.0.0"];

  _.each(versions, function(arg) {
    var opt = $('<option />').val(arg).text(arg);
    $("#docs .version").append(opt);
  });

  var updateDocumentationVersion = function(version) {
    var prefix = "http://www.querydsl.com/static/querydsl/" + version;
    $("#docs .docs").attr("href", prefix + "/reference/html_single/");
    //$("#docs .korean").attr("href", prefix + "/reference/ko-KR/html_single");
    $("#docs .javadocs").attr("href", prefix + "/apidocs/");
    $("#docs .downloads").attr("href", prefix);
  };

  $("#docs .version").change(function() {
    var selectedVersion = $(this).val();
    updateDocumentationVersion(selectedVersion);
  });

  updateDocumentationVersion(versions[0]);
});
