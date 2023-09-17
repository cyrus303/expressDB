const mongoose = require('mongoose');
const {connect} = mongoose;

connect(
  `mongodb+srv://${process.env.UserName}:${process.env.Password}@${process.env.MongoDB_URI}/express_DB`
)
  .then(() => console.log('connected to DB'))
  .catch((err) => console.log(err));
