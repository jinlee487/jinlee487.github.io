---
title: "How to code youtube2mp3 3.01 release"
categories:
  - Projects
tags:
  - custom scripts
  - python
  - youtube2mp3
  - tkinter
toc: true
toc_sticky: true
last_modified_at: 2021-06-08T21:44:00Z
---

### 👋 구구절절

Hows it going? 

3.00 -> 3.01

패치 내용 업데이트 해드리겠습니다. 

pafy가 최근에는 업데이트가 안되고 있어서 해결되지 않은 버그가 많은 것을 확인 할 수 있었습니다

[재이의 pafy 리포 이슈](https://github.com/mps-youtube/pafy/issues/294)

그래서 pafy를 지우고 모든 기능을 pytube로 옮겼습니다. 

현재로썬 이번 패치를 마무리로 youtube2mp3 프로젝트는 마무리를 할려고 합니다. 

이 프로젝트를 진행하면서 예전에 배웠었던 파이썬 언어를 다시 손에 익힐 수 있었고 제가 필요한 어플리케이션을 직접 개발해서 사용을 할 수 있다는것에 대해서 프로그래머란 직업에 자부심에 많이 생겼습니다. 

혹시 사용하시다 버그가 있으면 issue report를 해주시면 답번 해드리겠습니다. 



Check out my repository here!
- `git repo` : [https://github.com/jinlee487/youtube2mp3](https://github.com/jinlee487/youtube2mp3)
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

3.01
- removed pafy due to out of date bugs
- added moviepy to convert mp4 into mp3
- added temp file name function


```        
    try:
        # Insert Local Video File Path 
        clip = mp.AudioFileClip(out_file)
        # Insert Local Audio File Path
        clip.write_audiofile(out_file[:-4] + ".mp3")
        clip.close()
        new_file = os.path.join(destination.strip(),self.fulltitle.strip())
        os.rename(out_file[:-4] + ".mp3", new_file[:-4] + ".mp3")
        self.downloadText.insert(1.0,"Succefully saved file at location \n" + destination + "\n")
        os.remove(out_file)
    except Exception as e:
        messagebox.showwarning("Warning", str(e) + "\nFailed to convert mp4 file to mp3")
        return

```