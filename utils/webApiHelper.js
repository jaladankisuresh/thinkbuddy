module.exports = {
  onResponse : function(promise, res) {
    promise.then(
    function(data){
      res.json({data});
    },
    function(err){
      console.log(err.message);
      res.status(500).send({error: err.message});
    });
  }
};
