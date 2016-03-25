#:line-config {"name":"labm-shell"}
tty
cd ~/labm
mkdir ~/labm/daily/d3
touch ~/labm/daily/d3/style.css
subl
#relay my
relay my
exit
ls -al /home/work/promotion-works
chown -R work:work /home/work/promotion-works
:reload
bash
su - work
cd promotion-works
\ls -al
rm views
rm /home/work/promotion-works/public/static
ls -al /home/work/promotion-works/views/static
ls ~/promotion-works/ -al
ln -s /home/work/promotion-works/views/static /home/work/promotion-works/public/static

ln -s /home/work/promotion-works/config/web_qa_lab      /home/work/promotion-works/config/web
rm /home/work/promotion-works/config/web
rm -rf /home/work/promotion-works/views/new
rm -rf /home/work/promotion-works/views/static/new
ls -al /home/work/promotion-works/views/static/new/build

#:line-config {"name":"line-shell"}
tty
echo $0
echo $PS1
tailf public/index.php
\x03
#sync backend
rsync -avh  --exclude views/new a111@172.17.66.33:~/mls/codes/promotion-works /home/work/
ls

#sync promotion-works
#sync with frontend
rsync -avh --exclude config --exclude views/static/new/node_modules a111@172.17.66.33:~/mls/codes/promotion-works /home/work/
#sync build
rsync -avh --exclude config --exclude views/static/new/node_modules a111@172.17.66.33:~/mls/codes/promotion-works/views/static/new/build /home/work/promotion-works/views/static/new
rsync -avh --exclude config --exclude views/static/new/node_modules a111@172.17.66.33:~/mls/codes/promotion-works/views/static/new/fonts /home/work/promotion-works/views/static/new

#sync venus-works
#sync with frontend
rsync -avh --exclude config --exclude views/static/new/node_modules a111@172.17.66.33:~/mls/codes/venus-works /home/work/
#sync build
rsync -avh --exclude config --exclude views/static/new/node_modules a111@172.17.66.33:~/mls/codes/venus-works/views/static/new/build /home/work/venus-works/views/static/new
rsync -avh --exclude config --exclude views/static/new/node_modules a111@172.17.66.33:~/mls/codes/venus-works/views/static/new/fonts /home/work/venus-works/views/static/new

rsync -avh a111@172.17.66.33:~/mls/codes/promotion-works/config/web_qa_lab /home/work/promotion-works/config/
cat /home/work/promotion-works/config/web/config.inc.php

rsync -avh --exclude config a111@172.17.66.33:~/mls/codes/promotion /home/work/
rsync -avh --exclude config a111@172.17.66.33:~/mls/codes/promotion-works /home/work/
#do replace
/home/service/php/bin/php /home/work/promotion/public/script.php Page\\Cron
\x1a

mysql -h10.8.3.34 -P3300 -umlstmpdb -pmlstmpdb123456 acaleph
#online
venus host=10.8.15.94 port=3306 weight=1 user=mlsreader pass=RMlSxs&^c6OpIAQ1
mysql -h10.8.15.94 -P3306 -umlsreader -p'RMlSxs&^c6OpIAQ1' venus
SELECT * FROM t_acaleph_act_tpl WHERE 1=1 ORDER BY id DESC LIMIT 0, 50;
show tables;
show create table t_acaleph_act_tpl;
show create table t_acaleph_act_tpl_audit_process;

select id, status from t_acaleph_act_tpl where id=2145;
update t_acaleph_act_tpl set status=0 where id=2145;
update t_venus_post set status=1 where id=5;
select * from t_acaleph_act_tpl_audit_process where doc_id=2145;
delete from t_acaleph_act_tpl where id=489;
quit;
fg 3
bg 9
jobs
select replace_time from t_acaleph_act_tpl where id=501;
select content,json_extra from t_acaleph_act_tpl where id=501;
select content,json_extra from t_acaleph_act_tpl where id=497;
select content,json_extra from t_acaleph_act_tpl_released where act_tpl_id=501;
select content,json_extra from t_acaleph_act_tpl_released where act_tpl_id=497;
show create table t_acaleph_act_tpl_released;
update t_acaleph_act_tpl set `replace_time`="2015-11-26 19:44:00" where id=501;
update t_acaleph_act_tpl_released set `content`="1", `json_extra`="1" where act_tpl_id=501;
select content,json_extra from t_acaleph_act_tpl_released where act_tpl_id=497;

ALTER TABLE t_acaleph_act_tpl ADD child_ids VARCHAR(255) NOT NULL DEFAULT '' COMMENT '子页面ID集合：1,2,3' after type;
ALTER TABLE t_acaleph_act_tpl ADD parent_id int(11) NOT NULL DEFAULT 0 COMMENT '父页面ID，只能有一个' after type;
ALTER TABLE t_acaleph_act_tpl ADD replace_time timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '定时替换的时间' after type;
ALTER TABLE t_venus_post ADD published tinyint(1) NOT NULL DEFAULT 0 COMMENT '1:发布, 0:未发布' after status;
ALTER TABLE t_venus_post ADD create_source VARCHAR(20) NOT NULL DEFAULT 'works' COMMENT 'works:运营后台, user:用户' after description;
ALTER TABLE t_venus_post ADD user_nickname VARCHAR(255) NOT NULL DEFAULT '' COMMENT '用户昵称' after create_source;
ALTER TABLE t_venus_post ADD author_nickname VARCHAR(255) NOT NULL DEFAULT '' COMMENT '用户昵称' after create_source;
show create table t_acaleph_act_tpl;
ALTER TABLE t_venus_post DROP COLUMN published;

quit;


ls -al /home/work/webdata/logs/
ls -al /home/work/webdata/logs/exception.*
ls -al /home/work/webdata/logs/promotion*
cat /home/work/webdata/logs/exception.2015112612
cat /home/work/webdata/logs/lab.php.log
cat /home/work/promotion/scripts/page/Cron.class.php
echo >/home/work/webdata/logs/lab.php.log

# file-config-begin
# {"name":"local-test"}
# file-config-end
