var editor = atom.workspace.getActiveTextEditor()
editor
editor.lineTextForScreenRow()
editor.lineTextForBufferRow()
var row = editor.getCursorBufferPosition().row
var buffer = editor.getBuffer()
while (row--) {
  console.log(buffer.lines[row])
}


//get latest line config
//:line-config  name
function lineConfig() {
  var lineID = ':line-config '
  var editor = atom.workspace.getActiveTextEditor();
  var lines = editor.getBuffer().lines
  var tail = editor.getCursorBufferPosition().row;
  var line = null;
  while(tail--) {
    line = lines[tail].trim();
    index = line.search(lineID)
    if(index>0&&line.substring(index+lineID.length)!=="'"){
      break;
    }
    line = null;
  }
  if (line) {
    return line.substring(line.search(lineID)+lineID.length)
  }
  return '';
}
//get global config
function fileConfig() {
  const begin = 'file-config-begin'
  const end = 'file-config-end'

  var lines = atom.workspace.getActiveTextEditor().getBuffer().lines
  var tail = lines.length;
  var configLines = [];
  var line, endLine;

  //fetch config lines
  --tail
  while(tail--) {
    line = lines[tail].trim();
    if(!endLine && line.search(end)<0){
      continue;
    }
    endLine = tail

    configLines.unshift(line)
    if(line.search(begin)>0){
      break;
    }
    if(tail===0){
      configLines = [];
    }
  }
  if (configLines.length===0) {
    return '';
  }

  //trim commit token
  var length = configLines.shift().trim().search(begin)
  configLines.pop()
  var str = configLines.reduce((acc, line)=>{
    return acc+'\n'+line.substring(length);
  }, '')
  return JSON.parse(str)
}
var c = fileConfig()
c
//file-config-begin
// {"name": "canvas"}
//file-config-end
