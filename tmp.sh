#!/usr/bin/bash
#config={name:'mylocal'}
ls
tty
ping baidu.com
\x03
ps -ef|grep ssh
ssh localhost
exit
cd ~/labm/neoconsole;ls
ls statics
mv default.window.html statics

#labm
cd ~/labm/neoconsole
npm install d3 --save
#git commit
cd ~/labm/
git status
git add .
git commit -a -m "#Add: support new window for js"
git push
