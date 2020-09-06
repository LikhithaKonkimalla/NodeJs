const chalk=require('chalk')
const yargs= require('yargs')
const notes=require('./note.js')
const { argv } = require('yargs')

// const msg=getNotes()
 
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.addNote(argv.title,argv.body)
        
    }

})
notes.addNote(argv.title,argv.body)

