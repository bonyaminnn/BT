// Visual tokens. Geometry never references these directly; components pick
// a style object and pass it down, so a palette swap never touches shapes.

export const color = {
  background: '#F7F7F3',
  surface: '#FFFFFF',   // top faces (brightest)
  side: '#E5E5E1',      // vertical faces
  outline: '#454545',
  accent: '#F04416',
  detail: '#B8B8B2',
  grid: '#EAEAE4',
};

export const stroke = {
  width: 1.25,          // at a 512px artboard
  detailWidth: 1,
  gridWidth: 0.75,
  join: 'round',
  cap: 'round',
};

export const artboard = { size: 512, padding: 56 };

// One isometric unit in px at the 512 artboard.
export const unit = 20;

export const grid = { spacing: 2 }; // in iso units

// Style presets used by primitives.
export const faceStyle = {
  top: { fill: color.surface },
  left: { fill: color.side },
  right: { fill: color.side },
};

export const lineStyle = {
  stroke: color.outline,
  strokeWidth: stroke.width,
};
