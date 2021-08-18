//耗时5-20分钟
launch(getPackageName("U脉消息"));
var sh = new Shell(true);
sleep(5000);
className("android.widget.ImageView").clickable(true).findOne().click();
sleep(6000);
for (i = 0; i < 40; i++) {
    if (className("android.widget.ImageView").clickable(true).depth(14).exists()) {
        break;
    }
    sleep(26 * 1000);
    Tap(1000, 1900);
    toastLog("U脉计数器：" + (i + 1));
}
sh.exec("am force-stop " + getPackageName("U脉消息"));
sleep(1000);
sh.exit;
toastLog("【U脉消息】已完成计划任务并退出APP！");