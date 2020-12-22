// 获取当前日期时间
var myDate = new Date();
myDate.toLocaleDateString();                //获取当前日期
var mytime=myDate.toLocaleTimeString();     //获取当前时间
myDate.toLocaleString( );                   //获取日期与时间

myDate.getYear();                //获取当前年份(2位)
myDate.getFullYear();            //获取完整的年份(4位,1970-????)
myDate.getMonth();               //获取当前月份(0-11,0代表1月)
myDate.getDate();                //获取当前日(1-31)
myDate.getDay();                 //获取当前星期X(0-6,0代表星期天)
myDate.getTime();                //获取当前时间(从1970.1.1开始的毫秒数)
myDate.getHours();               //获取当前小时数(0-23)
myDate.getMinutes();             //获取当前分钟数(0-59)
myDate.getSeconds();             //获取当前秒数(0-59)
myDate.getMilliseconds();        //获取当前毫秒数(0-999)
// 获取当前日期时间
function getDatetime() {
    var now = new Date();
    var year = now.getFullYear();       
    var month = now.getMonth() + 1;     
    var day = now.getDate();            
    var hh = now.getHours();            
    var mm = now.getMinutes();          
    var ss = now.getSeconds();          
    var clock = year + "-";
    if (month < 10)
        clock += "0";
    clock += month + "-";
    if (day < 10)
        clock += "0";
    clock += day + " ";
    if (hh < 10)
        clock += "0";
    clock += hh + ":";
    if (mm < 10) clock += '0';
    clock += mm + ":";
    if (ss < 10) clock += '0';
    clock += ss;
    return clock;}
// 获取当前日期时间
function timestampToTime(timestamp) {
    var date = new Date(timestamp);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() + ' ';
    var hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() + ':';
    var mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() + ':';
    var ss = date.getSeconds() < 10 ? '0' + date.getDate() : date.getSeconds() ;
    return Y + M + D + hh + mm + ss;}