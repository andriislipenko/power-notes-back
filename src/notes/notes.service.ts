import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note } from './schemas/note.schema';
import { Model } from 'mongoose';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NotesService {
    constructor(@InjectModel(Note.name) private noteModel: Model<Note>) {}

    public async findAll(): Promise<Note[]> {
        return this.noteModel.find().exec();
    }

    public async findById(id: string): Promise<Note> {
        return this.noteModel.findById(id).exec();
    }

    public async findByTitle(title: string): Promise<Note[]> {
        return this.noteModel.find({ title: new RegExp(title, 'i') }).exec();
    }

    public async create(createNoteDto: CreateNoteDto): Promise<Note> {
        const createdNote: Note = new this.noteModel(createNoteDto);
        return createdNote.save();
    }

    public async update(id: string, createNoteDto: CreateNoteDto): Promise<Note> {
        return this.noteModel.findByIdAndUpdate(id, createNoteDto, { new: true });
    }

    public async delete(id: string): Promise<any> {
        return this.noteModel.deleteOne({ _id: id });
    }
}
