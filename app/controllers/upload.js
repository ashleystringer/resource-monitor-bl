const {
  Controller,
  Action, //SingleFileUploadAction
  SingleFileUploadAction,
  model
} = require ('@onehilltech/blueprint');
const multer = require('multer');
const fs = require('fs'); 
/**
 * @class upload
 */
module.exports = Controller.extend ({
  Call: model('call'),
  init(){
    console.log('init');
  },
  upload(){
    
    return SingleFileUploadAction.extend({ 
      name: 'file',
      onUploadComplete(req, res){
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");

        const file = fs.readFileSync(req.file.path);
        const file_str = file.toString();
        console.log(file_str);

        let file_strJSON = JSON.parse(file_str);
        console.log(file_strJSON.data);

        /*for(var i = 0; i < file_strJSON.data.length; i++){
          console.log("i: " + i);
        }*/

        this.controller.Call.collection.insertMany(
          file_strJSON.data
        )
        .then(program =>{
          console.log("Operation successful");
          //res.status(200).json({file_strJSON});
        })
        .catch(err =>{
          console.log("err: " + err);
        })

        res.status(200).json({file_strJSON});
      }
    });
  },
  option(){
    return Action.extend({
      execute(req, res){
        console.log('option');
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        res.header("Access-Control-Allow-Headers", "content-type, cache-control, x-requested-with");
      }
    });
  }
});
