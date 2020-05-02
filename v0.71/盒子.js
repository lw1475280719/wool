var type=rawInput("请选择APP");
var name="欢乐盒子";
if(type!=1)
{
    name="闪电盒子"
}
launchApp(name);
var sh = new Shell(true);
sleep(3500);
Tap(1000,160);
sleep(2500);
Swipe(800, 1000, 800, 286, 666);
sleep(1000);
click("头条资讯");
sleep(1000);
for(i=0;i<2000;i++)
{
  //  Swipe(800, 306, 800, 1486, 666);
    //sleep(2000);
    Tap(400,330);
    sleep(34*1000);
    Tap(850,720);
    back();
    sleep(1500);
}
sh.exec("am force-stop "+getPackageName(name));
sleep(1000);
sh.exit;
toastLog("【"+name+"】已完成计划任务并退出APP！");