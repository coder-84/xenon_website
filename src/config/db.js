const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDb').then(()=> console.log('database connected')).
catch(e => console.log(e.message));