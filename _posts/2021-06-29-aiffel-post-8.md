---
title: "Python 2 차원 List 사용하기 day 3"
excerpt: "파이썬 도장"
categories:
  - Aiffel-Python
tags:
  - Python
toc: True
toc_sticky: True
last_modified_at: 2021-06-29T17:06:00Z


---

## 2차원 리스트 사용하기
리스트를 사용할 때 한 줄로 늘어선 1차원 리스트를 사용했는데 이번에는 평면 구조의 2차원 리스트를 사용해보겠습니다.

2차원 리스트는 다음과 같이 가로×세로 형태로 이루어져 있으며 행(row)과 열(column) 모두 0부터 시작합니다.


![image](https://user-images.githubusercontent.com/46912607/123738046-09e15100-d8df-11eb-9920-68dbfaaadc06.png)



### 참고 | 톱니형 리스트
2차원 리스트 [[10, 20], [30, 40], [50, 60]]은 가로 크기가 일정한 사각형 리스트입니다. 특히 파이썬에서는 가로 크기가 불규칙한 톱니형 리스트(jagged list)도 만들 수 있습니다.
```
a = [[10, 20],
     [500, 600, 700],
     [9],
     [30, 40],
     [8],
     [800, 900, 1000]]
```
리스트 a는 가로 크기(행의 요소 개수) 가 제각각입니다. 이런 리스트는 요소가 배치된 모양이 톱니처럼 생겼다고 하여 톱니형 리스트라고 부릅니다.

톱니형 리스트는 다음과 같이 append 메서드 등을 사용하여 동적으로 생성할 수도 있습니다.
```
>>> a = []
>>> a.append([])
>>> a[0].append(10)
>>> a[0].append(20)
>>> a.append([])
>>> a[1].append(500)
>>> a[1].append(600)
>>> a[1].append(700)
>>> a
[[10, 20], [500, 600, 700]]
```

### 참고 | 2차원 튜플
2차원 리스트가 있으면 2차원 튜플도 있겠죠? 다음과 같이 튜플 안에 튜플을 넣는 방식, 튜플 안에 리스트를 넣는 방식, 리스트 안에 튜플을 넣는 방식 등이 가능합니다.

튜플 = ((값, 값), (값, 값), (값, 값))

튜플 = ([값, 값], [값, 값], [값, 값])

리스트 = [(값, 값), (값, 값), (값, 값)]
```
a = ((10, 20), (30, 40), (50, 60))    # 튜플 안에 튜플을 넣은 2차원 튜플
b = ([10, 20], [30, 40], [50, 60])    # 튜플 안에 리스트를 넣음
c = [(10, 20), (30, 40), (50, 60)]    # 리스트 안에 튜플을 넣음
```
튜플은 내용을 변경할 수 없으므로 a는 안쪽과 바깥쪽 모두 요소를 변경할 수 없습니다. b는 안쪽 리스트만 요소를 변경할 수 있고, c는 바깥쪽 리스트만 요소를 변경할 수 있습니다.
```
a[0][0] = 500        # 안쪽 튜플은 변경할 수 없음. TypeError 발생
a[0] = (500, 600)    # 바깥쪽 튜플은 변경할 수 없음. TypeError 발생
b[0][0] = 500        # 안쪽 리스트는 변경할 수 있음
b[0] = (500, 600)    # 바깥쪽 튜플은 변경할 수 없음. TypeError 발생
c[0][0] = 500        # 안쪽 튜플은 변경할 수 없음. TypeError 발생
c[0] = (500, 600)    # 바깥쪽 리스트는 변경할 수 있음
```


### 참고 | 사람이 알아보기 쉽게 출력하기

2차원 리스트를 출력하면 한 줄로 쭉 붙어서 출력됩니다.
```
>>> a = [[10, 20], [30, 40], [50, 60]]
>>> a
[[10, 20], [30, 40], [50, 60]]
```
만약 2차원 리스트의 사각형 구조를 유지하도록 출력하려면 pprint 모듈의 pprint 함수를 사용합니다.
```
>>> from pprint import pprint
>>> pprint(a, indent=4, width=20)
[   [10, 20],
    [30, 40],
    [50, 60]]
```
indent는 들여쓰기 칸 수, width는 가로 폭입니다. 각자 상황에 맞게 들여쓰기 칸 수와 가로 폭을 조절해서 사용해보세요.

### 2차원 리스트 출력하기 


```
>>> a = [[10, 20], [30, 40], [50, 60]]
>>> for x, y in a:    # 리스트의 가로 한 줄(안쪽 리스트)에서 요소 두 개를 꺼냄
...     print(x, y)
...
10 20
30 40
50 60

a = [[10, 20], [30, 40], [50, 60]]
 
for i in a:        # a에서 안쪽 리스트를 꺼냄
    for j in i:    # 안쪽 리스트에서 요소를 하나씩 꺼냄
        print(j, end=' ')
    print()
...
...
10 20
30 40
50 60

a = [[10, 20], [30, 40], [50, 60]]
 
for i in range(len(a)):            # 세로 크기
    for j in range(len(a[i])):     # 가로 크기
        print(a[i][j], end=' ')
    print()
...
...
10 20
30 40
50 60

a = [[10, 20], [30, 40], [50, 60]]
 
i = 0
while i < len(a):    # 반복할 때 리스트의 크기 활용(세로 크기)
    x, y = a[i]      # 요소 두 개를 한꺼번에 가져오기
    print(x, y)
    i += 1           # 인덱스를 1 증가시킴
...
...
10 20
30 40
50 60

a = [[10, 20], [30, 40], [50, 60]]
 
i = 0
while i < len(a):           # 세로 크기
    j = 0
    while j < len(a[i]):    # 가로 크기
        print(a[i][j], end=' ')
        j += 1              # 가로 인덱스를 1 증가시킴
    print()
    i += 1                  # 세로 인덱스를 1 증가시킴
...
...
10 20
30 40
50 60

```

### 반복문으로 2차원 리스트 만들기

```
a = []    # 빈 리스트 생성
 
for i in range(3):
    line = []              # 안쪽 리스트로 사용할 빈 리스트 생성
    for j in range(2):
        line.append(0)     # 안쪽 리스트에 0 추가
    a.append(line)         # 전체 리스트에 안쪽 리스트를 추가
 
print(a)
...
...
[[0, 0], [0, 0], [0, 0]]

>>> a = [[0 for j in range(2)] for i in range(3)]
>>> a
...
...
[[0, 0], [0, 0], [0, 0]]

a = [3, 1, 3, 2, 5]    # 가로 크기를 저장한 리스트
b = []    # 빈 리스트 생성
 
for i in a:      # 가로 크기를 저장한 리스트로 반복
    line = []    # 안쪽 리스트로 사용할 빈 리스트 생성
    for j in range(i):    # 리스트 a에 저장된 가로 크기만큼 반복
        line.append(0)
    b.append(line)        # 리스트 b에 안쪽 리스트를 추가
 
print(b)
...
...
[[0, 0, 0], [0], [0, 0, 0], [0, 0], [0, 0, 0, 0, 0]]
```

### 참고 | sorted로 2차원 리스트 정렬하기

2차원 리스트를 정렬할 때는 sorted 함수를 사용합니다.

sorted(반복가능한객체, key=정렬함수, reverse=True 또는 False)

다음은 학생 정보가 저장된 2차원 리스트를 정렬합니다.
```
students = [
    ['john', 'C', 19],
    ['maria', 'A', 25],
    ['andrew', 'B', 7]
]
 
print(sorted(students, key=lambda student: student[1]))  # 안쪽 리스트의 인덱스 1을 기준으로 정렬
print(sorted(students, key=lambda student: student[2]))  # 안쪽 리스트의 인덱스 2를 기준으로 정렬

...
...
[['maria', 'A', 25], ['andrew', 'B', 7], ['john', 'C', 19]]
[['andrew', 'B', 7], ['john', 'C', 19], ['maria', 'A', 25]]
```

### 2차원 리스트의 할당과 복사 알아보기
 요소를 변경해보면 두 리스트에 모두 반영됩니다
```
>>> a = [[10, 20], [30, 40]]
>>> b = a
>>> b[0][0] = 500
>>> a
[[500, 20], [30, 40]]
>>> b
[[500, 20], [30, 40]]
```
그런데 리스트 a를 copy 메서드로 b에 복사한 뒤 b의 요소를 변경해보면 리스트 a와 b에 모두 반영됩니다.
```
>>> a = [[10, 20], [30, 40]]
>>> b = a.copy()
>>> b[0][0] = 500
>>> a
[[500, 20], [30, 40]]
>>> b
[[500, 20], [30, 40]]
```
2차원 이상의 다차원 리스트는 리스트를 완전히 복사하려면 copy 메서드 대신 copy 모듈의 deepcopy 함수를 사용해야 합니다.
```
>>> a = [[10, 20], [30, 40]]
>>> import copy             # copy 모듈을 가져옴
>>> b = copy.deepcopy(a)    # copy.deepcopy 함수를 사용하여 깊은 복사
>>> b[0][0] = 500
>>> a
[[10, 20], [30, 40]]
>>> b
[[500, 20], [30, 40]]
```