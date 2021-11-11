//耗时1分钟
APP_name = "完美看看"

function start() {
    launch(getPackageName(APP_name));
    var sh = new Shell(true);
    return sh;
}

function stop(sh) {
    sh.exec("am force-stop " + getPackageName(APP_name));
    sleep(1000);
    sh.exit;
    toastLog("【" + APP_name + "】已完成计划任务并退出APP！");
}

function handle() {
    //id("rl_search").className("android.widget.RelativeLayout").clickable(true).depth(14).waitFor();
    sleep(15 * 1000);
    back();
    id("rl_close").find().click();
    sleep(3000);
    Tap(600, 1900);
    sleep(2000);
    className("android.view.View").desc("签到").find().click();
    sleep(1000);
    className("android.widget.ImageView").clickable(true).depth(8).find().click();
    sleep(2000);
    Tap(850, 1200);
    className("EditText").findOne().setText("1");
    sleep(1000);
    className("android.view.View").desc("搜索").find().click();
    sleep(2000);
    back();
    sleep(1000);
    className("EditText").find().setText("2");
    sleep(1000);
    className("android.view.View").desc("搜索").find().click();
    sleep(2000);
    back();
    back();
    sleep(5000);
    Tap(600, 1900);
    sleep(1000);
    Tap(900, 1400);
    sleep(8000);
    className("android.widget.ImageView").findOne().click();
    sleep(2000);
    back();

}

start1 = start()
handle()
stop(start1)