const express = require('express')
const app = express()

app.use(express.json())
app.use(require('cors')())

const dinoRouter = require('./routes/dinosRoutes')
app.use('/dinos', dinoRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
})
