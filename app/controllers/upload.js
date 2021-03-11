const {
  Controller,
  Action, //SingleFileUploadAction
  SingleFileUploadAction,
  model
} = require ('@onehilltech/blueprint');
const multer = require('multer');
/**
 * @class upload
 */
module.exports = Controller.extend ({
  init(){
    console.log('init');
  },
  upload(){
    return SingleFileUploadAction.extend({ 
      name: 'file',
      onUploadComplete(req, res){
        console.log("....");
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        console.log(req.body);
        //multer()
        return this.Call.create({})
        .then(program =>{

        })
      }
    });
  },
  option(){
    return Action.extend({
      name: 'file',
      execute(req, res){
        console.log('option()');
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        res.header("Access-Control-Allow-Headers", "content-type, cache-control, x-requested-with");
      }
    });
  }
});
