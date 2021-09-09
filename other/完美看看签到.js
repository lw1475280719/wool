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
    sleep(1000);
    click("任务");
    id("tv_sign").findOne().click();
    sleep(2000);
    id("img_close").find().click();
    sleep(3000);
    click("搜索");
    className("EditText").findOne().setText("1");
    id("tv_search").findOne().click();
    sleep(2000);
    className("EditText").findOne().setText("2");
    id("tv_search").findOne().click();
    sleep(2000);
    back();
    sleep(5000);
    click("广告");
    sleep(8000);
    className("android.widget.ImageView").findOne().click();
    sleep(2000);
    back();

}

start1 = start()
handle()
stop(start1)

