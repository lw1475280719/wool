//耗时30分钟
launch(getPackageName("快视频赚钱极速版"));
var sh = new Shell(true);
id("frag_my_page").waitFor();
for(i=0;i<165;i++){
    sleep(9*1000);
    id("txt_coin_close").find().click();
    sleep(1000);
    swipe(500,1600,500,350,600);
    toastLog("计数器："+(i+1));
}
sh.exec("am force-stop "+getPackageName("快视频赚钱极速版"));
sleep(1000);
sh.exit;
toastLog("【快视频赚钱极速版】已完成计划任务并退出APP！");