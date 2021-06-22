const { Text,  Relationship , File } = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');
const fileAdapter = new LocalFileAdapter({
    src: 'D:/my-blog-keystonejs-master/public/image',
    path: 'D:/my-blog-keystonejs-master/public/image',
  });
const aboutfields = {
    fields :{
        title :{
            type : Text,
            isRequired : true,
        },
        body:{
            type:Text ,
            isMultiline : true,
        },
        imageUpload:{
            type: File,
            adapter: fileAdapter,
            isRequired: true,
        }
       
        
    }
}
module.exports = aboutfields;