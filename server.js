const express = require('express');
const app = express();
const port = 8000;

const cors = require('cors');
// Enable all cors requests
app.use(cors());

app.use(express.json()); // for parsing application/json

// Document Templates Endpoint
app.route('/api/templates')
  .get((req, res) => {
    res.send('GET document templates')
  })
  .post((req, res) => {
    console.log(req.body); // Log the request body
    res.json({ message: 'Received the request to create a new document template.' }); // Send a JSON response
  });

// In-Process Files Endpoint
app.get('/api/inprocess-files', (req, res) => {
    const inProcessFiles = ['File 1', 'File 2', 'File 3'];
    res.json(inProcessFiles);
  });

// In-Process Documents Endpoint
app.route('/api/inprocess')
    .get((req, res) => {
        res.send('GET in-process documents')
    })
    .put((req, res) => {
        res.send('UPDATE an in-process document')
    });

// Archive Documents Endpoint
app.post('/api/archive', (req, res) => {
  console.log(req.body); // Log the request body
  res.json({ message: 'Received the request to archive a document.' }); // Send a JSON response
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});

app.get('/api/inprocess-files', (req, res) => {
    // For now, we'll return a hard-coded array of file names.
    // In a real application, you would fetch this data from a database or file system.
    const inProcessFiles = ['File 1', 'File 2', 'File 3'];
    res.json(inProcessFiles);
});
  