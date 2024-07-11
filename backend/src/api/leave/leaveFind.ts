/// File is generated from https://studio.fabbuilder.com - leave

import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import LeaveService from '../../services/leaveService';

export default async (req, res, next) => {
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.leaveRead,
    );

    const payload = await new LeaveService(req).findById(
      req.params.id,
    );

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
/// File is generated from https://studio.fabbuilder.com - leave
