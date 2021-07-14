//耗时30分钟
launch(getPackageName("苗苗视频极速版"));
var sh = new Shell(true);
id("asm").className("android.widget.TextView").text("小视频").findOne().parent().click();
sleep(3000);
for (i = 0; i < 200; i++) {
    swipe(500, 1500, 500, 150, 500);
    sleep(5500);
    Tap(900, 1600);
    sleep(1500);
    id("kr").find().click();
    sleep(1000);
    toastLog("苗苗计数器:" + (i + 1));

}
sh.exec("am force-stop " + getPackageName("苗苗视频极速版"));
sleep(1000);
sh.exit;
toastLog("【苗苗视频极速版】已完成计划任务并退出APP！");