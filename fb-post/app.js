function cart() {
   var name = document.getElementById('username').value;  // name
   var title = document.getElementById('title').value;    // title
   var desc = document.getElementById('desc').value;      // description
   var currentDateTime = new Date().toUTCString();
   var listingContainer = document.querySelector("#listingContainer");

   // Modal HTML content
   listingContainer.innerHTML += 
   `<div class="card text-center">
  <div class="card-header">
    Name is : ${name}
  </div>
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${desc}.</p>
    <a href="https://github.com/WaqasAsif2002" class="btn btn-primary">Goto Github</a>
  </div>
  <div class="card-footer text-body-secondary">
${currentDateTime}
  </div>
</div>
   `;
  

}

