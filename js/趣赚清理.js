//耗时30分钟
launch(getPackageName("趣赚清理"));
var sh = new Shell(true);
id("atd").className("android.widget.TextView").text("小视频").findOne().parent().click();
sleep(1000);
for (i = 1; i < 160; i++) {
    toast("计数器:" + i);
    sleep(8000);
    Tap(900, 1650);
    sleep(1000);
    id("arf").find().click();
    id("mj").find().click();
    sleep(1000);
    swipe(500, 1600, 500, 266, 500);

}

sh.exec("am force-stop " + getPackageName("趣赚清理"));
sleep(1000);
sh.exit;
toastLog("【趣赚清理】已完成计划任务并退出APP！");
