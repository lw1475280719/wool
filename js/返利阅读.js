//耗时40分钟

launchApp("返利");
var sh = new Shell(true);
sleep(6000);
id("splash_skip").find().click();
sleep(2000);
back();
sleep(2000);
Tap(540, 1030);
desc("去赚钱").findOne().click();
sleep(5000);
for (var i = 1; i <= 34; i++) {
    Tap(245, 450);
    sleep(65 * 1000);
    id("iv_left").find().click();
    sleep(1000);
    swipe(800, 450, 800, 1450, 666);
    sleep(3000);
    toastLog("当前进度：" + i * 2 + "/34");
}
sh.exec("am force-stop " + getPackageName("返利"));
sleep(1000);
sh.exit;
toastLog("【返利阅读】已完成计划任务并退出APP！");