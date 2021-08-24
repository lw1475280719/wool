//耗时30分钟
for (i = 0; i < 2; i++) {
    home();
    sleep(1000);
}
text("友趣vlog").waitFor();
text("友趣vlog").find().click();
id("dy").waitFor();
sleep(12000);
Tap(55, 100);
toastLog("start");
for (i = 1; i < 200; i++) {
    if (i % 6 != 0) {
        toastLog("友趣计数器：" + i);
        sleep(4000);
        Tap(988, 1020);
        sleep(5000);
        swipe(800, 1200, 800, 386, 500);
    } else {
        sleep(2000);
        swipe(800, 1200, 800, 386, 500);
    }

}