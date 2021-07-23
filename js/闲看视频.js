//耗时90分钟
launch(getPackageName("闲看视频"));
var sh = new Shell(true);
id("navi_bar_main_layout").findOne().click();
for (i = 0; i < 600; i++) {
    sleep(8000);
    toastLog("闲看视频计数器：" + (i + 1));
    swipe(500, 1600, 500, 100, 500);
}

sh.exec("am force-stop " + getPackageName("闲看视频"));
sleep(1000);
sh.exit;
toastLog("【闲看视频】已完成计划任务并退出APP！");