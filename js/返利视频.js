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
click("边看火山热门视频边赚钱");
for (var i= 1; i<=205; i++)
{
    sleep(10000);
    swipe(800,1600,800,286,666);
    toastLog("当前进度："+i+"/205");
}

sh.exec("am force-stop "+getPackageName("返利"));
sleep(1000);
sh.exit;
toastLog("【返利视频】已完成计划任务并退出APP！");