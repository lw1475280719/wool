//耗时2小时
launch(getPackageName("零钱宝贝"));
var sh = new Shell(true);
text("我的钱包").waitFor();
text("我的钱包").find().click();
sleep(3000);
text("立即提现").find().click();
sleep(2000);
for (i = 0; i < 1400; i++) {
    className("android.view.View").text("").find().click();
    text("立即提现").find().click();
    className("android.view.View").clickable(true).depth(14).find().click();
    sleep(5000);
    if(id("tt_video_ad_close_layout").exists()){
        id("tt_video_ad_close_layout").find().click();
    }
    if (className("android.widget.ImageView").exists()) {
        back();
    }
    toastLog("计数器：" + (i + 1) + "/1400");
}
sh.exec("am force-stop " + getPackageName("零钱宝贝"));
sleep(1000);
sh.exit;
toastLog("【零钱宝贝】已完成计划任务并退出APP！");