/// File is generated from https://studio.fabbuilder.com - department

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('department');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const DepartmentSchema = new Schema(
    {
      name: {
        type: String,
      },

      employee: {
        type: Schema.Types.ObjectId,
        ref: 'employee',
      },

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

  DepartmentSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  DepartmentSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  DepartmentSchema.set('toJSON', {
    getters: true,
  });

  DepartmentSchema.set('toObject', {
    getters: true,
  });

  return database.model('department', DepartmentSchema);
};
/// File is generated from https://studio.fabbuilder.com - department
