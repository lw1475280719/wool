//耗时1小时
launch(getPackageName("趣头条"));
var sh = new Shell(true);
sleep(9000);
id("afk").find().click();
sleep(1000);
id("lq").find().click();
id("p").find().click();
sleep(1000);
click("健康");
sleep(4000);
swipe(500, 320, 500, 1000, 300);
sleep(2000);
for (i = 0; i < 82; i++) {
    Tap(500, 380);
    sleep(1000);
    for (k = 0; k < 8; k++) {
        swipe(800, 1400, 800, 500, 500);
        sleep(4000);
    }
    Tap(950, 1770);
    sleep(1000);
    back();
    sleep(1000);
    back();
    sleep(1000);
    swipe(500, 320, 500, 1200, 400);
    sleep(2500);

}
sh.exec("am force-stop " + getPackageName("趣头条"));
sleep(1000);
sh.exit;
toastLog("【趣头条阅读】已完成计划任务并退出APP！");

