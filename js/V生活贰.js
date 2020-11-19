//耗时30分钟
launchApp("V生活");
var sh = new Shell(true);
sleep(13000);
for(i=0;i<1;i++){
    sleep(1000);
    click(540,1800);
}
for(i=0;i<288;i++){
 click("视频赚");
 sleep(5000);
id("tt_video_ad_close_layout").find().click();
    sleep(1000);
    text("继续获取积分").find().click();
    text("翻倍获取积分").find().click();
    toastLog("计数器："+(i+1));
}
sh.exec("am force-stop "+getPackageName("V生活"));
sleep(1000);
sh.exit;
toastLog("【V生活】已完成计划任务并退出APP！");