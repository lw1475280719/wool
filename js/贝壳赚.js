//耗时30分钟
dic={
    19:"dev.MakPersonalStudio.AlarmClock",
    20:"techbash.com.texttospeech.translate.voicetype",
    21:"dev.shahzadshah.speach.totext.app",
    24:"voice.to.text",
    28:"com.pinj_app",
}


lapp=dic[dialogs.input("请输入贝壳赚版号：")];
launch(lapp);
var sh = new Shell(true);
sleep(10 * 1000);
if (text("立即提现").exists()) {
    text("立即提现").waitFor();
    className("android.view.View").text("立即提现").find().click();
} else {
    text("IKhfxJ5bxI9dDEfXvNwMfSu+J55SRfkPX+AphjYQHXRxYfAAAAAElFTkSuQmCC").findOne().parent().click();
}
sleep(1000);
text("0.3").findOne().parent().parent().click();
sleep(1000);
for (i = 0; i < 280; i++) {
    text("看视频提现秒到账").find().click();
    text("观看并点击视频广告").find().click()
    sleep(5000);
    if (className("android.widget.ImageView").exists()) {
        back();
    }
    //防互动广告
    swipe(100, 500, 800, 500, 300);
    if (id("tt_video_ad_close_layout").exists()) {
        id("tt_video_ad_close_layout").find().click();
    }
    sleep(1000);
    className("android.view.View").text("立即提现").find().click();
    toastLog("计数器：" + (i + 1));
}
sleep(50 * 1000);
if (className("android.widget.ImageView").exists()) {
    back();
}
//防互动广告
swipe(100, 500, 800, 500, 300);
if (id("tt_video_ad_close_layout").exists()) {
    id("tt_video_ad_close_layout").find().click();
}
sleep(1000);
back();

sh.exec("am force-stop "+lapp);
sleep(1000);
sh.exit;
toastLog("【贝壳赚】已完成计划任务并退出APP！");
