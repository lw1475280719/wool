//耗时5秒
APP_name = "商店"

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
    id("view_md_switcher").waitFor();
    click("我的");
    text("签到").findOne().click();
    id("activity_credit_main_sign_btn").findOne().click();
}

start1 = start()
handle()
stop(start1)


