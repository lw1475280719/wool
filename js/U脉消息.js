//耗时10分钟
APP_name = "U脉消息"

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
    className("android.widget.ImageView").clickable(true).depth(6).waitFor();
    sleep(3500);
    for (i = 0; i < 200; i++) {
        sleep(2500);
        Tap(100, 350);
        sleep(8000);
        className("android.view.View").desc("关闭").find().click();
        back();
        sleep(500);
    }
}

start1 = start()
handle()
stop(start1)