const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors')
const multer = require('multer')

/* app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) */

//Import PythonShell module.
const { PythonShell } = require('python-shell');

//const [inputFilePath, setInputFilePath] = useState(null);

async function runPythonShell() {
  let options = {
    mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: '/home/eimich/react_web_gans_app/scripts/deep-music-visualizer', //If you are having python_test.py script in same folder, then it's optional.
    args: ['--song', '/home/eimich/react_web_gans_app/scripts/deep-music-visualizer/beethoven.mp3', '--resolution', '128', '--duration', '5'] //An argument which can be accessed in the script using sys.argv[1]
  };


  const result = await new Promise((resolve, reject) => {
    PythonShell.run('visualize.py', options, function (
      err,
      results
    ) {
      if (err) {
        console.log('error');
        reject(err);
      }
      return resolve(results);
    });

    console.log(result.stdout);
    console.log('SUcccesss???')

    /*     if (success) {
          const oldPath = '/home/eimich/react_web_gans_app/nodejs/output.mp4'
          const newPath = '/home/eimich/react_web_gans_app/public/Videos/output.mp4'
          fs.copyFile(oldPath, newPath, function(err){
            if (err) throw err
            console.log('Successfully moved')
          })
        } */
  });
}

//Router to handle the incoming request.
app.get("/upload", (req, res, next) => {

  console.log('here we are!!');
  //Here are the option object in which arguments can be passed for the python_test.js.
  let options = {
    mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: '/home/eimich/react_web_gans_app/scripts/deep-music-visualizer', //If you are having python_test.py script in same folder, then it's optional.
    args: ['--song', '/home/eimich/react_web_gans_app/scripts/deep-music-visualizer/beethoven.mp3', '--resolution', '128', '--duration', '2'] //An argument which can be accessed in the script using sys.argv[1]
  };


  PythonShell.run('visualize.py', options, function (err, result) {
    if (err) throw err;
    // result is an array consisting of messages collected
    //during execution of script.
    console.log('result: ', result.toString());

    const oldPath = '/home/eimich/react_web_gans_app/nodejs/output.mp4'
    const newPath = '/home/eimich/react_web_gans_app/public/Videos/output.mp4'
    fs.copyFile(oldPath, newPath, function (err) {
      if (err) throw err
      console.log('Successfully moved')
    })

    const outputFile = [
      { fileName: '/home/eimich/react_web_gans_app/nodejs/output.mp4' }
    ];

    const outputFileName = '/home/eimich/react_web_gans_app/nodejs/output.mp4'

    res.json({ fileName: '/home/eimich/react_web_gans_app/nodejs/output.mp4', success: 'true' });
  });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'input_files/')
  },
  filename: (req, file, cb) => {
    //cb(null, file.originalname)
    cb(null, 'input.mp3')
  },
})

const upload = multer({ storage: storage });

app.use(cors());

app.post('/inputFile', upload.single('file'), function (req, res) {

  console.log('here we are!!');
  //Here are the option object in which arguments can be passed for the python_test.js.
  let options = {
    mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: '/home/eimich/react_web_gans_app/scripts/deep-music-visualizer', //If you are having python_test.py script in same folder, then it's optional.
    args: ['--song', '/home/eimich/react_web_gans_app/nodejs/input_files/input.mp3', '--resolution', '128', '--duration', '2'] //An argument which can be accessed in the script using sys.argv[1]
  };


  PythonShell.run('visualize.py', options, function (err, result) {
    if (err) throw err;
    // result is an array consisting of messages collected
    //during execution of script.
    console.log('result: ', result.toString());

    const oldPath = '/home/eimich/react_web_gans_app/nodejs/output.mp4'
    const newPath = '/home/eimich/react_web_gans_app/public/Videos/output.mp4'
    fs.copyFile(oldPath, newPath, function (err) {
      if (err) throw err
      console.log('Successfully moved')
    })

    const outputFile = [
      { fileName: '/home/eimich/react_web_gans_app/nodejs/output.mp4' }
    ];

    const outputFileName = '/home/eimich/react_web_gans_app/nodejs/output.mp4'

    res.json({ video: '/home/eimich/react_web_gans_app/nodejs/output.mp4', success: 'true' });
  });
});

app.use('/login', (req, res) => {
  res.send({
    token: 'login'
  });
});

app.use('/joinus', (req, res) => {
  res.send({
    token: 'joinus'
  });
});

//Creates the server on default port 8000 and can be accessed through localhost:8000
const port = 8000;
app.listen(port, () => console.log(`Server connected to ${port} and listening at http://localhost:${port}`));