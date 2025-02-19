import { Body, Controller, Get, Post , Param, Patch, Delete} from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    fineAll() {
        return []
    }

    @Get(':id')
    fineOne(@Param ('id') id: string) {
        return { id } 
    }
    
    @Post()
    create(@Body() user: {}) {
        return user
    }

    @Patch(':id')
    update(@Param ('id') id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate }
    }

    @Delete(':id')
    delete(@Param ('id') id: string) {
        return { id }
    }

}
