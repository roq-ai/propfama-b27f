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
  ownerRoles: ['Team Member'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Team Member', 'Data Analyst'],
  tenantName: 'Organization',
  applicationName: 'PropFama',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Access and utilize the property data', 'Have a user-friendly experience'],
  ownerAbilities: [
    "Manage the organization's profile",
    'Invite Business Owners and Data Analysts to the platform',
    'Architect the application for scalability',
    'Collaborate with cross-functional teams to design and develop the platform',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/8eaa1c62-6e2b-4d30-9ea4-6502507f3308',
};
