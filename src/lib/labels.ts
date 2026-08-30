export const proficiencyLabel = {
  production: 'production',
  shipped: 'personal projects',
  explored: 'exploring',
} as const;

export function projectLayers(data: { layer: string; layers?: string[] }) {
  return data.layers && data.layers.length ? data.layers : [data.layer];
}
