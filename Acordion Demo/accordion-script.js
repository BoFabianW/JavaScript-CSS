let main = document.querySelector('.main-accordion');
let div = document.querySelectorAll('div.top-accordion');
let click = document.querySelectorAll('.click');

click.forEach(function(item) {
    item.addEventListener('click', clicked);
});

function clicked() {

    let e = this.parentNode;

    if (e.classList.contains('active')) {
        e.classList.remove('active');
    } else {
        div.forEach(function(item) {
            item.classList.remove('active');
        })
        e.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    function activation(event) { 
      var elem = event.target,
          name = elem.classList;
          if (name.contains('click')) name.addEventListener('click', clicked);	  
    }
});