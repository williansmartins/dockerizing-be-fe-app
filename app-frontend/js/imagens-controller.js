app.controller('ImagensController', function ($scope, $http) {

    $scope.imagens = new Object();
    $scope.albuns = new Object();
    var url = 'http://localhost:8080';

    var buscarImagens = function () {
        $http({
            method: 'GET',
            url: url + '/imagens'
        }).then(function successCallback(response) {
            $scope.imagens = response.data;
        }, function errorCallback(response) {
            console.info("deu ruim");
        });
    }

    var buscarAlbuns = function () {
        $http({
            method: 'GET',
            url: url + '/albuns'
        }).then(function successCallback(response) {
            $scope.albuns = response.data;
        }, function errorCallback(response) {
            console.info("deu ruim");
        });
    }

    $scope.remover = function (id) {
        $http({
            method: 'DELETE',
            url: url + '/imagens/' + id
        }).then(function successCallback(response) {
            $("#imagem_" + id).hide();
        }, function errorCallback(data, status, headers, config, statusText, xhrStatus) {
            console.info("deu ruim");
        });
    }


    $scope.salvar = function () {
        if ($scope.idImagem == null) {
            $http({
                method: 'POST',
                url: url + '/imagens',
                data: { 'url': $scope.url }
            }).then(function successCallback(response) {
                alert("sucesso!!"),
                    buscarImagens(),
                    $scope.url = "";
            }, function errorCallback(data, status, headers, config, statusText, xhrStatus) {
                console.info("deu ruim");
            });
        }

        else {
            $http({
                method: 'PUT',
                url: url + '/imagens/' + $scope.idImagem,
                data: { 'url': $scope.url }
            }).then(function successCallback(response) {
                alert("sucesso!!"),
                    buscarImagens(),
                    $scope.url = "";
            }, function errorCallback(data, status, headers, config, statusText, xhrStatus) {
                console.info("deu ruim");
            });
        }

    }

    $scope.editar = function (imagem) {
        console.info(imagem);
        $scope.url = imagem.url;
        $scope.idImagem=imagem.id;
    }

    var init = function () {
    buscarImagens();
    buscarAlbuns();
}

init();

});