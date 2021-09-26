export const getProductVariant = (variants = [], color = '', kit = '') => {
  return variants.find((variant) => {
    const { value: fColor = '' } = variant.selectedOptions.find(
      (item) => item.name == 'Color'
    );

    const { value: fKit = '' } = variant.selectedOptions.find(
      (item) => item.name == 'Kit'
    );

    const hasColor = fColor == color ? true : false;
    const hasKit = fKit == kit ? true : false;

    return hasColor && hasKit;
  });
};

export const mapPickerColor = {
  'gloss-luxury-black': 'Gloss Luxury Black',
  'gloss-fire-red': 'Gloss Fire Red',
  'gloss-golden-beach': 'Gloss Golden Beach',
  'gloss-satin-azure': 'Gloss Satin Azure',
  'matte-brown': 'Matte Brown',
  'matte-gun-metal': 'Matte Gun Metal',
  'matte-hard-black': 'Matte Hard Black',
  'reflective-zurikate': 'Reflective Zurikate',
};