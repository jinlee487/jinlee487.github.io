---
title: "Python Turtle Graphics day 2"
excerpt: "파이썬 터틀 그래픽스"
categories:
  - Aiffel
tags:
  - Aiffel
  - Python
toc: True
toc_sticky: True
last_modified_at: 2021-06-28T17:06:00Z


---



### 👋 Playing around with turtle graphics

- t.shape('turtle')까지 입력하면 파이썬 터틀 그래픽스(Python Turtle Graphics) 창이 표시되고 오른쪽을 바라보는 거북이가 나옵니다. t.shape는 거북이의 모양을 설정하며 아무것도 지정하지 않으면 화살표 모양이 나옵니다.

- 앞으로 이동: forward, fd
- 뒤로 이동: backward, bk, back
- 왼쪽으로 회전: left, lt
- 오른쪽으로 회전: right, rt


### moving the turtle

```
import turtle as t
 
t.shape('turtle')
 
t.fd(100)
t.rt(90)
t.fd(100)
t.rt(90)
t.fd(100)
t.rt(90)
t.fd(100)
t.mainloop()
```

### drawing a hexagonal

```
import turtle as t
 
n = 6    # 육각형
t.color('#FF69B4')    # 핫핑크(hotpink)
t.shape('turtle')
t.color('red')          # 펜의 색을 빨간색으로 설정
t.begin_fill()          # 색칠할 영역 시작
for i in range(n):      # n번 반복
    t.forward(100)
    t.right(360 / n)    # 360을 n으로 나누어서 외각을 구함
t.end_fill()            # 색칠할 영역 끝
```

