import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid'; // برای تولید UUID نسخه 4

@Schema({ timestamps: {createdAt : "createdAt" , updatedAt : "updateAt"} })
export class Base {

  @Prop({
    type: String,
    default: uuidv4(), // تولید خودکار UUID نسخه 4
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

BaseSchema.pre('save', function(next) {
  console.log("------------ id ----------------------");
  console.log(this.id);
  this.id = uuidv4();
  next();
});