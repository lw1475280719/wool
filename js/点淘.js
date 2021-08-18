//耗时1小时
launch(getPackageName("点淘"));
var sh = new Shell(true);
id("homepage2_search_entry_big").waitFor();
click("视频");
sleep(2000);
for (i = 0; i < 450; i++) {
    sleep(7.5 * 1000);
    swipe(500, 1600, 500, 250, 500);
    toastLog("点淘计数器：" + (i + 1));
}
sh.exec("am force-stop " + getPackageName("点淘"));
sleep(1000);
sh.exit;
toastLog("【点淘】已完成计划任务并退出APP！");