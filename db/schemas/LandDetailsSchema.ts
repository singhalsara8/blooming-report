export const LandDetailsSchema = {
  name: "LandDetails",
  embedded: true,   
  properties: {
    areaUnit: "string",
    landHolding: "string?"
  } as const,
};