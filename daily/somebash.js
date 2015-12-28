var ssh = utils.hrequire('./ssh')
ssh
//local bash
var local = ssh.bash()
local.send('ping www.baidu.com')
local.send('\x03')
//labm git
console.clear()
local.send('cd ~/labm')
local.send('git reset')
local.send('git add .')
local.send('git commit -a -m "#Add: directory for some secret info, should not push to github"')
local.send('git status')
local.send('git push -u origin master')
local.send('git remote add origin git@github.com:brothertao/labm.git')
local.send('')
//labm workspace
local.send('cd ~/labm')
local.send('mkdir scripts')
local.send('mkdir configs')
local.send('touch scripts/atom-setup.sh')
local.send('touch configs/.gitignore')
local.send('touch configs/password.config')
local.send('echo nothing>README.md')

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
