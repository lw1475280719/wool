//耗时30分钟
launch(getPackageName("新品头条"));
var sh = new Shell(true);
id("rb_main").findOne().click();
sleep(1111);
click("推荐");
sleep(1111);
for (i = 0; i < 603; i++) {
    Tap(500, 750);
    for (j = 0; j < 16; j++) {
        swipe(500, 1500, 500, 350, 500);
        sleep(1500);
        click("立即领取");
        swipe(500, 350, 500, 1500, 500);
        sleep(1500);
    }
    id("ib_to_back").findOne().click();
    sleep(1000);
    swipe(500, 1023, 500, 223, 500);
}

sh.exec("am force-stop " + getPackageName("新品头条"));
sleep(1000);
sh.exit;
toastLog("【新品头条】已完成计划任务并退出APP！");