---
title: "Python 문자열 사용하기 day 3"
excerpt: "파이썬 도장"
categories:
  - Aiffel-Python
tags:
  - Python
toc: True
toc_sticky: True
last_modified_at: 2021-06-29T17:06:00Z


---

## 문자열 응용하기

이번에는 문자열 메서드 사용 방법과 문자열 포매팅에 대해 알아보겠습니다.



### 문자열 바꾸기 

```
>>> s = 'Hello, world!'
>>> s = s.replace('world!', 'Python')
>>> s
'Hello, Python'
```
만약 바뀐 결과를 유지하고 싶다면 문자열이 저장된 변수에 replace를 사용한 뒤 다시 변수에 할당해주면 됩니다.

### 문자 바꾸기

다음은 문자열 'apple'에서 a를 1, e를 2, i를 3, o를 4, u를 5로 바꿉니다.

```
>>> table = str.maketrans('aeiou', '12345')
>>> 'apple'.translate(table)
'1ppl2'
```

### 문자열 분리

```
>>> 'apple pear grape pineapple orange'.split()
['apple', 'pear', 'grape', 'pineapple', 'orange']

>>> 'apple, pear, grape, pineapple, orange'.split(', ')
['apple', 'pear', 'grape', 'pineapple', 'orange']
```


### 구분자 문자열과 문자열 리스트 연결하기

```
>>> ' '.join(['apple', 'pear', 'grape', 'pineapple', 'orange'])
'apple pear grape pineapple orange'

>>> '-'.join(['apple', 'pear', 'grape', 'pineapple', 'orange'])
'apple-pear-grape-pineapple-orange'
```

### 소문자를 대문자로 바꾸기 / 대문자를 소문자로 바꾸기

```
>>> 'python'.upper()
'PYTHON'

>>> 'PYTHON'.lower()
'python'
```

### 공백 삭제 / 특정 문자 삭제

```
>>> '   Python   '.lstrip()
'Python   '

>>> '   Python   '.rstrip()
'   Python'

>>> '   Python   '.strip()
'Python'

>>> ', python.'.lstrip(',.')
' python.'

>>> ', python.'.rstrip(',.')
', python'

>>> ', python.'.strip(',.')
' python'
```

### 참고 | 구두점을 간단하게 삭제하기
string 모듈의 punctuation에는 모든 구두점이 들어있습니다. 다음과 같이 strip 메서드에 string.punctuation을 넣으면 문자열 양쪽의 모든 구두점을 간단하게 삭제할 수 있습니다.
```
>>> import string
>>> ', python.'.strip(string.punctuation)
' python'
>>> string.punctuation
'!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
만약 공백까지 삭제하고 싶다면 string.punctuation에 공백 ' '을 연결해서 넣어주면 되겠죠?

>>> ', python.'.strip(string.punctuation + ' ')
'python'
물론 메서드 체이닝을 활용해도 됩니다.

>>> ', python.'.strip(string.punctuation).strip()
'python'
```

### 문자열을 정렬하기

```
>>> 'python'.ljust(10)
'python    

>>> 'python'.rjust(10)
'    python'

>>> 'python'.center(10)
'  python  '

>>> 'python'.center(11)
'   python  '

>>> 'python'.rjust(10).upper()
'    PYTHON'
```

### 문자열 채우기

```
>>> '35'.zfill(4)        # 숫자 앞에 0을 채움
'0035'
>>> '3.5'.zfill(6)       # 숫자 앞에 0을 채움
'0003.5'
>>> 'hello'.zfill(10)    # 문자열 앞에 0을 채울 수도 있음
'00000hello'
```

### 문자열 위치 찾기

```
>>> 'apple pineapple'.find('pl')
2
>>> 'apple pineapple'.find('xy')
-1

>>> 'apple pineapple'.rfind('pl')
12
>>> 'apple pineapple'.rfind('xy')
-1

>>> 'apple pineapple'.index('pl')
2

>>> 'apple pineapple'.rindex('pl')
12

>>> 'apple pineapple'.count('pl')
2
```

### 문자열 서식 지정자와 포매팅 사용하기

```

>>> 'I am %s.' % 'james'
'I am james.'

>>> name = 'maria'
>>> 'I am %s.' % name
'I am maria.'

>>> 'I am %d years old.' % 20
'I am 20 years old.'

>>> '%f' % 2.3
'2.300000'

>>> '%.2f' % 2.3
'2.30'
>>> '%.3f' % 2.3
'2.300'

>>> '%10s' % 'python'
'    python'
```

### 참고 | 자릿수가 다른 숫자 출력하기
문자열 오른쪽 정렬은 자릿수가 다른 숫자를 출력할 때 유용합니다. %d와 %f도 숫자와 조합하여 오른쪽으로 정렬할 수 있습니다.

%길이d

```
>>> '%10d' % 150
'       150'
>>> '%10d' % 15000
'     15000'
```
실수는 다음과 같이 .(점) 앞에 정렬할 길이를 지정하고, 점 뒤에 소수점 이하 자릿수를 지정합니다.

%길이.자릿수f
```
>>> '%10.2f' % 2.3
'      2.30'
>>> '%10.2f' % 2000.3
'   2000.30'
```
그럼 왼쪽 정렬은 어떻게 할까요? 왼쪽 정렬은 문자열 길이에 -를 붙여주면 됩니다.
```
>>> '%-10s' % 'python'
'python    '
```

### 서식 지정자로 문자열 안에 값 여러 개 넣기

```
>>> 'Today is %d %s.' % (3, 'April')
'Today is 3 April.'

>>> 'Today is %d%s.' % (3, 'April')
'Today is 3April.'
```

### format 메서드

```
>>> 'Hello, {0}'.format('world!')
'Hello, world!'
>>> 'Hello, {0}'.format(100)
'Hello, 100'

>>> 'Hello, {0} {2} {1}'.format('Python', 'Script', 3.6)
'Hello, Python 3.6 Script'

>>> '{0} {0} {1} {1}'.format('Python', 'Script')
'Python Python Script Script'

>>> 'Hello, {} {} {}'.format('Python', 'Script', 3.6)
'Hello, Python Script 3.6'

>>> 'Hello, {language} {version}'.format(language='Python', version=3.6)
'Hello, Python 3.6'

>>> language = 'Python'
>>> version = 3.6
>>> f'Hello, {language} {version}'
'Hello, Python 3.6'
```

참고 | 중괄호 출력하기
{ } 중괄호 자체를 출력할 때는 {{, }}처럼 중괄호를 두 번 사용하면 됩니다.
```
>>> '{{ {0} }}'.format('Python')
'{ Python }'

>>> '{0:<10}'.format('python')
'python    '

>>> '{0:>10}'.format('python')
'    python'

>>> '{:>10}'.format('python')
'    python'

>>> '%03d' % 1
'001'
>>> '{0:03d}'.format(35)
'035'

>>> '%08.2f' % 3.6
'00003.60'
>>> '{0:08.2f}'.format(150.37)
'00150.37'

```

### 채우기와 정렬을 조합

```
>>> '{0:0<10}'.format(15)    # 길이 10, 왼쪽으로 정렬하고 남는 공간은 0으로 채움
'1500000000'
>>> '{0:0>10}'.format(15)    # 길이 10, 오른쪽으로 정렬하고 남는 공간은 0으로 채움
'0000000015'

>>> '{0:0>10.2f}'.format(15)    # 길이 10, 오른쪽으로 정렬하고 소수점 자릿수는 2자리
'0000015.00'

>>> '{0: >10}'.format(15)    # 남는 공간을 공백으로 채움
'        15'
>>> '{0:>10}'.format(15)     # 채우기 부분을 생략하면 공백이 들어감
'        15'
>>> '{0:x>10}'.format(15)    # 남는 공간을 문자 x로 채움
'xxxxxxxx15'
```

### 참고 | 금액에서 천단위로 콤마 넣기
숫자 중에서 금액은 천단위로 ,(콤마)를 넣죠? 파이썬에서는 간단하게 천단위로 콤마를 넣을 수 있습니다.

먼저 format 내장 함수를 사용하는 방법입니다. 다음과 같이 format 함수에 숫자와 ','를 넣어줍니다.

format(숫자, ',')
```
>>> format(1493500, ',')
'1,493,500'
```
format 함수는 서식 지정자와 함께 사용할 수 있습니다. 다음은 콤마를 넣은 숫자를 오른쪽 정렬합니다.
```
>>> '%20s' % format(1493500, ',')    # 길이 20, 오른쪽으로 정렬
'           1,493,500'
```
포매팅에서 콤마를 넣으려면 다음과 같이 :(콜론)뒤에 ,(콤마)를 지정하면 됩니다.
```
>>> '{0:,}'.format(1493500)
'1,493,500'
```
만약 정렬을 하고 싶다면 정렬 방향과 길이 뒤에 콤마를 지정해줍니다.
```
>>> '{0:>20,}'.format(1493500)     # 길이 20, 오른쪽으로 정렬
'           1,493,500'
>>> '{0:0>20,}'.format(1493500)    # 길이 20, 오른쪽으로 정렬하고 남는 공간은 0으로 채움
'000000000001,493,500'
```