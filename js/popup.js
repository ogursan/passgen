var defaultSettings = {
    "enabled": "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()_+",
    "len": 8,
    "amount": 3
}

$(function(){
    $('#length').val((typeof localStorage['len'] !== 'undefined') ? localStorage['len'] : defaultSettings['len']);
    $('#amount').val((typeof localStorage['amount'] !== 'undefined') ? localStorage['amount'] : defaultSettings['amount']);
    $('#enabled').val((typeof localStorage['enabled'] !== 'undefined') ? localStorage['enabled'] : defaultSettings['enabled']);

    $('#generate').click(function(){
        $('#list li').remove();
        var enabled = $('#enabled').val();
        var len = Number($('#length').val());
        var amount = Number($('#amount').val());

        localStorage['enabled'] = enabled;
        localStorage['len'] = len;
        localStorage['amount'] = amount;

        while (amount > 0) {
            var pass = generatePass(enabled, len);
            $('#list').append('<li>'+pass+'</li>');
            amount--;
        }
    });
});

function generatePass(enabled, len) {
    var pass = '';

    if (enabled.length <= 0) {
        return false;
    }

    len = Number(len);
    if (len <= 0) {
        return false;
    }

    while (len > 0) {
        var chr = enabled[getRandom(0, enabled.length - 1)];
        pass = String(pass) + String(chr);
        len--;
    }

    return pass;
}

function getRandom(min_random, max_random) {
    var range = max_random - min_random + 1;
    return Math.floor(Math.random()*range) + min_random;
}