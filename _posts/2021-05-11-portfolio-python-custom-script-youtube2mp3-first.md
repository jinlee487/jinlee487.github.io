---
title: "How to code youtube2mp3 custom python script"
categories:
  - Projects
tags:
  - custom scripts
  - python
  - youtube2mp3
toc: true
last_modified_at: 2021-05-11T01:11:00Z
---

유튜브 오디오를 다운로드 하는 파이썬 스크립트를 만들었습니다.

Check out my repository here!
- `git repo` : [https://github.com/jinlee487/youtube2mp3](https://github.com/jinlee487/youtube2mp3)

# youtube2mp3
custom Youtube video to mp3 converter
### 👋 Introduction 

Hello World! 

I was working on recording videos and needed audio clips from Youtube.
I could use Youtube to mp3 conversion service sites... but I am a programmer. 
So I went ahead and created a simple script to download Youtube audios straight from Youtube.

### 📑 How to Install and Run

The installation requirements for this python script is 
- python 3
- pafy
- youtube-dl

Once you have python 3 downloaded, follow the instructions below.

1. Clone the repo in your desired location.
2. Run the Powershell commands in the run.txt in order.
3. Download the video.

### Things to Note 
- The videos will be downloaded to your repo location only. pafy only allows downloads in your current path where the script is being run from.
- If you are using virtual env, remember to activate and deactivate the env.
### References
- `downloading virtual env` : [https://python-guide-kr.readthedocs.io/ko/latest/dev/virtualenvs.html](https://python-guide-kr.readthedocs.io/ko/latest/dev/virtualenvs.html)
- `using pafy` : [https://www.geeksforgeeks.org/youtube-mediaaudio-download-using-python-pafy/]( https://www.geeksforgeeks.org/youtube-mediaaudio-download-using-python-pafy/)


Author: <a href="https://github.com/jinlee487">JWL</a>

```        
try:
    audiostreams[index].download()
    # bestaudio = video.getbestaudio()
    # bestaudio.download()
    cwd = os.getcwd()
    print("\n  다음 경로로"+cwd+"\n\n  "+video.title+"\n\n  파일을 성공적으로 저장하였습니다.\n")
    print("\nOperation successful.....Terminating the program.\n")
except Exception as e:
    print("\n\nAn exception occurred!\n")
    print(e)
    print("\n\t.........Terminating the program.\n\n\n")
```