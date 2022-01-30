# Backend Developer Test

**Required Tech Stack**

- NestJS Microservice
- MongoDB

\
1.1 ออกแบบระบบร้านหนังสือ โดยมี service ดังนี้ 
  - Web API Service (เขื่อมต่อ HTTP Protocol กับ Client)
  - User Service (เชื่อมต่อ TCP Protocol กับ Web API Service)
  - Book Service (เชื่อมต่อ AMQP Protocol กับ Web API Service)
  - User และ Book มี database เป็นของตัวเอง
    
1.2 ออกแบบ Features ของ User Service ดังนี้
  - เพิ่ม / ลบ / แก้ไขข้อมูล User
  - แสดงรายการ User แบบ pagination ( สามารถ filter ตามชื่อผู้ใช้งาน , ชื่อ - นามสกุล ได้ )
  - ระบบ Login (เมื่อมีการล็อคอินผิดพลาด 3 ครั้งจะถูกระงับ 10 วินาที)
  - ระบบรายงานจำนวนสมาชิกใหม่
  - ระบบรายงานจำนวนสมาชิกที่เข้าใช้ระบบ
  - ระบบเปลี่ยน Password

1.3 ออกแบบ Features ของ Book Service ดังนี้
  - เพิ่ม / ลบ / แก้ไขข้อมูล Book
  - แสดงหนังสือ ( filter ตามหมวดหมู่ , เรียงลำดับหนังสือที่เหลือมาก - น้อย , ราคาต่ำ - สูง )
  - ระบบบันทึกการซื้อหนังสือของ user
  - ระบบรายงานหนังสือที่ถูกขายในแต่ละหมวดหมู่ , จัดอันดับหนังสือที่ถูกขายเยอะที่สุด , หนังสือที่ใกล้จะหมด
  - ระบบจัดอันดับผู้ที่ซื้อหนังสือ จำนวนกี่เล่ม แบ่งเป็นหมวดหมู่ละกี่เล่ม ราคาเท่าไหร่
  
  Optional
- each Book can have an image
- มีการ validate ชนิดข้อมูลในแต่ละ API
- ระบบรายงานสามารถระบุวันเวลาที่ต้องการได้ หรือ เลือกเป็นรายวัน / เดือน / ปี

2.สร้างฟังชั่นเพื่อทำให้ test ในแต่ละข้อในไฟล์ ex1.test.ts, ex2.test.ts, ex3.test.ts, รันผ่าน (ไม่ให้ใช้ lib)
 
  โจทย์ linear programming

  ![Screen Shot 2565-01-30 at 17 09 20](https://user-images.githubusercontent.com/72042042/151695406-0550ab5d-2a88-4fb3-82b1-d6d127978de5.png)
  
  
3.โจทย์ web3.js  https://bombcrypto.io/
 
  ![Screen Shot 2565-01-30 at 23 23 15](https://user-images.githubusercontent.com/72042042/151707956-c6e03683-725c-45a4-a195-f30479037005.png)
  
Chain: BSC Mainnet
  ```
  GET /bomb/{address}  ดึงข้อมูลเกม bomb จาก address ให้ได้ข้อมูลาม ui *ตัวอย่าง addressที่มีข้อมูล 0x2E4A26aECf2CAb4F345e949Ab4264883B5a31807
  ```
  
  ```
  GET /bomb/bhero/{address}  ดึงนวน bhero จาก address *addressที่มีข้อมูล 0x2E4A26aECf2CAb4F345e949Ab4264883B5a31807
  ```
  
  ```
  GET /bomb/bcoin/{address}  ดึงนวน bcoin จาก address *addressที่มีข้อมูล 0x2E4A26aECf2CAb4F345e949Ab4264883B5a31807
  ```
  
  ```
  GET /bomb/bcoin/{address}  ดึงนวน bcoin จาก address *addressที่มีข้อมูล 0x2E4A26aECf2CAb4F345e949Ab4264883B5a31807
  ```
Chain: Rinkeby Testnet
  ```
  POST /token/mint  mint เหรียญเข้ากระเป๋าตัวเอง contract https://rinkeby.etherscan.io/address/0xDC74a38D3d703A5010C074770d5cbb853B981c50
  ```
  
  ```
  GET /token/balance  แสดงจำนวนเหรียญที่มีจากกระเป๋าตัวเอง contract https://rinkeby.etherscan.io/address/0xDC74a38D3d703A5010C074770d5cbb853B981c50
  ```
