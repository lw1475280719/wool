//完美看看app签到
launch(getPackageName("完美看看"));
var sh = new Shell(true);
id("rl_search").className("android.widget.RelativeLayout").clickable(true).depth(14).waitFor();
back();
id("rl_close").find().click();
click("任务");
id("tv_sign").findOne().click();
sleep(2000);
id("img_close").find().click();
sleep(3000);
click("搜索");
className("EditText").findOne().setText("1");
id("tv_search").findOne().click();
sleep(2000);
className("EditText").findOne().setText("2");
id("tv_search").findOne().click();
sleep(2000);
back();
sleep(5000);
click("广告");
sleep(8000);
className("android.widget.ImageView").findOne().click();
sleep(2000);
back();

sh.exec("am force-stop " + getPackageName("完美看看"));
sleep(1000);
sh.exit;
toastLog("【完美看看】已完成计划任务并退出APP！");