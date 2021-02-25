//耗时30分钟
launch("com.mp.doctors.batterysaver");
var sh = new Shell(true);
sleep(10 * 1000);
if (text("立即提现").clickable(true).depth(14).exists()) {
    text("立即提现").clickable(true).depth(14).find().click();
} else {
    className("android.view.View").text("立即提现").find().click();
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

sh.exec("am force-stop com.mp.doctors.batterysaver");
sleep(1000);
sh.exit;
toastLog("【步步亿万13】已完成计划任务并退出APP！");
