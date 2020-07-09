launchApp("返利");
var sh = new Shell(true);
sleep(2500);
click("跳过");
sleep(1000);
sleep(2500);
//click("签到赚钱");
Tap(535,1010);
sleep(4500);
click("边看火山热门视频边赚钱");
toastLog("开始刷取200条返利视频");
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