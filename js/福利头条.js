//耗时30分钟，收益：
launch(getPackageName("福利头条"));
var sh = new Shell(true);
sleep(13000);
for(i=0;i<40;i++){
   Tap(300,415);
   sleep(2000);

   for(k=0;k<8;k++){
    swipe(800,1400,800,500,500); 
    sleep(4000); 
    if(id("guide_title").exists()){
      Tap(900,720);
      }   
   }

   toastLog("计数器："+(i+1));
   id("img_close").find().click();
   sleep(1000)
   swipe(800,500,800,1400,500); 
   sleep(2000);
   
}
sh.exec("am force-stop "+getPackageName("福利头条"));
sleep(1000);
sh.exit;
toastLog("【福利头条】已完成计划任务并退出APP！");
