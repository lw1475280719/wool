//耗时40分钟
launchApp("返利");
var sh = new Shell(true);
id("tvName").className("android.widget.TextView").text("我的").findOne().parent().click();
sleep(2000);
swipe(800, 1450, 800, 250, 666);
Tap(900, 1130);
sleep(2000);
swipe(800, 1450, 800, 250, 666);
desc("去赚钱").findOne().click();
sleep(5000);
for (var i = 1; i <= 33; i++) {
    Tap(245, 500);
    sleep(63 * 1000);
    id("iv_left").find().click();
    sleep(1000);
    swipe(800, 450, 800, 1450, 506);
    sleep(4000);
    toastLog("返利阅读当前进度：" + (i / 33 * 100).toFixed(2) + "%");
}
sh.exec("am force-stop " + getPackageName("返利"));
sleep(1000);
sh.exit;
toastLog("【返利阅读】已完成计划任务并退出APP！");
