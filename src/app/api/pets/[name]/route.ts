import { NextResponse } from 'next/server';
import petsEn from '@/pets/pets.en.json';
import petsRu from '@/pets/pets.ru.json';
import type { Pet } from '@/types/types';

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') || 'en';
  const { name } = params;

  const petsData: Pet[] = lang === 'ru' ? petsRu : petsEn;

  const pet = petsData.find(
    (p) => p.name.toLowerCase() === decodeURIComponent(name).toLowerCase()
  );

  if (!pet) {
    return NextResponse.json({ error: 'Pet not found' }, { status: 404 });
  }

  return NextResponse.json(pet);
}
