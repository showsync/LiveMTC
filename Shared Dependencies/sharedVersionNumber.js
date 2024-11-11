// autowatch = 1;
inlets = 1;
outlets = 1;

var versionNumber = "1.1.0";

function getVersionNumber() {
  outlet(0, "text", versionNumber);
}
