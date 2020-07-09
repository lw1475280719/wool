launchApp("快音");
var sh = new Shell(true);
sleep(5000);
click("视频");
for (var i= 0; i<60; i++) 
{    
    sleep(25*1000);
    toastLog("翻页"+(i+1));
    Swipe(800, 1600, 800, 286, 666);
}
sh.exec("am force-stop "+getPackageName("快音"));
sleep(1000);
sh.exit;
toastLog("【快音】已完成计划任务并退出APP！");