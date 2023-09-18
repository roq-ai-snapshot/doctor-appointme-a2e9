interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Fgfg'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'PO', 'AIM', 'TEST', 'TEST 1', 'TEST 2', 'TEST 3'],
  tenantName: 'Dfdfwe',
  applicationName: 'Doctor Appointment System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage user data', 'Manage dfdfwe data'],
  ownerAbilities: ['Manage user data', 'Manage dfdfwe data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/ec881c63-6d30-413c-a685-c0d4c904516d',
};
