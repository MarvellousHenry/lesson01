import { Body, Controller, Get, Post , Param, Patch, Delete, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


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
    create(@Body(ValidationPipe) user: CreateUserDto) {
        return this.usersService.create(user)
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) userUpdate:UpdateUserDto) {
        return this.usersService.update(id, userUpdate)
    }


    @Delete(':id')
    delete(@Param ('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id)
    }

}
 