//耗时20分钟
launch(getPackageName("欢喜浏览器"));
var sh = new Shell(true);
sleep(13 * 1000);
id("im_hide").find().click();
id("tt_insert_dislike_icon_img").find().click()
for (i = 0; i < 110; i++) {
    sleep(10 * 1000);
    if (id("im_hide").exists()) {
        id("im_hide").find().click();
    }
    swipe(500, 1600, 500, 250, 300);
    toastLog("计数器：" + (i + 1));
}


sh.exec("am force-stop " + getPackageName("欢喜浏览器"));
sleep(1000);
sh.exit;
toastLog("【欢喜浏览器】已完成计划任务并退出APP！");
