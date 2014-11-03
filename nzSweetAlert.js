var module = angular.module('nzSweetAlert', []);

module.value('nzSweetAlertDefaults', {});

module.factory('nzSwal', ['nzSweetAlertDefaults', '$q',
    function(nzSweetAlertDefaults, $q) {
        if (!window.swal) {
            console.log('Sweet Alert is not loaded!');
            return;
        }

        return function(p1, p2, p3) {

            var deferred = $q.defer();

            var params;

            if (typeof p1 !== 'object') {
                params = {
                    title: p1 ? p1 : '',
                    text: p2 ? p2 : '',
                    type: p3 ? p3 : null,
                };
            } else {
                params = nzSweetAlertDefaults;
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
        };
    }
]);
