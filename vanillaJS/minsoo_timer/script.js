var i=0;

var target_date = new Date(2020,11, 28, 20, 00, 00);

function count(){
	const day_counter = document.getElementById("day_counter");
	const hour_counter = document.getElementById("hour_counter");
	const minute_counter = document.getElementById("minute_counter");
	const second_counter = document.getElementById("second_counter");
	const now = new Date();
	
	const diff = now - target_date;
	
	const day_diff = Math.floor(diff/(3600*1000*24));
	const hour_diff = Math.floor(diff/(3600*1000))%24;
	const minute_diff = Math.floor(diff/(60*1000))%60;
	const second_diff = Math.floor(diff/1000)%60;
	
	day_counter.innerHTML = day_diff;
	hour_counter.innerHTML = hour_diff;
	minute_counter.innerHTML = minute_diff;
	second_counter.innerHTML = second_diff;
	
}


count();
setInterval(count,1000);