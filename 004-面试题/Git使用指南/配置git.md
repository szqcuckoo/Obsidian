1. 安装好 git 工具
	+  [Git - Downloads (git-scm.com)](https://git-scm.com/downloads)
2. 打开 GitBash
3. 配置用户名和登陆邮箱
	+ `git config --global user.name "name"`
	+ `git config --global user.email "email"`
4. 生成 SSH 公钥
	+ `ssh-keygen -t rsa -C "任意名称"` 一直回车即可
5. 查看并复制 SSH 密钥
	+ SSH 密钥生成后会在 .ssh/ 目录下生成一个 id_rsa.pub 文件，查看并复制该内容
```bash
cd ~/.ssh/
ls
cat id_rsa.pub
```
6. 登陆 GitHub ，进入 Settings-SSH and GPG keys
7. 添加 SSH 密钥

