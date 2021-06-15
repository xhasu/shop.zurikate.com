
export const getProductVariant = (variants = [], color = '', install = '', kit = '') => {
  
  return variants.find(variant => {

    const {
      value: fColor = ""
    } = variant.selectedOptions.find(item => item.name == 'Color');

    const {
      value: fInstall = ""
    } = variant.selectedOptions.find(item => item.name == 'Install');

    const {
      value: fKit = ""
    } = variant.selectedOptions.find(item => item.name == 'Kit');

    const hasColor = fColor == color ? true: false;
    const hasInstall = fInstall == install ? true: false;
    const hasKit = fKit == kit ? true: false;

    return hasColor && hasInstall && hasKit;
  });
}