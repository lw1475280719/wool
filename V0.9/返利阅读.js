//耗时40分钟，收益0.12元
launchApp("返利");
var sh = new Shell(true);
sleep(3500);
click("跳过");
sleep(4000);
back();
sleep(1000);
Tap(900,120);
sleep(4500);
click("去赚钱");
toastLog("开始刷取60条返利阅读");
sleep(3000);
for (var i= 1; i<=23; i++)
{
    Tap(245,450);
    sleep(98*1000);
    back();
    sleep(1000);
    swipe(800,450,800,1450,666);
    sleep(1000);
    toastLog("当前进度："+i*3+"/60");
}
sh.exec("am force-stop "+getPackageName("返利"));
sleep(1000);
sh.exit;
toastLog("【返利阅读】已完成计划任务并退出APP！");