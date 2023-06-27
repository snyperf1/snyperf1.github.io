function toggleSection(sectionId) {
  var section = document.getElementById('expanded-' + sectionId);
  var button = document.querySelector('.' + sectionId + ' .view-more-button');

  if (section.style.display === 'none') {
    section.style.display = 'block';
    button.innerHTML = 'View Less';
  } else {
    section.style.display = 'none';
    button.innerHTML = 'View More';
  }
}
function toggleVideoSection() {
    var videoSection = document.getElementById("video-section");
    var viewMoreButton = document.getElementsByClassName("view-more-button")[0];
    var videoIframe = document.getElementById("video-iframe");
  
    if (videoSection.style.display === "none") {
      videoSection.style.display = "block";
      viewMoreButton.textContent = "Hide Video";
      videoIframe.src = "https://www.youtube.com/embed/VIDEO_ID"; // Replace VIDEO_ID with the actual ID of your YouTube video
    } else {
      videoSection.style.display = "none";
      viewMoreButton.textContent = "Show Video";
      videoIframe.src = ""; // Reset the video source
    }
  }
  