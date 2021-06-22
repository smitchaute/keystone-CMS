const { Text, Relationship } = require('@keystonejs/fields');

const navfields = {
    fields :{
            Menu :{
            type : Text,
            isRequired : true,
        },
        menupath:{
            type:Text,
            isRequired :true,
        }
        
        
        
    }
}
module.exports = navfields;