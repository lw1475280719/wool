//耗时3分钟

launchApp("燃旅视频");
var sh = new Shell(true);
text("推荐").waitFor();
sleep(2000);
Tap(100, 1700);
for (var i = 1; i <= 22; i++) {
    sleep(7000);
    swipe(800, 1500, 800, 300, 500);
}
sh.exec("am force-stop " + getPackageName("燃旅视频"));
sleep(1000);
sh.exit;
toastLog("【燃旅视频】已完成计划任务并退出APP！");
