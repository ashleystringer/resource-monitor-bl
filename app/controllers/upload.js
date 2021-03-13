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
      //Call: model('call'),
      onUploadComplete(req, res){
        console.log("....");
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        const test_file = fs.readFileSync(req.file.path);
        const test_fileStr = test_file.toString();
        console.log(test_fileStr);
        let test_fileJSON = JSON.parse(test_fileStr);
        console.log(test_fileJSON.data);

        /*start_time: test_fileJSON.data[1].start, 
              end_time: test_fileJSON.data[1].end, 
              method_name: test_fileJSON.data[1].name, 
              resource_type: test_fileJSON.data[1].type*/
        return this.controller.Call.collection.insert( //this.controller.Call.collection.insert
          test_fileJSON.data
        )
        .then(program =>{
          console.log("Operation successful");
        })
        .catch(err =>{
          console.log("err: " + err);
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
        res.header("Content-Type", "multipart/form-data");
      }
    });
  }
});
