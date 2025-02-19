import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [ 
        {
            "id": 1,
            "name": "Udo Umoh",
            "email": "udoumoh@myemail.com",
            "role": "User",
        },
        {
            "id": 2,
            "name": "Uduak Umoh",
            "email": "uduakumoh@myemail.com",
            "role": "Engineer",
        },
        {
            "id": 3,
            "name": "Okon Umoh",
            "email": "okonumoh@myemail.com",
            "role": "Helper",
        },
        {
            "id": 4,
            "name": "Mfon Umoh",
            "email": "mfonumoh@myemail.com",
            "role": "Cleaner",
        },
        {
            "id": 5,
            "name": "Uwem Umoh",
            "email": "uwemumoh@myemail.com",
            "role": "ADMIN",
        }
    ]

    findAll(role?: 'User' | 'Engineer' | 'Helper' | 'Cleaner' | 'ADMIN') {
       if (role) {
        return this.users.filter(user=> user.role === role);
       }
       return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);
        return user
    }

    create(user: {name: string, email: string, role: 'User'| 'Engineer'|'Helper'|'Cleaner'|'ADMIN'}) {
        const userByHighestId = [...this.users].sort((a,b)=> b.id - a.id)
        const newUser = {
            id: userByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updatedUser: { name?: string, email?: string, role?: 'User'| 'Engineer'|'Helper'|'Cleaner'|'ADMIN' }) {
        this.users = this.users.map(user =>{
            if (user.id === id) {
                return {...user, ...updatedUser}
            }
            return user
        })
        return this.findOne(id)
    }

    delete(id: number) {
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removedUser

    }
}
