//耗时1小时
launch(getPackageName("贝壳赚"));
var sh = new Shell(true);
sleep(10*1000);
if(text("立即提现").exists()){
    text("立即提现").waitFor();
    text("立即提现").find().click();
}else{
    text("IKhfxJ5bxI9dDEfXvNwMfSu+J55SRfkPX+AphjYQHXRxYfAAAAAElFTkSuQmCC").findOne().parent().click();
}
sleep(1000);
text("0.3").findOne().parent().parent().click();
sleep(1000);
for(i=0;i<300;i++){
    text("看视频提现秒到账").find().click();
    sleep(5000);
    if(className("android.widget.ImageView").exists()){
        back();
    }else if(id("tt_video_ad_close_layout").exists()){        
        id("tt_video_ad_close_layout").find().click();       
    }
    sleep(1000);
    toastLog("计数器："+(i+1));
}
sleep(50*1000);
if(className("android.widget.ImageView").exists()){
    back();
}else if(id("tt_video_ad_close_layout").exists()){        
    id("tt_video_ad_close_layout").find().click();       
}
sleep(1000);
back();
for(j=0;j<250;j++){
    // clickable(true).depth(13).find().click();
    click("收益加速");
    sleep(5000);
    if(className("android.widget.ImageView").exists()){
        back();
    }else if(id("tt_video_ad_close_layout").exists()){        
        id("tt_video_ad_close_layout").find().click();       
    }
    sleep(1000);
    toastLog("计数器："+(j+350));
}


sh.exec("am force-stop " + getPackageName("贝壳赚"));
sleep(1000);
sh.exit;
toastLog("【贝壳赚】已完成计划任务并退出APP！");