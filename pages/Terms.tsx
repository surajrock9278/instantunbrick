import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700">
        <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert prose-sm md:prose-base max-w-none text-slate-300">
          <h3>1. Service Description</h3>
          <p>
            Instant Unbrick provides remote software repair services for Xiaomi smartphones. We connect to your computer remotely to perform flashing and diagnostic operations. By using our service, you agree to allow us temporary remote access to your PC.
          </p>

          <h3>2. Data Liability</h3>
          <p>
            While we strive to preserve data whenever possible, most unbricking procedures (especially EDL flashing) require a full factory reset. We are not responsible for any data loss that occurs during the repair process. It is the user's responsibility to understand that their data may be erased.
          </p>

          <h3>3. "No Fix, No Fee" & Refunds</h3>
          <p>
            If we successfully connect to your device but fail to unbrick it due to software limitations, we will refund your payment in full. However, this policy does not cover:
            <ul>
              <li>Hardware failures (e.g., dead eMMC, water damage).</li>
              <li>Connection issues caused by the user's unstable internet or faulty USB cables.</li>
              <li>User refusal to follow technician instructions.</li>
            </ul>
          </p>

          <h3>4. User Responsibility</h3>
          <p>
            You must ensure you have:
            <ul>
              <li>A Windows PC (Windows 10/11 recommended).</li>
              <li>A stable internet connection (min 10Mbps).</li>
              <li>An original or high-quality USB cable.</li>
            </ul>
          </p>

          <h3>5. Limitation of Liability</h3>
          <p>
            We are not liable for any pre-existing damage to the device. If a device dies completely due to pre-existing hardware faults (like a dying flash storage chip) during the flashing process, Instant Unbrick is not held responsible.
          </p>
          
          <p className="mt-8 text-sm text-slate-500">
            Last Updated: October 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;