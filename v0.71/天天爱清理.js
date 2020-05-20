launchApp("天天爱清理");
var sh = new Shell(true);
sleep(2000);
text("暂不领取").find().click();
sleep(1000);
click("视频");
sleep(1000);
for (var i= 0; i<1000; i++) 
{ // 建立循环     
sleep(1000);
sleep(4000);
toastLog("翻页"+(i+1));
back();
Swipe(800, 1400, 800, 226, 666);
toastLog("当前进度："+i);
sleep(3000);
}
sh.exec("am force-stop "+getPackageName("天天爱清理"));
sleep(1000);
sh.exit;
toastLog("【天天爱清理】已完成计划任务并退出APP！");