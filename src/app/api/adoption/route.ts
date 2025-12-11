import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { AdoptionForm } from '@/utils/validation';
import { getAdminApp } from '@/firebase/firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import { cookies } from 'next/headers';
import { getAuth } from 'firebase-admin/auth';

export async function POST(request: NextRequest) {
  try {
    const token = (await cookies()).get('AUTH-TOKEN')?.value;
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized: no token in cookie' },
        { status: 401 }
      );
    }
    const adminApp = getAdminApp();
    const adminDb = getFirestore(adminApp);
    const auth = getAuth(adminApp);
    const decoded = await auth.verifyIdToken(token);
    const userId = decoded.uid;
    const userEmail = decoded.email;
    const data: AdoptionForm = await request.json();
    if (
      !data.petName ||
      !data.petGender ||
      !data.petType ||
      !data.applicantName ||
      !data.phone
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    const docRef = await adminDb.collection('adoptionApplications').add({
      ...data,
      userId,
      userEmail,
      createdAt: new Date(),
    });

    return NextResponse.json(
      {
        success: true,
        id: docRef.id,
        message: 'Adoption application submitted successfully',
      },
      { status: 200 }
    );
  } catch (e: unknown) {
    return NextResponse.json(
      {
        error:
          e instanceof Error ? e.message : 'Unknown NextResponse.json error',
      },
      { status: 500 }
    );
  }
}
