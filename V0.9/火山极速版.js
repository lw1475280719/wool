// 耗时15分钟，收益
launchApp("火山极速版");
var sh = new Shell(true);
sleep(6000);
for (var i= 0; i<30; i++) 
{   
    sleep(2000);
    Swipe(800, 300, 800, 1200, 400);
    sleep(2000);
    Tap(300,300); 
    for(j=0;j<3;j++){
        sleep(1500);
        Swipe(800, 1800, 800, 300, 600);
    }
    sleep(17*1000);
    id("a3z").find().click();
    sleep(1000);
    id("rn").find().click();
    toastLog("计数器："+(i+1));
}
sh.exec("am force-stop "+getPackageName("火山极速版"));
sleep(1000);
sh.exit;
toastLog("【火山极速版】已完成计划任务并退出APP！");