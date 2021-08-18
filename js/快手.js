//耗时3小时

launch(getPackageName("快手极速版"));
var sh = new Shell(true);
id("sidebar_top_area").waitFor();
sleep(5000);
Tap(500, 800);
for (i = 0; i < 1003; i++) {
    swipe(500, 1600, 500, 250, 600);
    sleep(2000);
    if (!id("redFloat").exists()) {
        swipe(500, 1600, 500, 250, 600);
    }
    sleep(8000);
    toastLog("快手计数器：" + (i + 1));
}
sh.exec("am force-stop " + getPackageName("快手极速版"));
sleep(1000);
sh.exit;
toastLog("【快手极速版】已完成计划任务并退出APP！");