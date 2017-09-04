const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send({'hi':'there'})

});
 
// step 1        //step 2 in package.json
//localhost:5000
// https://git.heroku.com/afternoon-meadow-84276.git
// https://git.heroku.com/afternoon-meadow-84276.git

app.listen(process.env.PORT || 5000);