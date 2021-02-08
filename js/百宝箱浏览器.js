//耗时30分钟
launch(getPackageName("百宝箱浏览器"));
var sh = new Shell(true);
id("s2").waitFor();
id("aj0").className("android.widget.TextView").text("小视频").findOne().parent().click();
sleep(2000);
for (i = 1; i < 110; i++) {
    sleep(15 * 1000);
    Tap(900, 1650);
    sleep(500);
    id("lp").find().click();
    id("ahb").find().click();
    sleep(500);
    swipe(500, 1800, 500, 250, 600);

}

sh.exec("am force-stop " + getPackageName("百宝箱浏览器"));
sleep(1000);
sh.exit;
toastLog("【百宝箱浏览器】已完成计划任务并退出APP！");