# nzSweetAlert
A super lightweight, "promising" Angular wrapper for [SweetAlert](http://tristanedwards.me/sweetalert), a beautiful replacement for Javascript's "Alert".

## [Demo](http://codepen.io/tannerlinsley/pen/MYgMXK)

## Install
1. `bower install nz-sweet-alert`
2. Include files in your app
	1. [SweetAlert](http://tristanedwards.me/sweetalert) Javascript & CSS
	2. `nzSweetAlert.js`
3. include `nzSweetAlert` as a dependency (i.e. in `app.js`)
4. Inject `nzSwal` into a service, controller, etc, to use.

## Promises
Use as directed on [http://tristanedwards.me/sweetalert](http://tristanedwards.me/sweetalert), with the exception of callbacks, which now use promises!

Simply put:
```javascript
nzSwal({
  title: "Are you sure?",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: '#DD4B39',
  confirmButtonText: "Yes, do it!",
  closeOnConfirm: false
  })
  .then(function() {
    nzSwal('You did it!');
    doStuffOnConfirm();
  })
  .catch(function() {
    nzSwal('Cancelled :)');
    doStuffOnConfirm();
  });
```

## Tips
Set global SweetAlert defaults (yes, you can do that!) like so:
```javascript
window.swal.setDefaults({
    title: '',
    text: '',
    type: null,
    allowOutsideClick: false,
    showCancelButton: false,
    closeOnConfirm: true,
    closeOnCancel: true,
    confirmButtonText: 'OK',
    confirmButtonColor: '#AEDEF4',
    cancelButtonText: 'Cancel',
    imageUrl: null,
    imageSize: null,
    timer: null
  });
```

Happy Alerting!
