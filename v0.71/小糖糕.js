
launchApp("小糖糕");
var sh = new Shell(true);
sleep(5500);
click("暂不领取");
sleep(1000);
Tap(320,1980);
for(i=0;i<1000;i++)
{
    sleep(4000);
    if(i%6==0)
    {
    toastLog("点赞"+(i/6+1));
    id("tv_like").find().click();
    }
    back();
    sleep(4000);
    toast("翻页"+(i+1));
    Swipe(800, 1450, 800, 346, 666);
     
    
}

sh.exec("am force-stop "+getPackageName("小糖糕"));
sleep(1000);
sh.exit;
toastLog("【小糖糕】已完成计划任务并退出APP！");
