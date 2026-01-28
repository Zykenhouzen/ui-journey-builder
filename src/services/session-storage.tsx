import Blueprint from '../types/blueprint'

export function GetCurrentBlueprint(): Blueprint | null {
  const data = sessionStorage.getItem('currentBlueprint');
  if (!data) return null;
  return JSON.parse(data) as Blueprint;
}

export function SaveCurrentBlueprint(preferences: Blueprint): void {
  sessionStorage.setItem('currentBlueprint', JSON.stringify(preferences));
}