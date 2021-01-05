import { SetMetadata } from '@nestjs/common';

const ACLPolice = ({ roles, permissions } = { roles: [], permissions: [] }) =>
  SetMetadata('acl', { roles, permissions });

export default ACLPolice;
