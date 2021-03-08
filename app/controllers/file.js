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
    let data = async () =>{
      try{
        return await this.model.find((err, file)=>{
          return file;
        });
      }
      catch(err){
        return err;
      }
    };
    data().then((file)=> console.log(file));
    return Action.extend({
      execute(req, res){

        console.log('test');
        let data = {};
        res.status(200).json({data});
      }
    });
  }
});
