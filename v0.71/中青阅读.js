launchApp("中青看点");
var sh = new Shell(true);
sleep(4000);
sleep(6000);
//Tap(1000,82);
sleep(3000);
click("热点");
sleep(2500);
for(i=1;i<=25;i++)
{
    Tap(333,333);
    for(j=0;j<5;j++)
    {
    sleep(6000);
    swipe(800,1400,800,500,500);
    }
    sleep(3000);
    
    id("vm").find().click();
    sleep(1000);
    back();
    sleep(3000);
    id("nz").find().click();
    
    back();
    sleep(1000);
    swipe(800,450,800,1450,666);
    toastLog("当前进度："+i);
    sleep(2500);
}
sh.exec("am force-stop "+getPackageName("中青看点"));
sleep(1000);
sh.exit;
toastLog("【中青阅读】已完成计划任务并退出APP！");