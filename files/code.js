var cnt = 300;
function validTimeCount(){
    var validTimeMsg;
    if(cnt > 0){
        cnt--;
    }
    else{
        cnt = 300;
    }
    validTimeMsg = "二维码有效时间" + cnt + "秒";
    document.getElementById("valid_time_val").innerHTML = validTimeMsg;
}

function gotorule(){
    window.location.href="./rule.html"
}

//杩涘叆椤甸潰寮€濮嬭鏃�
    window.onload = setInterval(validTimeCount, 1000);