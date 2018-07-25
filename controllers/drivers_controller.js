


module.exports = {
  greeting(req, res){
      res.send({message:'hi there'});
  },

  create(req , res){
      console.log(req.body);
      res.send({message:'hi there'});
  }
};