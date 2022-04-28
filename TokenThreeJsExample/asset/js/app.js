// 请从开者中心获取 "Client-end (Target Recognition) URL"，格式如：https://af0c1ca3b41857bd8d6b44d480601c74.cn1.crs.easyar.com:8443/search
const app = new App('Client-end (Target Recognition) URL');
// 如果使用自定义方法获取token
app.setToken({
    'crsAppId': 'e7ce3e47a8c409ae6d3bbc1d32177491',
    'token': '7pxIO7/PG16+vzbHk/HI4bTeDHNnNlOAD8wbpQThG6ohZ0Z3WaGgaHpfV+QjaE5f+DUzyGnUwLDt45kYakHN0jDXMHNXWT6FEC5ukFpIFUJzwmCL/x247T4xO8syr3OQ55rNZGyMMFbXeQCe97jHFw+VCPCDqAcrJ12LRJCgfg6ztLUODqdQTVUR1HwZVdBrpEiNqRl7LAuYBbNvoDy3ZwvlrzoBd7FS8OQk7A53bdUR1RRxDaF9uLXAjbZ+fefUvV0YctEruufo1Zr7Jq8x1w0a42CfY3DXuVSVYE//LzmTpIc0RKdBXr0BystfOF7+SkPV+heyGxihXEE8FdBy5WE+chp8fENFruvdNlXZAEx6jYqo+u9JB/gpZos9rnmrTL4R1Nvhula/I7NEMmKbckoX1Ox2++g4EX51nm+wlbjqZFvOYLkAB9aYjzjqpu7HpqZmApJSC3A6unhscgORVg==' // APIKey+APISecret生成token
});
// 如果使用EasyAR提供的集成环境
// app.useEasyAr();
// 识别成功后的回调
app.callback = (msg) => {
    console.info(msg);
    const setting = {
        model: 'asset/model/trex_v3.fbx',
        scale: 0.02,
        position: [0, 0, 0]
    };
    // 可以将 setting 作为meta上传到EasyAR的云识别，使用方法如下:
    // const setting = JSON.parse(window.atob(msg.target.meta));
    showModel(setting);
};
function showModel(setting) {
    const canvas = document.querySelector('.easyARCanvas');
    if (canvas) {
        canvas.remove();
    }
    app.show('loadingWrap');
    // ThreeJS简单使用类
    const threeHelper = new ThreeHelper();
    threeHelper.loadObject(setting, (p) => {
        const val = Math.ceil(p.loaded / p.total * 100);
        document.querySelector('#loadingPercent').innerHTML = `${val}%`;
        if (val >= 100) {
            app.hide('loadingWrap');
        }
    });
}
//# sourceMappingURL=app.js.map