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
    /*let data = async () =>{
      try{
        return await this.model.find((err, file)=>{
          return file;
        });
      }
      catch(err){
        return err;
      }
    };*/
    //data().then((file)=> console.log(file));
    return Action.extend({
      execute(req, res){
        let data = {};
        this.controller.model.find()
        .exec()
        .then(file =>{
          //console.log(file);
          //res.status(200).json(data);
        })
        .catch(err =>{
          /*res.status(500).json({
            error: err
          });*/
        });
        res.status(200).send({data: data});
      }
    });
  }
});
