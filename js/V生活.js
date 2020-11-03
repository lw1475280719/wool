//耗时30分钟
launchApp("V生活");
var sh = new Shell(true);
sleep(13000);
for(i=0;i<2;i++){
    sleep(1000);
    click(540,1990);
}
sleep(1000);
id("tv_change_brush_times").find().click();
sleep(1000);
id("tv_sure").find().click();
sleep(1000);
for(i=0;i<288;i++){
    text("去试试").find().click();
    text("立即播放").find().click();
    sleep(5*1000);
    text("下次再说").find().click();
    sleep(1000);
    toastLog("计数器："+(i+1));
}
sh.exec("am force-stop "+getPackageName("V生活"));
sleep(1000);
sh.exit;
toastLog("【V生活】已完成计划任务并退出APP！");