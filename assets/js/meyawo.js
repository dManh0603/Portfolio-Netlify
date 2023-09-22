/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });

    $("#downloadButton").click(function () {
        // Create an anchor element
        var anchor = $("<a>");

        // Set the href attribute to the path of the file you want to download
        anchor.attr("href", "assets/download/CV_Nguyễn Đức Mạnh.pdf"); // Replace 'cv.pdf' with the actual file name and path

        // Set the download attribute to specify the file name seen by the user when downloading
        anchor.attr("download", "CV_Nguyễn Đức Mạnh.pdf"); // You can customize the file name here

        // Trigger a click event on the anchor element to start the download
        anchor[0].click();
    });
});

// navbar toggle
$('#nav-toggle').click(function () {
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});