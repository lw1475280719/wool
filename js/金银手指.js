//入口：微信收藏它(新入口)→http://rty.e-zine.top
//耗时10分钟

launch(getPackageName("微信"));
var sh = new Shell(true);
//进入微信收藏并点击
text("我").waitFor();
click("我");
sleep(1000);
Tap(500, 900);
//click("收藏");
sleep(4000);
click("http://rty.e-zine.top");
sleep(1000);
Tap(100, 250);
sleep(9000);
//开始自动阅读
for (i = 0; i < 40; i++) {
    sleep(13 * 1000);
    if (className("android.view.View").text("提现 ＞").exists()) {
        break;
    }
    back();
    sleep(2000);
}
sh.exec("am force-stop " + getPackageName("微信"));
sleep(1000);
sh.exit;
toastLog("【微信】已完成计划任务并退出APP！");