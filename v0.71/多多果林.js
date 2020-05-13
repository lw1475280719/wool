launchApp("多多果林");
var sh = new Shell(true);
sleep(2500);
id("tt_splash_skip_btn").find().click();
sleep(1000);
click("我的");
sleep(3500);
id("tt_insert_dislike_icon_img").find().click();
sleep(1000);
click("种树收益(元)");
sleep(1000);
for(i=0;i<55;i++)
{
    click("观看100次视频");
    sleep(1000);
    id("tv_item_withdraw_submit_list_2_button").find().click();
    sleep(31.5*1000);
    id("tt_video_ad_close_layout").find().click(); 
    sleep(3000);
    back();
    sleep(1000);
}
sh.exec("am force-stop "+getPackageName("多多果林"));
sleep(1000);
sh.exit;
toastLog("【多多果林】已完成计划任务并退出APP！");