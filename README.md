# MaintenanceS-
ขั้นตอนการนำ Projecct ขึ้นไปที่ GitHub
ขั้นตอนที่ 1 init
เปิด Command Prompt แล้วไปที่ Project Folder

พิมพ์
git init
เพื่อให้ git initialize project เรา โดย git จะสร้าง folder .git ใน project

ขั้นตอนที่ 2 remote add origin
พิมพ์
git remote add origin https://github.com/kongoon/Yii2-Tutorial.git
เพื่อกำหนดที่เก็บใน GitHub ที่ได้สร้าง Project ไว้ โดยเอามาจาก

ขั้นตอนที่ 3 add *
พิมพ์
git add *
เพื่อเลือกไฟล์ ทั้งหมดที่จะนำขึ้นไปที่ Project ใน GitHub

ขั้นตอนที่ 4 commit
พิมพ์
git commit -m "text"
เพื่อเพิ่มการ commit และใส่คำอธิบายในคำว่า text เช่น first commit เป็นต้น

ขั้นตอนที่ 5 push
พิมพ์
git push -u origin master
