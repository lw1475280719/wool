//耗时30分钟，收益约0.1-0.2元
launchApp("快音");
var sh = new Shell(true);
sleep(5000);
click("首页");
 for(i=0;i<150;i++){
     sleep(10*1000);
     swipe(500,1600,500,250,600);
     }
sh.exec("am force-stop "+getPackageName("快音"));
sleep(1000);
sh.exit;
toastLog("【快音】已完成计划任务并退出APP！");