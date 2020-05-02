//var count=rawInput("请输入刷取总视频数");
launchApp("淘元素");
var sh = new Shell(true);
sleep(3000);
Tap(990,86);
sleep(1000);
Tap(950,1550);
sleep(1500);
for (var i= 0; i<25; i++) 
{    
sleep(31*1000);
id("tt_video_ad_close_layout").find().click();
    sleep(3000);
    click("继续赚能量");
}
sh.exec("am force-stop "+getPackageName("淘元素"));
sleep(1000);
sh.exit;
toastLog("【淘元素】已完成计划任务并退出APP！");