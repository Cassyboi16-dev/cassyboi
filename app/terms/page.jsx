"use client";

import Link from "next/link";

export default function Terms() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
      <h1 className="mb-6 text-3xl font-bold text-stone-950">Terms of Service</h1>
      <p className="mb-4 text-stone-700">
        Welcome to our website. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our website.
      </p>
      <h2 className="mb-4 text-xl font-semibold text-stone-950">1. Acceptance of Terms</h2>
      <p className="mb-4 text-stone-700">
        By using our website, you acknowledge that you have read, understood, and agree to be bound by these terms of service. If you do not agree with any part of these terms, please refrain from using our website.
      </p>
      <h2 className="mb-4 text-xl font-semibold text-stone-950">2. Use of Services</h2>
      <p className="mb-4 text-stone-700">
        You agree to use our services only for lawful purposes and in accordance with applicable laws and regulations. You shall not engage in any activity that may disrupt or interfere with the functioning of our website or compromise its security.
      </p>
      <h2 className="mb-4 text-xl font-semibold text-stone-950">3. Intellectual Property</h2>
      <p className="mb-4 text-stone-700">
        All content on our website, including text, graphics, logos, images, and software, is the property of our company and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
      </p>
      <h2 className="mb-4 text-xl font-semibold text-stone-950">4. Limitation of Liability</h2>
      <p className="mb-4 text-stone-700">
        We strive to provide accurate and reliable information on our website. However, we do not guarantee the completeness, accuracy, or reliability of any content. We shall not be held liable for any damages or losses arising from the use of our website or reliance on its content.
      </p>
      <h2 className="mb-4 text-xl font-semibold text-stone-950">5. Privacy Policy</h2>
      <p className="mb-4 text-stone-700">
        Your privacy is important to us. Please refer to our <Link href="/privacy" className="text-amber-950 underline">Privacy Policy</Link> for information on how we collect, use, and protect your personal information.
      </p>
      <h2 className="mb-4 text-xl font-semibold text-stone-950">6. Changes to Terms</h2>
      <p className="mb-4 text-stone-700">
        We reserve the right to modify or update these terms of service at any time without prior notice. It is your responsibility to review these terms periodically for any changes. Your continued use of our website after any modifications constitutes your acceptance of the revised terms. 
    </p>
      <h2 className="mb-4 text-xl font-semibold text-stone-950">7. Governing Law</h2>
      <p className="mb-4 text-stone-700">
        These terms of service shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is located, without regard to its conflict of law principles. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.
      </p>
      <p className="mb-4 text-stone-700">
        By using our website, you acknowledge that you have read, understood, and agreed to these terms of service. If you have any questions or concerns regarding these terms, please contact us at <a href="mailto:cassyboi16@proton.me" className="text-amber-950 underline">Here</a>.
      </p>
    </div>
      
  );
}  