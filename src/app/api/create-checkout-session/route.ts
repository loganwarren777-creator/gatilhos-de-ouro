import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Inicializar Stripe com sua chave secreta
// Em produção, use process.env.STRIPE_SECRET_KEY
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(request: NextRequest) {
  try {
    const { priceId, cardData } = await request.json();

    // Criar sessão de checkout do Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: 'Plano PRO - Acesso Ilimitado',
              description: 'Acesso completo a todos os cursos, e-books e vídeo-aulas',
              images: ['https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop'],
            },
            unit_amount: 9700, // R$ 97,00 em centavos
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${request.headers.get('origin')}/pagamento/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/pagamento?canceled=true`,
      metadata: {
        cardHolderName: cardData?.name || '',
      },
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (error: any) {
    console.error('Erro ao criar sessão de checkout:', error);
    return NextResponse.json(
      { error: error.message || 'Erro ao processar pagamento' },
      { status: 500 }
    );
  }
}
