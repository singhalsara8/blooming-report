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
export const LAND_HOLDING_KEY = "landHolding";

export interface LandDetailsFormProps { 
};