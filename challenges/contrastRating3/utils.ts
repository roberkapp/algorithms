import { constants } from './models';

export const getChannels = (rgb: number[]): number[] =>
  rgb.map((channel) => {
    const parsedChannel = channel / constants.rgb;

    let gammaCorrection = 0;

    if (parsedChannel <= constants.gammaSmall) {
      gammaCorrection = parsedChannel / constants.gammaCorrectionSmall;
    } else {
      gammaCorrection = ((parsedChannel + 0.055) / 1.055) ** 2.4;
    }
    return gammaCorrection;
  });

export const calculateLuminance = (rgb: number[]): number =>
  rgb[0] * constants.luminanceR +
  rgb[1] * constants.luminanceG +
  rgb[2] * constants.luminanceB;

export const getLuminance = (rgb: number[]): number =>
  calculateLuminance(getChannels(rgb));
