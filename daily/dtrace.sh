sudo dtrace -l
sudo dtrace -l | wc -l
qwe123mls
sudo dtrace -n BEGIN
cat <<'eof' > /tmp/hl.d
BEGIN
{
  trace("hello dtrace");
  exit(0);
}
eof
cat /tmp/hl.d
sudo dtrace -s /tmp/hl.d
:reload
tty
ps -ef|grep bash
\x03
\x1a
tail -f /tmp/hl.d
stty nl
stty echo
stty dec
stty brkint
stty isig
stty flsh
stty sane
stty raw
fg
