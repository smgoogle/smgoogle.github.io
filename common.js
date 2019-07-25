
function analyseData(data){
	var signResult = data.split("\n")
	var baseInfos = signResult[0].split(",");
	$.cookie('promRegNum', baseInfos[1].split("\t")[0]);
	$.cookie('promCkNum', baseInfos[1].split("\t")[1]);
	
	var acctSet = baseInfos[2].split("\t");
	
	$.cookie('smAccountSetted', acctSet[0]);
	$.cookie('regStatus', baseInfos[3]);
	
	$.cookie('recCode', baseInfos[5]);
	$.cookie('beginRegTime', baseInfos[6]);
	
	$.cookie('trying', baseInfos[10].split("\t")[0]);
	$.cookie('tryingRegStatus', baseInfos[10].split("\t")[1]);
	$.cookie('tryingCkInStatus', baseInfos[10].split("\t")[2]);
	
	$.cookie('cash', baseInfos[11].split("\t")[0]);
	$.cookie('withdrawed', baseInfos[11].split("\t")[1]);
	
	var regInfo = signResult[1].split(",");
	
	$.cookie('leftSmNum', regInfo[0]);
	$.cookie('expectedRegNum', regInfo[1]);
	$.cookie('currRegNum', regInfo[2]);
}