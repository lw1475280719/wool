//入口：微信公众号--10秒读书极速版
//将该公众号置顶后执行脚本
launch(getPackageName("微信"));
id("fcu").waitFor();
sleep(2000);
Tap(400, 360);
id("av9").className("android.widget.TextView").text("3元秒提").findOne().parent().parent().click();
sleep(2000);
click("点击阅读，开始领钱");
sleep(2000);
Tap(200, 1000);
sleep(5000);
for (i = 0; i < 50; i++) {
    sleep(2500);
    if (className("android.view.View").text("返回抽奖").exists()) {
        break;
    }
    back();
    toastLog("10秒读书计数器：" + (i + 1));
}
home();
toastLog("【10秒读书】已完成计划任务并退出APP！");

