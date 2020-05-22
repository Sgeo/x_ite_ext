function save_options() {
  var spec_color = document.getElementById('spec_color').checked;
  browser.storage.sync.set({
    spec_color: spec_color
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
    spec_color: false
  }).then(function(items) {
    document.getElementById('spec_color').checked = items.spec_color;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('form').addEventListener('submit', save_options);