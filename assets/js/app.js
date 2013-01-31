requirejs.config({
    // pathsオプションの設定。"module/name": "path"を指定します。拡張子（.js）は指定しません。
    paths: {
        "jquery": "lib/jquery-1.8.3.min",
        "jquery.bootstrap": "lib/bootstrap.min"
    },
    // shimオプションの設定。モジュール間の依存関係を定義します。
    shim: {
        "jquery.bootstrap": {
            // jQueryに依存するのでpathsで設定した"module/name"を指定します。
            deps: ["jquery"]
        }
    }
});

// require(["module/name", ...], function(params){ ... });
require(["jquery", "jquery.bootstrap"], function ($) {
    $('#myModalButton').show();
});