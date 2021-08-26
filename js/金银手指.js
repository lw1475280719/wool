//入口：微信收藏它(新入口)→http://rty.e-zine.top
//耗时10分钟

launch(getPackageName("微信"));
var sh = new Shell(true);
//进入微信收藏并点击
text("我").waitFor();
click("我");
sleep(1000);
click("收藏");
sleep(1000);
click("http://rty.e-zine.top");
sleep(1000);
Tap(100, 250);
sleep(6000);
//开始自动阅读
for (i = 0; i < 40; i++) {
    sleep(13 * 1000);
    back();
    sleep(2000);
    if ("下批文章将") {
        break;
    }

}
sh.exec("am force-stop " + getPackageName("微信"));
sleep(1000);
sh.exit;
toastLog("【微信】已完成计划任务并退出APP！");