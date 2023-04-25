import { useState } from "react";

type User = {
  name: string;
  age: number;
  id: number;
};

type UserResponse = {
  users: User[];
};

async function fetchUsers(): Promise<UserResponse> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  console.clear()
  console.log(data)

  return { users: data };
}

async function updateAge(id: number, age: number): Promise<void> {
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ age }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

async function deleteuser(id: number): Promise<void> {
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE",
  });
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  async function handleIncrementAge(id: number) {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        const updatedAge = user.age + 1;
        updateAge(id, updatedAge);
        return { ...user, age: updatedAge };
      }
      return user;
    });
    setUsers(updatedUsers);
  }

  async function handleDecrementAge(id: number) {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        const updatedAge = user.age - 1;
        if (updatedAge <= 0) {
          deleteuser(id);
          return null;
        }
        updateAge(id, updatedAge);
        return { ...user, age: updatedAge };
      }
      return user;
    }).filter(Boolean) as User[]; // remove null values from array
    setUsers(updatedUsers);
  }

  async function loadUsers() {
    const { users } = await fetchUsers();
    setUsers(users);
  }

  return (
    <div>
      <button onClick={loadUsers}>Load users</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
                <button onClick={() => handleIncrementAge(user.id)}>+</button>
                <button onClick={() => handleDecrementAge(user.id)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
