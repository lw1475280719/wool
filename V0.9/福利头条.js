//耗时30分钟，收益约0.1元
launch(getPackageName("福利头条"));
var sh = new Shell(true);
sleep(10*1000);
// click("跳过广告");
Tap(500,1207);
sleep(2000);
back();
sleep(1000);
click("情感");
sleep(2000);
for(i=0;i<40;i++)
{
   Tap(300,415);
   sleep(1000);
   for(k=0;k<8;k++)
   {
    swipe(800,1400,800,500,500); 
    sleep(4000);
     
   }
   Tap(911,666);
   Tap(900,730);
   sleep(1000)
   back();
   //next------
   sleep(1000);
   swipe(500,600,500,1450,300);
   toastLog("计数器："+(i+1));
   sleep(3500);
   
}
sh.exec("am force-stop "+getPackageName("福利头条"));
sleep(1000);
sh.exit;
toastLog("【福利头条】已完成计划任务并退出APP！");
