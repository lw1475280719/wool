//耗时20分钟
launch(getPackageName("芝嫲视频"));
var sh = new Shell(true);
id("check_btn").waitFor();
Tap(500,500);
id("tab_tv").className("android.widget.TextView").text("夺宝").findOne().parent().parent().click();
sleep(2000);
for (i = 0; i < 140; i++) {
    id("iv_onkey_receive").find().click()
    sleep(1000);
    id("rtv_receive").find().click()
    sleep(5000);
    if (!id("iv_play_rule").exists()) {
        id("tt_video_ad_close_layout").find().click();
    }
    //防互动广告
    swipe(100, 500, 800, 500, 300);
    if (!id("iv_play_rule").exists()) {
        back();
    }
    if (id("iv_play_rule").exists()) {
        sleep(5000);
    }
    toastLog("计数器：" + (i + 1));
}


sh.exec("am force-stop " + getPackageName("芝嫲视频"));
sleep(1000);
sh.exit;
toastLog("【芝嫲视频】已完成计划任务并退出APP！");