(function() {
    alert("Hello")
})();



function countLoadTime() {
    var loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    document.querySelector('.load-time').innerHTML = "Page load time: " + loadTime + " ms";
}

window.addEventListener('load', countLoadTime); 


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu').addEventListener('mouseover', function() {
        this.style.color = 'blue';
    }); 

    document.getElementById('delivery').addEventListener('mouseover', function() {
        this.style.color = 'red';
    }); 

    document.getElementById('merch').addEventListener('mouseover', function() {
        this.style.color = 'green';
    }); 

    document.getElementById('reviews').addEventListener('mouseover', function() {
        this.style.color = 'brown';
    }); 

    document.getElementById('purchases').addEventListener('mouseover', function() {
        this.style.color = 'yellow';
    }); 

    document.getElementById('menu').addEventListener('mouseout', function() {
        this.style.color = 'blueviolet';
    }); 

    document.getElementById('delivery').addEventListener('mouseout', function() {
        this.style.color = 'blueviolet';
    }); 

    document.getElementById('merch').addEventListener('mouseout', function() {
        this.style.color = 'blueviolet';
    }); 

    document.getElementById('reviews').addEventListener('mouseout', function() {
        this.style.color = 'blueviolet';
    }); 

    document.getElementById('purchases').addEventListener('mouseout', function() {
        this.style.color = 'blueviolet';
    }); 

    (function() {
        arr = String(document.location).split('/');
        switch (arr[arr.length - 1]) {
            case 'lab1.html':
                document.getElementById('menu').style.fontWeight = 'bold';
                break;
            case 'delivery.html':
                document.getElementById('delivery').style.fontWeight = 'bold';
                break;
            case 'merch.html':
                document.getElementById('merch').style.fontWeight = 'bold';
                break; 
            case 'reviews.html':
                document.getElementById('reviews').style.fontWeight = 'bold';
                break; 
            case 'constructor.html':
                document.getElementById('purchases').style.fontWeight = 'bold';
                break;           
        }
    })();
});
