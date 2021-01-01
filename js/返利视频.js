//耗时40分钟

launchApp("返利");
var sh = new Shell(true);
sleep(6000);
id("splash_skip").find().click();
sleep(2000);
back();
sleep(2000);
Tap(540, 1030);
desc("提现").clickable(true).depth(12).waitFor();
text("领取400金币").find().click();
Tap(30,1400);
for (var i = 1; i <= 210; i++) {
    sleep(10* 1000);
    swipe(800, 1600, 800, 286, 666);
    toastLog("当前进度：" + i + "/210");
}

sh.exec("am force-stop " + getPackageName("返利"));
sleep(1000);
sh.exit;
toastLog("【返利视频】已完成计划任务并退出APP！");
