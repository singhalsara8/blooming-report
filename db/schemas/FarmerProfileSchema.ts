import { BSON } from "realm"

export const FarmerProfileSchema = {
  name: 'FarmerProfile',
  primaryKey: 'id',
  properties: {
    id: {type: 'objectId', default: () => new BSON.ObjectId() },
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