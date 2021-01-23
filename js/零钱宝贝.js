//(受广告时长影响)耗时40-60分钟
launch(getPackageName("零钱宝贝"));
var sh = new Shell(true);
text("我的钱包").waitFor();
sleep(3000);
text("领取").find().click();
for (i = 0; i < 350; i++) {
    back();
    id("tt_video_ad_close_layout").find().click();
    sleep(6500);
    clickable(true).depth(15).find().click();
    sleep(1000);
    if (text("立即提现").exists()) {
        Tap(540, 1800);//Tap(540,1680);
        sleep(1000);
        text("领取").find().click();
    }
    text("领取").find().click();
    toastLog("计数器：" + (i + 1) + "/63");
}
sh.exec("am force-stop " + getPackageName("零钱宝贝"));
sleep(1000);
sh.exit;
toastLog("【零钱宝贝】已完成计划任务并退出APP！");