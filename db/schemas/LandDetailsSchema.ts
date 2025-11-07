export const LandDetailsSchema = {
  name: "LandDetails",
  embedded: true,   
  properties: {
    areaUnit: "string",
    areaOfPlantation: "string",
    landHolding: "string?"
  } as const,
};