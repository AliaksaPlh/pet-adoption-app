import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { Pet } from '@/types/types';
import { PETS_RU } from '@/pets/pets.ru';
import { PETS_EN } from '@/pets/pets.en';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ name: string }> }
) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') || 'en';
  const { name } = await context.params;

  const petsData: Pet[] = lang === 'ru' ? PETS_RU : PETS_EN;
  // const petsData: Pet[] = PETS_RU;

  const pet = petsData.find(
    (p) => p.name.toLowerCase() === decodeURIComponent(name).toLowerCase()
  );

  if (!pet) {
    return NextResponse.json({ error: 'Pet not found' }, { status: 404 });
  }

  return NextResponse.json(pet);
}
