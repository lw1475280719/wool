//耗时30分钟
dic={
    11:"com.booster.battery.cooler.cleaner",
    12:"com.en.midainc.dcjwys",
    13:"com.mp.doctors.batterysaver",
    14:"all.documents.reader.office.viewer.documentsmanager",
    15:"com.volumebooster.soundbooster.booster.bassbooster.equalizer.musicequalizer",
    16:"com.jixiang.timermaster",
    19:"com.homefitapps.watertracker.reminder",
    20:"org.adfoxhuang.whattoeat",
}

lapp=dic[dialogs.input("请输入步步亿万版号：")];

launch(lapp);
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

sh.exec("am force-stop "+lapp);
sleep(1000);
sh.exit;
toastLog("【步步亿万】已完成计划任务并退出APP！");
