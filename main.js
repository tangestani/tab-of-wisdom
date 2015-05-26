function getUrl() {
    var d = new Date();
    var month = d.getMonth();
    var date = d.getDate();

    var baseUrl = 'http://a-calendar-of-wisdom.blogspot.ca';

    switch (month) {
        case 0:
            path = '/2015/01/january-';
            break;
        case 1:
            path = '/2015/02/february-';
            break;
        case 2:
            path = '/2015/03/march-';
            break;
        case 3:
            path = '/2015/04/april-';
            break;
        case 4:
            path = '/2012/05/may-';
            break;
        case 5:
            if (date < 9)
                path = '/2012/05/june-';
            else
                path = '/2012/06/june-';
            break;
        case 6:
            if (date < 12)
                path = '/2012/07/july-';
            else
                path = '/2012/08/july-';
            break;
        case 7:
            path = '/2014/08/august-';
            break;
        case 8:
            if (date < 15)
                path = '/2014/09/september-';
            else
                path = '/2014/10/september-';
            break;
        case 9:
            path = '/2014/10/october-';
            break;
        case 10:
            path = '/2014/11/november-';
            break;
        case 11:
            path = '/2014/12/december-';
            break;
    }

    return baseUrl + path + date + '.html'
};

$('#date').text()
$('#entry').load(getUrl() + ' .entry-content');
