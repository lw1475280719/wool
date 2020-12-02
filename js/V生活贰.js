//耗时30分钟
launchApp("V生活");
var sh = new Shell(true);
sleep(12000);
back();
sleep(1000);
for (i = 0; i < 240; i++) {
    click("视频赚");
    sleep(4000);
    //className("android.widget.ImageView").find().click();
    back();
    sleep(1000);
    id("tt_video_ad_close_layout").find().click();
    sleep(1000);
    text("下次再说").find().click();
    toastLog("计数器：" + (i + 1));
    sleep(1000);

}
sh.exec("am force-stop " + getPackageName("V生活"));
sleep(1000);
sh.exit;
toastLog("【V生活】已完成计划任务并退出APP！");