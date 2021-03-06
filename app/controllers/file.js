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
  model: model("person"),
  init(){
    console.log('Initialized');
  },
  getAll(){
    return Action.extend({
      execute(req, res){
        console.log('execute');
        this.controller.model.find((err)=>{
            if(err){
              console.log('An error occurred: ' + err);
            }
            res.status(200);
        });
      }
    });
  }
});
