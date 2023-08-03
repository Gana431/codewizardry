 <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"></script>

    <!-- JavaScript Event Listener Script -->
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // Get all navigation links
            const navLinks = document.querySelectorAll('.nav-link');

            // Add a click event listener to each navigation link
            navLinks.forEach(function (link) {
                link.addEventListener('click', function (event) {
                    // Prevent the default link behavior (scrolling to the target)
                    event.preventDefault();

                    // Get the target section ID from the link's href attribute
                    const targetSectionID = link.getAttribute('href').substring(1);

                    // Get the target section
                    const targetSection = document.getElementById(targetSectionID);

                    // Calculate the offset to scroll to the target section
                    const offset = targetSection.getBoundingClientRect().top + window.pageYOffset;

                    // Scroll smoothly to the target section
                    window.scroll({
                        top: offset,
                        behavior: 'smooth'
                    });
                });
            });
        });
    </script>