import { Controller, Get, Param, Post, Query, Body, Put, Delete } from '@nestjs/common';
import { Note } from './schemas/note.schema';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';

@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesService) {}
    
    @Get()
    findAllNotes(@Query('title') title: string): Promise<Note[]> {
        if (title) return this.notesService.findByTitle(title);

        return this.notesService.findAll();
    }

    @Get(':id')
    findNote(@Param('id') id: string): Promise<Note> {
        return this.notesService.findById(id);
    }

    @Post()
    createNote(@Body() createNoteDto: CreateNoteDto): Promise<Note> {
        return this.notesService.create(createNoteDto);
    }

    @Put(':id')
    updateNote(@Param('id') id: string, @Body() createNoteDto: CreateNoteDto): Promise<Note> {
        return this.notesService.update(id, createNoteDto);
    }

    @Delete(':id')
    deleteNote(@Param('id') id: string): Promise<any> {
        return this.notesService.delete(id);
    }
}
