export interface FAQ {
	key: number
	label: string
	title: string
	content: string
}

export const FAQS: FAQ[] = [
	{
		key: 1,
		label: 'What exactly do you mean by "lifetime access"?',
		title: 'What exactly do you mean by "lifetime access"?',
		content:
			'Wind UI products are characterized as a one-time investment, without the need for recurring subscriptions. Once you purchase any Wind UI product, you get perpetual access to all the content included in that product.'
	},
	{
		key: 2,
		label: 'What do you mean by "free updates"?',
		title: 'What do you mean by "free updates"?',
		content:
			'When you purchase a Wind UI product, we guarantee that any enhancements we implement or new content we introduce in that product will be available for free to everyone who already owns it. Your initial investment gives you ongoing access to the enhancements and additions we make, at no additional cost. This means you will always be up to date with the latest features and benefits without having to spend more money. Our priority is to ensure that our customers get maximum value from their purchases over time. We regularly add new components to these packages whenever we have new ideas, and you can see what previous updates have looked like in our changelog.'
	},
	{
		key: 3,
		label: 'Which JS framework is used?',
		title: 'Which JS framework is used?',
		content:
			'You can use the JS framework of your choice, be it React, Svelte, Vue, Astro, etc., as well as you can use it with HTML Vanilla. \n Some components that have animations, may not work correctly in HTML Vanilla, so you should opt to use some JS framework, although in our documentation we explain a little more about this.'
	},
	{
		key: 4,
		label: 'Which version of Tailwind CSS is used?',
		title: 'Which version of Tailwind CSS is used?',
		content:
			'Every component and template developed by the Wind UI team uses the latest version of Tailwind CSS for better cross-browser compatibility.'
	},
	{
		key: 5,
		label: 'Which browsers support Tailwind CSS?',
		title: 'Which browsers support Tailwind CSS?',
		content:
			'Tailwind CSS work in the latest, stable releases of all major browsers, including Chrome, Firefox, Safari, and Edge. Internet Explorer is not supported.'
	},
	{
		key: 6,
		label: 'Will I have to buy a license every time I start a new project?',
		title: 'Will I have to buy a license every time I start a new project?',
		content:
			'No, you can use the same license on as many projects as you wish, as long as it conforms to the terms of the final user license. \n You can consult the license at https://windui.org/license'
	},
	{
		key: 7,
		label: 'Wind UI is related to the Tailwind CSS team?',
		title: 'Wind UI is related to the Tailwind CSS team?',
		content:
			'No, Wind UI is not related to the company behind Tailwind CSS or the team behind Tailwind CSS. Wind UI is a trademark of Boxode, Ltd. and is not affiliated with Tailwind CSS or any other brand.'
	},
	{
		key: 8,
		label: 'Can I use Wind UI in commercial or open source projects?',
		title: 'Can I use Wind UI in commercial or open source projects?',
		content:
			'Sure! Your license gives you the freedom to create a variety of projects, from simple public websites to software-as-a-service (SaaS) applications that may require end users to pay for access. There are no restrictions on the nature or purpose of the projects you can develop with Wind UI. For more information on the terms of use, please refer to the license at https://windui.org/license'
	},
	{
		key: 9,
		label: 'Can I sell templates/themes that I have built with Wind UI?',
		title: 'Can I sell templates/themes that I have built with Wind UI?',
		content:
			'No, the Wind UI license does not permit the creation of derivative products, such as themes, UI kits, page builders or other products in which you repackage and redistribute our components or templates for others to use in building their own websites. The Wind UI license is designed for use of our components and templates in individual projects, but not for redistribution or creation of competing products based on our resources. We recommend you to respect this limitation and use Wind UI in accordance with the license terms.'
	},
	{
		key: 10,
		label: 'Do you offer any technical support?',
		title: 'Do you offer any technical support?',
		content:
			'Wind UI is a self-service product, which means that we offer customer support for account management and licensing issues. However, it is important to note that customers are expected to have the necessary knowledge of Tailwind CSS, HTML, React, Vue, Svelte or Astro to take full advantage of the product and use it successfully. \n Wind UI customers have exclusive access to a Discord community where they can discuss their questions about the product with other users.'
	},
	{
		key: 11,
		label: 'What is your refund policy?',
		title: 'What is your refund policy?',
		content: `We offer a 14-day money-back guarantee on all purchases. If you are not satisfied with your purchase, you can request a refund within 14 days of the purchase date. \n To request a refund, please contact us at sales@boxode.org and we'll refund you in full, no questions asked.`
	}
]
