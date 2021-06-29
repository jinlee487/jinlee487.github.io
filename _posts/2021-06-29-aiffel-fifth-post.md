---
title: "GitHub 사용하기 day 3"
excerpt: "Dev Tools"
categories:
  - Aiffel-LMS
tags:
  - virtual environment
toc: True
toc_sticky: True
last_modified_at: 2021-06-29T17:06:00Z


---


## GitHub에 첫 번째 잔디 심기, 로컬 저장소

로컬의 Git과 동기화를 해서 온라인으로 관리할 수 있는 원격저장소를 GitHub에서는 레파지토리(Repository)라고 부릅니다.

따라서 우리가 로컬에서 다양한 코드 작업을 한 후, GitHub의 내 계정에 있는 원격저장소, 레파지토리로 잘 전송하려면 로컬의 Git이 원격의 GitHub 계정 정보를 알고 있어야겠죠.

다행히 우리는 다음과 같은 명령어로 간단히 Git과 GitHub을 연결할 수 있습니다.

```
$ git config --global user.email "my-email@gmail.com"
$ git config --global user.name "my-username"
```

위에서 my-email@gmail.com 과 my-username 부분은 자신의 email 주소와 username으로 변경해서 입력하면 됩니다. 이렇게 입력해주고 나면 Git 툴이 내가 GitHub 사이트로 코드 정보를 전송할 때 어떤 계정에 있는 레파지토리로 전송해야 하는지 기억합니다.

아래와 같이, Git에 등록한 config의 정보를 모두 확인하고 싶으면 다음과 같이 입력해 봅시다.

```
$ git config -l
```


### Git으로 버전 관리 시작하기

```
$ cd ~
$ mkdir workplace
$ cd workplace
$ git init
$ ls -a
.  ..  .git
$ cd .git
$ ls 
HEAD  branches  config  description  hooks  info  objects  refs
```

git init은 workplace라는 디렉토리를 새로운 Git 로컬 저장소로 만들었다는 뜻입니다. 모든 Git 로컬 저장소는 .git이라는 디렉토리를 가지고 있습니다.



###  README.md 파일 생성하기

![image](https://user-images.githubusercontent.com/46912607/123723936-697f3280-d8c6-11eb-87ca-2bee94a0152e.png)

이렇게 README.md 파일은 레파지토리를 들어갔을 때 그 레파지토리가 담은 오픈소스 코드들에 대해 소개하는 역할을 합니다.

```
$ cd ~/workplace  # 이전 스텝에서 .git 디렉토리로 들어갔던 경우에만 실행하여 workspace 디렉토리로 다시 돌아와주세요
$ echo "# first-repository" >> README.md
$ ls
README.md

$ cat README.md
# first-repository
$ git status
On branch main

No commits yet

Untracked files:
    (use "git add <file>..." to include in what will be committed)
    README.md

nothing added to commit but untracked files present (use "git add" to track) 

$ git add README.md
$ git commit -m “new readme file”
[master (root-commit) 438a37c] new readme file 
    1 file changed, 1 insertion(+)
    create mode 100644 README.md

```


### 내 로컬 저장소와 원격 저장소를 연결해 보자!

- [깃허브(Github) 원격저장소(Repository) 생성](https://post.naver.com/viewer/postView.nhn?volumeNo=24623326)

```
$ cd ~/workplace
$ git remote add origin https://github.com/xxx/first-repository.git
```
origin 은 원격 저장소의 닉네임과 같은 역할을 합니다. 앞으로는 복잡한 https://... 의 주소를 매번 사용하는 것이 아니라, origin 이라는 이름으로 원격 저장소를 지칭할 수 있는 것이죠. 물론 위의 xxx 부분은 본인의 username이 들어가야합니다!


```
$ git config credential.helper store
$ git push origin main
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 230 bytes | 230.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/jeina7/first-repository.git
    * [new branch]      master -> master
```
브랜치란?
- 브랜치는 여러 작업을 독립적으로 진행하려고 할 때 필요합니다. 필요에 의해 만들어지는 각각의 브랜치는 다른 브랜치의 영향을 받지 않기 때문에, 여러 작업을 동시에 진행할 수 있습니다.

