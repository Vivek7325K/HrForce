/// File is generated from https://studio.fabbuilder.com - attendance

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('attendance');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const AttendanceSchema = new Schema(
    {
      timeIn: {
        type: Date,
      },

      timeOut: {
        type: Date,
      },

      date: {
        type: Date,
      },

      employee: [
        {
          type: Schema.Types.ObjectId,
          ref: 'employee',
        },
      ],

      tenant: {
        type: Schema.Types.ObjectId,
        ref: 'tenant',
        required: true,
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      importHash: { type: String },
    },
    { timestamps: true },
  );

  AttendanceSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  AttendanceSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  AttendanceSchema.set('toJSON', {
    getters: true,
  });

  AttendanceSchema.set('toObject', {
    getters: true,
  });

  return database.model('attendance', AttendanceSchema);
};
/// File is generated from https://studio.fabbuilder.com - attendance
