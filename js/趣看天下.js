//耗时30分钟，收益
launch(getPackageName("趣看天下"));
var sh = new Shell(true);
className("android.widget.TextView").text("娱乐").waitFor();
sleep(1000);
text("娱乐").find().click();
sleep(1000);
for (i = 0; i < 40; i++) {
    sleep(1000);
    Tap(500, 380);
    for (k = 0; k < 8; k++) {
        sleep(1000);
        swipe(800, 1400, 800, 500, 500);
        if (id("img_close").exists()) {
            id("img_close").find().click();
        }
        sleep(3000);
    }
    id("img_back").find().click();
    sleep(1000);
    swipe(500, 320, 500, 1450, 300);
    toastLog("计数器：" + (i + 1));
    sleep(4000);

}
sh.exec("am force-stop " + getPackageName("趣看天下"));
sleep(1000);
sh.exit;
toastLog("【趣看天下】已完成计划任务并退出APP！");
