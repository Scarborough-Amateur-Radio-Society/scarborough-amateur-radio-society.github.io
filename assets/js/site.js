// Hide events whose date has passed, apply any display limit,
// and show the "nothing listed" message when no events remain.
(function () {
  var today = new Date();
  var todayStr = today.getFullYear() + "-" +
    String(today.getMonth() + 1).padStart(2, "0") + "-" +
    String(today.getDate()).padStart(2, "0");

  document.querySelectorAll(".events").forEach(function (box) {
    var limit = parseInt(box.getAttribute("data-limit"), 10) || 0;
    var shown = 0;
    box.querySelectorAll(".event").forEach(function (ev) {
      var d = ev.getAttribute("data-date");
      var past = d && d < todayStr;
      var overLimit = limit && shown >= limit;
      if (past || overLimit) { ev.hidden = true; } else { shown++; }
    });
    var empty = box.querySelector(".events-empty");
    if (empty) empty.hidden = shown > 0;
  });
})();
