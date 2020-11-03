//耗时3小时
launch(getPackageName("快手极速版"));
var sh = new Shell(true);
id("sidebar_top_area").waitFor();
Tap(500,800);
for(i=0;i<1003;i++){
    swipe(500,1600,500,250,600);
    sleep(10*1000);
    toastLog("计数器："+(i+1));
}
sh.exec("am force-stop "+getPackageName("快手极速版"));
sleep(1000);
sh.exit;
toastLog("【快手极速版】已完成计划任务并退出APP！");