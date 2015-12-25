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

tty
echo $0
echo $PS1
tailf public/index.php
\x03
rsync -avh  --exclude views/new a111@172.17.66.33:~/mls/codes/promotion-works /home/work/

#sync with frontend
rsync -avh --exclude config --exclude views/static/new/node_modules a111@172.17.66.33:~/mls/codes/promotion-works /home/work/


rsync -avh a111@172.17.66.33:~/mls/codes/promotion-works/config/web_qa_lab /home/work/promotion-works/config/
cat /home/work/promotion-works/config/web/config.inc.php

rsync -avh --exclude config a111@172.17.66.33:~/mls/codes/promotion /home/work/
rsync -avh --exclude config a111@172.17.66.33:~/mls/codes/promotion-works /home/work/
#do replace
/home/service/php/bin/php /home/work/promotion/public/script.php Page\\Cron
\x1a

mysql -h10.8.3.34 -P3300 -umlstmpdb -pmlstmpdb123456 acaleph
delete from t_acaleph_act_tpl where id=489;
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
show create table t_acaleph_act_tpl;
quit;


ls -al /home/work/webdata/logs/
ls -al /home/work/webdata/logs/exception.*
ls -al /home/work/webdata/logs/promotion*
cat /home/work/webdata/logs/exception.2015112612
cat /home/work/webdata/logs/lab.php.log
cat /home/work/promotion/scripts/page/Cron.class.php
echo >/home/work/webdata/logs/lab.php.log
