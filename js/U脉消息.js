//请手动完成滑块验证码,后点一下返回
//耗时10-25分钟
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
    sleep(9000);
    for (i = 0; i < 200; i++) {

        Tap(300, 1000);
        sleep(8 * 1000);
        if (className("android.widget.Button").exists()) {
            if (desc("您今日红包已领完").exists()) {
                break;
            }
            className("android.widget.Button").find().click();
            sleep(500);
            Tap(500, 1300);
            sleep(500);
            Tap(300, 1200);
            continue;
        }
        back;
        sleep(1000);
    }
}

start1 = start()
handle()
stop(start1)




