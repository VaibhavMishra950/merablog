import React from 'react'

import Head from 'next/head';
import Link from 'next/link';


const Privacy = () => {
    return (
<>
	<Head>
<Link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.15/dist/tailwind.min.css" />
	<style jsx>{`
		.accent-blue {
			color: #3182ce;
		}

`}
	</style>
</Head>
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-lg mb-6">Welcome to Meri Dukaan's privacy policy page. Protecting your privacy is of utmost importance to us, and we take it very seriously. This privacy policy will provide you with all the information you need to know about the types of data we collect, how we use it, and how we protect it.</p>

            <h2 className="text-2xl font-bold mb-4 accent-blue">1. Information Collection and Use</h2>
            <p className="text-lg mb-6">We collect various types of personal information when you use our website, including but not limited to your name, email address, billing and shipping address, phone number, and payment details. We use this information to process your orders, send you updates and notifications, and provide you with a personalized shopping experience.</p>

            <h2 className="text-2xl font-bold mb-4 accent-blue">2. Cookies and Other Tracking Technologies</h2>
            <p className="text-lg mb-6">We use cookies and other tracking technologies to enhance your shopping experience and to gather information about how you use our website. This includes information about the pages you visit, the products you view and purchase, and your browsing behavior. This information helps us to improve our website, tailor our marketing strategies, and personalize your experience.</p>

            <h2 className="text-2xl font-bold mb-4 accent-blue">3. Sharing Information</h2>
            <p className="text-lg mb-6">We do not sell or rent your personal information to any third party. However, we may share your information with our trusted partners who help us process your orders, provide customer service, and analyze our website performance. These partners are bound by strict confidentiality agreements and are only allowed to use your information for the purpose for which it was shared.</p>

            <h2 className="text-2xl font-bold mb-4 accent-blue">4. Security</h2>
            <p className="text-lg mb-6">We take the security of your personal information seriously and use appropriate measures to protect it from unauthorized access, disclosure, and misuse. We use SSL encryption to protect your sensitive information during transmission, and we store your data in a secure server with limited access.</p>

            <h2 className="text-2xl font-bold mb-4 accent-blue">5. Your Rights</h2>
            <p className="text-lg mb-6">You have the right to access, correct, or delete your personal information at any time. You can also opt-out of receiving marketing emails from us by clicking on the "unsubscribe" link in our emails. However, please note that we may still send you transactional emails related to your orders and account.</p>

            <h2 className="text-2xl font-bold mb-4 accent-blue">6. Changes to Privacy Policy</h2>
            <p className="text-lg mb-6">We may update our privacy policy from time to time, and we will notify you of any significant changes by posting an announcement on our website. Please review this policy periodically to stay informed about how we protect your privacy.</p>

            <p className="text-lg mb-6">If you have any questions or concerns about our privacy policy, please contact us at <span className='text-blue-500'>support@meridukaan.com</span>.</p>

        </div>

</>
    )
}

export default Privacy;