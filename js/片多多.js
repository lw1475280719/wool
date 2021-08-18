//耗时30分钟
launch(getPackageName("片多多"));
var sh = new Shell(true);
sleep(5000);
Tap(500, 500);
sleep(2000);
// id("y8").findOne().children().forEach(child => {
//     var target = child.findOne(id("sq"));
//     target.click();
//     });
for (i = 0; i < 6; i++) {
    swipe(500, 900, 500, 100, 500);
    sleep(5 * 60 * 1000);
}
sh.exec("am force-stop " + getPackageName("片多多"));
sleep(1000);
sh.exit;
toastLog("【片多多】已完成计划任务并退出APP！");