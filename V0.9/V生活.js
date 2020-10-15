//耗时60分钟，收益约0.5~0.7元
launchApp("V生活");
var sh = new Shell(true);
sleep(4000);
id("tt_splash_skip_btn").find().click();
for(i=0;i<2;i++){
    sleep(1000);
    click(540,1990);
}
for(i=0;i<588;i++){
    text("去试试").find().click();
	text("立即播放").find().click();
    sleep(5*1000);
    text("下次再说").find().click();
    sleep(1000);
}
sh.exec("am force-stop "+getPackageName("V生活"));
sleep(1000);
sh.exit;
toastLog("【V生活】已完成计划任务并退出APP！");