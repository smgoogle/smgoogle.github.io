
var baseUrl = 'http://207.148.102.32/wm/inout/datas?method=';
var baseIp = '207.148.102.32';
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
	$.cookie('tryingRegNum','100');
	
	$.cookie('cash', baseInfos[11].split("\t")[0]);
	$.cookie('withdrawed', baseInfos[11].split("\t")[1]);
	
	var regInfo = signResult[1].split(",");
	
	$.cookie('leftSmNum', regInfo[0]);
	$.cookie('expectedRegNum', regInfo[1]);
	$.cookie('currRegNum', regInfo[2]);
}

function trying(){
	return $.cookie('trying') == 'Y';
}

function refreshFromServer(callback){
	$.ajax({
		url: baseUrl + "baseInfo&pol4=" + encodeURI("1"),
		type:'GET',
		async:true,
		cache:false,
		xhrFields: {
			withCredentials: true
		},
		crossDomain: true,
		success:function(data) {
			if(data != null && data.indexOf("ERROR:")!= -1){
				if(data.indexOf("ERROR:+") != -1){
					alert('登录过期');
					$.cookie('phoneNo','');
					location = 'index.html';
					return;
				}
				alert(data);
				//callback();
				return;
			}
			analyseData(data);
			callback();
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			alert("请求错误");
			//callback();
		}
	});
}

function isEmpty(str){
	return str == null || str == '';
}

function getToday(){
    var datetime = new Date();
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    return (year+"").substring(2) + month + date;
}
