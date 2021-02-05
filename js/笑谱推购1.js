//耗时15分钟（尽量在晚上运行，直播多）
launch(getPackageName("笑谱推购"));
var sh = new Shell(true);
className("androidx.appcompat.app.ActionBar$Tab").clickable(true).selected(true).depth(13).waitFor();
id("tabTitle").className("android.widget.TextView").text("直播").findOne().parent().parent().click();
sleep(1000);
Tap(300, 1200);
sleep(1000);
for (i = 0; i < 25; i++) {
    toastLog("计数器：" + (i + 1));
       if(id("ivClose").exists()){
        id("ivClose").find().click();
        }
    sleep(30 * 1000);
    swipe(500, 1800, 500, 150, 300);
}
sh.exec("am force-stop " + getPackageName("笑谱推购"));
sleep(1000);
sh.exit;
toastLog("【笑谱推购】已完成计划任务并退出APP！");
