// const config = require('./config') // sayHi trazi f-ju config
import config from "./config.js";

function sayHi(language, name){
    if(language == "en" || language == "sr"){
        console.log(`${config[language]} ${name}`);
    } else {
        console.log(`Hola ${name}`);
    }
}

// module.exports = sayHi;
export default sayHi;