import React from "react";

type TermsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl bg-gray-900 text-white rounded-lg shadow-lg p-6 max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-300"
          aria-label="Close modal"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">Privacy Statement</h2>

        <div className="space-y-6 text-gray-300">
          <p>Effective Date: 12/8/2024</p>
          <p>
            BYTEFLOW (“we,” “us,” or “our”) is committed to protecting the privacy of our clients, partners, and visitors
            (“you” or “your”). This Privacy Statement explains how we collect, use, disclose, and safeguard your personal
            information when you interact with our websites, services, and digital products (collectively, the “Services”).
          </p>
          <h3 className="text-xl font-bold">1. Information We Collect</h3>
          <p>
            <ul className="list-disc list-inside">
              <li>
                <strong>Personal Information:</strong> We may collect information that can identify you (“Personal
                Information”) such as your name, email address, mailing address, and phone number when you voluntarily
                provide it, for example, when submitting a contact form or requesting a quote.
              </li>
              <li>
                <strong>Business Information:</strong> We may collect information related to your business or organization,
                including your company name, industry, and project requirements.
              </li>
              <li>
                <strong>Usage Data:</strong> We automatically collect certain information about how you interact with our
                Services, including IP addresses, browser type, operating system, device information, referring URLs, pages
                viewed, and time spent on our sites.
              </li>
              <li>
                <strong>Cookies and Similar Technologies:</strong> We use cookies, web beacons, and similar technologies to
                enhance user experience, remember preferences, and track engagement with our content.
              </li>
            </ul>
          </p>
          <h3 className="text-xl font-bold">2. How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside">
            <li>Provide and improve our Services, including web design, app development, and more.</li>
            <li>Respond to your inquiries and process your requests.</li>
            <li>Personalize your experience with tailored content and marketing.</li>
          </ul>
          <h3 className="text-xl font-bold">3. Disclosure of Your Information</h3>
          <p>We may share your information:</p>
          <ul className="list-disc list-inside">
            <li>With Service Providers for operational purposes.</li>
            <li>For legal compliance or safety reasons.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-center">Terms of Agreement</h2>
          <h3 className="text-xl font-bold">1. Eligibility and Account Responsibilities</h3>
          <p>
            You represent that you are at least 18 years old and legally capable of entering into binding agreements. You
            agree to provide accurate, current, and complete information when requesting services.
          </p>
          <h3 className="text-xl font-bold">2. Intellectual Property</h3>
          <p>
            All content, designs, graphics, code, trademarks, and logos presented by BYTEFLOW are owned or licensed by us
            and are protected by intellectual property laws.
          </p>
          <h3 className="text-xl font-bold">3. Service Modifications and Availability</h3>
          <p>We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time.</p>
          <h3 className="text-xl font-bold">4. Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, BYTEFLOW will not be liable for any indirect or consequential damages.
          </p>
        </div>

        <div className="mt-6 text-center">
          <p>
            If you have any questions, please contact us at:
            <br />
            <a href="mailto:byteflowservices@gmail.com" className="underline text-blue-400">
              byteflowservices@gmail.com
            </a>
            <br />
            <span>330-396-2395</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
