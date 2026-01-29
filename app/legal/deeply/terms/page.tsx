import Link from "next/link";

export default function DeeplyTermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Deeply - Terms of Service
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using the Deeply application, you
              agree to be bound by these Terms of Service. If you do not agree
              to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              2. Use License
            </h2>
            <p>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on Deeply for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may
              not:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Modifying or copying the materials</li>
              <li>
                Using the materials for any commercial purpose or for any public
                display
              </li>
              <li>
                Attempting to decompile or reverse engineer any software
                contained on Deeply
              </li>
              <li>
                Removing any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transferring the materials to another person or &quot;mirroring&quot; the
                materials on any other server
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              3. Disclaimer
            </h2>
            <p>
              The materials on Deeply are provided on an &quot;as is&quot; basis. Lupleg
              Apps makes no warranties, expressed or implied, and hereby
              disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability,
              fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              4. Limitations
            </h2>
            <p>
              In no event shall Lupleg Apps or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on Deeply, even if Lupleg Apps
              or an authorized representative has been notified orally or in
              writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              5. Accuracy of Materials
            </h2>
            <p>
              The materials appearing on Deeply could include technical,
              typographical, or photographic errors. Lupleg Apps does not
              warrant that any of the materials on its website are accurate,
              complete, or current. Lupleg Apps may make changes to the
              materials contained on its website at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              6. Links
            </h2>
            <p>
              Lupleg Apps has not reviewed all of the sites linked to its
              website and is not responsible for the contents of any such linked
              site. The inclusion of any link does not imply endorsement by
              Lupleg Apps of the site. Use of any such linked website is at the
              user&quot;s own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              7. Modifications
            </h2>
            <p>
              Lupleg Apps may revise these terms of service for its website at
              any time without notice. By using this website, you are agreeing
              to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              8. Governing Law
            </h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of the applicable jurisdiction, and you
              irrevocably submit to the exclusive jurisdiction of the courts in
              that location.
            </p>
          </section>

          <section>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
