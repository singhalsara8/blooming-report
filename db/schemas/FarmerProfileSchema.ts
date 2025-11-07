import uuid from 'react-native-uuid';


export const FarmerProfileSchema = {
  name: 'FarmerProfile',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', default: () => uuid.v4() },
    fullName: 'string',
    contactNumber: 'string',
    gender: 'string',
    state: 'string?',
    village: 'string?',
    block: 'string?',
    street: 'string?',
    plot: 'string?',
    landDetails: 'LandDetails?',
    createdAt: {type: 'date', default: () => new Date()},
  } as const,
};