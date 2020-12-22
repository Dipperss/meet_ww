//index.js
//鑾峰彇搴旂敤瀹炰緥
//const app = getApp()
//var util = require('utils/util.js');
function disableElement() {
    console.log("test");
}
var data = {
    marqueePace: 1,//婊氬姩閫熷害
    marqueeDistance: 0,//鍒濆婊氬姩璺濈
    marquee_margin: 20,
    size: 14,
    interval: 40, // 鏃堕棿闂撮殧

    infoSelected: false,
    text: 'text null',
    io: [
            { name: '杩涙牎', value: 0 },
            { name: '鍑烘牎', value: 1 }
    ], //杩涘嚭鏍￠棬
    customName: 'null',
    auth: '鎺堟潈鏈夋晥!',
    time: 'time null',
    userInfo: {},
    hasUserInfo: false,
    //canIUse: wx.canIUse('button.open-type.getUserInfo')
};
// function radiochange() {
//         var x = parseInt(document.getElementById("radioid").value);
//         if (x == 1) {
//                 console.log($("input[name='io']:checked").val());
//                 document.getElementById("auth").innerHTML = "鏈鐢ㄦ埛锛屽嚭鏍℃巿鏉冩湁鏁堬紒";
//         }
//         else {
//                 console.log($("input[name='io']:checked").val());
//                 document.getElementById("auth").innerHTML = "鏈鐢ㄦ埛锛屽叆鏍℃巿鏉冩湁鏁堬紒";
//         }

// }

function radiochangeslt() {
    var x = parseInt(document.getElementById("slt").options[document.getElementById("slt").options.selectedIndex].value);
    if (x == 1) {
            console.log($("input[name='io']:checked").val());
            document.getElementById("auth").innerHTML = "鏈鐢ㄦ埛锛屽嚭鏍℃巿鏉冩湁鏁堬紒";
    }
    else {
            console.log($("input[name='io']:checked").val());
            document.getElementById("auth").innerHTML = "鏈鐢ㄦ埛锛屽叆鏍℃巿鏉冩湁鏁堬紒";
    }
}
/*
$('input[type=radio][name=io]').change(function () {
console.log("radiochange");
console.log("radiochange"+$("input[name='io']:checked").val());
if($("input[name='io']:checked").val() == 0){
console.log($("input[name='io']:checked").val());
document.getElementById("auth").innerHTML="鏈鐢熺敤鎴凤紝鍑烘牎鎺堟潈鏈夋晥锛�";
}
else{
console.log($("input[name='io']:checked").val());
document.getElementById("auth").innerHTML="鏈鐢熺敤鎴凤紝鍏ユ牎鎺堟潈鏈夋晥锛�";
}
})
*/



$("#infoselected").click(function () {
    $("div.info").hide();
    data.time = formatTime(new Date())
    console.log(data.time)
    document.getElementById("time").innerHTML = data.time;
    /*2020/12/13*/
    //radiochange();
    /*2020/12/18 灏嗘敼鍚嶅嚱鏁拌皟鐢ㄦ斁鍦ㄨ繖閲� */
    document.getElementById("user-right").innerHTML = document.getElementById("custom-name-input").value;
    radiochangeslt();
});

const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    var result = [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
    var ret = result + '  ' + result
    console.log(ret)
    return ret
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}


function gotocode() {
    window.location.href = "./code.html"
}



//浜嬩欢澶勭悊鍑芥暟
function bindViewTap() {
    wx.navigateTo({
            url: '../logs/logs'
    })
}
function onLoad() {
    //console.log("-1 "+app.globalData.userInfo);
    if (app.globalData.userInfo) {
            //console.log("0 "+userInfo);
            this.setData({
                    userInfo: app.globalData.userInfo,
                    hasUserInfo: true
            });

    } else if (this.data.canIUse) {
            //console.log("0 "+app.globalData.userInfo);
            // 鐢变簬 getUserInfo 鏄綉缁滆姹傦紝鍙兘浼氬湪 Page.onLoad 涔嬪悗鎵嶈繑鍥�
            // 鎵€浠ユ澶勫姞鍏� callback 浠ラ槻姝㈣繖绉嶆儏鍐�
            app.userInfoReadyCallback = res => {
                    this.setData({
                            userInfo: res.userInfo,
                            hasUserInfo: true
                    });
            }
    } else {
            // 鍦ㄦ病鏈� open-type=getUserInfo 鐗堟湰鐨勫吋瀹瑰鐞�
            //console.log("0 "+app.globalData.userInfo);
            wx.getUserInfo({
                    success: res => {
                            app.globalData.userInfo = res.userInfo
                            this.setData({
                                    userInfo: res.userInfo,
                                    hasUserInfo: true
                            })
                    }
            })

    }
}
function getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
    })
}

function onShow() {
    var time = formatTime(new Date());
    // 鍐嶉€氳繃setData鏇存敼Page()閲岄潰鐨刣ata锛屽姩鎬佹洿鏂伴〉闈㈢殑鏁版嵁
    this.setData({
            text: time
    });

    var that = this;
    var length = that.data.text.length * that.data.size;//鏂囧瓧闀垮害
    var windowWidth = wx.getSystemInfoSync().windowWidth * 0.6;// 灞忓箷瀹藉害
    console.log(length, windowWidth);
    that.setData({
            length: length,
            windowWidth: windowWidth,
    });
    that.scrolltxt();// 绗竴涓瓧娑堝け鍚庣珛鍗充粠鍙宠竟鍑虹幇
}


function scrolltxt() {
}

