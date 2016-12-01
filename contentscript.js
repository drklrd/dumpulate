
var inputFields=document.getElementsByTagName("input");
if(inputFields && inputFields.length){
	for(field=0 ; field<inputFields.length;field++){
		// console.log('type',inputFields[field].type)
		var type = inputFields[field].type;
		if(type){
			if( type === 'text'){
				inputFields[field].value="test";
			}else if( type === 'date' ){
				var date = {};
				if(inputFields[field].min){
					date.min = new Date(inputFields[field].min).getTime();

				}
				if(inputFields[field].max){
					date.max = new Date(inputFields[field].max).getTime();
				}

				if(!date.min){
					date.min = new Date().getTime();
				}

				if(!date.max){
					date.max = date.min + (365 * 24 * 60 * 60 * 1000);
				}


				date.date = Math.floor(Math.random() * (date.max-date.min) ) + date.min;
				
				inputFields[field].value= moment(date.date).format('YYYY-MM-DD'); 

			}
		}
		
	}
}

var selectFields = document.getElementsByTagName("select");

if(selectFields && selectFields.length){
	for(field=0 ; field<selectFields.length;field++){
		selectFields[field].value = selectFields[field].options[Math.floor(Math.random()*selectFields[field].length)].text;
	}
}
