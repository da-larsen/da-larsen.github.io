function getHashLabel() {
  var hashId = window.location.hash.slice(1);

  if (!hashId) {
    return '';
  }

  var target = document.getElementById(hashId);

  if (!target) {
    return hashId.replace(/-/g, ' ');
  }

  var label = target.querySelector('.category-label, .section-title');

  if (label) {
    return label.textContent.trim();
  }

  return target.textContent.trim() || hashId.replace(/-/g, ' ');
}

function trackHashView() {
  if (!window.location.hash) {
    return;
  }

  var categoryName = getHashLabel();

  // Fixed: use the required position argument and set the cvar before tracking.
  window._uxa.push(["setCustomVariable", 1, "PageType", categoryName]);
  // Fixed: trackPageview must be sent as an array command, not an object payload.
  _uxa.push(["trackPageview"]);
}

window.addEventListener('hashchange', trackHashView);
trackHashView();