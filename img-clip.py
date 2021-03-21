import cv2
# 要先下載套件
# pip install opencv-python

# 圖片列數(要改)
rn=8
# 圖片欄數(要改)
cn=8
# 新圖片命名(要改)
name="Legend"
# 新圖片的起始數字(要改)
num=321
for n in [1]:
    print(n)
    # 讀取圖檔(路徑)(要改)
    img = cv2.imread("img\\Orb%d.png" % (n))

    # 讀取原始圖片寬高
    sp=img.shape
    width=sp[0]
    height=sp[1]

    # 裁切區域的 x 與 y 座標（左上角）
    x = 0
    y = 0

    # 裁切區域的長度與寬度
    w = int(width/cn)
    h = int(height/rn)

    for a in range(rn):
        for b in range(cn):
            # 裁切圖片
            crop_img = img[y:y+h, x:x+w]
            # 寫入圖檔(存到路徑,圖)(要改)
            cv2.imwrite('img\%s\%s%d.png' % (name,name,num), crop_img)
            x=x+w
            num=num+1
        y=y+h
        x=0