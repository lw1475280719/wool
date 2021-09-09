//耗时30分钟
APP_name = "片多多"

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
    sleep(5000);
    Tap(500, 500);
    sleep(2000);
    // id("y8").findOne().children().forEach(child => {
    //     var target = child.findOne(id("sq"));
    //     target.click();
    //     });
    for (i = 0; i < 6; i++) {
        swipe(500, 900, 500, 100, 500);
        sleep(5 * 60 * 1000);
    }
}

start1 = start()
handle()
stop(start1)







