import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WidgetDocument = Widget & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Widget {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  manufacturer: string;

  @Prop({ required: true })
  stock_level: number;
}

export const WidgetSchema = SchemaFactory.createForClass(Widget);
