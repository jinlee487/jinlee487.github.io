---
title: "How to code youtube2mp3 2.00 release"
categories:
  - Projects
tags:
  - custom scripts
  - python
  - youtube2mp3
  - tkinter
toc: true
toc_sticky: true
last_modified_at: 2021-05-12T19:05:00Z
---

이전에 만들었던 유튜브 오디오 다운로드 파이썬 스크립트를 더 개발 해보았습니다.

이번에 2.00 버전을 만들어 배포를 합니다.

TKinter을 이용하여 GUI를 만들어서 유저들이 사용하기 편하도록 개선을 하였습니다.

배포는 pyinstaller로 exe 파일을 만들었습니다.

프로그램을 사용해 보실 분들은 제 깃에서 2.00 릴리스 버전을 다운받아 사용을 해보세요!

처음 다운 받으시면 안티바이러스 프로그램에 검사 시간이 소요됩니다. 

검사가 끝나면 실행이 가능해 집니다.

Check out my repository here!
- `git repo` : [https://github.com/jinlee487/youtube2mp3](https://github.com/jinlee487/youtube2mp3)


# youtube2mp3
custom Youtube video to mp3 converter 2.00
### 👋 Introduction 

Hello World! 

I was working on recording videos and needed audio clips from Youtube.

I could use Youtube to mp3 conversion service sites... but I am a programmer. 

So I went ahead and created a simple script to download Youtube audios straight from Youtube.

This Python script uses Tkinter for the GUI design and pafy to download youtube streams.



Please message me with any feedback, I am happy to listen :)

<img src="https://user-images.githubusercontent.com/46912607/118063349-e49e8f00-b3d3-11eb-8f86-3d8efe16085d.PNG" alt="sample" style="zoom:60%;" />

📑 How to Install and Run

1. Download the youtube2mp3 2.00 zip file from the lastest published releases.
2. After you first download the zip folder, unzip the folder in your location of choice.
3. Then create a quick a shortcut of the youtube2mp3.exe file for access.
4. Make sure to choose a file download destination before you start downloading files.
5. Start downloading
### 📑 Things to Note 

- I recommend you download m4a files instead of WebM files.
- M4A files are encoded with the lossy Advanced Audio Coding (AAC) codec,
- which is able to provide the same bitrates as MP3s, yet achieve tighter compression.
- This results in smaller file sizes, all while delivering higher audio quality.
- YouTube supports the following video formats for upload: 
- 3GPP, AVI, FLV, MOV, MPEG4, MPEGPS, WebM and WMV. 
- MPEG4 commonly uses the . mp4 file extension. 
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

### 📑 Release Notes
- created a GUI 
- downdable youtube audio streams
- only compatable with Windows

    Possible future releases ... 
    - downloadable video streams
    - higher quality download options
    - better GUI 
    - IOS compatable
    - working progress bar
### 👋 DISCLAIMER!!!
- This is an open source youtube audio/video converter made by me, Jinlee487. I will not assume any responsibility of others using this resource in any fashion.


Author: <a href="https://github.com/jinlee487">JWL</a>

```        
   def mycb(total, recvd, ratio, rate, eta):
            self.downloadText.insert(1.0,str(recvd) + "\t" + str(ratio) +"\t" + str(eta) + "\n")
        try:
            self.currentStream[index].download(callback=mycb,filepath=path)
            self.downloadText.insert(1.0,"Succefully saved file at location \n" + path + "\n")
        except Exception as e:
            messagebox.showwarning("Warning", str(e) + "Pleae try again with different URL")

```