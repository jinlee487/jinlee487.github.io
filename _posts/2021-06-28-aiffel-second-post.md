---
title: "virtual environment day 2"
excerpt: "conda 가상환경"
categories:
  - Aiffel
tags:
  - Aiffel
toc: True
toc_sticky: True
last_modified_at: 2021-06-28T17:06:00Z


---


Check out my repository here!
- `git repo` : [(https://github.com/jinlee487/python_exercises/tree/turtle_graphics](https://github.com/jinlee487/python_exercises/tree/turtle_graphics)
### 👋 가상환경으로 패키지를 조금 더 유연하게 관리해보자

- 패키지(package) 특정 기능을 위한 여러 함수 또는 클래스를 담고 있는 보따리로서, 라이브러리(library), 모듈(module)과 비슷한 개념 (다만 모듈은 조금 더 작은 개념으로 쓰이기도 함)

- 가상환경(virtual environment) 컴퓨터에 설치된 패키지 간의 충돌 또는 패키지 버전에 의한 이슈 등을 방지하기 위해 가상으로 나누어서 사용하는 환경 즉, 특정 프로그램을 돌리기 위해 필요한 패키지들을 모아 만든 각각의 독립된 방과 같은 개념

### 가상환경 생성 
```
$ which conda
/opt/conda/bin/conda
$ conda --version
conda 4.10.1
$ conda create -n my_env_name python=3.7.9
$ conda env list

# conda environments:
#
base                  *  /opt/conda
my_env_name              /opt/conda/envs/my_env_name
```
### 가상환경 실행
```
$ conda init
exit
$ conda activate my_env_name
$ conda env list
# conda environments:
#
base                     /opt/conda
my_env_name           *  /opt/conda/envs/my_env_name
$ pip list
Package    Version
---------- -------------------
certifi    2021.5.30
pip        21.1.2
setuptools 49.6.0.post20210108
wheel      0.36.2
$ pip install tensorflow==2.4.1
$ pip list | grep tensorflow
tensorflow           2.4.1
$ conda deactivate
$ conda env remove -n my_env_name
```


