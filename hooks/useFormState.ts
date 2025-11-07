import React from 'react';
import { useMMKVBoolean, useMMKVNumber, useMMKVString } from 'react-native-mmkv';
import {
    FULL_NAME_KEY,
    NAME_MODIFIED_KEY,
    NAME_ERROR_KEY,
    SHOW_NAME_ERROR_KEY,
    CONTACT_NUMBER_KEY,
    CONTACT_MODIFIED_KEY,
    CONTACT_ERROR_KEY,
    SHOW_CONTACT_ERROR_KEY,
    GENDER_KEY,
    GENDER_ERROR_KEY,
    GENDER_MODIFIED_KEY,
    SHOW_GENDER_ERROR_KEY,
    STATE_KEY,
    VILLAGE_KEY,
    BLOCK_KEY,
    STREET_KEY,
    PLOT_KEY
} from '../const/FarmerProfileForm.types';
import { FORM_CURRENT_STEP_KEY, FORM_INVALID_KEY, FORM_TOTAL_PAGES } from '../const/Form.types';
import { AREA_UNIT_ERROR_KEY, AREA_UNIT_KEY, SHOW_AREA_UNIT_ERROR_KEY, AREA_UNIT_MODIFIED_KEY, LAND_HOLDING_KEY, AREA_OF_PLANTATION_ERROR_KEY, AREA_OF_PLANTATION_KEY, AREA_OF_PLANTATION_MODIFIED_KEY, SHOW_AREA_OF_PLANTATION_ERROR_KEY } from '../const/LandDetailsForm.types';
import { useSaveFarmer } from '../db/useSaveFarmer';
import { Alert } from 'react-native';

export const useFormState = () => {
    const [currentStep, setCurrentStep] = useMMKVNumber(FORM_CURRENT_STEP_KEY);
    const [isFormInvalid, setIsFormInvalid] = useMMKVBoolean(FORM_INVALID_KEY);


    // Page - 1 : Farmer Profile 
    const [fullName, setFullName] = useMMKVString(FULL_NAME_KEY);
    const [isNameModified, setIsNameModified] = useMMKVBoolean(NAME_MODIFIED_KEY);
    const [nameError, setNameError] = useMMKVBoolean(NAME_ERROR_KEY);
    const [showNameError, setShowNameError] = useMMKVBoolean(SHOW_NAME_ERROR_KEY);
    React.useEffect(() => {
        const trimmedValue = fullName?.trim();
        const isNameInvalid = !trimmedValue || trimmedValue === "";
        setNameError(isNameInvalid);
        setShowNameError(isNameModified && isNameInvalid);
    }, [fullName, setNameError, setShowNameError, isNameModified]);

    const [contactNumber, setContactNumber] = useMMKVString(CONTACT_NUMBER_KEY);
    const [isContactModified, setIsContactModified] = useMMKVBoolean(CONTACT_MODIFIED_KEY);
    const [contactError, setContactError] = useMMKVBoolean(CONTACT_ERROR_KEY);
    const [showContactError, setShowContactError] = useMMKVBoolean(SHOW_CONTACT_ERROR_KEY);
    React.useEffect(() => {
        const trimmedValue = contactNumber?.trim() || "";
        const tenDigitRegex: RegExp = /^\d{10}$/;
        const isNumberInvalid = !trimmedValue || !tenDigitRegex.test(trimmedValue);
        setContactError(isNumberInvalid);
        setShowContactError(isContactModified && isNumberInvalid);
    }, [contactNumber, setContactError, setShowContactError, isContactModified]);

    const [gender, setGender] = useMMKVString(GENDER_KEY);
    const [isGenderModified, setIsGenderModified] = useMMKVBoolean(GENDER_MODIFIED_KEY);
    const [genderError, setGenderError] = useMMKVBoolean(GENDER_ERROR_KEY);
    const [showGenderError, setShowGenderError] = useMMKVBoolean(SHOW_GENDER_ERROR_KEY);
    React.useEffect(() => {
        const trimmedValue = gender?.trim();
        const isGenderInvalid = !trimmedValue || trimmedValue === "";
        setGenderError(isGenderInvalid);
        setShowGenderError(isGenderModified && isGenderInvalid);
    }, [gender, setGenderError, setShowGenderError, isGenderModified]);

    const [state, setState] = useMMKVString(STATE_KEY);
    const [village, setVillage] = useMMKVString(VILLAGE_KEY);
    const [block, setBlock] = useMMKVString(BLOCK_KEY);
    const [street, setStreet] = useMMKVString(STREET_KEY);
    const [plot, setPlot] = useMMKVString(PLOT_KEY);

    const handleFarmerProfileChange = React.useCallback((field: string, newValue: string) => {
        switch (field) {
            case FULL_NAME_KEY:
                setIsNameModified(true);
                setFullName(newValue);
                break;
            case CONTACT_NUMBER_KEY:
                setIsContactModified(true);
                setContactNumber(newValue);
                break;
            case GENDER_KEY:
                setIsGenderModified(true);
                setGender(newValue);
                break;
            case STATE_KEY:
                setState(newValue);
                break;
            case VILLAGE_KEY:
                setVillage(newValue);
                break;
            case BLOCK_KEY:
                setBlock(newValue);
                break;
            case STREET_KEY:
                setStreet(newValue);
                break;
            case PLOT_KEY:
                setPlot(newValue);
                break;
        }
    }, [setIsNameModified, setFullName, setIsContactModified, setContactNumber, setIsGenderModified, setGender, setState, setVillage, setBlock, setStreet, setPlot]);


    // Page - 2: Land Details
    const [areaUnit, setAreaUnit] = useMMKVString(AREA_UNIT_KEY);
    const [isAreaUnitModified, setIsAreaUnitModified] = useMMKVBoolean(AREA_UNIT_MODIFIED_KEY);
    const [areaUnitError, setAreaUnitError] = useMMKVBoolean(AREA_UNIT_ERROR_KEY);
    const [showAreaUnitError, setShowAreaUnitError] = useMMKVBoolean(SHOW_AREA_UNIT_ERROR_KEY);
    React.useEffect(() => {
        const trimmedValue = areaUnit?.trim();
        const isAreaUnitInvalid = !trimmedValue || trimmedValue === "";
        setAreaUnitError(isAreaUnitInvalid);
        setShowAreaUnitError(isAreaUnitModified && isAreaUnitInvalid);
    }, [areaUnit, setShowAreaUnitError, isAreaUnitModified]);

    const [areaOfPlantation, setAreaOfPlantation] = useMMKVString(AREA_OF_PLANTATION_KEY);
    const [isAreaOfPlantationModified, setIsAreaOfPlantationModified] = useMMKVBoolean(AREA_OF_PLANTATION_MODIFIED_KEY);
    const [areaOfPlantationError, setAreaOfPlantationError] = useMMKVBoolean(AREA_OF_PLANTATION_ERROR_KEY);
    const [showAreaOfPlantationError, setShowAreaOfPlantationError] = useMMKVBoolean(SHOW_AREA_OF_PLANTATION_ERROR_KEY);
    React.useEffect(() => {
        const trimmedValue = areaOfPlantation?.trim();
        const isAreaOfPlantationInvalid = !trimmedValue || trimmedValue === "" || Number(trimmedValue) === 0;
        setAreaOfPlantationError(isAreaOfPlantationInvalid);
        setShowAreaOfPlantationError(isAreaOfPlantationModified && isAreaOfPlantationInvalid);
    }, [areaOfPlantation, setShowAreaOfPlantationError, isAreaOfPlantationModified]);

    const [landHolding, setLandHolding] = useMMKVString(LAND_HOLDING_KEY);

    const handleLandDetailsChange = React.useCallback((field: string, newValue: string) => {
        switch (field) {
            case AREA_UNIT_KEY:
                setIsAreaUnitModified(true);
                setAreaUnit(newValue);
                break;
            case AREA_OF_PLANTATION_KEY:
                setIsAreaOfPlantationModified(true);
                setAreaOfPlantation(newValue);
            case LAND_HOLDING_KEY:
                setLandHolding(newValue);
                break;
        }
    }, [setIsAreaUnitModified, setAreaUnit, setIsAreaOfPlantationModified, setAreaOfPlantation, setLandHolding]);


    // Global state management
    React.useEffect(() => {
        switch (currentStep) {
            case 1:
                setIsNameModified(false);
                setIsContactModified(false);
                setIsGenderModified(false);
                break;
            case 2:
                setIsAreaUnitModified(false);
                setIsAreaOfPlantationModified(false);
                break;
        }
    }, [currentStep]);

    React.useEffect(() => {
        switch (currentStep) {
            case 1:
                setIsFormInvalid(nameError || contactError || genderError);
                break;
            case 2:
                setIsFormInvalid(areaUnitError || areaOfPlantationError);
        }
    }, [nameError, contactError, genderError, setIsFormInvalid, areaUnitError, areaOfPlantationError, currentStep]);

    const resetForm = () => {
        setIsNameModified(undefined);
        setFullName(undefined);
        setIsContactModified(undefined);
        setContactNumber(undefined);
        setIsGenderModified(undefined);
        setGender(undefined);
        setState(undefined);
        setVillage(undefined);
        setBlock(undefined);
        setStreet(undefined);
        setPlot(undefined);
        setIsAreaUnitModified(undefined);
        setAreaUnit(undefined);
        setIsAreaOfPlantationModified(undefined);
        setAreaOfPlantation(undefined);
        setLandHolding(undefined);
        setCurrentStep(1);
    };

    const { saveToRealm, printAllFarmers } = useSaveFarmer();
    const onFormButtonClick = React.useCallback(async () => {
        if (currentStep === FORM_TOTAL_PAGES) {
            saveToRealm().then(() => {
                //printAllFarmers();
            });
            resetForm();
        } else {
            setCurrentStep((currentStep ?? 0) + 1);
        }
    }, [saveToRealm, currentStep]);

    const onBackButtonClick = React.useCallback(() => {
        if (currentStep && currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    }, [currentStep]);

    return {
        currentStep,
        setCurrentStep,
        isFormInvalid,
        handleFarmerProfileChange,
        fullName,
        showNameError,
        contactNumber,
        showContactError,
        gender,
        showGenderError,
        state,
        village,
        block,
        street,
        plot,
        areaUnit,
        setAreaUnit,
        isAreaUnitModified,
        showAreaUnitError,
        areaOfPlantation,
        setAreaOfPlantation,
        isAreaOfPlantationModified,
        showAreaOfPlantationError,
        landHolding,
        onFormButtonClick,
        onBackButtonClick,
        handleLandDetailsChange,
    }
}