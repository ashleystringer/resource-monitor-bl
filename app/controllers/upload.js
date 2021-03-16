const {
  Controller,
  Action, //SingleFileUploadAction
  SingleFileUploadAction,
  model
} = require ('@onehilltech/blueprint');
const fs = require('fs'); 
/**
 * @class upload
 */
module.exports = Controller.extend ({
  Call: model('call'),
  Program: model('program'),
  Thread: model('thread'),
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

        let file_json = JSON.parse(file_str);
        console.log(file_json.data);

        return this.controller.Call.collection.insertMany(
          file_json.data
        )
        .then(program =>{
          console.log("Operation successful");
          return res.status(200).json({file_json});
        })
        .catch(err =>{
          console.log("err: " + err);
          return res.status(500).json({"error": err});
        })

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
