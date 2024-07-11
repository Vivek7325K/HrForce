/// File is generated from https://studio.fabbuilder.com - employee

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('employee');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const EmployeeSchema = new Schema(
    {
      firstName: {
        type: String,
      },

      lastName: {
        type: String,
      },

      email: {
        type: String,
      },

      password: {
        type: String,
      },

      joining: {
        type: Date,
      },

      role: [
        {
          type: Schema.Types.ObjectId,
          ref: 'user',
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

  EmployeeSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  EmployeeSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  EmployeeSchema.set('toJSON', {
    getters: true,
  });

  EmployeeSchema.set('toObject', {
    getters: true,
  });

  return database.model('employee', EmployeeSchema);
};
/// File is generated from https://studio.fabbuilder.com - employee
