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
export const NAME_MODIFIED_KEY = "isNameModified";
export const NAME_ERROR_KEY = "farmerNameError";
export const SHOW_NAME_ERROR_KEY = "showFarmerNameError";

export const CONTACT_NUMBER_KEY = "farmerContactNumber";
export const CONTACT_MODIFIED_KEY = "isContactModified";
export const CONTACT_ERROR_KEY = "farmerContactError";
export const SHOW_CONTACT_ERROR_KEY = "showFarmerContactError";

export const GENDER_KEY = "farmerGender";
export const GENDER_MODIFIED_KEY = "isGenderModified";
export const GENDER_ERROR_KEY = "farmerGenderError";
export const SHOW_GENDER_ERROR_KEY = "showFarmerGenderError";
export const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
];

export const STATE_KEY = "farmerState";
export const stateOptions = [
    { label: 'Select from list', value: '' },
    { label: 'State A', value: 'state_a' },
    { label: 'State B', value: 'state_b' },
];

export const VILLAGE_KEY = "farmerVillage";
export const villageOptions = [
    { label: 'Select from list', value: '' },
    { label: 'Village X', value: 'village_x' },
    { label: 'Village Y', value: 'village_y' },
];

export const BLOCK_KEY = "farmerBlock";
export const STREET_KEY = "farmerStreet";
export const PLOT_KEY = "farmerPlot";

export type FarmerProfileFormProps = {
};
