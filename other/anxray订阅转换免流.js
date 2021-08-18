//仅适用于AnXray
//替换当前分组所有节点websocket_Host
launch(getPackageName("AnXray"));
host = "www.189.cn";
sleep(2000);
desc("停止").find().click();
sleep(2000);
// num = desc("编辑").findOne(id("group_pager"));
for (i = 0;i<100; i++) {
    id("edit").findOnce(i).click();
    sleep(2000);
    click("WebSocket 主机");
    sleep(2000);
    className("EditText").findOne().setText(host);
    sleep(1000);
    back();
    sleep(1000);
    click("确定");
    sleep(1000);
    id("action_apply").findOne().click();
    sleep(2000);
}
toastLog("转换完成了..");