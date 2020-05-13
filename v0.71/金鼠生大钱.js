launchApp("金鼠生大钱");
var sh = new Shell(true);
sleep(2500);
Tap(993,160);
sleep(2500);
id("tt_insert_dislike_icon_img").find().click();
sleep(1000);
Tap(990,1980);
sleep(2000);
//id("tt_insert_dislike_icon_img").find().click();
//sleep(1000);
click("金鼠收益(元)");
sleep(1000);
click("连续登录提现");
sleep(1000);

for(i=0;i<30;i++)
{
    click("看视频");
    sleep(32*1000);
    id("tt_video_ad_close_layout").find().click(); 
    id("tt_video_ad_close").find().click();
    sleep(1000);
}
sh.exec("am force-stop "+getPackageName("金鼠生大钱"));
sleep(1000);
sh.exit;
toastLog("【金鼠生大钱】已完成计划任务并退出APP！");