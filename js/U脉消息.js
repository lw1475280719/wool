//第一次使用请切换到“卡片模式”
//耗时5-20分钟
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
    Tap(500, 900);
    sleep(6000);
    for (i = 0; i < 99; i++) {
        if(className("android.widget.ImageView").desc("我的收藏").exists()){
            break;
        }
        sleep(26 * 1000);
        Tap(1000, 1900);
        toastLog(APP_name + "计数器：" + (i + 1));
    }
}

start1 = start()
handle()
stop(start1)




