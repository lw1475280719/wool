//耗时30分钟
launch("com.de.oster.alexander.apps.meetingmeter");
var sh = new Shell(true);
sleep(10 * 1000);
if (text("立即提现").exists()) {
    className("android.view.View").text("立即提现").findOne().click();
} else {
    className("android.widget.Image").text("icon_redpacked").findOne().parent().parent().click();
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

sh.exec("am force-stop com.de.oster.alexander.apps.meetingmeter");
sleep(1000);
sh.exit;
toastLog("【壁纸试客09】已完成计划任务并退出APP！");
