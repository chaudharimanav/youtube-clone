var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}
const uploadVideo = async (file, title) => {
    console.log('Uploading video:', file, title);
   };
   
   const getVideoDetails = async (id) => {
    console.log('Retrieving video details for:', id);
   };
   
   document.getElementById('videoFile').addEventListener('change', (event) => {
    const file = event.target.files[0];
    const title = document.getElementById('videoTitle').value;
   
    if (file && title) {
       uploadVideo(file, title);
    }
   });
   
   
   (async () => {
    const videoContainer = document.getElementById('videoContainer');
   
    const videoDetails = await getVideoDetails('some-video-id');
   
   
    const videoElement = document.createElement('div');
    videoElement.className = 'video';
    videoElement.innerHTML = `
       <h3>${videoDetails.title}</h3>
       <video controls>
         <source src="${videoDetails.url}" type="video/mp4">
         Your browser does not support the video tag.
       </video>
    `;
    videoContainer.appendChild(videoElement);
   })();
   function subscribe() {
      var subscribeButton = document.querySelector('#subscribeForm button');
      var isSubscribed = subscribeButton.textContent.toLowerCase() === 'subscribed';
  
      if (isSubscribed) {
          alert('You are already subscribed.');
      } else {
          subscribeButton.textContent = 'Subscribed';
          alert('You have subscribed to Easy Tutorials!');
      }
  }