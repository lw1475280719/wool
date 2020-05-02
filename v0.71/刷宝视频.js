//var count=rawInput("请输入刷取总视频数");
launchApp("刷宝短视频");
var sh = new Shell(true);
toast("开始2小时40分钟任务");
sleep(9500);
Tap(500,800);
sleep(1000);
Tap(500,500);
for (var i= 0; i<1000; i++) 
//for (var i= 0; i<300; i++) 
{    
    sleep(1000);
  //	if(i%6==0)
 // 	{
   // toastLog("点赞"+(i/6+1));
    //Tap(990,1100);
  	//}
//  if(i%30==0)
  //{
 // sleep(1000);
 // }
 // 	if(i%10==0)
 // 	{
   // toastLog("关注"+(i/10+1));
  //text("关注").find().click();
 // 	}
    sleep(4000);
    toastLog("翻页"+(i+1));
    
    Swipe(800, 1600, 800, 286, 666);
    sleep(3000);
}
sh.exec("am force-stop "+getPackageName("刷宝短视频"));
sleep(1000);
sh.exit;
toastLog("【刷宝】已完成计划任务并退出APP！");