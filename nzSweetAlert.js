var module = angular.module('nzSweetAlert', []);

module.value('nzSweetAlertDefaults', {});

module.factory('nzSwal', ['nzSweetAlertDefaults', '$q',
    function(nzSweetAlertDefaults, $q) {
        if (!window.swal) {
            console.log('Sweet Alert is not loaded!');
            return;
        }

        return service;

        function service(p1, p2, p3) {

            var deferred = $q.defer();

            var params = angular.copy(nzSweetAlertDefaults);

            if (typeof p1 !== 'object') {
                params.title = p1 ? p1 : '';
                params.text = p2 ? p2 : '';
                params.type = p3 ? p3 : null;
            } else {
                params = angular.extend(params, p1);
            }

            swal(params, function(isConfirm) {
                if (isConfirm) {
                    deferred.resolve();
                } else {
                    deferred.reject();
                }
            });

            return deferred.promise;
        }
    }
]);
