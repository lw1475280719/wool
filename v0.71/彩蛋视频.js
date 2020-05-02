//var count=rawInput("请输入刷取总视频数");
launchApp("彩蛋视频");
var sh = new Shell(true);
sleep(5500);

for(i=0;i<333;i++)
{
   
    sleep(2000);
    
    sleep(6000);
    toast("翻页"+(i+1));
    Swipe(800, 1450, 800, 346, 666);
    
    
}

sh.exec("am force-stop "+getPackageName("彩蛋视频"));
sleep(1000);
sh.exit;
toastLog("【彩蛋视频】已完成计划任务并退出APP！");
