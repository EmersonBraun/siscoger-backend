import { SetMetadata } from '@nestjs/common';

export const ACLPolice = ({roles, permissions} = {roles: [], permissions: []}) => SetMetadata('acl', {roles, permissions});
