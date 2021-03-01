//耗时30分钟
launch(getPackageName("百宝箱浏览器"));
var sh = new Shell(true);
//text("推荐").waitFor();
id("akz").className("android.widget.TextView").text("小视频").findOne().parent().click();
sleep(2000);
for (i = 1; i < 110; i++) {
    sleep(14 * 1000);
    Tap(900, 1650);
    sleep(1000);
    id("lw").find().click();
    id("aja").find().click();
    sleep(1000);
    swipe(500, 1700, 500, 250, 600);

}

sh.exec("am force-stop " + getPackageName("百宝箱浏览器"));
sleep(1000);
sh.exit;
toastLog("【百宝箱浏览器】已完成计划任务并退出APP！");
