Date.prototype.getMonthName = function() {
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "Spetember", "October", "November", "December"];

    return monthNames[this.getMonth()];
}


function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}


function getUrl() {
    var d = new Date();
        month = d.getMonth(),
        date = d.getDate(),
        monthName = d.getMonthName(),
        baseUrl = 'http://a-calendar-of-wisdom.blogspot.ca';

    if (month < 4) {var yearPath = '/2015'}
    else if (month < 7) {var yearPath = '/2012'}
    else {var yearPath = '/2014'}

    if (month == 5 && date < 9) {var monthPath = '/05'}
    else if (month == 6 && date >= 12) {var monthPath = '/08'}
    else if (month == 8 && date >= 15) {var monthPath = '/10'}
    else {var monthPath = '/'+pad(month+1, 2)}

    return baseUrl+yearPath+monthPath+'/'+monthName.toLowerCase()+'-'+date+'.html'
};


var d = new Date();
$('#date').text(d.getMonthName() + ' ' + d.getDate())
$('#entry').load(getUrl() + ' .entry-content');
