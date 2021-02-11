import { CustomDecorator, SetMetadata } from '@nestjs/common';

const ACLPolice = (
  { roles, permissions } = { roles: [], permissions: [] },
): CustomDecorator<string> => SetMetadata('acl', { roles, permissions });

export default ACLPolice;
