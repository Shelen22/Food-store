function navbar(){
    return `
    <div class="logo">
    <h3><a href="home.html"><img src="https://www.themealdb.com/images/logo-small.png"></a></h3>
    </div>
    <input type="text" placeholder="Search Meal" id = "search"?>
    <button id = "btn"><img src="https://img.icons8.com/ios-glyphs/100/000000/search--v1.png" width="30px"/></button>
    <div id="options">
      <h3><a href="latestR.html">Latest Receipe</a></h3>
      <h3><a href="random.html">Random Meals</a></h3>
      <h3><a href="#">Offers</a></h3>
      <h3><a href="#">Register</a></h3>
  </div>`
}
 
export default navbar;