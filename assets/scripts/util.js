const util={
    ajax: function (params) {
        params = params || {};
        params.data = params.data || {};
        jsonp(params);
        // 定义jsonp方法
        function jsonp(params) {
            //创建script标签并加入到页面中
            var callbackName = params.jsonp;
            var head = document.getElementsByTagName('head')[0];
            // 设置传递给后台的回调参数名，可以自定义回调函数名
            params.data['callback'] = callbackName;
            var data = formatParams(params.data);
            var script = document.createElement('script');
            head.appendChild(script);
            //发送请求
            script.src = params.url + '?' + data;
            //创建jsonp回调函数（发送请求后会得到后台结果，然后调用该回调函数）
            window[callbackName] = function (json) {
                //json为后台返回的请求结果，后台已完成该次请求的响应，之后将创建的script移除
                head.removeChild(script);
                clearTimeout(script.timer);
                window[callbackName] = null;
                //成功响应后做的处理
                params.success && params.success(json);
            };
            //为了得知此次请求是否成功，设置超时处理
            if (params.time) {
                script.timer = setTimeout(function () {
                    window[callbackName] = null;
                    head.removeChild(script);
                    params.error && params.error({
                        message: '超时'
                    });
                }, time);
            }
        };
        //格式化参数
        function formatParams(data) {
            var arr = [];
            for (var name in data) {
                arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
            }
            // 添加一个随机数，防止缓存
            arr.push('v=' + random());
            return arr.join('&');
        }
        // 获取随机数
        function random() {
            return Math.floor(Math.random() * 10000 + 500);
        }
    },
    ws:function (url) {
        this.ws = new WebSocket(url);
        this.ws.onopen = function (e) {
            cc.log('Send Text WS was opened.',e)
        };
        this.ws.onmessage = function (e) {
            cc.log('response text msg:'+e.data);
        };
        this.ws.onclose = function () {
            cc.log('WebScoket instance closed');
        };
        this.ws.onerror = function (e) {
            cc.log('send text fired an error',e)
        };
        return this.ws;
    },
}
module.exports = util;