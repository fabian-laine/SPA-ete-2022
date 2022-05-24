var pathToResseed = 'dist/client/browser/'
var fs = require('fs');
fs.readdirSync(pathToResseed).forEach(file => {
  console.log(file)
  if (file!=='assets' && (file.includes('.js') || file.includes('.html') || file.includes('.css'))) {
    var data = fs.readFileSync(pathToResseed+file, 'utf-8');
    data = data.replace('script src="','script src="./')
    data = data.replace('assets','./assets')
    fs.writeFileSync(pathToResseed+file, data, 'utf-8');
  }
});
