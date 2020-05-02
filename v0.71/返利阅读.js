launchApp("返利");
var sh = new Shell(true);
sleep(3000);
click("跳过");
sleep(2500);
//click("我的");
//sleep(3500);
click("签到赚钱");
//text("签到领现金 签到领现金").find().click();
sleep(4500);
click("去赚钱");
toastLog("开始刷取60条返利阅读");
sleep(1000);
for (var i= 1; i<=22; i++)
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