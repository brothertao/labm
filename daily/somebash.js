var ssh = utils.hrequire('./ssh')
ssh
//local bash
var local = ssh.bash()
local.send('ping www.baidu.com')
local.send('\x03')
//labm git
local.send('cd ~/labm')
local.send('git reset')
local.send('git add .')
local.send('git status')
local.send('')
local.send('')
local.send('')
//labm workspace
local.send('cd ~/labm')
local.send('mkdir scripts')
local.send('touch scripts/atom-setup.sh')

//setup neoconsole
local.send('cd ~/labm')
local.send('ls dot-atom/packages/neoconsole')
local.send('mv dot-atom/packages/neoconsole neoconsole')
local.send('')
local.send('')
local.send('')

//setup dir tree
local.send('cd ~/labm')
local.send('mkdir docs')
local.send('mkdir daily')
local.send('cp ~/github/jsps/* ~/labm/daily')
local.send('touch docs/README.md')
local.send('touch daily/README.md')
local.send('touch README.md')
local.send('')


//my std env
var my = ssh.relay('my')
my.send('erl')
my.send('\x03')
