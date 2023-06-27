function CopyEmail() {
    var email = "shrinithisp@gmail.com";
    navigator.clipboard.writeText(email);
    document.getElementById("emailTooltip").innerHTML = "Copied!";
    setTimeout(function() {
        document.getElementById("emailTooltip").innerHTML = "Click to copy!";
    }, 1400); // Delay in milliseconds (1,5 second)
}

function openWebsite(url) {
    window.open(url, '_blank');
}
