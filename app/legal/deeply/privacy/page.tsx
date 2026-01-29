import Link from "next/link";

export default function DeeplyPrivacyPage() {
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
            Deeply - Privacy Policy
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              1. Introduction
            </h2>
            <p>
              Lupleg Apps (&quot;we&quot; or &quot;us&quot; or &quot;our&quot;) operates the Deeply mobile
              application (the &quot;App&quot;). This page informs you of our policies
              regarding the collection, use, and disclosure of personal data
              when you use our App and the choices you have associated with that
              data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              2. Information Collection and Use
            </h2>
            <p>
              We collect information for various purposes to provide and improve
              our App to you.
            </p>
            <h3 className="text-lg font-semibold text-black dark:text-white mt-4 mb-2">
              Types of Data Collected:
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Personal Data:</strong> While using our App, we may ask
                you to provide us with certain personally identifiable
                information that can be used to contact or identify you
                (&quot;Personal Data&quot;). This may include, but is not limited to:
                <ul className="list-circle list-inside ml-4 mt-2 space-y-1">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Cookies and Usage Data</li>
                </ul>
              </li>
              <li>
                <strong>Usage Data:</strong> We may also collect information on
                how the App is accessed and used (&quot;Usage Data&quot;). This may
                include information such as your device&quot;s Internet Protocol
                address (e.g. IP address), browser type, browser version, the
                pages you visit, the time and date of your visit, the time spent
                on those pages, and other diagnostic data.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              3. Use of Data
            </h2>
            <p>Lupleg Apps uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>To provide and maintain our App</li>
              <li>To notify you about changes to our App</li>
              <li>
                To allow you to participate in interactive features of our App
                when you choose to do so
              </li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information so that we can
                improve our App
              </li>
              <li>To monitor the usage of our App</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              4. Security of Data
            </h2>
            <p>
              The security of your data is important to us, but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              5. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;effective date&quot; at the bottom of this Privacy
              Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              6. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us by visiting our App or sending us an email.
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
