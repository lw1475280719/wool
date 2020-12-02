//耗时30分钟
launch(getPackageName("趣刷领红包"));
var sh = new Shell(true);
id("frag_my_page").waitFor();
for (i = 0; i < 165; i++) {
    swipe(500, 1600, 500, 350, 600);
    sleep(9 * 1000);
    id("txt_coin_close").find().click();
    sleep(1000);
    toastLog("计数器：" + (i + 1));
}
sh.exec("am force-stop " + getPackageName("趣刷领红包"));
sleep(1000);
sh.exit;
toastLog("【趣刷领红包】已完成计划任务并退出APP！");