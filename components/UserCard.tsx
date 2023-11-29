import React from 'react'

// กำหนด type สำหรับข้อมูล User
type UserType = {
    firstname: string;
    lastname: string;
    image: string;
    address: string;
  };
  
  // สร้าง array ของข้อมูล User พร้อมข้อมูลตัวอย่าง
  const users: UserType[] = [
    { firstname: "นาย A", lastname: "BB", image: "https://images.pexels.com/photos/8059137/pexels-photo-8059137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", address: "ที่อยู่ 1" },
    { firstname: "นาย B", lastname: "BB", image: "https://images.pexels.com/photos/8059137/pexels-photo-8059137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", address: "ที่อยู่ 1" },

  ];

// Component สำหรับแสดงข้อมูลของ User แต่ละคน
const UserCard = ({ user }: { user: UserType }) => (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px', borderRadius:"5px", backgroundColor:"#ffc000", flex: "1 0 200px", maxWidth: "250px" }}>
        <img src={user.image} alt={`${user.firstname} ${user.lastname}`} style={{ width: '100%', height: 'auto' }} />
        <h2>{`${user.firstname} ${user.lastname}`}</h2>
        <p>{user.address}</p>
    </div>
);

// Component หลักที่แสดงรายชื่อของ User ทั้งหมด
const UserList = () => (
  <div>
    {users.map((user, index) => (
      <UserCard key={index} user={user} />
    ))}
  </div>
);

export default UserList;
