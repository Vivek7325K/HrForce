/// File is generated from https://studio.fabbuilder.com - leave

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('leave');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const LeaveSchema = new Schema(
    {
      startDate: {
        type: Date,
      },

      endDate: {
        type: Date,
      },

      reason: {
        type: String,
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

  LeaveSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  LeaveSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  LeaveSchema.set('toJSON', {
    getters: true,
  });

  LeaveSchema.set('toObject', {
    getters: true,
  });

  return database.model('leave', LeaveSchema);
};
/// File is generated from https://studio.fabbuilder.com - leave
