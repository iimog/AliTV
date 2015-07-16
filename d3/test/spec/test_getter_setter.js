describe('The getKaryoSpacer method is supposed to get the information of the spacer between two karyos', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	
	it('getKaryoSpacer method is supposed to be a function', function(){
		expect(typeof ali.getKaryoSpacer).toEqual('function');
	});	
	it('the function should return a defined value', function(){
		var spacer = ali.getKaryoSpacer();
		expect(spacer).toBeDefined();
	});
	it('the function should return the spacer of the defaultConf', function(){
		var spacer = ali.getKaryoSpacer();
		expect(spacer).toEqual(defaultConf.graphicalParameters.karyoDistance);
	});
});
	
describe('The setKaryoSpacer method is supposed to set the new information of the karyoDistance in the conf object', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	it('setKaryoSpacer method is supposed to be a function', function(){
		expect(typeof ali.setKaryoSpacer).toEqual('function');
	});	
	it('the returned spacer of the getKaryoSpacer method should be the same as the spacer which is set and returned by the setter-method', function(){
		var returnedSpacer = 50;
		expect(ali.setKaryoSpacer(returnedSpacer)).toEqual(50);
	});	
	it('when setKaryoSpacer is called several times the spacer should have the same value as the returned spacer of getKaryoSpacer method', function(){
		ali.setKaryoSpacer(12);
		expect(ali.getKaryoSpacer()).toEqual(12);
		ali.setKaryoSpacer(100);
		expect(ali.getKaryoSpacer()).toEqual(100);
		ali.setKaryoSpacer(20);
		expect(ali.getKaryoSpacer()).toEqual(20);
	});	
	it('the returned Spacer of the getKaryoSpacer method should throw an error message if the spacer is empty', function(){
		var returnedSpacer = "";
		expect(function(){ali.setKaryoSpacer(returnedSpacer);}).toThrow("empty");
	});
	it('the returned Spacer of the getKaryoSpacer method should throw an error message if the spacer is not a number', function(){
		var returnedSpacer = "test";
		expect(function(){ali.setKaryoSpacer(returnedSpacer);}).toThrow("not a number");
	});
	it('the returned Spacer of the getKaryoSpacer method should throw an error message if the spacer is less than 0', function(){
		var returnedSpacer = -12;
		expect(function(){ali.setKaryoSpacer(returnedSpacer);}).toThrow("spacer is to small, it should be > 0");
	});
	it('the returned Spacer of the getKaryoSpacer method should throw an error message if the spacer is 0', function(){
		var returnedSpacer = 0;
		expect(function(){ali.setKaryoSpacer(returnedSpacer);}).toThrow("spacer is to small, it should be > 0");
	});
});

	
describe('The getKaryoHeight method is supposed to get the height of the chromosomes', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	
	it('getkaryoHeight method is supposed to be a function', function(){
		expect(typeof ali.getKaryoHeight).toEqual('function');
	});	
	it('the function should return a defined value', function(){
		var height = ali.getKaryoHeight();
		expect(height).toBeDefined();
	});
	it('the function should return the height of chromosomes which is defined in the defaultConf', function(){
		var height = ali.getKaryoHeight();
		expect(height).toEqual(defaultConf.graphicalParameters.karyoHeight);
	});
});

describe('The setKaryoHeight method is supposed to set the new height of chromosomes in the conf object', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	it('setKaryoHeight method is supposed to be a function', function(){
		expect(typeof ali.setKaryoHeight).toEqual('function');
	});	
	it('the returned value of the getKaryoHeight method should be the same as the height which is set and returned by the setter-method', function(){
		var height = 40;
		expect(ali.setKaryoHeight(height)).toEqual(40);
	});	
	it('when setKaryoHeight is called several times the height should have the same value as the returned height of getKaryoHeight method', function(){
		ali.setKaryoHeight(20);
		expect(ali.getKaryoHeight()).toEqual(20);
		ali.setKaryoHeight(40);
		expect(ali.getKaryoHeight()).toEqual(40);
		ali.setKaryoHeight(32);
		expect(ali.getKaryoHeight()).toEqual(32);
	});
	it('the setKaryoHeight method should throw an error message if the assigned height has no value', function(){
		var height = "";
		expect(function(){ali.setKaryoHeight(height);}).toThrow("empty");
	});
	it('the setKaryoHeight method should throw an error message if the assigned height is not a number', function(){
		var height = "test";
		expect(function(){ali.setKaryoHeight(height);}).toThrow("not a number");
	});
	it('the setKaryoHeight method should throw an error message if the assigned height is 0', function(){
		var height = 0;
		expect(function(){ali.setKaryoHeight(height);}).toThrow("genome distance is to small, it should be > 0");
	});
	it('the setKaryoHeight method should throw an error message if the assigned height is less than 0', function(){
		var height = -12;
		expect(function(){ali.setKaryoHeight(height);}).toThrow("genome distance is to small, it should be > 0");
	});

});

describe('The getCanvasWidth method is supposed to get the width of the svg drawing area', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	
	it('getCanvasWidth method is supposed to be a function', function(){
		expect(typeof ali.getCanvasWidth).toEqual('function');
	});	
	it('the function should return a defined value', function(){
		var width = ali.getCanvasWidth();
		expect(width).toBeDefined();
	});
	it('the function should return the width of canvas which is defined in the defaultConf', function(){
		var width = ali.getCanvasWidth();
		expect(width).toEqual(defaultConf.graphicalParameters.canvasWidth);
	});
});
	
describe('The setCanvasWidth method is supposed to set a new width of the svgDrawingArea', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	it('setCanvasWidth method is supposed to be a function', function(){
		expect(typeof ali.setCanvasWidth).toEqual('function');
	});	
	it('the returned object of the getCanvasWidth method should be the same as the width which is set and returned by the setter-method', function(){
		var width = 3000
		expect(ali.setCanvasWidth(width)).toEqual(width);
	});	
	it('when setCanvasWidth is called several times the width should have the same value as the returned width of getCanvasWidth method', function(){
		ali.setCanvasWidth(2000);
		expect(ali.getCanvasWidth()).toEqual(2000);
		ali.setCanvasWidth(1200);
		expect(ali.getCanvasWidth()).toEqual(1200);
		ali.setCanvasWidth(10000);
		expect(ali.getCanvasWidth()).toEqual(10000);
	});
	it('the setCanvasWidth method should throw an error message if the assigned width is empty', function(){
		var width = "";
		expect(function(){ali.setCanvasWidth(width);}).toThrow("empty");
	});
	it('the setCanvasWidth method should throw an error message if the assigned width is not a number', function(){
		var width = "test";
		expect(function(){ali.setCanvasWidth(width);}).toThrow("not a number");
	});
	it('the setCanvasWidth method should throw an error message if the assigned width is 0', function(){
		var width = 0;
		expect(function(){ali.setCanvasWidth(width);}).toThrow("width is to small, it should be > 0");
	});
	it('the setCanvasWidth method should throw an error message if the assigned width is less than 0', function(){
		var width = -3000;
		expect(function(){ali.setCanvasWidth(width);}).toThrow("width is to small, it should be > 0");
	});
});

describe('The getCanvasHeight method is supposed to get the height of the svg drawing area', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	
	it('getCanvasHeight method is supposed to be a function', function(){
		expect(typeof ali.getCanvasHeight).toEqual('function');
	});	
	it('the function should return a defined value', function(){
		var height = ali.getCanvasHeight();
		expect(height).toBeDefined();
	});
	it('the function should return the height of canvas which is defined in the defaultConf', function(){
		var height = ali.getCanvasHeight();
		expect(height).toEqual(defaultConf.graphicalParameters.canvasHeight);
	});
});

describe('The setCanvasHeight method is supposed to set a new height of the svg drawing area', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	it('setCanvasHeight method is supposed to be a function', function(){
		expect(typeof ali.setCanvasHeight).toEqual('function');
	});	
	it('the returned object of the getCanvasHeight method should be the same as the height which is setted and returned by the setter-method', function(){
		var height = 3000;
		expect(ali.setCanvasHeight(height)).toEqual(height);
	});	
	it('when setCanvasHeight is called several times the width should have the same value as the returned height of getCanvasHeight method', function(){
		ali.setCanvasHeight(1234);
		expect(ali.getCanvasHeight()).toEqual(1234);
		ali.setCanvasHeight(4242);
		expect(ali.getCanvasHeight()).toEqual(4242);
		ali.setCanvasHeight(10000);
		expect(ali.getCanvasHeight()).toEqual(10000);
	});
	it('the setCanvasHeight method should throw an error message if the assigned height is empty', function(){
		var height = "";
		expect(function(){ali.setCanvasHeight(height);}).toThrow("empty");
	});
	it('the setCanvasHeight method should throw an error message if the assigned height is not a number', function(){
		var height = "test";
		expect(function(){ali.setCanvasHeight(height);}).toThrow("not a number");
	});
	it('the setCanvasHeight method should throw an error message if the assigned height is 0', function(){
		var height = 0;
		expect(function(){ali.setCanvasHeight(height);}).toThrow("height is to small, it should be > 0");
	});
	it('the setCanvasHeight method should throw an error message if the assigned height is less than 0', function(){
		var height = -42;
		expect(function(){ali.setCanvasHeight(height);}).toThrow("height is to small, it should be > 0");
	});
});

describe('The getOuterRadius method is supposed to calculate the appropriate outerRadius for the circular layout', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	it('getOuterRadius method is supposed to be a function', function(){
		expect(typeof ali.getOuterRadius).toEqual('function');
	});
	it('getOuterRadius method is supposed to return not null', function(){
		expect(ali.getOuterRadius()).toBeDefined();
	});
	it('getOuterRadius method is supposed to return 450 if default width and height are used (45% of 1000)', function(){
		expect(ali.getOuterRadius()).toEqual(450);
	});
	it('getOuterRadius method is supposed to return 45% of the smaller dimension (width or height)', function(){
		ali.setCanvasHeight(500);
		ali.setCanvasWidth(1000);
		expect(ali.getOuterRadius()).toEqual(225);
	});
	it('getOuterRadius method is supposed to return 45% of the smaller dimension (width or height)', function(){
		ali.setCanvasHeight(2000);
		ali.setCanvasWidth(1000);
		expect(ali.getOuterRadius()).toEqual(450);
	});
	it('getOuterRadius method is supposed to return 45% of the smaller dimension (width or height)', function(){
		ali.setCanvasHeight(2000);
		ali.setCanvasWidth(2000);
		expect(ali.getOuterRadius()).toEqual(900);
	});
});

describe('The getGenomeDistance method is supposed to calculate the appropriate genomeDistance for the linear layout', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	it('getGenomeDistance method is supposed to be a function', function(){
		expect(typeof ali.getGenomeDistance).toEqual('function');
	});
	it('getGenomeDistance method is supposed to return not null', function(){
		ali.setData(data);
		ali.setFilters(filters);
		expect(ali.getGenomeDistance()).toBeDefined();
	});
	it('getGenomeDistance method is supposed to return 970 if default height and 2 genomes are used (1000 * 1/2)', function(){
		ali.setData(data);
		ali.setFilters(filters);
		var distance = (1000 - 30) * 1/(2 - 1);
		expect(ali.getGenomeDistance()).toEqual(distance);
	});
	it('getGenomeDistance method is supposed to return 323 if default height and 4 genomes are used (1000 * 1/4)', function(){
		ali.setData({karyo: karyo7});
		ali.setFilters(filters8);
		var distance = (1000 - 30) * 1/(4 - 1);
		expect(ali.getGenomeDistance()).toEqual(Math.round(distance));
	});
	it('getGenomeDistance method is supposed to return 1970 if the default height is set on 2000 and 2 genomes are used (2000 * 1/2)', function(){
		ali.setData(data);
		ali.setFilters(filters);
		ali.setCanvasHeight(2000);
		var distance = (2000 - 30) * 1/(2 -1);
		expect(ali.getGenomeDistance()).toEqual(distance);
	});
});

describe('The getTickDistance method is supposed to get the distance of the chromosome ticks in bp', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	
	it('getTickFrequency method is supposed to be a function', function(){
		expect(typeof ali.getTickDistance).toEqual('function');
	});	
	it('the function should return a defined value', function(){
		var distance = ali.getTickDistance();
		expect(distance).toBeDefined();
	});
	it('the function should return the tick distance which is defined in the defaultConf', function(){
		var distance = ali.getTickDistance();
		expect(distance).toEqual(defaultConf.graphicalParameters.tickDistance);
	});
});

describe('The setTickDistance method is supposed to set a new distance between the chromosome ticks', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	it('setTickDistance method is supposed to be a function', function(){
		expect(typeof ali.setTickDistance).toEqual('function');
	});	
	it('the returned object of the getTickDistance method should be the same as the distance which is setted and returned by the setter-method', function(){
		var distance = 200;
		expect(ali.setTickDistance(distance)).toEqual(distance);
	});	
	it('when setTickDistance is called several times the distance should have the same value as the returned distance of getTickDistance method', function(){
		ali.setTickDistance(20);
		expect(ali.getTickDistance()).toEqual(20);
		ali.setTickDistance(5);
		expect(ali.getTickDistance()).toEqual(5);
		ali.setTickDistance(250);
		expect(ali.getTickDistance()).toEqual(250);
	});
	it('the setTickDistance method should throw an error message if the assigned distance is empty', function(){
		var distance = "";
		expect(function(){ali.setTickDistance(distance);}).toThrow("empty");
	});
	it('the setTickDistance method should throw an error message if the assigned distance is not a number', function(){
		var distance = "test";
		expect(function(){ali.setTickDistance(distance);}).toThrow("not a number");
	});
	it('the setTickDistance method should throw an error message if the assigned distance is 0', function(){
		var distance = 0;
		expect(function(){ali.setTickDistance(distance);}).toThrow("distance is to small, it should be > 0");
	});
	it('the setTickDistance method should throw an error message if the assigned distance is less than 0', function(){
		var distance = -200;
		expect(function(){ali.setTickDistance(distance);}).toThrow("distance is to small, it should be > 0");
	});
});

describe('The getLayout method is supposed to get the information of the current layout', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	it('getLayout method is supposed to be a function', function(){
		expect(typeof ali.getLayout).toEqual('function');
	});	
	it('the function should return a defined value', function(){
		var layout = ali.getLayout();
		expect(layout).toBeDefined();
	});
	it('the function should return "linear", because this is the default layout', function(){
		var layout = ali.getLayout();
		expect(layout).toEqual("linear");
	});
});

describe('The getTreeWidth method is supposed to get the current width of the phylogenetic tree', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	it('getLayout method is supposed to be a function', function(){
		expect(typeof ali.getTreeWidth).toEqual('function');
	});	
	it('the function should return a defined value', function(){
		var treeWidth = ali.getTreeWidth();
		expect(treeWidth).toBeDefined();
	});
	it('the function should return the tree width which is defined in the defaultConf', function(){
		var treeWidth = ali.getTreeWidth();
		expect(treeWidth).toEqual(defaultConf.graphicalParameters.treeWidth);
	});
	
});

describe('The setTreeWidth method is supposed to set a new tree width', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	it('setTreeWidth method is supposed to be a function', function(){
		expect(typeof ali.setTreeWidth).toEqual('function');
	});	
	it('the returned object of the getTreeWidth method should be the same as the tree width which is setted and returned by the setter-method', function(){
		var treeWidth = 400;
		expect(ali.setTreeWidth(treeWidth)).toEqual(treeWidth);
	});	
	it('when setTreeWidth is called several times the width of the tree should have the same value as the returned width of getTreeWidth method', function(){
		ali.setTreeWidth(250);
		expect(ali.getTreeWidth()).toEqual(250);
		ali.setTreeWidth(1000);
		expect(ali.getTreeWidth()).toEqual(1000);
		ali.setTreeWidth(888);
		expect(ali.getTreeWidth()).toEqual(888);
	});
	it('the setTreeWidth method should throw an error message if the assigned tree width is empty', function(){
		var treeWidth = "";
		expect(function(){ali.setTreeWidth(treeWidth);}).toThrow("empty");
	});
	it('the setTreeWidth method should throw an error message if the assigned tree width is not a number', function(){
		var treeWidth = "test";
		expect(function(){ali.setTreeWidth(treeWidth);}).toThrow("not a number");
	});
	it('the setTreeWidth method should throw an error message if the assigned treeWidth is 0', function(){
		var treeWidth = 0;
		expect(function(){ali.setTreeWidth(treeWidth);}).toThrow("the tree width is to small, it should be > 0");
	});
	it('the setTreeWidth method should throw an error message if the assigned distance is less than 0', function(){
		var treeWidth = -200;
		expect(function(){ali.setTreeWidth(treeWidth);}).toThrow("the tree width is to small, it should be > 0");
	});
});

describe('The getTickLabelFrequency method is supposed to get the current frequency of tick labels', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	it('getTickLabelFrequency method is supposed to be a function', function(){
		expect(typeof ali.getTickLabelFrequency).toEqual('function');
	});	
	it('the function should return a defined value', function(){
		var tickLabelFrequency = ali.getTickLabelFrequency();
		expect(tickLabelFrequency).toBeDefined();
	});
	it('the function should return the tick label frequency which is defined in the defaultConf', function(){
		var tickLabelFrequency = ali.getTickLabelFrequency();
		expect(tickLabelFrequency).toEqual(defaultConf.graphicalParameters.tickLabelFrequency);
	});
	
});

describe('The setTickLabelFrequency method is supposed to set a new frequency of tick labels', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	it('setTickLabelFrequency method is supposed to be a function', function(){
		expect(typeof ali.setTickLabelFrequency).toEqual('function');
	});	
	it('the returned value of the setTickLabelFrequency method should be the same as the label frequency which is setted and returned by the setter-method', function(){
		var tickLabelFrequency = 15;
		expect(ali.setTickLabelFrequency(tickLabelFrequency)).toEqual(tickLabelFrequency);
	});	
	it('when setTickLabelFrequency is called several times the width of the tree should have the same value as the returned frequency of getTickLabelFrequency method', function(){
		ali.setTickLabelFrequency(5);
		expect(ali.getTickLabelFrequency()).toEqual(5);
		ali.setTickLabelFrequency(100);
		expect(ali.getTickLabelFrequency()).toEqual(100);
		ali.setTickLabelFrequency(22);
		expect(ali.getTickLabelFrequency()).toEqual(22);
	});
	it('the setTickLabelFrequency method should throw an error message if the assigned frequency is empty', function(){
		var tickLabelFrequency = "";
		expect(function(){ali.setTickLabelFrequency(tickLabelFrequency);}).toThrow("empty");
	});
	it('the setTickLabelFrequency method should throw an error message if the assigned frequency is not a number', function(){
		var tickLabelFrequency = "test";
		expect(function(){ali.setTickLabelFrequency(tickLabelFrequency);}).toThrow("not a number");
	});
	it('the setTickLabelFrequency method should throw an error message if the assigned frequency is 0', function(){
		var tickLabelFrequency = 0;
		expect(function(){ali.setTickLabelFrequency(tickLabelFrequency);}).toThrow("the frequency is to small, it should be > 0");
	});
	it('the setTickLabelFrequency method should throw an error message if the assigned frequency is less than 0', function(){
		var tickLabelFrequency = -200;
		expect(function(){ali.setTickLabelFrequency(tickLabelFrequency);}).toThrow("the frequency is to small, it should be > 0");
	});
});

describe('The getGeneColor method is supposed to get the current color of genes', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	it('getGeneColor method is supposed to be a function', function(){
		expect(typeof ali.getGeneColor).toEqual('function');
	});	
	it('the function should return a defined value', function(){
		var color = ali.getGeneColor();
		expect(color).toBeDefined();
	});
	it('the function should return the color of genomes which is defined in the defaultConf', function(){
		var color = ali.getGeneColor();
		expect(color).toEqual(defaultConf.features.supportedFeatures.gene.color);
	});
	
});

describe('The setGeneColor method is supposed to set a new color for genes', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	it('setGeneColor method is supposed to be a function', function(){
		expect(typeof ali.setGeneColor).toEqual('function');
	});	
	it('the returned value of the setGeneColor method should be the same as the color which is setted and returned by the setter-method', function(){
		var color = "#000000";
		expect(ali.setGeneColor(color)).toEqual(color);
	});	
	it('when setGeneColor is called several times the color should have the same value as the returned color of getGeneColor method', function(){
		ali.setGeneColor("#000000");
		expect(ali.getGeneColor()).toEqual("#000000");
		ali.setGeneColor("#36b6cd");
		expect(ali.getGeneColor()).toEqual("#36b6cd");
		ali.setGeneColor("#334e53");
		expect(ali.getGeneColor()).toEqual("#334e53");
	});
	it('the setGeneColor method should throw an error message if the assigned color is empty', function(){
		var color = "";
		expect(function(){ali.setGeneColor(color);}).toThrow("empty");
	});
});

describe('The getGenomeColor method is supposed to get the current color of the first and the last genome', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	it('getChromosomeColor method is supposed to be a function', function(){
		expect(typeof ali.getChromosomeColor).toEqual('function');
	});	
//	it('the function should return a defined value', function(){
//		var color = ali.getGeneColor();
//		expect(color).toBeDefined();
//	});
//	it('the function should return the color of genomes which is defined in the defaultConf', function(){
//		var color = ali.getGeneColor();
//		expect(color).toEqual(defaultConf.features.supportedFeatures.gene.color);
//	});
	
});

describe('The setConfig method is supposed to extend the existing config values', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	it('setConf method is supposed to be a function', function(){
		expect(typeof ali.setConf).toEqual('function');
	});
	it('setConf method should not alter the defaultConf if an empty object is passed', function(){
		ali.setConf({});
		expect(ali.conf).toEqual(defaultConf);
	});
	it('setConf method should overwrite existing/conflicting conf value', function(){
		ali.conf = jQuery.extend(true, {}, defaultConf);
		ali.setConf({linear: {drawAllLinks: true}});
		var confClone = jQuery.extend(true, {}, defaultConf);
		confClone.linear.drawAllLinks = true;
		expect(ali.conf).toEqual(confClone);
	});
	it('setConf method should add non-existent conf value', function(){
		ali.conf = jQuery.extend(true, {}, defaultConf);
		ali.setConf({custom: "customstring"});
		var confClone = jQuery.extend(true, {}, defaultConf);
		confClone.custom = "customstring";
		expect(ali.conf).toEqual(confClone);
	});
});

describe('The getSvgWidth method is supposed to get the width of the svg', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	
	it('getSvgWidth method is supposed to be a function', function(){
		expect(typeof ali.getSvgWidth).toEqual('function');
	});	
	it('the function should return a defined value', function(){
		var width = ali.getSvgWidth();
		expect(width).toBeDefined();
	});
	it('the function should return the width of canvas which is defined in the defaultConf', function(){
		var width = ali.getSvgWidth();
		expect(width).toEqual(Number(ali.svg.attr("width")));
	});
});
	
describe('The setSvgWidth method is supposed to set a new width of the svg', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	it('setSvgWidth method is supposed to be a function', function(){
		expect(typeof ali.setSvgWidth).toEqual('function');
	});
	it('when setSvgWidth is called several times the width should have the same value as the returned width of getSvgWidth method', function(){
		ali.setSvgWidth(2000);
		expect(ali.getSvgWidth()).toEqual(2000);
		ali.setSvgWidth(1200);
		expect(ali.getSvgWidth()).toEqual(1200);
		ali.setSvgWidth(10000);
		expect(ali.getSvgWidth()).toEqual(10000);
	});
	it('the setSvgWidth method should throw an error message if the assigned width is empty', function(){
		var width = "";
		expect(function(){ali.setSvgWidth(width);}).toThrow("empty");
	});
	it('the setSvgWidth method should throw an error message if the assigned width is not a number', function(){
		var width = "test";
		expect(function(){ali.setSvgWidth(width);}).toThrow("not a number");
	});
	it('the setSvgWidth method should throw an error message if the assigned width is 0', function(){
		var width = 0;
		expect(function(){ali.setSvgWidth(width);}).toThrow("width is to small, it should be > 0");
	});
	it('the setSvgWidth method should throw an error message if the assigned width is less than 0', function(){
		var width = -3000;
		expect(function(){ali.setSvgWidth(width);}).toThrow("width is to small, it should be > 0");
	});
});

describe('The getSvgHeight method is supposed to get the height of the svg drawing area', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	
	it('getSvgHeight method is supposed to be a function', function(){
		expect(typeof ali.getSvgHeight).toEqual('function');
	});	
	it('the function should return a defined value', function(){
		var height = ali.getSvgHeight();
		expect(height).toBeDefined();
	});
	it('the function should return the height of canvas which is defined in the defaultConf', function(){
		var height = ali.getSvgHeight();
		expect(height).toEqual(Number(ali.svg.attr("height")));
	});
});

describe('The setSvgHeight method is supposed to set a new height of the svg drawing area', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	it('setSvgHeight method is supposed to be a function', function(){
		expect(typeof ali.setSvgHeight).toEqual('function');
	});
	it('when setSvgHeight is called several times the width should have the same value as the returned height of getSvgHeight method', function(){
		ali.setSvgHeight(1234);
		expect(ali.getSvgHeight()).toEqual(1234);
		ali.setSvgHeight(4242);
		expect(ali.getSvgHeight()).toEqual(4242);
		ali.setSvgHeight(10000);
		expect(ali.getSvgHeight()).toEqual(10000);
	});
	it('the setSvgHeight method should throw an error message if the assigned height is empty', function(){
		var height = "";
		expect(function(){ali.setSvgHeight(height);}).toThrow("empty");
	});
	it('the setSvgHeight method should throw an error message if the assigned height is not a number', function(){
		var height = "test";
		expect(function(){ali.setSvgHeight(height);}).toThrow("not a number");
	});
	it('the setSvgHeight method should throw an error message if the assigned height is 0', function(){
		var height = 0;
		expect(function(){ali.setSvgHeight(height);}).toThrow("height is to small, it should be > 0");
	});
	it('the setSvgHeight method should throw an error message if the assigned height is less than 0', function(){
		var height = -42;
		expect(function(){ali.setSvgHeight(height);}).toThrow("height is to small, it should be > 0");
	});
});

describe('The getSvgAsText method is supposed to get the content of the svg as a text string', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	
	it('getSvgAsText method is supposed to be a function', function(){
		expect(typeof ali.getSvgAsText).toEqual('function');
	});	
	it('the function should return an empty svg with defined size if no data is provided', function(){
		var svgText = "<svg width=\""+defaultConf.graphicalParameters.canvasWidth+"\" height=\""+defaultConf.graphicalParameters.canvasHeight+"\"></svg>";
		svgText += "<svg height=\""+defaultConf.graphicalParameters.canvasHeight+"\" width=\""+defaultConf.graphicalParameters.canvasWidth+"\"></svg>";
		expect(svgText).toContain(ali.getSvgAsText());
	});
	// more complex test cases are too difficult right now as there would be a hard constraint on the order of elements
	// therefore a customMatcher has to be written that can decide if two svg strings are semantically equivalent.
});

describe('The getJSON method is supposed to return the internal data, filters and conf as one JSON object', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	
	it('getJSON method is supposed to be a function', function(){
		expect(typeof ali.getJSON).toEqual('function');
	});	
	it('the function should return the defaultConf and two empty objects if nothing is set', function(){
		var expectedJSON = {conf: defaultConf, data: {}, filters: {}};
		expect(ali.getJSON()).toEqual(expectedJSON);
	});
	it('the function should return the set values in the JSON object', function(){
		ali.setData(data);
		ali.setFilters(filters);
		var expectedJSON = {conf: defaultConf, data: data, filters: filters};
		expect(ali.getJSON()).toEqual(expectedJSON);
	});
});

describe('The setJSON method is supposed to set the internal data, filters and conf objects', function(){
	var svg = $('<svg></svg>');
	var ali = new AliTV(svg);
	
	it('setJSON method is supposed to be a function', function(){
		expect(typeof ali.getJSON).toEqual('function');
	});
	it('the function should return the set values in the JSON object', function(){
		var expectedJSON = {conf: defaultConf, data: data, filters: filters};
		ali.setJSON(expectedJSON);
		expect(ali.getJSON()).toEqual(expectedJSON);
	});
});