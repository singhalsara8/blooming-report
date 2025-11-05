export const LandUnitDetails:string[] = [
    'Acre', 
    "Hectare",
    "Katha",
    "Bigha",
    "Guntha"
];

export const LandHoldingOptions = [
    {label: 'Owned by the farmer', value: 'owned'},
    {label: 'Co-owned by farmer and family', value: 'co_owned'},
    {label: 'Shared (Neighbouring farmers)', value: 'shared'},
];

export const AREA_UNIT_KEY = "areaUnit";
export const AREA_UNIT_MODIFIED_KEY = "isAreaUnitModified";
export const AREA_UNIT_ERROR_KEY = "areaUnitError";
export const SHOW_AREA_UNIT_ERROR_KEY = "showAreaUnitError"

export const AREA_OF_PLANTATION_KEY = "areaOfPlantation";
export const AREA_OF_PLANTATION_MODIFIED_KEY = "isAreaOfPlantationModified";
export const AREA_OF_PLANTATION_ERROR_KEY = "areaOfPlantationError";
export const SHOW_AREA_OF_PLANTATION_ERROR_KEY = "showAreaOfPlantationError"

export const LAND_HOLDING_KEY = "landHolding";

export interface LandDetailsFormProps { 
};