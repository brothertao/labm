export PATH=/usr/local/bin:$PATH
stty -echo

cd ~/github
git clone https://github.com/libuv/libuv.git
cd libuv
ls
make help
cat autogen.sh
echo $0
uname
subl .
sh autogen.sh
./configure
make
make install
ls
cd src/unix
ls
pwd
ls /Users/a111/github/libuv/include
gcc -g -Wall -c -I /Users/a111/github/libuv/src -I /Users/a111/github/libuv/include  -o tty.so tty.c
nm tty.so
cd ../..
nm  /usr/local/lib/libuv.a
