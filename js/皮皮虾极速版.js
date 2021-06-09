//耗时40分钟
launch(getPackageName("皮皮虾极速版"));
var sh = new Shell(true);
id("adr").waitFor();
sleep(2000);
back();
for (i = 0; i < 300; i++) {
    swipe(500, 1600, 500, 250, 500);
    sleep(7000);
    toastLog("计数器：" + (i + 1));
}
sh.exec("am force-stop " + getPackageName("皮皮虾极速版"));
sleep(1000);
sh.exit;
toastLog("【皮皮虾极速版】已完成计划任务并退出APP！");