import { TSpreadsheetDatum, MediumGroup, SizeGroup, Tag } from '../types';

export const deriveMediumGroup = (medium: string): MediumGroup => {
  const lowercaseMedium = medium.toLowerCase();
  if (lowercaseMedium.includes('acrylic')) return MediumGroup.Acrylic;
  if (lowercaseMedium.includes('charcoal')) return MediumGroup.Charcoal;
  if (lowercaseMedium.includes('collage')) return MediumGroup.Collage;
  if (lowercaseMedium.includes('ink')) return MediumGroup.Ink;
  if (lowercaseMedium.includes('mixed media')) {
    return MediumGroup['Mixed Media'];
  }
  if (lowercaseMedium.includes('monotype')) return MediumGroup.Monotype;
  if (lowercaseMedium.includes('oil')) return MediumGroup.Oil;
  if (lowercaseMedium.includes('pastel')) return MediumGroup.Pastel;
  if (lowercaseMedium.includes('watercolor')) return MediumGroup.Watercolor;
  return MediumGroup.Unknown;
};

const getArea = (dimensions: string): number => {
  if (!dimensions.includes('"')) return 0;
  const $dimensions = dimensions.replace('"', '').toLowerCase();

  if ($dimensions.includes('x')) {
    const [h, w] = $dimensions.split('x');
    const area = Number(h) * Number(w);
    if (Number.isNaN(area)) return 0;
    return area;
  }

  if ($dimensions.includes('diameter')) {
    const [h] = $dimensions.split('diameter');
    const area = Number(h) * Number(h);
    if (Number.isNaN(area)) return 0;
    return area;
  }

  return 0;
};

export const deriveSizeGroup = (dimensions: string): SizeGroup => {
  const area = getArea(dimensions);

  if (area === 0) return SizeGroup.Unknown;
  if (area < 75) return SizeGroup['Very Small'];
  if (area < 200) return SizeGroup.Small;
  if (area < 500) return SizeGroup.Medium;
  if (area < 1000) return SizeGroup.Large;

  return SizeGroup['Very Large'];
};

export const generateTags = ({
  tagAbstract,
  tagBlackAndWhite,
  tagColor,
  tagDominicanRepublic,
  tagFigure,
  tagLandscape,
  tagLetter,
  tagMonhegan,
  tagPath,
  tagRepresentational,
  tagSeascape,
  tagStillLife,
  tagTondo,
  tagTrees,
}: TSpreadsheetDatum): Tag[] => {
  const tags = [];

  if (tagAbstract) tags.push(Tag.Abstract);
  if (tagBlackAndWhite) tags.push(Tag['Black and White']);
  if (tagColor) tags.push(Tag.Color);
  if (tagDominicanRepublic) tags.push(Tag['Dominican Republic']);
  if (tagFigure) tags.push(Tag.Figure);
  if (tagLandscape) tags.push(Tag.Landscape);
  if (tagLetter) tags.push(Tag.Letter);
  if (tagMonhegan) tags.push(Tag.Monhegan);
  if (tagPath) tags.push(Tag.Path);
  if (tagRepresentational) tags.push(Tag.Representational);
  if (tagSeascape) tags.push(Tag.Seascape);
  if (tagStillLife) tags.push(Tag['Still Life']);
  if (tagTondo) tags.push(Tag.Tondo);
  if (tagTrees) tags.push(Tag.Trees);

  return tags;
};
