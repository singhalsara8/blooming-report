import { FarmerProfileDetails } from "./FarmerProfileForm.types";

export interface FarmerDetails {
    profileDetails: FarmerProfileDetails;
}

export type FormContentProps = {
    currentStep: number;
};
