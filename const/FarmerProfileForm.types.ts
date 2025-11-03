export interface FarmerProfileDetails {
    fullName: string;
    contactNumber: string;
    gender: 'Male' | 'Female' | '';
    location: FarmerLocationDetails;
    isOffline: boolean;
}

export interface FarmerLocationDetails {
    state: string;
    village: string;
    blockName: string;
    streetName: string;
    plotNumber: string;
}

export const FULL_NAME_KEY = "farmerFullName";
export const NAME_ERROR_KEY = "farmerNameError";
export const CONTACT_NUMBER_KEY = "farmerContactNumber";
export const CONTACT_ERROR_KEY = "farmerContactError";

export type FarmerProfileFormProps = {
    isContentInvalid: boolean | undefined;
    setIsContentInvalid: (value: boolean | ((current: boolean | undefined) => boolean | undefined) | undefined) => void;
};
