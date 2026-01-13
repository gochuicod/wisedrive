

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#section-1" className="text-blue-600 hover:underline">1. Agreement to Terms</a></li>
              <li><a href="#section-2" className="text-blue-600 hover:underline">2. Use License</a></li>
              <li><a href="#section-3" className="text-blue-600 hover:underline">3. Disclaimer of Warranties</a></li>
              <li><a href="#section-4" className="text-blue-600 hover:underline">4. Limitations of Liability</a></li>
              <li><a href="#section-5" className="text-blue-600 hover:underline">5. Accuracy of Materials</a></li>
              <li><a href="#section-6" className="text-blue-600 hover:underline">6. Links</a></li>
              <li><a href="#section-7" className="text-blue-600 hover:underline">7. Modifications</a></li>
              <li><a href="#section-8" className="text-blue-600 hover:underline">8. Governing Law</a></li>
            </ul>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div id="section-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">1. Agreement to Terms</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            {/* Section 2 */}
            <div id="section-2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">2. Use License</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div id="section-3">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">3. Disclaimer of Warranties</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            {/* Section 4 */}
            <div id="section-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">4. Limitations of Liability</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            {/* Section 5 */}
            <div id="section-5">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">5. Accuracy of Materials</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.
              </p>
            </div>

            {/* Section 6 */}
            <div id="section-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">6. Links</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            {/* Section 7 */}
            <div id="section-7">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">7. Modifications</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            {/* Section 8 */}
            <div id="section-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">8. Governing Law</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which we operate, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Questions?</h3>
            <p className="text-gray-700">
              If you have any questions about these Terms and Conditions, please contact us at{' '}
              <a href="mailto:support@wisedrive.com" className="text-blue-600 hover:underline">
                support@wisedrive.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
