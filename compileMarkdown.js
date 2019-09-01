/* 
This is a script to be run via the command line that will compile markdown into javascript
*/

const fs = require("fs")
const path = "./src/content/blogPosts"

const compile = async () => {
    // get the files in the markdown folder
    const files = await fs.readdirSync(`${path}/markdown`)
    
    // read each file
    for(let file of files){
        // Check if it is a markdown file
        if(file.includes(".md")){
            file = file.split(".md")[0]
            // read the contents of the file, stringify it, and save as JSON
            fs.readFile(`${path}/markdown/${file}.md`, 'utf8', (err, content) => {
                const formatted = JSON.stringify({content})                
                fs.writeFileSync(`${path}/json/${file}.json`, formatted)
            })
        }
    }
}


// Run the compiler
compile()