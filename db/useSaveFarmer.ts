import { useMMKVString } from "react-native-mmkv";
import { getRealm } from "./realmConfig";

export const useSaveFarmer = () => {
    const [fullName] = useMMKVString("fullName");
    const [contactNumber] = useMMKVString("contactNumber");
    const [gender] = useMMKVString("gender");
    const [state] = useMMKVString("state");
    const [village] = useMMKVString("village");
    const [block] = useMMKVString("block");
    const [street] = useMMKVString("street");
    const [plot] = useMMKVString("plot");

    const saveToRealm = async () => {
        try {
            const realm = await getRealm();


            realm.write(() => {
                realm.create("Farmer", {
                    fullName,
                    contactNumber,
                    gender,
                    state,
                    village,
                    block,
                    street,
                    plot,
                });
            });
            const allFarmers = realm.objects("Farmer");
            console.log("📌 Farmers in Realm:", JSON.stringify(allFarmers, null, 2));
        } catch (err) {
        }
    };

    return { saveToRealm };
};
