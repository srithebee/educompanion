// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const quickLinksButton = document.getElementById('quick-links-button');
  const quickLinksDropdown = document.getElementById('quick-links-dropdown');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      const icon = mobileMenuButton.querySelector('svg');
      if (icon) {
        icon.classList.toggle('rotate-90');
      }
    });
  }

  // Quick Links dropdown (desktop)
  const quickLinksContainer = document.getElementById('quick-links-container');
  let dropdownTimeout = null;

  if (quickLinksContainer && quickLinksDropdown) {
    // Show dropdown on mouse enter (with immediate show)
    quickLinksContainer.addEventListener('mouseenter', function() {
      // Clear any pending hide timeout
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
        dropdownTimeout = null;
      }
      quickLinksDropdown.classList.remove('hidden');
    });

    // Hide dropdown on mouse leave (with delay)
    quickLinksContainer.addEventListener('mouseleave', function() {
      dropdownTimeout = setTimeout(function() {
        quickLinksDropdown.classList.add('hidden');
        dropdownTimeout = null;
      }, 175); // 175ms delay
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (mobileMenu && !mobileMenu.contains(event.target) && 
        mobileMenuButton && !mobileMenuButton.contains(event.target)) {
      mobileMenu.classList.add('hidden');
    }
  });
});




