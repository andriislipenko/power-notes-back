import { Controller, Get } from '@nestjs/common';
import { Note } from './schemas/note.schema';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesService) {}
    
    @Get()
    findAll(): Promise<Note[]> {
        return this.notesService.findAll();
    }
}
