import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note } from './schemas/note.schema';
import { Model } from 'mongoose';

@Injectable()
export class NotesService {
    constructor(@InjectModel(Note.name) private note: Model<Note>) {}

    public async findAll(): Promise<Note[]> {
        return this.note.find().exec();
    }
}
