#relay promotion works server
#:line-config {"name":"pw-sync"}
relay pw
pwd

#sync build
rsync -avh --exclude config --exclude views/static/new/node_modules a111@172.17.66.33:~/mls/codes/promotion-works/views/static/new/build /home/work/promotion-works/views/static/new
#sync font
rsync -avh --exclude config --exclude views/static/new/node_modules a111@172.17.66.33:~/mls/codes/promotion-works/views/static/new/fonts /home/work/promotion-works/views/static/new

#connect acaleph online
mysql -h10.8.245.1 -P2505 -umlsreader -p'RMlSxs&^c6OpIAQ1'
show databases;
show tables;
quit
