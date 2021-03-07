const {
  ResourceController,
  Action,
  model
} = require ('@onehilltech/blueprint');

/**
 * @class file
 */
module.exports = ResourceController.extend ({
  name: 'file',
  model: model("call"),
  init(){
    console.log('Initialized');
  },
  getAll(){
    return Action.extend({
      execute(req, res){
        var data;
        console.log('execute');
        this.controller.model.find((err, file)=>{
            if(err){
              console.log('An error occurred: ' + err);
            }else{
              console.log('Not error ');
              //console.log(file);
              console.log(typeof(file));
            }
            //console.log(data);
        });
        console.log(data);
        res.status(200).json({data});
      }
    });
  }
});
