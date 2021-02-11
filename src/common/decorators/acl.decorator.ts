import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const ACLPolice = (
  { roles, permissions } = { roles: [], permissions: [] },
): CustomDecorator<string> => SetMetadata('acl', { roles, permissions });
