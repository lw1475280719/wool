//耗时65分钟
launchApp("火山极速版");
var sh = new Shell(true);
sleep(6000);
for (var i= 0; i<450; i++) 
{   
    sleep(8000);
    Swipe(800, 1800, 800, 300, 600);
    toastLog("计数器："+(i+1));
}
sh.exec("am force-stop "+getPackageName("火山极速版"));
sleep(1000);
sh.exit;
toastLog("【火山极速版】已完成计划任务并退出APP！");