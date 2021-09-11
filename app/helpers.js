
export const getProductVariant = (variants = [], color = '', kit = '') => {
  
  return variants.find(variant => {

    const {
      value: fColor = ""
    } = variant.selectedOptions.find(item => item.name == 'Color');

    const {
      value: fKit = ""
    } = variant.selectedOptions.find(item => item.name == 'Kit');

    const hasColor = fColor == color ? true: false;
    const hasKit = fKit == kit ? true: false;

    return hasColor && hasKit;
  });
}