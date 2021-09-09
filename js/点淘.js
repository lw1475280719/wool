//耗时1小时20分钟
APP_name = "点淘"
function start(){
    launch(getPackageName(APP_name));
    var sh = new Shell(true);
    return sh;
}
function stop(sh){
    sh.exec("am force-stop " + getPackageName(APP_name));
    sleep(1000);
    sh.exit;
    toastLog("【" + APP_name + "】已完成计划任务并退出APP！");
}
function handle(){
    id("tl_homepage2_search_entry_big").waitFor();
    click("视频");
    sleep(2000);
    for (i = 0; i < 600; i++) {
        sleep(7.5 * 1000);
        swipe(500, 1600, 500, 250, 500);
        toastLog(APP_name+"计数器：" + (i + 1));
    }
    
}
start1=start()
handle()
stop(start1)


