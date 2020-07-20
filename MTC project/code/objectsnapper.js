function bang() {
	var obj = this.patcher.firstobject;
	
	while(obj != null) {
		var r = obj.rect;
		var newR = [Math.round(r[0]), Math.round(r[1]), Math.round(r[2] - r[0]), Math.round(r[3] - r[1])];

		if (obj.understands("presentation_rect")) obj.message("presentation_rect", newR);
		
		post("Adjusting " + obj.maxclass + "\n");
		obj = obj.nextobject;
	}
}