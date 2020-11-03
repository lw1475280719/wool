//耗时30分钟
launchApp("快音");
var sh = new Shell(true);
text("首页").waitFor();
click("首页");
 for(i=0;i<170;i++){  
     sleep(2000); 
     id("nextClick").find().click()
     sleep(8*1000);
     }
sh.exec("am force-stop "+getPackageName("快音"));
sleep(1000);
sh.exit;
toastLog("【快音】已完成计划任务并退出APP！");