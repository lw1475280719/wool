//耗时30分钟
launch(getPackageName("趣查天气"));
var sh = new Shell(true);
id("au9").waitFor();
sleep(1000);
id("aph").className("android.widget.TextView").text("小视频").findOne().parent().click();
sleep(2000);
for (i = 1; i < 110; i++) {
    sleep(15 * 1000);
    Tap(900, 1650);
    sleep(1000);
    id("m5").find().click();
    id("an6").find().click();
    swipe(500, 1600, 500, 250, 600);

}

sh.exec("am force-stop " + getPackageName("趣查天气"));
sleep(1000);
sh.exit;
toastLog("【趣查天气】已完成计划任务并退出APP！");