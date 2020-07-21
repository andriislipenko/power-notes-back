import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteSchema, Note } from './schemas/note.schema';
import { NotesController } from './notes.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{name: Note.name, schema: NoteSchema }])
    ],
    providers: [
        NotesService
    ],
    controllers: [NotesController]
})
export class NotesModule {}
