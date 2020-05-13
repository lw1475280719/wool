//var count=rawInput("请输入刷取总视频数");
launchApp("快手极速版");
var sh = new Shell(true);
sleep(2000);
for (var i= 0; i<1000; i++) 
{ // 建立循环     
sleep(1000);
sleep(4000);
toastLog("翻页"+(i+1));

Swipe(800, 1400, 800, 226, 666);// 向上滑屏
sleep(3000);
}
sh.exec("am force-stop "+getPackageName("快手极速版"));
sleep(1000);
sh.exit;
toastLog("【快手】已完成计划任务并退出APP！");