//耗时40分钟
APP_name = "皮皮虾极速版"
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
    id("adq").waitFor();
    sleep(5000);
    back();
    for (i = 0; i < 300; i++) {
        swipe(500, 1600, 500, 250, 500);
        sleep(7000);
        toastLog("皮皮虾计数器：" + (i + 1));
    }
    
}
start1=start()
handle()
stop(start1)




