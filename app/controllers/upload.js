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
        const test_file = fs.readFileSync(req.file.path);
        const test_fileStr = test_file.toString();
        console.log(test_fileStr);
        let test_fileJSON = JSON.parse(test_fileStr);
        /*console.log(test_fileJSON);
        console.log(test_fileJSON.data[0].type);
        console.log(req.file);*/
        return this.Call.insert(test_fileJSON) //.create({})
        .then(program =>{

        })
        .catch(err =>{
          console.log(err);
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
