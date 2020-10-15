//耗时2小时40分钟，收益约1元
launchApp("刷宝短视频");
var sh = new Shell(true);
sleep(5500);
Tap(500,800);
sleep(1000);
Tap(800,1200);
for (var i= 0; i<1010; i++)
{    
    sleep(2000);
    toastLog("翻页"+(i+1));
    sleep(1000);
    Tap(100,233);
    sleep(1000);
    back();
    sleep(1000);
    Swipe(800, 900, 800, 286, 336);
    sleep(4000);
}
sh.exec("am force-stop "+getPackageName("刷宝短视频"));
sleep(1000);
sh.exit;
toastLog("【刷宝】已完成计划任务并退出APP！");