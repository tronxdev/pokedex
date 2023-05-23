export function hgToLbs(pK: number) {
  const nearExact = pK / 4.5359237;
  const lbs = nearExact.toFixed(1);

  return `${lbs} lbs`;
}

export function dmToInch(dm: number) {
  const nearExact = dm / 3.048;
  const inches = Math.floor(nearExact);

  return `${inches}' ${("00" + Math.round((nearExact - inches) * 12)).slice(
    -2
  )}"`;
}
