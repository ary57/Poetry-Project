import authorData from "./authorData.json";

export function getImage(name) {
  return authorData[name]["img"];
}

export function getDesc(name) {
  const desc = authorData[name]["desc"];

  if (desc.length <= 128) return desc;

  // Find the nearest space before 128 characters
  const sliceEnd = desc.lastIndexOf(" ", 128);

  // If no space is found before 128, slice at 128 and extend to the next space
  const adjustedEnd = sliceEnd > -1 ? sliceEnd : desc.indexOf(" ", 128);

  // Return the slice up to the calculated position
  return desc.slice(0, adjustedEnd > -1 ? adjustedEnd : 128).trim() + " ...";
}

export function getFullDesc(name) {
  return authorData[name]["desc"];
}
