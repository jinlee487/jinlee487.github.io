---
title: "How to code image2text 1.00 release"
categories:
  - Projects
tags:
  - custom scripts
  - python
  - image2text
  - tkinter
toc: true
toc_sticky: true
last_modified_at: 2021-06-27T21:44:00Z
---

### 👋 구구절절

Hows it going? 

Check out my repository here!
- `git repo` : [https://github.com/jinlee487/image2text](https://github.com/jinlee487/image2text)


# image2text
custom image transcriber 1.00
### 👋 Introduction 

Hello World! 

I created a GUI of a image text transcriber. 

Please message me with any feedback, I am happy talk :)

<img src="https://user-images.githubusercontent.com/46912607/123530272-538d3880-d733-11eb-8995-ca53663aa80d.png" width="300">

### 📑 How to Install and Run

1. Download the image2text zip file from the lastest published releases.
2. After you first download the zip folder, unzip the folder in your location of choice.
3. Then create a quick a shortcut of the image2text.exe file for access.
4. Navigate to https://github.com/UB-Mannheim/tesseract/wiki and download and install the Tesseract OCR executable.
    make sure to download the file at the following location: C:\Program Files\Tesseract-OCR\tesseract.
5. Make sure to choose a file download destination before you start downloading files.
6. Start downloading
### 📑 Things to Note 

...
### 📑 References
- `pytesseract` : [https://towardsdatascience.com/how-to-extract-text-from-images-with-python-db9b87fe432b](https://towardsdatascience.com/how-to-extract-text-from-images-with-python-db9b87fe432b)
### 📑 Release Notes
1.00
- created a GUI 
- transcribes texts into notepad
- only compatable with Windows


```        
  try:
    pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract'
  except Exception as e:
    messagebox.showwarning("Warning", str(e) + "\nFailed to locate pytesseract ")
    return
  try:
    new_file = os.path.join(destination.strip(),self.temporaryFileNameGenerator()+".txt")

    file = open(new_file, "w") 
    file.write(pytesseract.image_to_string(image_path)) 
    file.close()         
  except Exception as e:
    messagebox.showwarning("Warning", str(e) + "\nFailed to write text file")
    return

```