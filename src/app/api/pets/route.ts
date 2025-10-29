import { NextResponse } from 'next/server';
import { PETS_EN } from '@/pets/pets.en';
import { PETS_RU } from '@/pets/pets.ru';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const language = searchParams.get('lang') || 'ru';
    const type = searchParams.get('type');
    const allPets = language === 'ru' ? PETS_RU : PETS_EN;

    const filteredPets = type
      ? allPets.filter((pet) => pet.type.toLowerCase() === type.toLowerCase())
      : allPets;

    const start = (page - 1) * limit;
    const end = start + limit;
    const paginated = filteredPets.slice(start, end);

    return NextResponse.json({
      pets: paginated,
      total: filteredPets.length,
      page,
      totalPages: Math.ceil(filteredPets.length / limit),
    });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to load pets' }, { status: 500 });
  }
}
