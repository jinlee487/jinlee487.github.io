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

### 원격 저장소를 로컬로도 가져오기

우리는 이 저장소를 아까 생성했던 workplace가 아닌 다른 디렉토리인 project에 가져와보겠습니다.

```
$ cd ~
$ mkdir project
$ cd project
$ git clone https://github.com/xxx/first-repository.git
Cloning into 'first-repository'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
$ ls
first-repository
$ cd first-repository
$ ls
README.md
$ cat README.md
# first-repository
```

### 로컬로 가져온 원격 저장소를 수정해서 다시 push 하기

그렇다면 이제 로컬로 가져온 레파지토리 내용을 수정해서 다시 원격으로 전송해 보는 작업을 할 것입니다. 파일에 변화를 주기 위해서 현재 있는 README.md 파일을 한번 수정해 보겠습니다.

```
$ echo "add new contents" >> README.md
$ cat README.md
# first-repository
add new contents
$ git status
On branch master
Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git restore <file>..." to discard changes in working directory)
    modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
$ git add README.md
$ git commit -m “new contents”
[master c82640d] new contents
    1 file changed, 1 insertion(+)
$ git push origin main
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (3/3), 276 bytes | 276.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/jeina7/first-repository.git
    438a37c..c82640d  master -> master
```
만약 위에 커맨드가 안된다면 git push origin master로 다시 시도해 보세요!

### 로컬 저장소를 원격 저장소의 내용과 같게 업데이트 하기!

다음은 원격 저장소의 README.md 파일이 수정된 것을 처음에 만들었던 workplace 로컬저장소에도 업데이트해주는 것이죠.

```
$ cd ~/workplace
$ ls
README.md
$ cat README.md
# first-repository
```

We can tell that the README.MD file has not been updated
push 의 반댓말, pull 로 origin 별칭의 원격 저장소를 로컬 저장소로 "당겨올" 수 있습니다.

```
$ git pull origin main
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
From https://github.com/jeina7/first-repository
    * branch            master     -> FETCH_HEAD
    438a37c..c82640d  master     -> origin/master
Updating 438a37c..c82640d
Fast-forward
    README.md | 1 +
    1 file changed, 1 insertion(+)
$ cat README.md
# first-repository
add new contents
```
### Summary 

workplace 라는 로컬저장소, 다른 말로는 디렉토리를 만드는 것부터 시작해서, add, commit, push 세 가지의 명령어를 통해 원격 저장소로 전송하는 것까지 진행해 보았습니다.

그림으로 간단히 정리하자면 다음과 같습니다.
![image](https://user-images.githubusercontent.com/46912607/123724992-42296500-d8c8-11eb-9b3e-4f328164d240.png)

우리는 위의 작업을 모두 혼자서 진행했지만, 사실 다른 개발자들과 협업을 할 때는 다음 이미지와 같이 진행되는 것이죠.
![image](https://user-images.githubusercontent.com/46912607/123725026-51a8ae00-d8c8-11eb-9908-9e80add60346.png)

Git을 활용한 버전 관리는 앞서 언급했듯 오늘 배운 것보다 훨씬 다양한 명령어, 작업들을 포함하고 있습니다. 다른 사람이 관리하는 메인 레파지토리는 망치지 않으면서, 손님으로써 작업하기 위해 레파지토리를 fork 한다거나, fork 한 레파지토리에서 작업한 것을 다시 메인 레파지토리에 반영하도록 요청하기 위해 pull request 를 보내는 등 다른 기능들은 너무 방대해서 오늘 다 다루지 못했습니다.