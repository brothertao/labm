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
