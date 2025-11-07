import { useMMKVString } from "react-native-mmkv";
import { Alert } from "react-native";
import { useRealm } from "@realm/react";
import { BLOCK_KEY, CONTACT_NUMBER_KEY, FULL_NAME_KEY, GENDER_KEY, PLOT_KEY, STATE_KEY, STREET_KEY, VILLAGE_KEY } from "../const/FarmerProfileForm.types";
import { AREA_OF_PLANTATION_KEY, AREA_UNIT_KEY, LAND_HOLDING_KEY } from "../const/LandDetailsForm.types";

export const useSaveFarmer = () => {

    const realm = useRealm();

    const [fullName] = useMMKVString(FULL_NAME_KEY);
    const [contactNumber] = useMMKVString(CONTACT_NUMBER_KEY);
    const [gender] = useMMKVString(GENDER_KEY);
    const [state] = useMMKVString(STATE_KEY);
    const [village] = useMMKVString(VILLAGE_KEY);
    const [block] = useMMKVString(BLOCK_KEY);
    const [street] = useMMKVString(STREET_KEY);
    const [plot] = useMMKVString(PLOT_KEY);
    const [areaUnit] = useMMKVString(AREA_UNIT_KEY);
    const [areaOfPlantation] = useMMKVString(AREA_OF_PLANTATION_KEY);
    const [landHolding] = useMMKVString(LAND_HOLDING_KEY);

    const saveToRealm = async () => {
        try {

            realm.write(() => {
                const farmer = realm.create("FarmerProfile", {
                    fullName,
                    contactNumber,
                    gender,
                    state,
                    village,
                    block,
                    street,
                    plot,
                    landDetails: {
                        areaUnit,
                        areaOfPlantation,
                        landHolding
                    }
                });
            });
            Alert.alert("Success", "Farmer profile saved successfully!");
        } catch (err) {
            Alert.alert("Error", "Failed to save farmer profile: ");
        }
    }

    const printAllFarmers = async () => {
        const farmers = realm.objects("FarmerProfile");
        Alert.alert("Realm Data", JSON.stringify(farmers, null, 2));
    };


    return { saveToRealm, printAllFarmers };
};
