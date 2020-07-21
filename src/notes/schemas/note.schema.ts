import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Note extends Document {    
    @Prop()
    title: string;

    @Prop()
    text: string;

    @Prop({ type: Date })
    timestamp: Date;

    @Prop()
    done: boolean;

    @Prop()
    color: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);

NoteSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    }
})
