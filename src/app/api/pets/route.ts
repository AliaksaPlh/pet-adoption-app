import { NextResponse } from 'next/server';
import petsEn from '@/pets/pets.en.json';
import petsRu from '@/pets/pets.ru.json';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const language = searchParams.get('lang') || 'en';

    const allPets = language === 'ru' ? petsRu : petsEn;
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginated = allPets.slice(start, end);

    return NextResponse.json({
      pets: paginated,
      total: allPets.length,
      page,
      totalPages: Math.ceil(allPets.length / limit),
    });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to load pets' }, { status: 500 });
  }
}
