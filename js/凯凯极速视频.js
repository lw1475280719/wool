//耗时30分钟
launch(getPackageName("凯凯极速视频"));
var sh = new Shell(true);
id("aw2").className("android.widget.TextView").text("小视频").findOne().parent().click();
sleep(3000);
for (i = 0; i < 200; i++) {
    swipe(500, 1500, 500, 150, 500);
    sleep(5500);
    Tap(900, 1600);
    sleep(500);
    id("mc").find().click();
    sleep(500);
    back();
    sleep(1500);
    toastLog("凯凯计数器:" + (i + 1));

}
sh.exec("am force-stop " + getPackageName("凯凯极速视频"));
sleep(1000);
sh.exit;
toastLog("【凯凯极速视频】已完成计划任务并退出APP！");