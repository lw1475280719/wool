//复活了  请手动完成滑块验证码
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
    className("android.widget.ImageView").clickable(true).depth(6).waitFor();
    sleep(3500);
    for (i = 0; i < 200; i++) {
        Tap(250, 250);
        sleep(1000);
        if (text("下载领红包").exists()) {
            back();
        }
        sleep(7000);
        back();
        sleep(500);
    }
}

start1 = start()
handle()
stop(start1)




