var cookies =
{ 
  list: 
  [
    {name: "Соленое печенье с шоколадной крошкой тахини", count: 0, price : 30},
    {name: "Шоколадное печенье Жака Торреса", count: 0, price : 32},
    {name: "Шоколадное печенье с ирисками", count: 0, price : 35},
    {name: "Черничное печенье", count: 0, price : 34},
    {name: "Печенье с ревенем", count: 0, price : 33},
    {name: "Клюквенно-тыквенное печенье", count: 0, price : 30},
    {name: "Новогоднее печенье", count: 0, price : 36},
    {name: "Печенье в виде сердца", count: 0, price : 37},
    {name: "Печенье в виде мороженого", count: 0, price : 38}
  ]
};

document.addEventListener('DOMContentLoaded', function() {

    toastr.options.closeButton = true;
    toastr.options.showDuration = 300;
    toastr.options.closeDuration = 300;
    
    if (localStorage.getItem('cookies') == null) {
        localStorage.setItem('cookies', JSON.stringify(cookies));
    } 
    if (localStorage.getItem('fullPrice') == null) {
        localStorage.setItem('fullPrice', 0);
    } 

    outputIt();
    build();

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        count();
        build();
    });


    document.getElementById("buy").addEventListener("click", function() {
        localStorage.setItem('cookies', JSON.stringify(cookies));
        localStorage.setItem('fullPrice', 0);
        build();

        toastr.success("Покупка успешно совершена");         // уведомление об успешной покупке
    });

    function outputIt() {
        var temp = JSON.parse(localStorage.getItem('cookies'));
        var outputs = '';
        for(var i = 0; i < temp.list.length; i++)
        {
            var elem = '<label><p>' + temp.list[i].name + '</p></label>\n'
            + '<input id="' +  temp.list[i].name + '" type="number" min="0" value="0">\n';
            outputs += elem;
        }
        document.getElementById("menu-list").innerHTML= outputs;
    }

    function count() {
        var fullPrice = 0;
        var temp = JSON.parse(localStorage.getItem('cookies'));
        for(var i = 0; i < temp.list.length; i++)
        {
            temp.list[i].count = document.getElementById(temp.list[i].name).value;
            fullPrice += temp.list[i].price * temp.list[i].count;
        };

        localStorage.setItem('fullPrice', fullPrice);
        localStorage.setItem('cookies', JSON.stringify(temp));
    }а

    function build() {
        var temp = JSON.parse(localStorage.getItem('cookies'));
        var fullPrice = localStorage.getItem('fullPrice');
        var outputs = '<table>\n' 
        + '<tr>\n'
        + '<th>Название</th>\n'
        + '<th>Количество</th>\n'
        + '<th>Цена</th>\n'
        + '</tr>\n';
        for(var i = 0; i < temp.list.length; i++)
        {    
            if (temp.list[i].count > 0) {
                var elem = '<tr>\n'
                + '<th>' + temp.list[i].name +'</th>\n'
                + '<th>' + temp.list[i].count +'</th>\n'
                + '<th>' + temp.list[i].price * temp.list[i].count +'</th>\n'
                + '</tr>\n';
                outputs += elem;
            }
        };
        outputs += '</table>\n';
        outputs += '<p> Полная цена :' + fullPrice + '</p>';
        document.getElementById("table").innerHTML= outputs;

        elems = document.getElementsByTagName('table');
        for (var i = 0; i< elems.length; i++) {
            elems[i].style.textAlign = "center";
        }
        //document.getElementById("table").style.textAlign = "center";

        elems = document.getElementsByTagName('th');
        for (var i = 0; i< elems.length; i++) {
            elems[i].classList.add('buy-table-item');
        }
    }
});


