var json = {"Results Panel Name":{"en":" Results",
         "zh":"结果"},
"Navigation Panel Name":{"en":" Navigation",
         "zh":"导航"},
"Master Control Box":{"en":"MASTER CONTROL",
         "zh":"主控"},
"Gene Name":{"en":"Gene Name",
         "zh":"基因名"},
"Base(Zooming)":{"en":"Base",
         "zh":"原来"},
"Genemo Manual":{"en":"Genemo Manual ",
         "zh":"Genemo 说明书"},
"Species Common Name":{"en":"spcCmnName",
         "zh":"种类通用名称"},
"Species Gene Name":{"en":"spcGeneName ",
         "zh":"种类基因名"},
"Data Selection":{"en":" Data selection ",
         "zh":"材料选择"},
"Tracks On/Off":{"en":"Tracks can be turned on/off via the checkboxes below.",
         "zh":"----"},
"You can also":{"en":"You can also",
         "zh":"你也可以"},
"Choose sample type":{"en":"Choose sample type",
         "zh":"选择标本类型"},
"Use all encode data":{"en":"Use all ENCODE data.",
         "zh":"使用所有得ENCODE材料"},
"Use entire encode dataset":{"en":"Use the entire ENCODE dataset to query similar tracks instead of the selected ones. ",
         "zh":"----"},
"Caution on using entire encode":{"en":"Caution: the result may take significant amount of time to compute, so providing your email is highly recommended.",
         "zh":"警告:因为结果可能需要很多时间才能计算,所以推荐用户使用电子邮件。"},
"Common tracks":{"en":"Common tracks",
         "zh":"----"},
"Unique tracks":{"en":"Unique tracks",
         "zh":"----"},
"Common tracks encode":{"en":" Common tracks from ENCODE",
         "zh":"----"},
"Track Name":{"en":"Track Name",
         "zh":"----"},
"Sample Type":{"en":"Sample Type",
         "zh":"标本类型"},
"Preview":{"en":"Preview",
         "zh":"预习"},
"Data":{"en":"Data",
         "zh":"材料"},
"Insignificant signals":{"en":" Tracks with insignificant signals",
         "zh":"----"},
"Insignificant human Tracks":{"en":" tracks with insignifican human signals","zh":"---"},
"Unique encode":{"en":"Unique tracks from ENCODE",
         "zh":"----"},
"Update":{"en":"Update",
         "zh":"更新"},
"Reset View":{"en":"Reset View",
         "zh":"复位观点"},
"Close":{"en":"Close",
         "zh":"关闭"},
"Sample List":{"en":"Sample List",
         "zh":"样本名单"},
"Common sample types":{"en":"Common sample types:",
         "zh":"普通标本类型"},
"Species only sample types":{"en":"Species-only sample types",
         "zh":"----"},
"Download Data":{"en":"Download Data",
         "zh":"下载材料"},
"Hint":{"en":" Hint: tracks can be turned on / off via the <span class=\"panel\">track selection</span> panel, click button on the left to show.",
         "zh":"----"},
"Do not show":{"en":"Do not show in the future",
         "zh":"以后别显示"},
"Lab":{"en":"Lab",
         "zh":"实验室"},
"Insignificant spcCmnName Tracks":{"en":" Tracks with insignificant signals for spcCmnName",
         "zh":"----"},
"Reference":{"en":"Reference: ",
         "zh":"参考:"},
"Use sample":{"en":"Use sample",
         "zh":"使用样品"},
"Computing time":{"en":"Some results may take a while to compute. You may provide an email here to get notification once the analysis is completed.",
         "zh":"有的结果会需要一些时间才能计算。你可以在这儿给你的电子邮件地址，计算完就会用电子邮件通知你。"},
"Provide url":{"en":"You may also provide a URL for a <a href=\"/goldenPath/help/wiggle.html\">wig</a> / <a href=\"/goldenPath/help/bigWig.html\" target=\"_blank\">bigWig</a> file <strong><em>for display purposes only</em></strong>",
         "zh":"----"},
"Search Range":{"en":"You can also specify the range to limit the search results to a certain genome location.",
         "zh":"----"},
"Search":{"en":"Search",
         "zh":"----"},
"Search against":{"en":"Please specify the reference genome you would like to search against, then upload your custom peak file below for analysis. Either put your file on a public server and provide the URL, or directly upload the file here. (<a href=\"/goldenPath/help/customTrack.html#BED\" target=\"_blank\">BED, peaks format</a> files are accepted either by uploading or providing URL, <a href=\"/goldenPath/help/bigWig.html\" target=\"_blank\">bigWig files</a> are accepted by URL only.)      ",
         "zh":"----"},
"":{"en":"",
         "zh":"----"},
"Data References":{"en":"Data References",
         "zh":"----"},
"":{"en":"Please refer to <a href=\"http://data.genomegitar.org/\">http://data.genomegitar.org/</a> for description and download of all data sets used here.",
         "zh":"----"},
"Species to compare":{"en":" Species to compare: ",
         "zh":"----"},
"Gene":{"en":"Gene",
         "zh":"----"},
"Region for":{"en":"Region for",
         "zh":"----"},
"Threshold":{"en":"Threshold (# of reads / 1Mbp)",
         "zh":"----"},
"returnEmail":{"en":"(Optional) Display file URL",
         "zh":"Chinese stuff"},
"urlFileToShow":{"en":"(Optional) Display file URL",
         "zh":"More Chinese stuff"},
"searchRangeInput":{"en":"(Optional) Search range",
         "zh":"Even more Chinese Stuff"},
"urlFileInput":{"en":"URL for data file",
         "zh":"mhm"},
"regionDropdown":{"en":"Reference",
         "zh":"chinese reference"},
"Insignificant mouse Tracks":{"en":"Tracks with insignificant signals for mouse",
         "zh":"----"},
"":{"en":"",
         "zh":"----"},
"":{"en":"",
         "zh":"----"},
"":{"en":"",
         "zh":"----"},
"":{"en":"",
         "zh":"----"},
"":{"en":"",
         "zh":"----"},
		 
}
//use x[i].tagName
function setTexts(language){


var x=document.querySelectorAll('.text');



//var keys = Object.keys(json);
//var keys2 = Object.keys(x);

for (i=0;i<x.length;i++){

	if (x[i].tagName=="SPAN")
	x[i].innerHTML=json[x[i].id][language];
	if (x[i].tagName=="PAPER-BUTTON"||x[i].tagName=="PAPER-INPUT")
		x[i].label=json[x[i].id][language];

	/*for (j=0;j<keys.length;j++){
		if (x[i]==keys[j]())
			x[i].innerHTML=y[j][language];

	}*/
}

}