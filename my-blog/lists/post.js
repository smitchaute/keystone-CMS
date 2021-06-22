const { Text, Select , Relationship, File } = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');
const fileAdapter = new LocalFileAdapter({
    src: 'D:/my-blog-keystonejs-master/public/image',
    path: 'D:/my-blog-keystonejs-master/public/image',
  });
const postfields = {
    fields :{
        title :{
            type : Text,
            isRequired : true,
        },
        body:{
            type:Text ,
            isMultiline : true,
        },
        status:{
            type :Select,
            options :[
                {value:'PUBLISHED' , label :'Published'},
                {value:'UNPUBLISHED' , label :'UnPublished'},
            ]
        },
        imageUpload:{
            type: File,
            adapter: fileAdapter,
            isRequired: true,
        }
        
    }
}
module.exports = postfields;