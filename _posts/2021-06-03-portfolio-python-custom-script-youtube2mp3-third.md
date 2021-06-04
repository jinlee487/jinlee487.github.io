---
title: "How to code youtube2mp3 3.00 release"
categories:
  - Projects
tags:
  - custom scripts
  - python
  - youtube2mp3
  - tkinter
toc: true
toc_sticky: true
last_modified_at: 2021-06-03T23:16:00Z
---

### 👋 구구절절

Hows it going? 

오늘은 이전에 개발해 보았던 youtube downloader GUI를 improve한 새버전을 만들어 보았습니다. 

2.00 -> 3.00



pafy의 download function에 remux_audio=True parameter를 넣어서 

자동으로 파일을 itunes에서 정상적으로 읽을 수 있는 파일로 변환 시킬려고 했습니다.

이걸하기 위해서 ffmpeg를 다운 받아야 했는데요... 

ffmpeg는 pip으로 다운 못 받고 exe 압축파일을 다운받아 enviroment variable에 추가를 해주어야 합니다. 

그래서 ffmpeg를 사용하게 되면 virtual enviroment에서 ffmpeg를 호출 하는게 매우 까다로워 집니다.

그래서 base로 옮겨서 개발을 진행 했습니다.

하지만 후에 pafy에서 download(remux=audio=True)를 콜할 때마다 계속 winerror2 file not found error가 뜨는군요.

[재이의 pafy 리포 이슈](https://github.com/mps-youtube/pafy/issues/294)

제가 위 이슈 리포에 계속 리폿을 하면서 문제점을 파악해 보았지만 ... 

ffmpeg의 파일 변환 function을 호출 하니 정상 작동 하는 걸로 보아 pafy의 remux_audio 함수에 버그가 있다는 결론을 내렸습니다. 

그래서 스트림 파일을 다운 받는 역활은 pytube를 사용해 프로그램을 보완 했습니다.

pytube는 pafy 보다 훨씬 가볍고 간단한 모듈입니다. 

이번에 3.00 버전은

- mp4, mp3 다운이 가능하고

- 파일 네이밍에 regrex를 사용하여 파일 네이밍에 특수문자가 들어가는 것을 방지하여 이전에 생기던 버그를 고쳤습니다.

- gui가 간단해 졌습니다.

제 리포에서 v3.00 을 다운받아서 시범해 보시면 감사하겠습니다.

피드백도 해주시면 감사하겠습니다 


Check out my repository here!
- `git repo` : [https://github.com/jinlee487/youtube2mp3](https://github.com/jinlee487/youtube2mp3)


# youtube2mp3
custom Youtube video to mp3 converter 3.00
### 👋 Introduction 

Hello World! 

I was working on recording videos and needed audio clips from Youtube.
I could use Youtube to mp3 conversion service sites... but I am a programmer. 
So I went ahead and created a simple script to download Youtube audios straight from Youtube.
This Python script uses Tkinter for the GUI design and pafy to download youtube streams.

<img src="https://user-images.githubusercontent.com/46912607/120653042-4c1f9a00-c4bb-11eb-9e2e-79c13aebbc20.PNG" alt="sample" style="zoom:60%;" />

Please message me with any feedback, I am happy talk :)


### 📑 How to Install and Run

1. Download the youtube2mp3 3.00 zip file from the lastest published releases.
2. After you first download the zip folder, unzip the folder in your location of choice.
3. Then create a quick a shortcut of the youtube2mp3.exe file for access.
4. Make sure to choose a file download destination before you start downloading files.
5. Start downloading

### 📑 Things to Note 

...
### 📑 References
- `downloading virtual env` : [https://python-guide-kr.readthedocs.io/ko/latest/dev/virtualenvs.html](https://python-guide-kr.readthedocs.io/ko/latest/dev/virtualenvs.html)
- `using pafy` : [https://www.geeksforgeeks.org/youtube-mediaaudio-download-using-python-pafy/]( https://www.geeksforgeeks.org/youtube-mediaaudio-download-using-python-pafy/)
- `pythonguides.com` : [https://pythonguides.com/?s=tkinter](https://pythonguides.com/?s=tkinter)
- others: 
- [https://python-guide-kr.readthedocs.io/ko/latest/dev/virtualenvs.html]
- [https://www.geeksforgeeks.org/python-gui-tkinter/]
- [https://www.geeksforgeeks.org/youtube-mediaaudio-download-using-python-pafy/]
- [https://github.com/grassfedfarmboi/tkinter_template]
- [https://github.com/ajinkyapadwad/Sample-GUI-Tkinter]
- [https://github.com/mps-youtube/pafy/issues/41]
- [https://stackoverflow.com/questions/754307/regex-to-replace-characters-that-windows-doesnt-accept-in-a-filename]

### 📑 Release Notes
2.00
- created a GUI 
- downdable youtube audio streams
- only compatable with Windows

3.00    
- switched from pafy to pytube due to a bug with pafy's remux_audio in download parameter options.
- fixed the encoding problem so that iTunes can read the downloaded M4A file correctly.
- fixed file name with regrex
- mp4 and mp3 downloadable
- automatically chooses highest quality files

    Possible future releases ... 
    - better GUI 
    - IOS compatable
    - working progress bar

### 👋 DISCLAIMER!!!
- This is an open source youtube audio/video downloader made by me, Jinlee487. I will not assume any responsibility of others using this resource in any fashion.


Author: <a href="https://github.com/jinlee487">JWL</a>


```        
   try:
      out_file = self.currentStream.download(output_path=destination)
      new_file = os.path.join(destination.strip(),self.fulltitle.strip())
      os.rename(out_file, new_file)
      self.downloadText.insert(1.0,"Succefully saved file at location \n" + destination + "\n")
  except Exception as e:
      messagebox.showwarning("Warning", str(e) + "\nPleae try again with different URL")
      return

```