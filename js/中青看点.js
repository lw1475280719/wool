//耗时1小时20分钟
launch(getPackageName("中青看点"));
var sh = new Shell(true);
//text("推荐").waitFor();
sleep(9000);
id("oa").find().click();
sleep(2000);
text("健康").find().click();
sleep(3000);
for (i = 0; i < 115; i++) {
    swipe(500, 320, 500, 1450, 300);
    sleep(2000);
    Tap(500, 380);
    for (k = 0; k < 8; k++) {
        sleep(4000);
        swipe(800, 1400, 800, 500, 500);
    }
    id("nx").find().click();
    sleep(2000);
    toast("计数器" + (i + 1));
}
sh.exec("am force-stop " + getPackageName("中青看点"));
sleep(1000);
sh.exit;
toastLog("【中青看点】已完成计划任务并退出APP！");