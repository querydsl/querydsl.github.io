$(document).ready(function() {
  var versions = [
    "4.2.1",
    "4.1.4"
    "3.7.4"
    "2.9.0"];

  _.each(versions, function(arg) {
    var opt = $('<option />').val(arg).text(arg);
    $("#docs .version").append(opt);
  });

  var updateDocumentationVersion = function(version) {
    var prefix = "static/querydsl/" + version;
    var isOldVersion = parseFloat(version) < 3.2;
    var docLocation = isOldVersion ? "/reference/html/" : "/reference/html_single/";
    $("#docs .docs").attr("href", prefix + docLocation);
    $("#docs .javadocs").attr("href", prefix + "/apidocs/");
  };

  $("#docs .version").change(function() {
    var selectedVersion = $(this).val();
    updateDocumentationVersion(selectedVersion);
  });

  updateDocumentationVersion(versions[0]);
});
