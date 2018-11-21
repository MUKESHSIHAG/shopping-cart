$(document).ready(function() {
    $("#get-button").on('click', () => {
        $.ajax({
            url: "/products",
            contenType: 'application/json',
            success: function(res){
                var tbodyEl = $('tbody');
                console.log('res');
                tbodyEl.html('');
                res.products.forEach(function(product){
                    console.log(product);
                    tbodyEl.append('\
                    <tr>\
                        <td class="id">'+ product.id +'</td>\
                        <td><input type="text" class="name" value="'+ product.name +'"</td>\
                        <td>\
                            <button class="update-button">put/update</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    <tr>\
                    ');
                });
            }
        });
    });
});

//POST request
$('#create-form').on('submit', function(event){
    event.preventDefault();
    var createInput = $('#create-input');

    $.ajax({
        url: '/products',
        method: 'POST',
        contenType: 'application/json',
        data: JSON.stringify({name: createInput.val() }),
        success: function(res){
            console.log(res);
            createInput.val('');
            $('#get-button').click();
        }
    });
});

//update/put
$('table').on('click','.update-button', function(){
    var rowEl = $(this).closest('tr');
    var id = rowEl.find('.id').text();
    var newName = rowEl.find('.name').val();

    $.ajax({
        url: '/products/' + id,
        method: 'put',
        contenType: 'application/json',
        data: JSON.stringify({newName: newName}),
        success: function(res){
            console.log(res);
            $('#get-button').click();
        }

    });
});