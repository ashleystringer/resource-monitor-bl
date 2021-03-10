const {
  Controller,
  Action, //SingleFileUploadAction
  SingleFileUploadAction,
  model
} = require ('@onehilltech/blueprint');

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
      Call: model('call'),
      onUploadComplete(req, res){
        console.log('upload()');
        console.log(req.file);
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        
        return this.Call.create({})
        .then(program =>{

        })

      }
    });
  },
  option(){
    return SingleFileUploadAction.extend({
      name: 'file',
      onUploadComplete(req, res){
        console.log('option()');
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        res.header("Access-Control-Allow-Headers", "content-type, cache-control, x-requested-with");
      }
    });
  }
});
