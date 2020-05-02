launchApp("闪鸭短视频");
var sh = new Shell(true);
sleep(5500);
Tap(1000,120);
for (i= 0; i<1000; i++) 
{ 
sleep(9*1000);
if((i-4)%5==0){
    Tap(970,320);
    sleep(3000);
    Tap(918,710);
        }
Swipe(800, 1400, 800, 226, 666);
sleep(1000);
}
sh.exec("am force-stop "+getPackageName("闪鸭短视频"));
sleep(1000);
sh.exit;