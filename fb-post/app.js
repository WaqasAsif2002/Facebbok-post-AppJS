function cart() {
   var name = document.getElementById('username');  // name
   var title = document.getElementById('title');    // title
   var desc = document.getElementById('desc');      // description
   var currentDateTime = new Date().toUTCString();
   var listingContainer = document.querySelector("#listingContainer");

   // Modal HTML content
   listingContainer.innerHTML += 
   `<div class="card text-center">
  <div class="card-header">
    Name is : ${name.value}
  </div>
  <div class="card-body">
    <h5 class="card-title">${title.value}</h5>
    <p class="card-text">${desc.value}.</p>
    <a href="https://github.com/WaqasAsif2002" class="btn btn-primary">Goto Github</a>
  </div>
  <div class="card-footer text-body-secondary">
${currentDateTime}
</div>
</div>
   `;
   name.value =''
   title.value =''
   desc.value =''
  
   
}

function cart() {
   var name = document.getElementById('username');  // name
   var title = document.getElementById('title');    // title
   var desc = document.getElementById('desc');      // description
   var currentDateTime = new Date().toUTCString();
   var listingContainer = document.querySelector("#listingContainer");

   // Modal HTML content
   listingContainer.innerHTML += 
   `<div class="card text-center">
  <div class="card-header">
    Name is : ${name.value}
  </div>
  <div class="card-body">
    <h5 class="card-title">${title.value}</h5>
    <p class="card-text">${desc.value}.</p>
    <a href="https://github.com/WaqasAsif2002" class="btn btn-primary">Goto Github</a>
  </div>
  <div class="card-footer text-body-secondary">
${currentDateTime}
</div>
</div>
   `;
   name.value =''
   title.value =''
   desc.value =''
  
   
}
