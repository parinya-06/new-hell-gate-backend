# Backend Developer Test

**Required Tech Stack**

- NestJS (TypeScript) Microservice
- MongoDB

\
1.ให้ทำการสร้างโปรเจค NestJS ขึ้นมาและทำการเพิ่ม Features เหล่านี้


- User API (HTTP)
    - Register
  ```
  POST /users
  ```
    - Sign in (ใส่ข้อมูลผิด 3 ครั้งโดนบล็อค 10 วินาที)
  ```
  POST /auth/signin
  ```
    - Me (Current User Data) (Auth Required)
  ```
  GET /users/me
  ```
    - Create Todo (Auth Required)
  ```
  POST /todos
  ```
    - Get Todo (Auth Required)
  ```
  GET /todos?[page=1]&[perPage=5]
  ```
    - Find Todo (Auth Required)
  ```
  GET /todos/{todoId}
  ```
    - Update Todo (Auth Required)
  ```
  PUT /todos/{todoId}
  ```
    - Delete Todo (Auth Required)
  ```
  DELETE /todos/{todoId}
  ```

- User Service (TCP)
  ```
  เชื่อมต่อกับ Database, รับ/ส่งข้อมูลกับ API ผ่าน TCP Protocol
  ```

2.สร้างฟังชั่นเพื่อทำให้ test ในแต่ละข้อในไฟล์ ex1.test.ts, ex2.test.ts, ex3.test.ts, รันผ่าน (ไม่ให้ใช้ lib)
 
  โจทย์ linear programming

  ![Screen Shot 2565-01-30 at 17 09 20](https://user-images.githubusercontent.com/72042042/151695406-0550ab5d-2a88-4fb3-82b1-d6d127978de5.png)
  
  
3.โจทย์ web3.js  https://bombcrypto.io/
 
  ![Screen Shot 2565-01-30 at 23 23 15](https://user-images.githubusercontent.com/72042042/151707956-c6e03683-725c-45a4-a195-f30479037005.png)
  
  ```
  GET /bomb/{address}  ดึงข้อมูลเกม bomb จาก address ให้ได้ข้อมูลาม ui *ตัวอย่าง addressที่มีข้อมูล 0x2E4A26aECf2CAb4F345e949Ab4264883B5a31807
  ```
  
Optional
- each todo can have an image
- มีการ validate ชนิดข้อมูลในแต่ละ API
