# Version Control System
1. Local
Có thể hiểu là lưu trữ tại máy cá nhân

2. Centralized
Có thể hiểu là máy chủ, nơi mà nhiều người cùng lưu trữ dữ liệu chung

3. Distributed
Lưu trữ ở nhiều máy cá nhân khác nhau

# Git
1. Git & Github
- Git là phần mềm trên máy local, sử dụng command line
- Github được host trên website, có UI và là nơi để upload Git repository lên

2. Git states
- Có 3 trạng thái: 
    + Working Directory: File mới, file có thay đổi ở máy cá nhân
    + Staging Area: Files đưa vào vùng để chuẩn bị commit
    + Repository: Các commit 
- Các câu lệnh:
    + Working Directory: git init, git remote 
    + Staging Area: git add
    + Repository: git commmit

3. Flows
//Các bước sau chỉ làm 1 lần cho mỗi dự án
- git init: Khởi tạo project
- git remote add origin <url>

//Các bước sau cần làm mỗi khi có thay đổi
- git add . : Thêm file vào staging
- git commit -m"message" commit file
- git push origin main: push code

4. Git config
- Kiểm tra user & email hiện tại
    + git config user.name
    + git config user.email
- Config user & email
    + git config user.name "name"
    + git config user.email "email"
- Config global
    + git config --global user.name "name"
    + git config --global user.email "email"

5. Others
- git log: Kiểm tra các câu lệnh
- convention: Thống nhất với cả team. Thường thì sẽ như sau:
    + chore: sửa nhỏ lẻ
    + feat: thêm tính năng, tests
    + fix: sửa lỗi

# Javascript basic
1. Biến và hằng
- Biến: có thể thay đổi theo yêu cầu, thường khai báo bằng let (không nên dùng var vì var cho phép khai báo lại => rủi ro)
- Hằng: không cho phép thay đổi, khai báo bằng const. Nên sử dụng mặc định.

2. Kiểu dữ liệu
- Kiểm tra kiểu dữ liệu bằng cách: console.log(type of <tên biến>)
- Các kiểu dữ liệu:
    + number: số
    + string: chuỗi, cần khai báo báo trong " "
    + boolean: đúng sai, khai báo bằng true, false
    + object: kiểu tham chiếu

3. Các toán tử
- Toán tử so sánh:
    + So sánh bằng: sủ dụng == & === 
        == so sánh giá trị sau khi chuyển đổi kiểu dữ liệu
        ==== so sánh cùng kiểu dữ liệu
    + So sánh không bằng: !== 
    + So sánh hơn: >, <, >=, <=
- Toán tử LOGIC:
    &&: cả 2 (hoặc N) mệnh đề đúng
    ||: ít nhất 1 mệnh đề đúng
- Toán tử 1 ngôi: 
    + Prefix: toán tử nằm phía trước => tính toán trước trả về sau ++x
    + Postfix: toán tử nằm phía sau => trả về trước tính toán sau x++
- Toán tử toán học: cộng trừ nhân chia

4. Câu điều kiện: if
- Chỉ khi điều kiện đúng thì mới thực thi code bên trong

5. Vòng lặp: for
- Thưc thi 1 đoạn logic/ yêu cầu theo số lần yêu cầu