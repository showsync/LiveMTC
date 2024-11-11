// autowatch = 1;
this.inlets = 1;
this.outlets = 1;

mgraphics.init();
mgraphics.autofill = 0;
mgraphics.relative_coords = 0;

var G_deviceIsActive = true;
var G_connectionEstablished = false;
var G_activeCircle = 0;
var G_inactiveColor = [0.647, 0.647, 0.647, 1];
var G_activeColor = [1, 0.725, 0.004, 1];
var G_host = jsarguments[1];

function setAllColors() {
  var allColors = arrayfromargs(arguments);
  G_inactiveColor = allColors.slice(0, 4);
  G_activeColor = allColors.slice(4, 8);
  mgraphics.redraw();
}

function setState(state) {
  G_deviceIsActive = state;
  mgraphics.redraw();
  setText();
}

function setActiveCircle(index) {
  G_activeCircle = index;
  mgraphics.redraw();
}

function setConnectionState(state) {
  G_connectionEstablished = state;
  mgraphics.redraw();
  setText();
}

function paint() {
  var PADDING = 2;

  with (mgraphics) {
    set_line_width(1.5);
    if (G_connectionEstablished && G_deviceIsActive) {
      for (var i = 0; i < 3; i++) {
        set_source_rgba(G_activeColor);
        ellipse(PADDING + i * 25, PADDING, 15, 15);
        stroke_preserve();
        fill();
      }
    } else {
      for (var i = 0; i < 3; i++) {
        set_source_rgba(
          i === G_activeCircle && G_deviceIsActive
            ? G_activeColor
            : G_inactiveColor
        );
        ellipse(PADDING + i * 25, PADDING, 15, 15);
        stroke();
      }
    }
  }
}

function setText() {
  var text = G_deviceIsActive
    ? G_connectionEstablished
      ? "Connected to LiveMTC Bridge"
      : G_host
      ? "Waiting for LiveMTC Bridge"
      : "Waiting for MTC device"
    : "Device Disabled";
  outlet(0, "set", text);

  if (G_host) {
    var textColor = G_deviceIsActive
      ? G_connectionEstablished
        ? "LCD Text / Icon"
        : "LCD Text / Icon"
      : "LCD Text / Icon (Inactive)";
    outlet(0, "textcolor", textColor);
  }
}
