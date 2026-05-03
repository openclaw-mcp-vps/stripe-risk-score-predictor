export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Fintech Risk Intelligence
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Predict Stripe Account Suspension<br />
          <span className="text-[#58a6ff]">Before It Happens</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Analyze your transaction patterns, calculate real-time risk scores, and get actionable insights to keep your Stripe account in good standing.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $29/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 gap-4 mb-20 sm:grid-cols-3">
        {[
          { title: 'Risk Score Engine', desc: 'Proprietary algorithm scores your account 0–100 based on 20+ signals.' },
          { title: 'Pattern Detection', desc: 'Flags refund spikes, chargeback trends, and velocity anomalies.' },
          { title: 'Actionable Alerts', desc: 'Get specific steps to reduce risk before Stripe takes action.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Full Stripe account analysis',
              'Real-time risk score dashboard',
              'Chargeback & refund monitoring',
              'Weekly risk summary emails',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the risk score work?',
              a: 'We analyze your Stripe transaction history using 20+ signals including refund rates, chargeback ratios, velocity patterns, and dispute trends to produce a 0–100 risk score.'
            },
            {
              q: 'Is my Stripe data secure?',
              a: 'Yes. We use read-only Stripe API keys and never store raw transaction data. All analysis is performed in-memory and only aggregated scores are saved.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Absolutely. Cancel your subscription at any time from your billing portal with no questions asked and no cancellation fees.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Stripe Risk Score Predictor. Not affiliated with Stripe, Inc.
      </footer>
    </main>
  )
}
