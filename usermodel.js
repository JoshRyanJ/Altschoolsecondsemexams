const { userInfo } = require('os');

const mongoose - require ('mongoose');

const userSchema = new mongoose.userSchema(

    userInfo
    username: { type:String, required: true, unique:true}),
    password: {type: String, required:true},
    email: ({type:String, required:true, unique:true},
    user_type:{ admin: Boolean, user: Boolean}
    )
)

const user =mongoose.model("user", userSchema);
module.export = user