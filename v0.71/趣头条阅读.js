launch(getPackageName("趣头条"));
var sh = new Shell(true);
sleep(4000);
click("跳过广告");
sleep(2500);
click("励志");
sleep(2500);
swipe(500,320,500,1450,300);
sleep(3000);
for(i=0;i<390;i++)
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
   sleep(1800);
}
sh.exec("am force-stop "+getPackageName("趣头条"));
sleep(1000);
sh.exit;
toastLog("【趣头条阅读】已完成计划任务并退出APP！");
