//耗时1小时
launch(getPackageName("点淘"));
var sh = new Shell(true);
className("android.widget.RelativeLayout").clickable(true).selected(true).waitFor();
Tap(700, 200);
sleep(2000);
for (i = 0; i < 222; i++) {
    sleep(15 * 1000);
    swipe(500, 1600, 500, 250, 500);
    toastLog("计数器：" + (i + 1));
}
sh.exec("am force-stop " + getPackageName("点淘"));
sleep(1000);
sh.exit;
toastLog("【点淘】已完成计划任务并退出APP！");