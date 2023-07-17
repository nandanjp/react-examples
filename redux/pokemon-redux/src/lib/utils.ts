import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[])
{
  return twMerge(clsx(inputs));
}

export const getMaxRows = (...nums: (number | undefined)[]) =>
{
  let maxNum: number = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; ++i)
  {
    if (typeof nums[i] === "number" && nums[i]! > maxNum) maxNum = nums[i]!;
  }
  return maxNum;
};