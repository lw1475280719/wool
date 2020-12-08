//耗时30分钟
launch(getPackageName("掌上计步"));
var sh = new Shell(true);
id("channel").waitFor();
id("channel").find().click();
sleep(1000);
id("weblook").find().click();
sleep(1000);
id("video").find().click();
sleep(3000);
Tap(500,500);
for (i = 1; i < 85; i++) {
    sleep(20*1000);
    swipe(800, 1600, 800, 266, 500);

}

sh.exec("am force-stop " + getPackageName("掌上计步"));
sleep(1000);
sh.exit;
toastLog("【掌上计步】已完成计划任务并退出APP！");