###
1. git �İ�װ
2. ��ȡԴ����
  git clone https://github.com/lihongmi/canvas_sub.git
  
3.�����ֿ�

4.���ɹ�Կ
 ssh-keygen -C '741205360@qq.com' -t rsa           //��git�������������ɹ�Կ

5.
  git config --global user.email "741205360@qq.com"
  git config --global user.name "lihongmi"
6.�ϴ�Դ����

git init
git add *
git commit -m "first commit"

git remote add origin https://github.com/lihongmi/canvas_sub.git
git push -u origin master

//ɾ����֧
git push origin -d gh-pages

7. չʾ������Ŀ
	gh-pages
	
	https://lihongmi.github.io/canvas_sub