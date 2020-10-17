import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Moraru Cristi',
    email: 'moraru.cristi@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Moraru Diana',
    email: 'diana@yahoo.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
