//完成100个图文广告后还有20个视频广告
//耗时15分钟
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

function close_ad() {
    back();
    sleep(500);
    className("android.widget.ImageView").find().click();
    sleep(500);
    id("tt_video_ad_close_layout").find().click();
    sleep(500);
}

function handle() {
    className("android.widget.ImageView").clickable(true).depth(6).waitFor();
    sleep(3500);
    for (i = 0; i < 80; i++) {
        swipe(500, 220, 500, 1400, 600);
        sleep(6000);
        //close_ad();
    }
}

start1 = start()
handle()
stop(start1)




