

document.addEventListener('DOMContentLoaded', function() {

    toastr.options.closeButton = true;
    toastr.options.showDuration = 300;
    toastr.options.closeDuration = 300;

    var left_border = 0;
    var right_border = 101;
    

    function filter(comments) {
        res = Array();
        for(var i = 0; i < comments.length; i++)
        {
            if (comments[i].id > left_border && comments[i].id < right_border) {
                res.push(comments[i]);
            }
        };
        left_border += 100;
        right_border += 100;
        return res;
    }

    async function connect() {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const commentsJson = await response.json();
        var comments = commentsJson;
        await  new Promise(r => setTimeout(r, 2000));
        var res = filter(comments);

        if (right_border < 202) {
           throw "error";
        }
        return res;
    }  


    function show(comments) {
        var output = "\n";
        for(var i = 0; i < comments.length; i++)
        {
            temp = "<li>\n" + 
            "<p>"+ comments[i].email +"</p>\n" + 
            "<p>" + comments[i].body + "</p>\n"+
            "</li></br>" ;
            output += temp;  
        };
        document.getElementById('comments').innerHTML = output;
    }

    connect()
    .catch(() => {
        toastr.error("⚠ Что-то пошло не так"); // уведомление об ошибке
    })    
    .then(comments => {
        document.getElementById("preloader").style.display = "none";
        show(comments);
    });

    document.getElementById('next').addEventListener("click", function() {
        document.getElementById('comments').innerHTML = "";
        document.getElementById("preloader").style.display = "block";

        connect()
        .catch(() => {
            toastr.error("⚠ Что-то пошло не так") // уведомление об ошибке
        })    
        .then(comments => {
            document.getElementById("preloader").style.display = "none";
            show(comments);
        })
    })
    .catch(err => alert(err));

});

