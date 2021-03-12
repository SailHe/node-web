$(() => {
    $('#testInfo').text("此索引页面基于ejs, 采用服务端渲染，上方Demo按照时间线排列,顶部为最新，您可以点击任意链接进行查看，祝您愉快!");

    console.log("b-index.js: Dom加载完成!");

    $.ajax({
        type: 'post',
        dataType: 'json',
        async: true,
        data: {
            fileName: "JavaScript-Add-on/playground/table_related/batch_crud/lib/station.json"
        },
        url: './api',
        success: function (result) {
            console.log("async post suc");
            console.log(result);
        },
        error: function( err ) {
            console.log('async post err');
        }
    });

    $.ajax({
            type: 'POST',
            data: {
                fileName: "JavaScript-Add-on/playground/table_related/batch_crud/lib/station.json"
            },
            url: './api',
        }).done(function(results){
            console.log('async post suc1');
            console.log(results);
        }).fail((err) => {
            console.log('async post err1');
        });
    
    // 这种思路行不通
    $.ajax({
            type: 'POST',
            url: './api/JavaScript-Add-on/playground/table_related/batch_crud/lib/station.json',
        }).done(function(results){
            console.log('async post/ suc');
            console.log(results);
        }).fail((err) => {
            console.log('async post/ err');
        });
});

