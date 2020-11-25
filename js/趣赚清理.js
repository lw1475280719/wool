//耗时1小时30分钟
launch(getPackageName("趣赚清理"));
var sh = new Shell(true);
id("ta").waitFor();
sleep(1000);
click("小视频");
sleep(2000);
for(i=1;i<500;i++){
    toast("计数器:"+i);
    sleep(8000);
    Tap(900,1666); 
    sleep(1000);
    id("ait").find().click();
    if(id("lr").exists()){
        id("ly").find().click();  
    }
    sleep(1000);
    swipe(800,1600,800,266,500); 
    
}

sh.exec("am force-stop "+getPackageName("趣赚清理"));
sleep(1000);
sh.exit;
toastLog("【趣赚清理】已完成计划任务并退出APP！");