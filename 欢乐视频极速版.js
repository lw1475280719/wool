//耗时30分钟
APP_name = "欢乐视频极速版"
launch(getPackageName(APP_name));
var sh = new Shell(true);
id("indicator_title").className("android.widget.TextView").text("推荐").waitFor();
click("小视频");
sleep(2000);
for (i = 0; i < 233; i++) {
    swipe(500, 1600, 500, 250, 500);
    sleep(7.5 * 1000);
    if (id("cancel_action").exists()) {
        id("cancel_action").find().click();
    }
    if (id("cancel_action_f").exists()) {
        id("cancel_action_f").find().click();
    }

    toastLog(APP_name + "计数器：" + (i + 1));
}

id("fuife").waitFor();

sh.exec("am force-stop " + getPackageName(APP_name));
sleep(1000);
sh.exit;
toastLog("【" + APP_name + "】已完成计划任务并退出APP！");