import Realm from "realm";
import { FarmerProfileSchema } from "./schemas/FarmerProfileSchema";
import { LandDetailsSchema } from "./schemas/LandDetailsSchema";

export const getRealm = async () => {
  return await Realm.open({
    schema: [FarmerProfileSchema, LandDetailsSchema],
    schemaVersion: 1,
  });
};
