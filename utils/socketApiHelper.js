module.exports = {
  onSuccess : function() {
    return function(data) {
      console.log(JSON.stringfy(data));
    }
  },
  onError : function() {
    return function(error) {
      console.log(error.message);
    }
  }
}
