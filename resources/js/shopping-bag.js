window.onload = function getProducts() {
  try {
    event.preventDefault;
    $.ajax({
      method: "GET",
      url: "https://shoping-bag.firebaseio.com/cart.json"
    }).done(function(data) {
      getProductController(data);
    });
  } catch (error) {
    this.console.log(error);
  }
};

function getProductController(data) {
  var theScriptHTML = $("#productList")[0].innerHTML;
  var theTemplate = Handlebars.compile(theScriptHTML);
  var contextObj = theTemplate(data);
  $("#tbody").append(contextObj);
}
