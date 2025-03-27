import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';

@Schema({ timestamps: {createdAt : "createdAt" , updatedAt : "updateAt"} })
export class Base {

  @Prop({
    type: String,
    required: true,
    unique : true
  })
   id?: string;

  @Prop({ type: Date, default: Date.now })
   createdAt?: Date;

  @Prop({ type: Date, default: Date.now })
   updateAt?: Date;
}

export const BaseSchema = SchemaFactory.createForClass(Base);

BaseSchema.pre<Base>('save', function (next) {
  this.id = uuidv4();
  next();
});