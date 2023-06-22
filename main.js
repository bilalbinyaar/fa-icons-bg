const wrapper = document.getElementById('theme');

theme.addEventListener('change', function(e) {
  if(e.target.checked) {
    document.body.classList.toggle("litemode");
  }
  else{
    document.body.classList.remove("litemode");
  }
})