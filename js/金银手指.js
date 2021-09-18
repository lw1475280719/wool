//入口：微信收藏它(新入口)→iii.zhuwentao52.top
//耗时10分钟
APP_name = "微信"
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
    //进入微信收藏并点击
    text("我").waitFor();
    click("我");
    sleep(1000);
    Tap(500, 900);
    //click("收藏");
    sleep(4000);
    click("iii.zhuwentao52.top");
    sleep(1000);
    Tap(100, 250);
    sleep(20 * 1000);
    //开始自动阅读
    for (i = 0; i < 40; i++) {
        sleep(13 * 1000);
        if (className("android.view.View").text("提现 ＞").exists()) {
            break;
        }
        back();
        sleep(2000);
    }
}

start1 = start()
handle()
stop(start1)


