//耗时30分钟
launch(getPackageName("趣赚清理"));
var sh = new Shell(true);
id("ui").waitFor();
sleep(1000);
click("小视频");
sleep(2000);
for (i = 1; i < 160; i++) {
    toast("计数器:" + i);
    sleep(8000);
    Tap(900, 1650);
    sleep(1000);
    id("ao0").find().click();
    id("lw").find().click();

    sleep(1000);
    swipe(800, 1600, 800, 266, 500);

}

sh.exec("am force-stop " + getPackageName("趣赚清理"));
sleep(1000);
sh.exit;
toastLog("【趣赚清理】已完成计划任务并退出APP！");