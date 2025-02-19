import { Body, Controller, Get, Post , Param, Patch, Delete, Query, ParseIntPipe} from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    fineAll(@Query('role') role?: 'User'| 'Engineer'| 'Helper'| 'Cleaner'| 'ADMIN') {
        return this.usersService.findAll(role)
    }

    @Get(':id')
    fineOne(@Param ('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id)
    }
    
    @Post()
    create(@Body() user: {name: string, email: string, role: 'User'| 'Engineer'|'Helper'|'Cleaner'|'ADMIN'}) {
        return this.usersService.create(user)
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() userUpdate: {name?: string, email?: string, role?:'User'| 'Engineer'|'Helper'|'Cleaner'|'ADMIN'}) {
        return this.usersService.update(id, userUpdate)
    }


    @Delete(':id')
    delete(@Param ('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id)
    }

}
