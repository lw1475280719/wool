//耗时2小时30分钟，收益0.3-1.2元
launch(getPackageName("趣头条"));
var sh = new Shell(true);
sleep(10000);
swipe(500,800,500,350,300);
sleep(1000);
click("养生");
sleep(4000);
swipe(500,320,500,1450,300);
sleep(2000);
for(i=0;i<200;i++)
{
   Tap(500,380);
   for(k=0;k<8;k++)
   {
    sleep(4000);
    swipe(800,1400,800,500,500);  
   }
  Tap(950,1800);
sleep(1000);
back();

sleep(1000);
   back();
   sleep(1600);
   swipe(500,320,500,1450,300);
   sleep(3500);
}
sh.exec("am force-stop "+getPackageName("趣头条"));
sleep(1000);
sh.exit;
toastLog("【趣头条阅读】已完成计划任务并退出APP！");
