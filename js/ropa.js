
$(document).ready(function () {
    $.get('https://fakestoreapi.com/products?limit=8',

        function (data) {

            $('.album .container #product-item').empty();

            $.each(data, function (i, item) {

                var elemento = '';
                elemento += '<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">';
                elemento += '    <div class="card mb-4 box-shadow">';
                elemento += '        <div class="text-center">';
                elemento += '            <img class="card-img-top thumbnail-product" src="' + item.image + '" alt="">';
                elemento += '        </div>';
                elemento += '        <div class="card-body">';
                elemento += '            <p class="card-text">';
                elemento += '            <div class="lead text-secondary fw-bold">';
                elemento += '                <strong>$' + item.price + '</strong>';
                elemento += '            </div>';
                elemento += '            <br>';
                elemento += '            <b>' + item.title + '</b>';
                elemento += '            <br>';
                elemento += '            <b></b>';
                elemento += '            <div class="text-truncate">';
                elemento += '                ' + item.description;
                elemento += '            </div>';
                elemento += '        </div>';
                elemento += '    </div>';
                elemento += '</div>';
                $('.album .container #product-item').append(elemento);

            });
        });
});