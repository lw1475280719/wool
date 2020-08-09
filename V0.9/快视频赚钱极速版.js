//耗时2小时
launch(getPackageName("快视频赚钱极速版"));
var sh = new Shell(true);
sleep(5000);
Tap(982,146);
sleep(2000);
for(i=0;i<666;i++){
    sleep(10*1000);
    swipe(500,1600,500,350,600);
    toastLog("计数器："+(i+1));
}
sh.exec("am force-stop "+getPackageName("快视频赚钱极速版"));
sleep(1000);
sh.exit;
toastLog("【快视频赚钱极速版】已完成计划任务并退出APP！");