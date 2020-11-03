//耗时40分钟
launchApp("返利");
var sh = new Shell(true);
id("splash_skip").waitFor();
id("splash_skip").find().click();
sleep(2000);
back();
sleep(2000);
Tap(540,1030);
sleep(7000);
back();
sleep(1000);
click("去赚钱");
sleep(5000);
for (var i= 1; i<=25; i++){
    Tap(245,450);
    sleep(85*1000);
    back();
    sleep(1000);
    swipe(800,450,800,1450,666);
    sleep(5000);
    toastLog("当前进度："+i*3+"/60");
}
sh.exec("am force-stop "+getPackageName("返利"));
sleep(1000);
sh.exit;
toastLog("【返利阅读】已完成计划任务并退出APP！");