launchApp("想看资讯");
var sh = new Shell(true);
sleep(4000);
click("跳过");
sleep(1000);
click("视频");
sleep(1000);
Tap(500,500);
sleep(1000);
Tap(500,1800);
for (var i= 0; i<90; i++) 
{
sleep(59*1000);
swipe(500,1700,500,1200,500);
id("fudai_icon").find().click();
sleep(1000);
id("iv_close").find().click();
toastLog("计数"+(i+1));
sleep(1000);
Tap(500,1800);
}
sh.exec("am force-stop "+getPackageName("想看资讯"));
sleep(1000);
sh.exit;
toastLog("【想看资讯】已完成计划任务并退出APP！");