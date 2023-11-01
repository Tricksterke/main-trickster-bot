const {
    Function,
    isPublic
} = require("../lib");

Function({
    pattern: 'del$',
    fromMe: isPublic,
    desc: 'nothing',
    type: 'whatsapp'
}, async (m, text, client) => {
    console.log("😂*NOT WORKING *😂!!");
});

Function({
    pattern: 'dlt$',
    fromMe: isPublic,
    desc: 'nothing',
    type: 'group'
}, async (m, text, client) => {
    console.log("😂*NOT WORKING *😂!!");
});

Function({
    pattern: 'edit ?(.*)',
    fromMe: isPublic,
    desc: 'nothing',
    type: 'whatsapp'
}, async (message, match, client) => {
    console.log("😂*NOT WORKING *😂!!");
});
