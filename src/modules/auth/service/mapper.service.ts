export function getCleanDataOfUser(userData: any) {
  const permissionsData: string[] = [];
  let rolesData = [];
  const { roles, ...user } = userData.user;
  if (roles.length) {
    rolesData = roles.map(
      (role: { role?: string; permissions?: unknown[] }) => {
        const { permissions } = role;
        if (permissions.length) {
          const p = permissions.map(
            (permission: { permission: string }) => permission.permission,
          );
          permissionsData.push(...p);
        }
        return role.role;
      },
    );
  }

  let cleanDuplicatedPermissions = [];
  if (permissionsData.length) {
    cleanDuplicatedPermissions = [...new Set(permissionsData)];
  }
  return { user, roles: rolesData, permissions: cleanDuplicatedPermissions };
}
