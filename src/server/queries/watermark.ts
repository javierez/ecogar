

export interface WatermarkConfig {
  enabled: boolean;
  position: string;
  sizePercentage: number;
  opacity: number;
  logoUrl: string;
}

export const getWatermarkConfig = (_accountIdArg?: bigint): WatermarkConfig => {
  return {
  "enabled": true,
  "position": "southeast",
  "sizePercentage": 15,
  "opacity": 1,
  "logoUrl": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/122/website/logos/ecogar-logo.png"
} as WatermarkConfig;
}
