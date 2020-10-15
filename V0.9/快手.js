//耗时1小时，收益约1-1.5元
launch(getPackageName("快手极速版"));
var sh = new Shell(true);
sleep(5000);
sleep(2000);
for(i=0;i<1003;i++){
    sleep(10*1000);
    swipe(500,1600,500,250,600);
    toastLog("计数器："+(i+1));
}
sh.exec("am force-stop "+getPackageName("快手极速版"));
sleep(1000);
sh.exit;
toastLog("【快手极速版】已完成计划任务并退出APP！");