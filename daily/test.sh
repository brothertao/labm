export PATH=/usr/local/bin:$PATH
stty -echo
unset NODE_PATH
unset NODE_ENV
export LANG=zh_CN.UTF-8
fish
ls /tmp/
pwd
cd ~/.atom/packages/term2
subl .
cd /tmp
cd ~/.atom/
subl .
which subl
which relay
relay my
bash
ls /tmp
tailf /tmp/yum.log
tty
cd ~
cd github
ls |grep atom
cd atom
git pull
git help branch
\x0d

q
git branch --list
subl .

which bash
id
su - a111
env
echo $PATH
cd ~/.atom/packages/neoconsole
cd ~/github/brothertao.github.io/;ls
cd ~/github/redux/examples/real-world/server.js;ls
git add .
git commit -a -m '#Add: config function'
git push origin master
git status
exit

touch /tmp/fortailf.log
tail -f /tmp/fortailf.log
echo 'something' >> /tmp/fortailf.log
cat /tmp/fortailf.log
stty -a
echo $PATH
ls /home
echo $_
env
vim
python
printf 'sss\n'
quit()
cd /tmp/material/material-ui/examples/webpack-example/build
ls
python -mSimpleHTTPServer 3000
\x03
\x1a
stty -a
ps -ef|grep python|grep -v grep
ps -ef|grep python|grep -v grep|awk -F' ' '{print $2}'\
|xargs kill
tty
pwd
\x0D
su - a111
qwe123mls
bash
ps -ef|grep tty|grep bash|grep -v grep
ps -ef|grep tty|grep bash|grep -v grep|awk -F' ' '{print $2}'
ps -ef|grep tty|grep bash|awk -F' ' '{print $2}'|grep -v 63137 |grep -v 63143 |xargs kill

python
def ff:
print 'hhh'

x = 7
if x < 0:
   x = 0
   print 'Negative changed to zero'
elif x == 0:
   print 'Zero'
elif x == 1:
   print 'Single'
else:
   print 'More'

words = ['cat', 'window', 'defenestrate']
for w in words:
  print w, len(w)
quit()
#rust servo
cd ~/github
git clone https://github.com/servo/servo
cd servo
./mach build --dev
\x1a
ps -ef|grep bash
ps -ef|grep bash|grep -v grep|awk -F' ' '{print $2}'\
 | xargs kill -9
\x1a
jobs
fg 1
bg 1
cat ./mach
otool -h /bin/ls
ssh -f -N -D 0.0.0.0:12345 wadecong
ifconfig en0
ps -ef|grep ssh
kill 8517

#proxy ssh sock5 to http
brew search polipo
brew install polipo
polipo -h
ps -ef|grep polipo
kill -9 8966 8769
mkdir ~/.polipo
subl ~/.polipo/config.ini
cat <<eof > ~/.polipo/config.ini
proxyAddress = "0.0.0.0"
allowedClients = 0.0.0.0/0
socksParentProxy = "127.0.0.1:12345"
socksProxyType = socks5
eof
cat ~/.polipo/config.ini
polipo -c ~/.polipo/config.ini
ps -ef|grep polipo
\x1a
bg 1
jobs
ls ~/Downloads

#assembly
brew search yasm
brew install yasm
cd ~/github
git clone https://github.com/nemasu/asmttpd.git
cd asmttpd
ls -al
chmod +x main.o
sudo ./main.o
yasm -h
brew install nasm

qwe123mls
make
make clean
cat Makefile
man ld
\x0d
/arch
q
sed -h
subl Makefile

#dtrace
sudo dtrace --help
cd /tmp
gcc -g -o t1.o t.c
gcc -o t2.o t.c
gcc -o t3.o t.c
strip t2.o
ls -alh t*.o
otool -l t1.o > t1.l
otool -l t2.o > t2.l
otool -l t3.o > t3.l
diff t1.l t2.l
diff t1.l t3.l
ls -al t.o
./t.o
otool -tV t.o

#bash learn
o=*
ls
stty -echo
echo $o
echo '$o'
echo "$o"
unset ARY
unset MAP
declare -a ARY
declare -A MAP
MAP+=([a]=1 [b]=2)
ARY+=(a b c)

echo ${ARY[1]}
echo ${MAP[a]}
echo "${ARY[@]}"
echo "${MAP[@]}"
echo "${ARY[@]:1:2}"
echo ${#ARY[@]}
echo "${!MAP[@]}"

ARY[4]=a
echo ${ARY[@]}
echo ${ARY[3]}

FILENAME=/home/spacewander/param.sh
echo ${FILENAME%/*} # /home/spacewander
echo ${FILENAME%%/*} #
echo ${FILENAME#*/} # home/spacewander/param.sh
echo ${FILENAME##*/} # param.sh
echo ${FILENAME/home/office} # /office/spacewander/param.sh
echo ${FILENAME//s/S} # /home/Spacewander/param.Sh
examples=a b c
for dir in $(examples); do echo $dir; done
type ls
cat <<eof > t.php
<?php
exit(2);
eof
cat t.php
php t.php
echo $?
expr ( 10 * 10 )
echo $OLDPWD
pwd
subl `which erl`
subl ~/Downloads/rebar
cat > /tmp/t.sh <<'EOF'
echo ${1+"$@"}
EOF
sh /tmp/t.sh ss sf sdfasd
cat /tmp/t.sh

stty -echo
ps -ef|grep tail
tail -f /tmp/t.sh
\x1a
fg
\x03
cat /tmp/console.html
tail -f /tmp/console.html
tail -f /tmp/tty.d
#45613/0x200f52:   1357804       6      1 sigprocmask(0x1, 0x1094F9110, 0x1094F910C)		 = 0x0 0
#38346/0x17039e:    258920      41     14 sigprocmask(0x1, 0x0, 0x7FFF582D6910)		 = 0x0 0
touch /tmp/Sidebar.html
ps -j
stty tty
subl ~/.atom/packages/neoconsole

cd /Applications/Visual\ Studio\ Code.app/Contents/Frameworks;ls
ifconfig en0
//php interactive
php -a
\x0a
printf "\u6570\u636e\u91cd\u590d"
