launchApp("快7浏览器");
var sh = new Shell(true);
sleep(3500);
//click("小视频");
for(i=0;i<366;i++)
{
  //  id("iv_close").find().click();
    sleep(2000);
    if(i%6==0)
    {
    toastLog("点赞"+(i/6+1));
    id("tv_like").find().click();
    }
    if((i+1)%8==4){
        Swipe(800, 1450, 800, 346, 666);
        }
    
    sleep(9000);
    toast("翻页"+(i+1));
    Swipe(800, 1450, 800, 346, 666);
   // id("iv_close").find().click();
    
}

sh.exec("am force-stop "+getPackageName("快7浏览器"));
sleep(1000);
sh.exit;
toastLog("【快7浏览器】已完成计划任务并退出APP！");
