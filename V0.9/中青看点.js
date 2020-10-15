//耗时1小时20分钟，收益0.3元
launch(getPackageName("中青看点"));
var sh = new Shell(true);
sleep(6000);
Tap(1010,107);
sleep(3000);
back();
sleep(2000);
click("健康");
sleep(2000);
for(i=0;i<120;i++){
    swipe(500,320,500,1450,300);
    sleep(2000);
   Tap(500,380);
   for(k=0;k<8;k++)
   {
    sleep(4000);
    swipe(800,1400,800,500,500);  
   }
   back();
   sleep(1000);
   toast("计数器"+(i+1));
}
sh.exec("am force-stop "+getPackageName("中青看点"));
sleep(1000);
sh.exit;
toastLog("【中青看点】已完成计划任务并退出APP！");