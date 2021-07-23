//耗时1小时30分钟
launchApp("刷宝短视频");
var sh = new Shell(true);
text("推荐").waitFor();
sleep(2000);
Tap(800, 1200);
for (var i = 0; i < 575; i++) {
    id("imgClose").find().click();
    id("iv_close").find().click();
    sleep(2000);
    id("btn_close").find().click();
    //Tap(100, 233);
    sleep(6000);
    //back();
    sleep(1000);
    toastLog("刷宝计数器：" + (i + 1));
    Swipe(800, 900, 800, 286, 300);
}
sh.exec("am force-stop " + getPackageName("刷宝短视频"));
sleep(1000);
sh.exit;
toastLog("【刷宝】已完成计划任务并退出APP！");