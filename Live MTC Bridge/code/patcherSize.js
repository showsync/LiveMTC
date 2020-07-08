autowatch = 1;
outlets = 2;

function listAreas() {
	var areas = getAreas();
	for each (area in areas) {
		outlet(0, area.areaName, area.rectangle);
	}
}

function show() {
	var totalRectangle = null;
	if (arguments.length > 0) {
		for each (areaName in arrayfromargs(arguments)) {
			for each (area in getAreas()) {
				if (area.areaName == areaName) {
					if (totalRectangle) {
						totalRectangle = merge(totalRectangle, area.rectangle);
					}
					else {
						totalRectangle = area.rectangle;
					}
				}
			}
		}
	}
	if (totalRectangle) {
		//post("set area to " + totalRectangle);
		outlet(1, totalRectangle);
	}
	else {
		post(arrayfromargs(arguments), "not part of known areas", "\n");
	}
}

function getAreas() {
	var areas = new Array();
    var prev = 0;
	var objectToCheck = this.patcher.firstobject;
	do {
		if (objectToCheck.maxclass == "panel" && objectToCheck.varname != "") {
			var area = new Object();
			area.areaName = objectToCheck.varname;
			area.rectangle = objectToCheck.rect;
			areas.push(area);
		}
	}
	while (objectToCheck = objectToCheck.nextobject)	
	return areas;
}

function merge(r1, r2) {
   return [ Math.min(r1[0], r2[0]),
            Math.min(r1[1], r2[1]),
            Math.max(r1[2], r2[2]),
            Math.max(r1[3], r2[3])]
}

function isEqual(r1, r2) {
   return (r1[0] == r2[0] &&
			r1[1] == r2[1] &&
			r1[2] == r2[2] &&
			r1[3] == r2[3])
}