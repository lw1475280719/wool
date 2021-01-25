//耗时20分钟
launch(getPackageName("全民种豆"));
var sh = new Shell(true);
id("iv_shuoming").waitFor();
sleep(2000);
for (i = 0; i < 140; i++) {
    id("iv_yijian").find().click();
    sleep(3000);
    id("btn_submit").find().click();
    sleep(3000);
    if (!id("iv_shuoming").exists()) {
        id("tt_video_ad_close_layout").find().click();
    }
    if (!id("iv_shuoming").exists()) {
        back();
    }
    if (id("iv_shuoming").exists()) {
        sleep(10 * 1000);
    }
    toastLog("计数器：" + (i + 1));
}


sh.exec("am force-stop " + getPackageName("全民种豆"));
sleep(1000);
sh.exit;
toastLog("【全民种豆】已完成计划任务并退出APP！");
