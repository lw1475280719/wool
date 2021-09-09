//耗时5-8分钟
APP_name = "雇客"
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
    id("getRedEnvelopeImg").findOne().click();
    sleep(2200);
    for(i=0;i<999;i++){
        id("getRedEnvelope").find().click();
        sleep(7*1000);
        back();
        sleep(1000);
        className("android.widget.ImageView").find().click();
        sleep(1000);
        id("tt_video_ad_close_layout").find().click();
        sleep(1000);
        if(text("已领取").exists()){
            break;
        }
    }
}
start1=start()
handle()
stop(start1)