//耗时20分钟
launchApp("返利");
var sh = new Shell(true);
id("tvName").className("android.widget.TextView").text("我的").findOne().parent().click();
sleep(2000);
swipe(800, 1450, 800, 250, 666);
Tap(900, 1130);
className("android.view.View").text("边看火山热门视频边赚钱").findOne().parent().click();
sleep(2000);
for (var i = 1; i <= 110; i++) {
    sleep(10 * 1000);
    swipe(800, 1600, 800, 286, 666);
    toastLog("返利视频当前进度：" + i + "/110");
}

sh.exec("am force-stop " + getPackageName("返利"));
sleep(1000);
sh.exit;
toastLog("【返利视频】已完成计划任务并退出APP！");
