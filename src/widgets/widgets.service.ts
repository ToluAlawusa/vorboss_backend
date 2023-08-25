import { Injectable } from '@nestjs/common';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Widget, WidgetDocument } from './schemas/widget.schema';
import { Model } from 'mongoose';

@Injectable()
export class WidgetsService {
  constructor(
    @InjectModel(Widget.name)
    private readonly widgetModel: Model<WidgetDocument>,
  ) {}

  async create(createWidgetDto: CreateWidgetDto): Promise<WidgetDocument> {
    const widget = new this.widgetModel(createWidgetDto);
    return widget.save();
  }

  async findAll(): Promise<WidgetDocument[]> {
    return this.widgetModel.find();
  }

  async findOne(id: string) {
    return this.widgetModel.findById(id);
  }

  async update(
    id: string,
    updateWidgetDto: UpdateWidgetDto,
  ): Promise<WidgetDocument> {
    return this.widgetModel.findByIdAndUpdate(id, updateWidgetDto);
  }

  async remove(id: string) {
    return this.widgetModel.findByIdAndRemove(id);
  }
}
