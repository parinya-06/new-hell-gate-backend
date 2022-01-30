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
  PATCH /todos/{todoId}
  ```
    - Delete Todo (Auth Required)
  ```
  DELETE /todos/{todoId}
  ```

- User Service (TCP)
  ```
  เชื่อมต่อกับ Database, รับ/ส่งข้อมูลกับ API ผ่าน TCP Protocol
  ```

2.สร้างฟังชั่นเพื่อทำให้ test ในแต่ละข้อในไฟล์ backend.spec.ts รันผ่าน
 
linear programming

![Screen Shot 2565-01-30 at 17 09 20](https://user-images.githubusercontent.com/72042042/151695406-0550ab5d-2a88-4fb3-82b1-d6d127978de5.png)


Optional
- each todo can have an image
- มีการ validate ชนิดข้อมูลในแต่ละ API
