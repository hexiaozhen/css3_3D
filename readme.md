###
1. git 的安装
2. 获取源代码
  git clone https://github.com/lihongmi/canvas_sub.git
  
3.创建仓库

4.生成公钥
 ssh-keygen -C '741205360@qq.com' -t rsa           //在git命令里输入生成公钥

5.
  git config --global user.email "741205360@qq.com"
  git config --global user.name "lihongmi"
6.上传源代码

git init
git add *
git commit -m "first commit"

git remote add origin https://github.com/lihongmi/canvas_sub.git
git push -u origin master

//删除分支
git push origin -d gh-pages

7. 展示个人项目
	gh-pages
	
	https://lihongmi.github.io/canvas_sub