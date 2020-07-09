//var count=rawInput("请输入视频条数");
launch(getPackageName("趣头条"));
var sh = new Shell(true);
sleep(6000);
click("跳过广告");
sleep(3500);
click("小视频");
sleep(600);
//Swipe(800, 1600, 800, 286, 666);
//Swipe(800, 1600, 800, 286, 666);
sleep(1000);
for(i=0;i<25;i++)
{
    
    for(k=0;k<9;k++)
    {
        
        Swipe(800, 1600, 800, 286, 666);
    }
    sleep(26*1000);
}
sleep(1000);

sh.exec("am force-stop "+getPackageName("趣头条"));
sleep(1000);
sh.exit;
toastLog("【趣头条视频】已完成计划任务并退出APP！");