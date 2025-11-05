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
import { AREA_UNIT_ERROR_KEY, AREA_UNIT_KEY, AREA_UNIT_MODIFIED_KEY, LAND_HOLDING_KEY } from '../const/LandDetailsForm.types';

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
        const isNameInvalid = trimmedValue === "";
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
        const isNumberInvalid = !tenDigitRegex.test(trimmedValue);
        setContactError(isNumberInvalid);
        setShowContactError(isContactModified && isNumberInvalid);
    }, [contactNumber, setContactError, setShowContactError, isContactModified]);

    const [gender, setGender] = useMMKVString(GENDER_KEY);
    const [isGenderModified, setIsGenderModified] = useMMKVBoolean(GENDER_MODIFIED_KEY);
    const [genderError, setGenderError] = useMMKVBoolean(GENDER_ERROR_KEY);
    const [showGenderError, setShowGenderError] = useMMKVBoolean(SHOW_GENDER_ERROR_KEY);
    React.useEffect(() => {
        const trimmedValue = gender?.trim();
        const isGenderInvalid = trimmedValue === "";
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
    const [showAreaUnitError, setShowAreaUnitError] = useMMKVBoolean(AREA_UNIT_ERROR_KEY);
    React.useEffect(() => {
        setShowAreaUnitError(isAreaUnitModified && (!areaUnit || areaUnit === ""));
        setAreaUnitError((!areaUnit || areaUnit === "") && currentStep === 2);
    }, [areaUnit, setShowAreaUnitError, isAreaUnitModified]);

    const [landHolding, setLandHolding] = useMMKVString(LAND_HOLDING_KEY);

    const handleLandDetailsChange = React.useCallback((field: string, newValue: string) => {
        switch (field) {
            case AREA_UNIT_KEY:
                setIsAreaUnitModified(true);
                setAreaUnit(newValue);
                break;
            case LAND_HOLDING_KEY:
                setLandHolding(newValue);
                break;
        }}, [setIsAreaUnitModified, setAreaUnit, setLandHolding]);


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
                break;
        }
    }, [currentStep]);

    React.useEffect(() => {
        setIsFormInvalid(nameError || contactError || genderError || areaUnitError);
    }, [nameError, contactError, genderError, setIsFormInvalid, areaUnitError]);

    const onFormButtonClick = React.useCallback(() => {
        if (currentStep === FORM_TOTAL_PAGES) {
            // Submit form, upload data to realm
        } else {
            setCurrentStep((currentStep ?? 0) + 1);
        }
    }, [currentStep]);

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
        onFormButtonClick,
        onBackButtonClick,
        handleLandDetailsChange,
        areaUnit,
        setAreaUnit,
        isAreaUnitModified,
        showAreaUnitError,
        landHolding
    }
}