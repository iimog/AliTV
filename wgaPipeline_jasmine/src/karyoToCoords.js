function karyo_to_coords(data) {
	var width=1200;
	var total=[0,0];
	var current=[0,0];
	var index=0;
	
	var spacer = set_spacer(data);
	console.log(spacer);
	$.each(data.chromosomes, function(key, value) {
		total[value.genome_id] += value.length + spacer;
	});
	
	console.log(data);
	for(var i=0;i<data.order.length;i++){
		var key = data.order[i];
		var value = data.chromosomes[key];
		data.chromosomes[key] = {
			"value" : value.length,
			"index" : index++,
			"x" : (current[value.genome_id] / total[value.genome_id]) * width,
			"width" : (value.length / total[value.genome_id]) * width,
			"genome_id" : value.genome_id,
			"name" : key
		};
		current[value.genome_id] += value.length + spacer;
	};
	console.log(data);
	return data.chromosomes;
}

function set_spacer(data){
	var spacer = 0;
	$.each(data.chromosomes, function(key, value) {
		spacer += value.length;
	});
	spacer = spacer * 0.0038; // ca. 4% der Gesamtsumme aller Sequenzen	// entsprechen dem geeigneten Spacer
	return spacer;
}