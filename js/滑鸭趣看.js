//耗时30分钟
//APP下载地址：http://e.qtread.cn/r?p=RrZ
APP_name = "滑鸭趣看"

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
    id("img_close").findOne().click();
    sleep(3000);
    for (i = 0; i < 999; i++) {
        // if (text("去赚钱").exists()) {
        //     click("去赚钱");
        // }
        click("广告");
        sleep(6000);
        if (text("请稍后").exists()) {
            sleep(121 * 1000);
            swipe(500, 250, 500, 1600, 500);
        }
        if (text("已完成").exists()
            && id("ll_wallet").exists()) {
            break;
        }
        if (!id("ll_wallet").exists()) {
            back();
            sleep(1000);
            className("android.widget.ImageView").find().click();
            sleep(1000);
            id("tt_video_ad_close_layout").find().click();
            sleep(1000);
        }


    }


}

start1 = start()
handle()
stop(start1)


