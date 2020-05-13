
launchApp("小糖糕");
var sh = new Shell(true);
sleep(3500);
id("main_bottom_tab_vidoe").find().click();
for(i=0;i<1000;i++)
{
   // id("iv_close").find().click();
    sleep(2000);
    if(i%6==0)
    {
    toastLog("点赞"+(i/6+1));
    id("tv_like").find().click();
    }
    
    sleep(6000);
    toast("翻页"+(i+1));
    Swipe(800, 1450, 800, 346, 666);
 //   id("iv_close").find().click();
    
}

sh.exec("am force-stop "+getPackageName("小糖糕"));
sleep(1000);
sh.exit;
toastLog("【小糖糕】已完成计划任务并退出APP！");
