//耗时10分钟
launchApp("火山极速版");
var sh = new Shell(true);
sleep(6000);
id("xc").find().click();
sleep(1000);
for(i=0;i<20;i++){
    text("领100金币").find().click();
    sleep(27*1000);
    text("关闭广告").find().click();
    sleep(1000);
    id("sp").find().click();
    toastLog("计数器："+(i+1));
    sleep(1000);
}
sh.exec("am force-stop "+getPackageName("火山极速版"));
sleep(1000);
sh.exit;
toastLog("【火山极速版】已完成计划任务并退出APP！");