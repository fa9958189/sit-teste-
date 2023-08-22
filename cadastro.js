$(document).ready(function() {
    $("#cep").blur(function() {
        var cep = $(this).val().replace(/\D/g, '');

        if (cep != "") {
            var url = `https://viacep.com.br/ws/${cep}/json/`;

            $.get(url, function(data) {
                if (!data.erro) {
                    $("#logradouro").val(data.logradouro);
                    $("#bairro").val(data.bairro);
                    $("#cidade").val(data.localidade);
                    $("#uf").val(data.uf);
                }
            });
        }
    });
});
