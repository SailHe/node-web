$(() => {
    /*import 'APlayer/dist/APlayer.min.css';
    const ap = new APlayer(options);
    const APlayer  = require('aplayer');*/
    document.getElementById('aplayer').onload = function(e){
        e.stopPropagation();
        alert("aplayer select");
    }

    $('#testInfo').text("Dom加载完成!");

    console.log("test.js: hello world");

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

