function save_options() {
  var spec_color = document.getElementById('spec_color').checked;
  var relax_is = document.getElementById('relax_is').checked;
  var relax_route = document.getElementById('relax_route').checked;
  browser.storage.sync.set({
    spec_color: spec_color,
    relax_is: relax_is,
    relax_route: relax_route
  }).then(function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  browser.storage.sync.get({
    spec_color: false,
    relax_is: false,
    relax_route: false
  }).then(function(items) {
    document.getElementById('spec_color').checked = items.spec_color;
    document.getElementById('relax_is').checked = items.relax_is;
    document.getElementById('relax_route').checked = items.relax_route;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('form').addEventListener('submit', save_options);